import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SERVICES } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      />

      <Section>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                className="group relative bg-surface p-8 transition-colors hover:bg-surface-2"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-background">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{s.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                      {s.short}
                    </p>
                  </div>
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
