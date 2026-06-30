import {
  Satellite,
  Network,
  Radio,
  Lightbulb,
  ClipboardCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "satellite-communications",
    title: "Satellite Communications",
    short:
      "VSAT, Starlink, and hybrid solutions tailored for remote and offshore connectivity requirements.",
    image: "/images/services/satellite-communications.webp",
    imageAlt: "Large satellite dish against a dark sky",
    icon: Satellite,
  },
  {
    slug: "it-network-infrastructure",
    title: "IT & Network Infrastructure",
    short:
      "End-to-end design and deployment of robust network systems for industrial environments.",
    image: "/images/services/network-infrastructure.webp",
    imageAlt: "Fiber optic patch panel with labeled cables",
    icon: Network,
  },
  {
    slug: "telecom-engineering",
    title: "Telecom Engineering",
    short:
      "Specialist engineering solutions for complex telecommunications challenges in critical settings.",
    image: "/images/services/telecom-engineering.webp",
    imageAlt: "Technician working on a telecom tower",
    icon: Radio,
  },
  {
    slug: "consultancy-advisory",
    title: "Consultancy & Advisory",
    short:
      "Technical guidance from assessment through to system design, ensuring the right solution for each site.",
    image: "/images/services/consultancy-advisory.webp",
    imageAlt: "Engineers reviewing technical plans on a table",
    icon: Lightbulb,
  },
  {
    slug: "project-delivery",
    title: "Project Delivery",
    short:
      "Structured implementation with accountability at every milestone, from planning to commissioning.",
    image: "/images/services/project-delivery.webp",
    imageAlt: "Offshore platform structure above open water",
    icon: ClipboardCheck,
  },
  {
    slug: "maintenance-field-support",
    title: "Maintenance & Field Support",
    short:
      "Ongoing technical support to keep systems performing reliably after deployment.",
    image: "/images/services/field-support.webp",
    imageAlt: "Field technician servicing industrial equipment",
    icon: Wrench,
  },
];
