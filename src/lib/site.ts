export const SITE = {
  name: "Aetherlink",
  fullName: "Aetherlink Global Sdn Bhd",
  brand: "Aetherlink Global",
  tagline: "Engineering Connectivity. Delivering Reliability.",
  subtitle:
    "Telecommunications and infrastructure solutions for mission-critical operations.",
  vision: "Trusted. Connected. Reliable.",
  address: "2A-1, Jalan Rampai Niaga 2, Rampai Business Park, 53300 Kuala Lumpur, W.P. Kuala Lumpur, Malaysia",
  phone: "011-2300 1224",
  regNo: "202601012079 (1674177-X)",
  sectorTags: ["Telecom", "Aviation", "Critical Infrastructure"],
  email: "admin@aetherlink-global.com",
};

/*
 * Oil & gas supply license. General condition 13 of the license forbids
 * using the PETRONAS logo/marks and allows the relationship to be stated
 * only as "[Company] is licensed by PETRONAS [No. license], under Act 3
 * Petroleum Act 1974." — keep `statement` in that exact form.
 */
export const LICENSE = {
  statement:
    "Aetherlink Global Sdn. Bhd. is licensed by PETRONAS (License No. 202601012079), under Act 3 Petroleum Act 1974.",
  number: "202601012079",
  period: "23.10.2026 – 22.10.2029",
  scope:
    "Supply of products and services to exploration and oil/gas companies in Malaysia.",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/aviation", label: "Aviation" },
  { href: "/industries", label: "Industries" },
  // Hidden for now — re-enable to show the Leadership page in the nav.
  // { href: "/leadership", label: "Leadership" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];
