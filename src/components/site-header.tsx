"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-br from-accent to-accent-soft shadow-[0_0_24px_rgba(59,130,246,0.45)]">
            <Image
              src="/images/logo/aetherlink-mark.png"
              alt=""
              width={186}
              height={98}
              priority
              className="h-5 w-6 object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-tight">
              {SITE.brand}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
              Sdn Bhd
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative px-3 py-2 text-sm rounded-md transition-colors",
                  active
                    ? "text-heading bg-surface"
                    : "text-muted hover:text-foreground hover:bg-surface",
                ].join(" ")}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-linear-to-r from-transparent via-accent to-transparent shadow-[0_0_8px_rgba(59,130,246,0.7)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-soft transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
