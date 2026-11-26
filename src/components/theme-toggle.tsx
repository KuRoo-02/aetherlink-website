"use client";

import { Moon, Sun } from "lucide-react";

/*
 * Flips data-theme on <html> and remembers the choice. The icon is
 * driven purely by CSS (dark: variant), so there is no client state and
 * no hydration mismatch — the inline script in layout.tsx sets the
 * attribute before first paint.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable (private mode) — theme still applies */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-foreground/80 transition-colors hover:bg-surface-2 hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Moon className="h-4 w-4 dark:hidden" strokeWidth={1.75} />
      <Sun className="hidden h-4 w-4 dark:block" strokeWidth={1.75} />
    </button>
  );
}
