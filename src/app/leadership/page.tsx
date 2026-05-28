import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { LEADERSHIP } from "@/lib/leadership";
import { Quote } from "lucide-react";

export const metadata = {
  title: "Leadership Team — Aetherlink Global",
  description:
    "Meet the directors leading Aetherlink Global's technical execution and commercial strategy.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership team"
        title="The people guiding Aetherlink."
        description="Industry practitioners with hands-on experience across telecommunications, aviation and critical infrastructure."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {LEADERSHIP.map((l) => (
            <article
              key={l.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border-strong bg-background text-lg font-semibold text-heading">
                  {l.initials}
                </div>
                <div>
                  <h2 className="text-xl font-semibold leading-tight">
                    {l.name}
                  </h2>
                  <p className="mt-1 text-sm text-accent-soft">{l.role}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-1 text-xs text-muted">
                {l.credentials.map((c) => (
                  <li key={c}>· {c}</li>
                ))}
              </ul>

              <div className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/85">
                {l.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <blockquote className="mt-7 flex gap-3 rounded-xl border border-border-strong bg-background/60 p-5">
                <Quote
                  className="h-4 w-4 shrink-0 text-accent"
                  strokeWidth={2}
                />
                <p className="text-sm italic text-foreground/90">{l.quote}</p>
              </blockquote>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
