import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { SERVICES } from "@/lib/services";
import { AVIATION_CAPABILITIES } from "@/lib/aviation";
import { ArrowRight, BadgeCheck, Satellite, Network, Radio } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LICENSE } from "@/lib/site";

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
        imageSrc="/images/hero/services-hero.webp"
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
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-surface shadow-md">
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

        {/* Oil & gas licensing — wording follows the licence's general
            condition 13: no PETRONAS logo, and the relationship is stated
            only in the prescribed "is licensed by PETRONAS" form. */}
        <div id="oil-gas-license" className="mt-20 scroll-mt-20 overflow-hidden rounded-3xl border border-border-strong bg-surface">
          <div className="grid md:grid-cols-5">
            <div className="p-10 md:col-span-3 md:p-12">
              <Eyebrow>Oil &amp; gas licensing</Eyebrow>
              <h2 className="max-w-xl text-3xl font-semibold md:text-4xl">
                A licensed supplier to Malaysia&rsquo;s oil and gas industry.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-foreground/85">
                Aetherlink Global is licensed to supply products and services to
                exploration and oil and gas companies in Malaysia. This lets us
                serve our oil and gas clients directly — delivering satellite
                communications, network infrastructure and telecom engineering
                for offshore platforms, remote facilities and upstream
                operations.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {[
                  { icon: Satellite, label: "Offshore & remote connectivity" },
                  { icon: Network, label: "Industrial network infrastructure" },
                  { icon: Radio, label: "Telecom engineering & field support" },
                ].map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs text-foreground/85"
                  >
                    <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-border bg-background p-10 md:col-span-2 md:border-l md:border-t-0 md:p-12">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <BadgeCheck className="h-6 w-6 text-accent" strokeWidth={1.75} />
                </span>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  License details
                </p>
              </div>
              <p className="mt-6 text-base font-medium leading-relaxed text-heading">
                {LICENSE.statement}
              </p>
              <dl className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">License no.</dt>
                  <dd className="tabular mt-1 font-medium text-foreground">{LICENSE.number}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Validity</dt>
                  <dd className="tabular mt-1 font-medium text-foreground">{LICENSE.period}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Scope</dt>
                  <dd className="mt-1 text-foreground/85">{LICENSE.scope}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Aviation business line */}
        <div className="mt-20">
          <Eyebrow>Aviation business line</Eyebrow>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
              Aviation services across the full asset lifecycle.
            </h2>
            <Link
              href="/aviation"
              className="text-sm text-accent-soft hover:text-accent inline-flex items-center gap-1"
            >
              Explore Aviation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {AVIATION_CAPABILITIES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/aviation#${s.slug}`}
                  className="group bg-surface p-7 transition-colors hover:bg-surface-2"
                >
                  <Icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
                  <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {s.short}
                  </p>
                </Link>
              );
            })}
          </div>
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
