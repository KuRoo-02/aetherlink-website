import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { INDUSTRIES } from "@/lib/industries";
import Image from "next/image";

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
        imageSrc="/images/hero/industries-hero.jpg"
        imageAlt="Industrial facility with illuminated stacks at night"
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((i) => {
            const Icon = i.icon;
            return (
              <article
                key={i.title}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong hover:bg-surface-2"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={i.image}
                    alt={i.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
                  <Icon
                    className="absolute bottom-5 left-5 h-8 w-8 text-accent-soft"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-xl font-semibold">{i.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {i.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
