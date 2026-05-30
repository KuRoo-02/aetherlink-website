import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SERVICES } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Core Services — Aetherlink Global",
  description:
    "Satellite Communications, IT & Network Infrastructure, Telecom Engineering, Consultancy & Advisory, Project Delivery and Maintenance & Field Support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Core services"
        title="Six capabilities. One accountable partner."
        description="From initial consultancy through to commissioning and ongoing field support, Aetherlink covers the full lifecycle of building and running connectivity for mission-critical environments."
        imageSrc="/images/hero/services-hero.jpg"
        imageAlt="Network engineer connecting cables inside a server rack"
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong hover:bg-surface-2"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-background/85">
                    <Icon className="h-6 w-6 text-accent-soft" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-xl font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {s.short}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-border-strong bg-surface p-10 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Need a tailored capability mix?
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-foreground/85">
            Most of our engagements combine several capabilities. Tell us about
            your project and we&rsquo;ll propose the right scope.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors glow-blue"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
