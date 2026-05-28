import { Satellite } from "lucide-react";

// Atoms per ring — stagger via negative animation-delay so they're
// evenly spaced around the orbit without duplicating keyframes.
const OUTER_ATOMS = [0, 0.25, 0.5, 0.75];
const INNER_ATOMS = [0.125, 0.375, 0.625, 0.875];

const OUTER_DURATION = 38; // seconds
const INNER_DURATION = 26;

export function HeroOrbit() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Outer orbit */}
      <div className="orbit orbit--outer">
        <div className="orbit-ring" />

        {/* Atoms */}
        {OUTER_ATOMS.map((fraction, i) => (
          <div
            key={`out-${i}`}
            className="orbit-traveler"
            style={{ animationDelay: `-${fraction * OUTER_DURATION}s` }}
          >
            <span className="orbit-atom" />
          </div>
        ))}

        {/* Lead satellite (also on outer ring) */}
        <div className="orbit-traveler">
          <span className="orbit-satellite">
            <Satellite className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </div>
      </div>

      {/* Inner orbit — reversed, smaller atoms */}
      <div className="orbit orbit--inner">
        <div className="orbit-ring" />

        {INNER_ATOMS.map((fraction, i) => (
          <div
            key={`in-${i}`}
            className="orbit-traveler orbit-traveler--reverse"
            style={{ animationDelay: `-${fraction * INNER_DURATION}s` }}
          >
            <span className="orbit-atom orbit-atom--sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
