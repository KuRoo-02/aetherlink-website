"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import {
  HardHat,
  Truck,
  HandHeart,
  CarFront,
  type LucideProps,
} from "lucide-react";
import { Eyebrow } from "@/components/section";

type Step = {
  icon: ComponentType<LucideProps>;
  title: string;
  short: string;
  bullets: string[];
};

const STEPS: Step[] = [
  {
    icon: HardHat,
    title: "Design",
    short: "Consultancy, architecture, site assessment",
    bullets: [
      "Consultancy on operational requirements",
      "Architecture aligned to field conditions",
      "Site assessment for real environments",
    ],
  },
  {
    icon: Truck,
    title: "Deploy",
    short: "Installation, integration, commissioning",
    bullets: [
      "Installation to field-ready standards",
      "Integration across vendors and existing infrastructure",
      "Commissioning and on-site verification",
    ],
  },
  {
    icon: HandHeart,
    title: "Deliver",
    short: "Testing, handover, ongoing support",
    bullets: [
      "Testing under actual operating conditions",
      "Full handover and documentation",
      "Ongoing maintenance and field support",
    ],
  },
];

// Wavy road through three anchor zones — peak, valley, peak.
// Tuned to viewBox 1280×300 (shorter than before) so the sticky stage
// has enough vertical room for expanded cards above and below the road.
const ROAD_D =
  "M 30,160 C 200,160 280,80 440,80 C 600,80 660,240 820,240 C 980,240 1060,90 1250,90";

const VB_W = 1280;
const VB_H = 300;
const PIN_RADIUS = 24;
const PIN_DISTANCE = 54; // distance from road to pin center

// Fraction along path where each pin sits.
// Kept inward from the edges so the wider step labels can sit centered
// on each pin without clipping the container.
const STOPS = [0.13, 0.5, 0.87];
const CAR_START = 0.13;
const CAR_END = 0.87;
const STEP_THRESHOLDS = [0.42, 0.82];

// PDF pattern: pins 1 + 3 above the road, pin 2 below.
const PIN_ABOVE = [true, false, true];

