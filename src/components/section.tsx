import { type ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-6 py-20 md:py-28 ${className}`}>
      {children}
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
