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

/* Past IT / telco field projects (photos supplied by the client). */
export type FieldProject = {
  slug: string;
  title: string;
  location: string;
  date: string;
  summary: string;
  scope: string[];
  photos: { src: string; alt: string }[];
};

export const FIELD_PROJECTS: FieldProject[] = [
  {
    slug: "quarry-satellite",
    title: "Satellite connectivity for a quarry operation",
    location: "Perak",
    date: "November 2026",
    summary:
      "Satellite broadband terminals installed across an active quarry site — on the processing plant, conveyor walkways and site buildings — to bring reliable connectivity to a remote operation.",
    scope: [
      "Site survey and terminal placement",
      "Pole and wall mounting, cabling",
      "Commissioning and handover",
    ],
    photos: [
      { src: "/images/projects/quarry-1.webp", alt: "Satellite terminal on a pole beside conveyor structures at a quarry" },
      { src: "/images/projects/quarry-2.webp", alt: "Satellite terminal mounted above the processing plant roof" },
      { src: "/images/projects/quarry-3.webp", alt: "Satellite terminal on a walkway railing overlooking an aggregate stockpile" },
      { src: "/images/projects/quarry-4.webp", alt: "Satellite terminal on a pole against the sky" },
      { src: "/images/projects/quarry-5.webp", alt: "Satellite terminal wall-mounted under a building eave" },
    ],
  },
  {
    slug: "vessel-cctv",
    title: "CCTV and connectivity for marine vessels",
    location: "Kemaman, Terengganu",
    date: "October 2026",
    summary:
      "Marine-grade CCTV cameras, antenna masts and a satellite terminal fitted on board vessels at the jetty, giving operators remote visibility and connectivity on deck.",
    scope: [
      "Camera and antenna mast installation",
      "Satellite terminal on the upper deck",
      "Configuration and testing alongside",
    ],
    photos: [
      { src: "/images/projects/vessel-1.webp", alt: "Offshore support vessel moored at the jetty" },
      { src: "/images/projects/vessel-2.webp", alt: "Antenna mast and PTZ camera installed on the vessel's upper deck" },
      { src: "/images/projects/vessel-3.webp", alt: "Satellite terminal on a mast above the vessel's deck" },
      { src: "/images/projects/vessel-4.webp", alt: "Marine CCTV camera installed on the vessel railing" },
      { src: "/images/projects/vessel-5.webp", alt: "Second marine CCTV camera covering the deck" },
    ],
  },
];
