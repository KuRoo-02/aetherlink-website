import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import {
  AVIATION_SERVICES,
  AVIATION_STRENGTHS,
  TEARDOWN_STEPS,
  TEARDOWN_GALLERY,
  HANGAR,
} from "@/lib/aviation";

export const metadata = {
  title: "Aviation — Aetherlink Global",
  description:
    "Aircraft teardown and part-out, asset recovery, parts and materials sourcing, engineering services and technical manpower — operated from our hangar in Subang, Selangor.",
};

export default function AviationPage() {
  return (
    <>
      <PageHero
        eyebrow="Aviation business line"
        title="Giving retired aircraft a second life."
        description="Aetherlink Aviation recovers value from end-of-life aircraft and engines — dismantling them safely, returning serviceable parts to the market and recycling the rest responsibly."
        imageSrc="/images/aviation/teardown-parked-widebody.webp"
        imageAlt="Widebody aircraft parked on the apron during teardown"
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#teardown"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors glow-blue"
          >
            Our teardown process
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
          >
            Discuss an aircraft
          </Link>
        </div>
      </PageHero>

      {/* AVIATION SERVICES */}
      <Section>
        <Eyebrow>What we offer</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
          Four aviation services. One accountable team.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {AVIATION_SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                className="rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-border-strong hover:bg-surface-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-background/85">
                  <Icon className="h-6 w-6 text-accent-soft" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  {s.short}
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
              </article>
            );
          })}
        </div>
      </Section>

      {/* WHY AETHERLINK AVIATION */}
      <Section className="border-t border-border/60">
        <Eyebrow>Why work with us</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
          Retired aircraft are resources, not scrap.
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
          respond quickly and work to a clear, four-stage process — so you
          always know where every part is and what it is worth.
        </p>

        <div className="mt-14 space-y-6">
          {TEARDOWN_STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.step}
                className="grid overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-2"
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
                    className="h-full w-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                  <span className="tabular absolute bottom-5 left-5 text-5xl font-semibold text-white/90">
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
                g.tall ? "aspect-[3/4]" : "col-span-2 aspect-[16/10] lg:col-span-1 lg:aspect-[3/4]"
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-medium text-foreground">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* HANGAR / LOCATION */}
      <Section className="border-t border-border/60">
        <div className="grid overflow-hidden rounded-3xl border border-border-strong bg-surface md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[28rem]">
            <Image
              src={HANGAR.image}
              alt={HANGAR.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative flex flex-col justify-center p-10 md:p-14">
            <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
            <div className="relative">
              <Eyebrow>Our hangar</Eyebrow>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Based in Subang.
              </h2>
              <p className="mt-5 text-foreground/85">
                Our aviation operations run from a dedicated hangar in Subang —
                close to the region&rsquo;s airlines, lessors and MROs.
              </p>
              <div className="mt-6 flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                <div>
                  <p className="text-sm text-foreground">{HANGAR.location}</p>
                  <p className="mt-1 text-xs text-muted">
                    Exact address shared upon contact.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors glow-blue"
              >
                Arrange a visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
