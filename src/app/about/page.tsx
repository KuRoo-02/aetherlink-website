import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { ShieldCheck, MapPin, ClipboardCheck, Target } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "About Us — Aetherlink Global",
  description:
    "Aetherlink Global Sdn Bhd is a Malaysian engineering company delivering telecommunications and infrastructure for mission-critical operations.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aetherlink Global"
        title="Practical. Execution-focused. Accountable."
        description="We don't just design systems on paper. Every solution is engineered to perform under the specific conditions of each deployment — whether offshore, remote, or in a high-demand industrial environment."
        imageSrc="/images/hero/about-hero.jpg"
        imageAlt="Engineering team inspecting a construction site"
      />

      {/* WHO WE ARE */}
      <Section>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="text-2xl font-semibold md:text-3xl">
              An engineering-led partner.
            </h2>
          </div>
          <div className="md:col-span-2 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              {SITE.fullName} delivers connectivity and infrastructure solutions
              for mission-critical operations. We bring together satellite
              communications, IT infrastructure and field execution in one
              accountable partner.
            </p>
            <p>
              Our work is grounded in the reality of the environments we serve —
              offshore platforms, remote sites, regulated airside facilities and
              industrial operations where standard connectivity simply does not
              reach.
            </p>
          </div>
        </div>
      </Section>

      {/* OUR APPROACH — Plan / Deploy / Validate */}
      <Section className="border-t border-border/60">
        <Eyebrow>Our approach</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
          Engineered for real environments — not ideal ones.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: MapPin,
              step: "Plan",
              body: "Site assessment aligned to real operational requirements.",
            },
            {
              icon: ClipboardCheck,
              step: "Deploy",
              body: "Installation executed to field-ready standards.",
            },
            {
              icon: ShieldCheck,
              step: "Validate",
              body: "Systems verified under actual operating conditions.",
            },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="rounded-2xl border border-border bg-surface p-7"
              >
                <Icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
                <h3 className="mt-5 text-lg font-semibold">{s.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* WHY AETHERLINK */}
      <Section className="border-t border-border/60">
        <Eyebrow>Why Aetherlink</Eyebrow>
        <h2 className="text-3xl font-semibold md:text-4xl">
          We don&rsquo;t just advise. We deliver.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Industry Practitioners",
              body: "Founded and led by engineers with hands-on experience across telecoms, aviation and critical infrastructure projects.",
            },
            {
              title: "Field & Offshore Experience",
              body: "Deep exposure to complex, high-stakes environments — from remote deployments to mission-critical network buildouts.",
            },
            {
              title: "Cross-Industry Capability",
              body: "Proven across telecom and aviation, with the agility to serve adjacent critical infrastructure markets.",
            },
            {
              title: "Execution-Focused",
              body: "We measure success by delivery outcomes — on time, on spec and on budget. Advisory alone is never enough.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-surface p-7"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* BUSINESS MODEL */}
      <Section className="border-t border-border/60">
        <Eyebrow>Business model</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
          A structured, two-phase approach designed to scale with performance.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              phase: "Phase 01",
              title: "Lean Foundation",
              body: "Controlled cost structure, subcontracting partnerships and disciplined project execution to establish credibility and cash flow.",
              points: [
                "Lean operational overhead",
                "Subcontractor-led delivery",
                "Focus on quality and margin",
              ],
            },
            {
              phase: "Phase 02",
              title: "Scale & Growth",
              body: "Direct contracts, expanded capabilities and regional presence. Revenue growth driven by performance track record.",
              points: [
                "Direct client contracting",
                "Expanded workforce and capacity",
                "Multi-sector revenue streams",
              ],
            },
          ].map((p) => (
            <div
              key={p.phase}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <p className="tabular text-xs uppercase tracking-[0.18em] text-accent-soft">
                {p.phase}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                {p.body}
              </p>
              <ul className="mt-5 space-y-2">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <Target
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                      strokeWidth={2.5}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* VISION */}
      <Section className="border-t border-border/60">
        <div className="rounded-3xl border border-border-strong bg-surface p-10 md:p-14">
          <Eyebrow>Our vision</Eyebrow>
          <h2 className="text-4xl font-semibold md:text-5xl">{SITE.vision}</h2>
          <p className="mt-5 max-w-2xl text-foreground/85">
            To become the region&rsquo;s most trusted provider of connectivity
            and engineering solutions — delivering measurable impact across
            telecom, aviation and critical infrastructure industries.
          </p>
        </div>
      </Section>
    </>
  );
}
