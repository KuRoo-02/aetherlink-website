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
  image: string;
  imageAlt: string;
  icon: LucideIcon;
};

export const INDUSTRIES: Industry[] = [
  {
    title: "Oil & Gas",
    desc: "Offshore platforms and onshore production facilities demanding always-on connectivity.",
    image: "/images/industries/oil-gas.jpg",
    imageAlt: "Offshore oil and gas platform in blue water",
    icon: Fuel,
  },
  {
    title: "Energy & Utilities",
    desc: "Power generation, transmission, and utility infrastructure in geographically challenging locations.",
    image: "/images/industries/energy-utilities.jpg",
    imageAlt: "Transmission towers and power lines at sunset",
    icon: Zap,
  },
  {
    title: "Aviation & Aerospace",
    desc: "Airport operations, aerospace facilities, and airside infrastructure requiring high-reliability networks.",
    image: "/images/industries/aviation-aerospace.jpg",
    imageAlt: "Aircraft parked at an airport gate",
    icon: Plane,
  },
  {
    title: "Remote & Industrial Sites",
    desc: "Mining, construction, and industrial operations where standard connectivity simply does not reach.",
    image: "/images/industries/remote-industrial.jpg",
    imageAlt: "Industrial construction site and warehouse structure",
    icon: Mountain,
  },
];
