import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertTriangle, Cog, Briefcase } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";
import { HeroOrbit } from "@/components/hero-orbit";
import { WhatWeDoRoad } from "@/components/what-we-do-road";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";
import { AVIATION_CAPABILITIES, AVIATION_PARTNERS } from "@/lib/aviation";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border/60">
        <Image
          src="/images/hero/satellite-dish.webp"
          alt="Large satellite dish silhouetted against the sky"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60 md:to-background/10" />
        <HeroOrbit />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
          <Eyebrow>{SITE.fullName}</Eyebrow>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
            Engineering Connectivity.
            <br />
            <span className="text-foreground/80">Delivering Reliability.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85 md:text-xl">
            {SITE.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors glow-blue"
            >
              Explore our capabilities
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              Partner with us
            </Link>
          </div>

          {/* Sector strip */}
          <div className="mt-16 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
            <span>Built for</span>
            {SITE.sectorTags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border-strong bg-surface px-3 py-1.5 text-foreground/85"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* WHO WE ARE */}
      <Section>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Connectivity and infrastructure for mission-critical operations.
            </h2>
          </div>
          <div className="md:col-span-3 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {[
              {
                title: "Satellite Communications",
                body: "VSAT, Starlink, and hybrid systems.",
              },
              {
                title: "IT Infrastructure",
                body: "Network design and deployment.",
              },
              {
                title: "Field Execution",
                body: "End-to-end project delivery.",
              },
              {
                title: "Aviation",
                body: "Consultancy, maintenance, parts trading and teardown.",
                href: "/aviation",
              },
            ].map((p) =>
              p.href ? (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group bg-surface p-6 transition-colors hover:bg-surface-2"
                >
                  <h3 className="flex items-center gap-1 text-base font-semibold">
                    {p.title}
                    <ArrowRight className="h-4 w-4 text-accent-soft transition-transform group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.body}</p>
                </Link>
              ) : (
                <div key={p.title} className="bg-surface p-6">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.body}</p>
                </div>
              )
            )}
          </div>
        </div>
      </Section>

      {/* THE REALITY IN THE FIELD */}
      <Section tone="tint">
        <Eyebrow>The reality in the field</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
          In critical environments, systems don&rsquo;t fail because of a lack
          of technology. They fail because{" "}
          <span className="text-heading">execution does not match real operating conditions.</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Connectivity becomes unreliable under harsh conditions.",
            "Integration breaks down across systems and teams.",
            "Operations are disrupted — with real cost and safety implications.",
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <AlertTriangle
                className="h-6 w-6 text-accent-soft"
                strokeWidth={1.75}
              />
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                {c}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT WE DO — interactive road */}
      <WhatWeDoRoad />

      {/* SERVICES TEASER */}
      <Section tone="tint">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <Eyebrow>Core services</Eyebrow>
            <h2 className="text-3xl font-semibold md:text-4xl max-w-xl">
              Six capabilities under one accountable partner.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm text-accent-soft hover:text-accent inline-flex items-center gap-1"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.slug}
                className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_2px_rgba(10,28,68,0.08),0_10px_28px_-16px_rgba(10,28,68,0.35)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                  <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-surface shadow-md">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {s.short}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* AVIATION BUSINESS LINE */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface">
          <Image
            src="/images/aviation/teardown-airframe-sections.webp"
            alt="Widebody airframe cut into sections on the apron"
            fill
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/30" />
          <div className="relative p-10 md:p-14">
            <Eyebrow>Aviation business line</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
              Aviation Expertise. Asset Solutions. Global Reach.
            </h2>
            <ul className="mt-8 grid max-w-2xl gap-x-8 gap-y-2 sm:grid-cols-2">
              {AVIATION_CAPABILITIES.map((s) => (
                <li key={s.slug} className="text-sm text-foreground/85">
                  {s.title}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/aviation"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors glow-blue"
              >
                Explore Aviation <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-[0.18em] text-muted">
                  Partners
                </span>
                {AVIATION_PARTNERS.map((p) => (
                  <span
                    key={p.name}
                    className="flex h-12 items-center rounded-lg border border-border bg-surface px-3"
                  >
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={p.logoWidth}
                      height={p.logoHeight}
                      className="h-8 w-auto object-contain mix-blend-multiply dark:mix-blend-normal"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* COMBINED STRENGTH */}
      <Section tone="tint">
        <Eyebrow>Combined strength</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
          Two complementary pillars — reliable delivery and scalable growth.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Cog,
              title: "Deep Technical Execution",
              body: "17+ years of field-proven experience deploying connectivity in the most demanding environments — offshore, remote and critical infrastructure.",
            },
            {
              icon: Briefcase,
              title: "Strategic Commercial Direction",
              body: "Strong capability in tender management, business development and partnerships — positioning Aetherlink for sustainable, long-term growth.",
            },
          ].map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-surface p-7"
              >
                <Icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-8 max-w-2xl text-foreground/85">
          Together, these strengths make Aetherlink Global a partner you can
          trust — from the boardroom to the field.
        </p>
      </Section>

      {/* INDUSTRIES TEASER */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <Eyebrow>Where we operate</Eyebrow>
            <h2 className="text-3xl font-semibold md:text-4xl max-w-xl">
              Trusted across critical sectors.
            </h2>
          </div>
          <Link
            href="/industries"
            className="text-sm text-accent-soft hover:text-accent inline-flex items-center gap-1"
          >
            All industries <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.title}
                className="group overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={i.image}
                    alt={i.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <Icon
                    className="absolute bottom-4 left-4 h-7 w-7 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold">{i.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* VISION / CTA */}
      <Section tone="dark">
        <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="relative">
            <Eyebrow>Our vision</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold md:text-5xl">
              {SITE.vision}
            </h2>
            <p className="mt-5 max-w-2xl text-foreground/85">
              We are building not just a company, but a long-term partner that
              industries can rely on when it matters most.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors glow-blue"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