export function WhatWeDoRoad() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [progress, setProgress] = useState(0);
  const [markers, setMarkers] = useState<{ x: number; y: number }[]>([]);
  const [carPos, setCarPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    const wrapper = wrapperRef.current;
    if (!path || !wrapper) return;

    const length = path.getTotalLength();

    setMarkers(
      STOPS.map((t) => {
        const p = path.getPointAtLength(t * length);
        return { x: p.x, y: p.y };
      })
    );

    // Scroll position drives `target`; the animation loop tweens
    // `display` toward it each frame and recomputes a real path point.
    // Result: never off-curve, never teleporting.
    let target = 0;
    let display = 0;
    let rafId: number | null = null;

    const DAMPING = 0.2; // 0.1 = floaty, 0.3 = snappy
    const EPS = 0.0005;

    const measureTarget = () => {
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(1, rect.height - vh);
      const scrolled = Math.max(0, Math.min(total, -rect.top));
      target = scrolled / total;
    };

    const tick = () => {
      const delta = target - display;
      if (Math.abs(delta) > EPS) {
        display += delta * DAMPING;
      } else {
        display = target;
      }

      const d = (CAR_START + display * (CAR_END - CAR_START)) * length;
      const point = path.getPointAtLength(d);

      setProgress(display);
      setCarPos({ x: point.x, y: point.y });

      // Keep ticking only while we still need to chase the target.
      if (Math.abs(target - display) > EPS) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    const onScroll = () => {
      measureTarget();
      if (rafId === null) {
        rafId = requestAnimationFrame(tick);
      }
    };

    // Initial paint — sync immediately so the car shows in the right spot
    // without an entrance tween from 0.
    measureTarget();
    display = target;
    tick();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const activeStep =
    progress < STEP_THRESHOLDS[0] ? 0 : progress < STEP_THRESHOLDS[1] ? 1 : 2;

  return (
    <section className="relative border-t border-border/60">
      {/* Title — sits in normal flow above the sticky stage so it scrolls
          past before the road takes over the viewport. */}
      <div className="hidden md:block mx-auto w-full max-w-7xl px-6 pt-24 pb-8">
        <div className="max-w-3xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Design, deploy and deliver — engineered for real environments.
          </h2>
        </div>
      </div>

      {/* Desktop: scrollytelling with sticky stage */}
      <div ref={wrapperRef} className="hidden md:block h-[240vh]">
        <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col justify-center px-6">
          <div className="mx-auto w-full max-w-7xl">
            {/* Road wrapper — overflow visible so labels can extend outside the SVG box */}
            <div className="relative overflow-visible">
              <svg
                viewBox={`0 0 ${VB_W} ${VB_H}`}
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
                style={{ overflow: "visible" }}
              >
                <path
                  d={ROAD_D}
                  stroke="rgba(59,130,246,0.18)"
                  strokeWidth={28}
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  ref={pathRef}
                  d={ROAD_D}
                  stroke="var(--surface-2)"
                  strokeWidth={18}
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d={ROAD_D}
                  stroke="rgba(125,184,255,0.55)"
                  strokeWidth={2}
                  strokeDasharray="14 16"
                  fill="none"
                  strokeLinecap="round"
                />

                {markers.map((m, i) => {
                  const above = PIN_ABOVE[i];
                  const cy = above ? m.y - PIN_DISTANCE : m.y + PIN_DISTANCE;
                  const isActive = activeStep === i;
                  return (
                    <g key={i}>
                      <line
                        x1={m.x}
                        y1={m.y}
                        x2={m.x}
                        y2={cy}
                        stroke={
                          isActive ? "var(--accent)" : "var(--border-strong)"
                        }
                        strokeWidth={2}
                        style={{ transition: "stroke 300ms ease" }}
                      />
                      <circle
                        cx={m.x}
                        cy={m.y}
                        r={4}
                        fill={
                          isActive ? "var(--accent)" : "var(--border-strong)"
                        }
                        style={{ transition: "fill 300ms ease" }}
                      />
                      <circle
                        cx={m.x}
                        cy={cy}
                        r={PIN_RADIUS}
                        fill={isActive ? "var(--accent)" : "var(--surface-2)"}
                        stroke={
                          isActive
                            ? "var(--accent-soft)"
                            : "var(--border-strong)"
                        }
                        strokeWidth={2}
                        style={{
                          transition: "all 300ms ease",
                          filter: isActive
                            ? "drop-shadow(0 0 16px rgba(59,130,246,0.55))"
                            : "none",
                        }}
                      />
                      <text
                        x={m.x}
                        y={cy + 5}
                        textAnchor="middle"
                        fontSize={13}
                        fontWeight={600}
                        fill={isActive ? "var(--background)" : "var(--muted)"}
                        style={{
                          transition: "fill 300ms ease",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Car overlay — no CSS transition on position; smoothing
                  happens in the rAF loop so the car always sits on the
                  actual path point, never a straight chord between two. */}
              {carPos && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-0 left-0"
                  style={{
                    left: `${(carPos.x / VB_W) * 100}%`,
                    top: `${(carPos.y / VB_H) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-accent ring-2 ring-background"
                    style={{
                      boxShadow:
                        "0 0 24px rgba(59,130,246,0.75), 0 0 56px rgba(59,130,246,0.4)",
                    }}
                  >
                    <CarFront
                      className="h-6 w-6 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              )}

              {/* Step labels — positioned next to each pin */}
              {markers.map((m, i) => (
                <StepLabel
                  key={`label-${i}`}
                  marker={m}
                  step={STEPS[i]}
                  isActive={activeStep === i}
                  above={PIN_ABOVE[i]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: simple stacked timeline */}
      <div className="md:hidden mx-auto max-w-7xl px-6 py-20">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="text-3xl font-semibold">
          Design, deploy and deliver — engineered for real environments.
        </h2>
        <ol className="mt-8 space-y-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={i}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong bg-background">
                    <Icon
                      className="h-5 w-5 text-accent"
                      strokeWidth={1.75}
                    />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="text-xs text-muted">{step.short}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm leading-snug text-foreground/85">
                  {step.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Step label — anchored next to its pin, expands away from the road. */
/* ------------------------------------------------------------------ */

function StepLabel({
  marker,
  step,
  isActive,
  above,
}: {
  marker: { x: number; y: number };
  step: Step;
  isActive: boolean;
  above: boolean;
}) {
  const Icon = step.icon;

  // Anchor: outer edge of the pin head, in viewBox coords.
  const pinCy = above ? marker.y - PIN_DISTANCE : marker.y + PIN_DISTANCE;
  const anchorY = above ? pinCy - PIN_RADIUS : pinCy + PIN_RADIUS;

  const leftPercent = (marker.x / VB_W) * 100;
  const topPercent = (anchorY / VB_H) * 100;

  // Above-pin: anchor bottom of block above the pin (translate -100%).
  // Below-pin: anchor top of block below the pin.
  const transform = above
    ? "translate(-50%, -100%) translateY(-14px)"
    : "translate(-50%, 0) translateY(14px)";

  const header = (
    <div>
      <div className="inline-flex items-center justify-center gap-2">
        <span
          className={[
            "inline-flex h-7 w-7 items-center justify-center rounded-md border transition-colors",
            isActive
              ? "border-accent bg-accent text-white"
              : "border-border-strong bg-background/60 text-muted",
          ].join(" ")}
        >
          <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
        <h3
          className={[
            "text-lg font-semibold transition-colors",
            isActive ? "text-heading" : "text-foreground/75",
          ].join(" ")}
        >
          {step.title}
        </h3>
      </div>
      <p className="mt-1 text-xs text-muted">{step.short}</p>
    </div>
  );

  const detail = (
    <div className="collapsible" data-open={isActive}>
      <div className="overflow-hidden">
        <ul className="space-y-1.5 text-left text-sm leading-snug text-foreground/85">
          {step.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5">
              <span
                aria-hidden
                className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_6px_rgba(59,130,246,0.6)]"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Short centered rule between header + detail. Animates width, margin
  // and opacity together so it "draws itself in" alongside the expand.
  const divider = (
    <div
      aria-hidden
      className={[
        "mx-auto h-px bg-border-strong/70 transition-all duration-300 ease-in-out",
        isActive ? "w-16 my-3 opacity-100" : "w-0 my-0 opacity-0",
      ].join(" ")}
    />
  );

  return (
    <div
      className="absolute w-64 lg:w-72"
      style={{
        left: `${leftPercent}%`,
        top: `${topPercent}%`,
        transform,
      }}
    >
      <div
        className={[
          "rounded-2xl border px-4 py-3.5 text-center backdrop-blur-md transition-all duration-300",
          isActive
            ? "border-accent-soft/60 bg-surface/90 shadow-[0_0_0_1px_rgba(96,165,250,0.15),0_12px_40px_-12px_rgba(59,130,246,0.4)]"
            : "border-border bg-surface/70",
        ].join(" ")}
      >
        {above ? (
          <>
            {detail}
            {divider}
            {header}
          </>
        ) : (
          <>
            {header}
            {divider}
            {detail}
          </>
        )}
      </div>
    </div>
  );
}
