import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { INDUSTRIES } from "@/lib/industries";

export const metadata = {
  title: "Where We Operate — Aetherlink Global",
  description:
    "Aetherlink Global delivers connectivity and infrastructure to Oil & Gas, Energy & Utilities, Aviation & Aerospace, and Remote & Industrial Sites.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we operate"
        title="Built for sectors where the network has to keep running."
        description="From offshore platforms to airside facilities, Aetherlink delivers connectivity and infrastructure to the industries where downtime is not an option."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((i) => {
            const Icon = i.icon;
            return (
              <article
                key={i.title}
                className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-border-strong hover:bg-surface-2"
              >
                <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <h2 className="mt-5 text-xl font-semibold">{i.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  {i.desc}
                </p>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
