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
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "satellite-communications",
    title: "Satellite Communications",
    short:
      "VSAT, Starlink, and hybrid solutions tailored for remote and offshore connectivity requirements.",
    icon: Satellite,
  },
  {
    slug: "it-network-infrastructure",
    title: "IT & Network Infrastructure",
    short:
      "End-to-end design and deployment of robust network systems for industrial environments.",
    icon: Network,
  },
  {
    slug: "telecom-engineering",
    title: "Telecom Engineering",
    short:
      "Specialist engineering solutions for complex telecommunications challenges in critical settings.",
    icon: Radio,
  },
  {
    slug: "consultancy-advisory",
    title: "Consultancy & Advisory",
    short:
      "Technical guidance from assessment through to system design, ensuring the right solution for each site.",
    icon: Lightbulb,
  },
  {
    slug: "project-delivery",
    title: "Project Delivery",
    short:
      "Structured implementation with accountability at every milestone, from planning to commissioning.",
    icon: ClipboardCheck,
  },
  {
    slug: "maintenance-field-support",
    title: "Maintenance & Field Support",
    short:
      "Ongoing technical support to keep systems performing reliably after deployment.",
    icon: Wrench,
  },
];
