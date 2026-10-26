"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { SITE } from "@/lib/site";

const ENQUIRY_TYPES = [
  "Telecom & Connectivity",
  "Aviation & Teardown",
  "Partnership",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "mt-2 w-full rounded-xl border border-border-strong bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";
const labelClass = "text-xs font-medium uppercase tracking-wider text-muted";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      // Handled by public/enquiry.php on the cPanel host.
      const res = await fetch("/enquiry.php", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(
        err instanceof Error && err.message !== "Failed to fetch"
          ? err.message
          : "Something went wrong."
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start rounded-2xl border border-accent/40 bg-background/60 p-8">
        <CheckCircle2 className="h-8 w-8 text-accent" strokeWidth={1.75} />
        <h3 className="mt-4 text-xl font-semibold">Thank you — enquiry received.</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/85">
          Our team will review your message and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent-soft hover:text-accent"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="block">
        <span className={labelClass}>Name *</span>
        <input name="name" required maxLength={120} autoComplete="name" className={inputClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Company</span>
        <input name="company" maxLength={160} autoComplete="organization" className={inputClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Email *</span>
        <input name="email" type="email" required maxLength={160} autoComplete="email" className={inputClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Phone</span>
        <input name="phone" type="tel" maxLength={40} autoComplete="tel" className={inputClass} />
      </label>
      <label className="block sm:col-span-2">
        <span className={labelClass}>Enquiry type</span>
        <select name="type" defaultValue={ENQUIRY_TYPES[0]} className={inputClass}>
          {ENQUIRY_TYPES.map((t) => (
            <option key={t} value={t} className="bg-surface">
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={labelClass}>Message *</span>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="Tell us about your project, site or aircraft."
          className={`${inputClass} resize-y`}
        />
      </label>

      {/* Honeypot — hidden from people, filled in by bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors glow-blue disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              Sending <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Send enquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-red-400">
            {error} You can also email us at{" "}
            <a href={`mailto:${SITE.email}`} className="underline">
              {SITE.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
