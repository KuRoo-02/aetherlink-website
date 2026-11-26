import { type ReactNode } from "react";

/*
 * tone controls the full-bleed band behind a section:
 *  - "base": the page haze
 *  - "tint": a slightly deeper stratus band, used to alternate rhythm
 *  - "dark": night-sky navy; re-scopes the colour tokens (see .tone-dark
 *    in globals.css) so every utility inside flips without extra classes
 */
export function Section({
  children,
  className = "",
  id,
  tone = "base",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "base" | "tint" | "dark";
}) {
  const toneClass =
    tone === "tint" ? "band-tint" : tone === "dark" ? "tone-dark band-dark" : "";
  return (
    <section id={id} className={`w-full ${toneClass} ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent-soft">
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      {children}
    </p>
  );
}
