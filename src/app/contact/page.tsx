import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { SITE } from "@/lib/site";
import { MapPin, Handshake } from "lucide-react";

export const metadata = {
  title: "Get in Touch — Aetherlink Global",
  description:
    "Partner with Aetherlink Global. We are ready to execute and grow alongside the region's most critical industries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Built for execution. Ready to scale."
        description="Whether you are seeking a delivery partner, a technical consultant or a long-term solutions provider — Aetherlink is built for the challenge."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Company card */}
          <article className="rounded-2xl border border-border bg-surface p-8">
            <Eyebrow>Company</Eyebrow>
            <h2 className="text-2xl font-semibold">{SITE.fullName}</h2>
            <div className="mt-6 flex items-start gap-3">
              <MapPin
                className="h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.75}
              />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Office
                </p>
                <p className="mt-1 text-base text-foreground">
                  {SITE.address}
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-foreground/85">
              We are ready to partner, execute and grow alongside the
              region&rsquo;s most critical industries.
            </p>
          </article>

          {/* Partner card */}
          <article className="rounded-2xl border border-border bg-surface p-8">
            <Eyebrow>Partner with us</Eyebrow>
            <h2 className="text-2xl font-semibold">Tell us what you need to connect.</h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/85">
              From a single VSAT terminal to a multi-site rollout across remote
              operations, our team is ready to scope the right solution with
              you.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SITE.sectorTags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border-strong bg-background px-3 py-1 text-xs uppercase tracking-wider text-foreground/85"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-7 flex items-center gap-3 rounded-xl border border-border-strong bg-background/60 p-4 text-sm text-muted">
              <Handshake
                className="h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.75}
              />
              <span>
                Direct email and phone channels will be added here once
                confirmed.
              </span>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
