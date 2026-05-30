import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Zap, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-linear-to-br from-accent to-accent-soft text-background">
              <Zap className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-base font-semibold">{SITE.brand}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Telecommunications and infrastructure solutions for mission-critical operations.
          </p>
          <p className="mt-3 text-xs text-muted">{SITE.fullName}</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Navigate
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Contact
          </h3>
          <ul className="mt-3 space-y-3 text-sm text-foreground/85">
            <li className="text-xs leading-relaxed">{SITE.address}</li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={1.75} />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={1.75} />
              {SITE.phone}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
      </div>
    </footer>
  );
}
