<?php
/*
 * Enquiry form handler for the static site on cPanel.
 * Receives the contact form POST and emails it to the admin inbox.
 */

const ADMIN_EMAIL = 'admin@aetherlink-global.com';
// Must be an address on the hosting domain, or many inboxes will reject it.
const FROM_EMAIL = 'no-reply@aetherlink-global.com';
const ENQUIRY_TYPES = ['Telecom & Connectivity', 'Aviation & Teardown', 'Partnership', 'Other'];

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// Honeypot: real visitors never see or fill this field.
if (!empty($_POST['website'])) {
    respond(200, ['ok' => true]);
}

// Strip CR/LF so single-line values can't inject mail headers.
function line(string $key, int $max): string {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = str_replace(["\r", "\n"], ' ', $v);
    return mb_substr($v, 0, $max);
}

$name    = line('name', 120);
$company = line('company', 160);
$email   = line('email', 160);
$phone   = line('phone', 40);
$type    = line('type', 60);
$message = mb_substr(trim((string)($_POST['message'] ?? '')), 0, 5000);

if ($name === '' || $email === '' || $message === '') {
    respond(422, ['ok' => false, 'error' => 'Please fill in your name, email and message.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please enter a valid email address.']);
}
if (!in_array($type, ENQUIRY_TYPES, true)) {
    $type = 'Other';
}

$subject = "Website enquiry: {$type} — {$name}";
$body = implode("\n", [
    "New enquiry from the Aetherlink Global website",
    str_repeat('-', 46),
    "Name:     {$name}",
    "Company:  " . ($company !== '' ? $company : '-'),
    "Email:    {$email}",
    "Phone:    " . ($phone !== '' ? $phone : '-'),
    "Enquiry:  {$type}",
    "",
    "Message:",
    $message,
    "",
    str_repeat('-', 46),
    "Sent " . date('Y-m-d H:i') . " from " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown IP'),
]);

$headers = implode("\r\n", [
    'From: Aetherlink Website <' . FROM_EMAIL . '>',
    "Reply-To: {$name} <{$email}>",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$sent = mail(
    ADMIN_EMAIL,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    $headers,
    '-f' . FROM_EMAIL
);

if (!$sent) {
    respond(500, ['ok' => false, 'error' => 'Sorry, your message could not be sent. Please email us directly.']);
}

respond(200, ['ok' => true]);
