import {
  Fuel,
  Zap,
  Plane,
  Mountain,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export const INDUSTRIES: Industry[] = [
  {
    title: "Oil & Gas",
    desc: "Offshore platforms and onshore production facilities demanding always-on connectivity.",
    icon: Fuel,
  },
  {
    title: "Energy & Utilities",
    desc: "Power generation, transmission, and utility infrastructure in geographically challenging locations.",
    icon: Zap,
  },
  {
    title: "Aviation & Aerospace",
    desc: "Airport operations, aerospace facilities, and airside infrastructure requiring high-reliability networks.",
    icon: Plane,
  },
  {
    title: "Remote & Industrial Sites",
    desc: "Mining, construction, and industrial operations where standard connectivity simply does not reach.",
    icon: Mountain,
  },
];
