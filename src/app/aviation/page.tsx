import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import {
  AVIATION_CAPABILITIES,
  AVIATION_PARTNERS,
  AVIATION_STRENGTHS,
  TEARDOWN_STEPS,
  TEARDOWN_GALLERY,
} from "@/lib/aviation";

export const metadata = {
  title: "Aviation — Aetherlink Global",
  description:
    "End-to-end aviation services with our partners across Malaysia and Indonesia: consultancy and asset acquisition, base and line maintenance, modifications and painting, components and parts trading, and aircraft teardown, part-out and storage.",
};

export default function AviationPage() {
  return (
    <>
      <PageHero
        eyebrow="Aviation business line"
        title="Aviation Expertise Across the Full Asset Lifecycle."
        description="Consultancy, maintenance, modification, parts and teardown — delivered by Aetherlink with a regional network of aviation partners."
        imageSrc="/images/aviation/teardown-parked-widebody.webp"
        imageAlt="Widebody aircraft parked on the apron"
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#capabilities"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors glow-blue"
          >
            Our capabilities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#partners"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background/70 px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
          >
            Our partners
          </a>
        </div>
      </PageHero>

      {/* PARTNER STRIP */}
      <div className="border-b border-border/60 bg-surface/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6 py-8 md:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            In partnership with
          </p>
          {AVIATION_PARTNERS.map((p) => (
            <Image
              key={p.name}
              src={p.logo}
              alt={p.name}
              width={p.logoWidth}
              height={p.logoHeight}
              className="h-14 w-auto object-contain mix-blend-multiply md:h-16"
            />
          ))}
        </div>
      </div>

      {/* WHAT WE DO */}
      <Section>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="text-2xl font-semibold md:text-3xl">
              From acquisition to end of life.
            </h2>
          </div>
          <div className="md:col-span-2 space-y-5 leading-relaxed text-foreground/85 md:text-lg">
            <p>
              Aetherlink Global supports airlines, lessors, MROs and asset owners
              across every stage of an aircraft&rsquo;s life — technical
              consultancy and acquisition, base and line maintenance, cabin and
              structural modification, component and parts supply, and
              teardown, part-out and storage when an airframe retires.
            </p>
            <p>
              Through our partnerships with Asia AeroTechnic, PT. Akasa Aero
              Mandiri and Tiger Aerotech, we bring hangar, engineering and
              end-of-life capability across Malaysia and Indonesia under one
              accountable contract.
            </p>
          </div>
        </div>

        {/* Lifecycle rail */}
        <ol className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-5">
          {AVIATION_CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <li key={c.slug} className="bg-background last:col-span-2 sm:last:col-span-1">
                <a
                  href={`#${c.slug}`}
                  className="group flex h-full flex-col gap-3 p-5 transition-colors hover:bg-surface"
                >
                  <span className="flex items-center justify-between">
                    <span className="tabular font-mono text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                  <span className="text-base font-semibold text-heading">
                    {c.stage}
                  </span>
                  <span className="text-xs leading-snug text-muted">
                    {c.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* CAPABILITIES */}
      <Section id="capabilities" className="border-t border-border/60 scroll-mt-20">
        <Eyebrow>Our capabilities</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
          Five service lines. One accountable team.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AVIATION_CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <article
                key={c.slug}
                id={c.slug}
                className="group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md">
                      <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-white">
                      {String(i + 1).padStart(2, "0")} · {c.stage}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {c.short}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {c.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-sm text-foreground/85"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                          strokeWidth={2.5}
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}

          {/* Combined-scope tile */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-accent-strong p-8 text-white">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="relative">
              <h3 className="text-2xl font-semibold text-white">
                Need more than one service?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Most programmes combine several of these — a pre-purchase
                inspection and a heavy check, or a teardown and parts sale. We
                scope it as one job, with one point of contact.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-accent-strong transition-colors hover:bg-white/90"
            >
              Discuss your requirement <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* PARTNERS */}
      <Section id="partners" className="border-t border-border/60 scroll-mt-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Our partners</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
              Backed by a regional network of aviation specialists.
            </h2>
          </div>
          <p className="max-w-md text-foreground/80">
            Aetherlink partners with established MRO, engineering and
            end-of-life organisations so clients get proven capability at every
            stage.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {AVIATION_PARTNERS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="flex h-40 items-center justify-center border-b border-border bg-white px-8">
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={p.logoWidth}
                  height={p.logoHeight}
                  className="max-h-24 w-auto max-w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {p.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  {p.focus}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* WHY AETHERLINK AVIATION */}
      <Section className="border-t border-border/60">
        <Eyebrow>Why work with us</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
          One partner for every stage of the aircraft.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {AVIATION_STRENGTHS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-surface p-7">
                <Icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
                <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* TEARDOWN PROCESS */}
      <Section id="teardown" className="border-t border-border/60 scroll-mt-20">
        <Eyebrow>Aircraft teardown &amp; part-out</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
          Tailored solutions for end-of-life aircraft and engines.
        </h2>
        <p className="mt-5 max-w-2xl text-foreground/85">
          Whether it is a full airframe or a single engine, our technicians
          respond quickly and work to a clear, four-stage process — at our
          partner facilities or on site at your location — so you always know
          where every part is and what it is worth.
        </p>

        <div className="mt-14 space-y-6">
          {TEARDOWN_STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.step}
                className="grid overflow-hidden rounded-2xl border border-border bg-background md:grid-cols-2"
              >
                <div
                  className={`relative aspect-[16/10] md:aspect-auto md:min-h-80 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                  <span className="tabular absolute bottom-5 left-5 text-5xl font-semibold text-white">
                    {s.step}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <Icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {s.body}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                          strokeWidth={2.5}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* GALLERY */}
      <Section className="border-t border-border/60">
        <Eyebrow>From the field</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
          Teardown projects in progress.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {TEARDOWN_GALLERY.map((g) => (
            <figure
              key={g.src}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${
                g.tall ? "aspect-[3/4]" : "col-span-2 aspect-[16/10] lg:order-last lg:aspect-auto"
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border/60">
        <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
          <div className="relative">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
              Let&rsquo;s discuss your next aircraft, maintenance or component
              requirement.
            </h2>
            <p className="mt-5 max-w-xl text-foreground/85">
              Contact us for technical, commercial, maintenance and end-of-life
              support.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors glow-blue"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
