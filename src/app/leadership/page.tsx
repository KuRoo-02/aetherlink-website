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
        <div className="flex flex-col gap-8">
          {LEADERSHIP.map((l, i) => (
            <article
              key={l.name}
              className={`grid overflow-hidden rounded-2xl border border-border bg-surface ${i % 2 === 1 ? "grid-cols-[3fr_2fr]" : "grid-cols-[2fr_3fr]"}`}
            >
              <div className={`relative overflow-hidden bg-background ${i % 2 === 1 ? "[grid-column:2] [grid-row:1]" : ""}`}>
                {l.photo ? (
                  <img
                    src={l.photo}
                    alt={l.name}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-heading">
                    {l.initials}
                  </div>
                )}
              </div>

              <div className={`flex flex-col justify-center gap-0 p-10 ${i % 2 === 1 ? "[grid-column:1] [grid-row:1]" : ""}`}>
                <h2 className="text-3xl font-semibold leading-tight">{l.name}</h2>
                <p className="mt-2 text-sm text-accent-soft">{l.role}</p>

                <ul className="mt-5 space-y-1 text-xs text-muted">
                  {l.credentials.map((c) => (
                    <li key={c}>· {c}</li>
                  ))}
                </ul>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/85">
                  {l.bio.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <blockquote className="mt-6 flex gap-3 rounded-xl border border-border-strong bg-background/60 p-5">
                  <Quote className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  <p className="text-sm italic text-foreground/90">{l.quote}</p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
