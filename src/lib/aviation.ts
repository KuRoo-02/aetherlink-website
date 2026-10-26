import {
  PlaneTakeoff,
  PackageSearch,
  Wrench,
  HardHat,
  Recycle,
  Award,
  Globe2,
  Lightbulb,
  Tags,
  Scissors,
  Package,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export type AviationService = {
  slug: string;
  title: string;
  short: string;
  points: string[];
  icon: LucideIcon;
};

export const AVIATION_SERVICES: AviationService[] = [
  {
    slug: "teardown-asset-recovery",
    title: "Aircraft Teardown & Asset Recovery",
    short:
      "End-of-life aircraft and engines turned into recoverable value — from first panel off to last crate shipped.",
    points: [
      "Full aircraft and engine part-out",
      "Serviceable component recovery",
      "Responsible airframe disposal",
    ],
    icon: PlaneTakeoff,
  },
  {
    slug: "parts-materials-trading",
    title: "Parts & Materials Sourcing",
    short:
      "Recovered components and aerospace-grade materials sourced, traced and supplied to operators, MROs and traders.",
    points: [
      "Traceable, tagged inventory",
      "Rotables, consumables and structures",
      "Recycled aluminium and alloys",
    ],
    icon: PackageSearch,
  },
  {
    slug: "engineering-services",
    title: "Engineering Services",
    short:
      "Practical engineering support across aviation, marine and land — planned and executed by people who have done the work.",
    points: [
      "Aviation, marine and land projects",
      "Hangar and airside works",
      "Project planning and supervision",
    ],
    icon: Wrench,
  },
  {
    slug: "manpower-supply",
    title: "Technical Manpower Supply",
    short:
      "Skilled technicians and support crew deployed to your programme, scaled up or down as the job demands.",
    points: [
      "Licensed and experienced technicians",
      "Short-term and long-term deployment",
      "Teardown and line support crews",
    ],
    icon: HardHat,
  },
];

export const AVIATION_STRENGTHS = [
  {
    icon: Recycle,
    title: "Sustainability first",
    body: "Every retired airframe is treated as a resource. We maximise reuse of serviceable parts and recycle what remains, keeping waste out of landfill.",
  },
  {
    icon: Award,
    title: "Hands-on aviation expertise",
    body: "Our team brings direct experience in teardown, asset recovery and airside operations within regulated airport environments.",
  },
  {
    icon: Globe2,
    title: "Connected to the industry",
    body: "Working relationships with airlines, lessors, MROs and parts traders help recovered assets find their next home quickly.",
  },
  {
    icon: Lightbulb,
    title: "Better process, every project",
    body: "We keep refining our methods and tooling to make each teardown safer, cleaner and faster than the last.",
  },
];

export type TeardownStep = {
  step: string;
  title: string;
  body: string;
  points: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

export const TEARDOWN_STEPS: TeardownStep[] = [
  {
    step: "01",
    title: "Component Removal",
    body: "Parts are removed by experienced technicians following a structured plan, then logged and tagged so every item stays traceable.",
    points: [
      "Removed parts inventoried daily",
      "Each component tagged and recorded",
      "Clear records for owners and buyers",
    ],
    icon: Tags,
    image: "/images/aviation/teardown-cabin-tagging.webp",
    imageAlt: "Aircraft cabin mid-teardown with removed panels tagged for inventory",
  },
  {
    step: "02",
    title: "Airframe Dismantling",
    body: "Once components are out, the airframe is cut down in a controlled way and materials are separated for recycling.",
    points: [
      "Cold cutting to avoid hot spots",
      "No mixing of material streams",
      "Sorted for maximum recovery",
    ],
    icon: Scissors,
    image: "/images/aviation/teardown-airframe-sections.webp",
    imageAlt: "Widebody airframe cut into sections on the apron with an excavator",
  },
  {
    step: "03",
    title: "Packaging & Crating",
    body: "Recovered parts are protected for storage and transport — wrapped individually and crated to size where needed.",
    points: [
      "Individually wrapped and tagged",
      "Custom treated wooden crates",
      "Landing gear, flight controls, radomes",
    ],
    icon: Package,
    image: "/images/aviation/hangar-subang-engines.webp",
    imageAlt: "Engines on transport stands, wrapped and staged inside the hangar",
  },
  {
    step: "04",
    title: "Storage & Logistics",
    body: "We hold, manage and move recovered inventory until it reaches its buyer — including the paperwork in between.",
    points: [
      "Secure warehousing and inventory",
      "Picking, packing and shipping",
      "Customs and shipment handling",
    ],
    icon: Warehouse,
    image: "/images/aviation/aircraft-storage-737.webp",
    imageAlt: "Boeing 737-800 parked beside the hangar awaiting part-out",
  },
];

export const TEARDOWN_GALLERY = [
  {
    src: "/images/aviation/teardown-crane-lift.webp",
    alt: "Mobile cranes supporting a widebody fuselage during teardown",
    tall: true,
  },
  {
    src: "/images/aviation/teardown-fuselage-hangar.webp",
    alt: "Separated Airbus fuselage section resting inside the hangar",
    tall: true,
  },
  {
    src: "/images/aviation/teardown-parked-widebody.webp",
    alt: "Widebody aircraft parked on the apron with doors and radome removed",
    tall: false,
  },
  {
    src: "/images/aviation/teardown-airframe-cutting.webp",
    alt: "Excavator dismantling an airframe section on the apron",
    tall: true,
  },
  {
    src: "/images/aviation/aircraft-storage-a319.webp",
    alt: "Airbus narrowbody parked with engine covers fitted",
    tall: true,
  },
  {
    src: "/images/aviation/hangar-subang-interior.webp",
    alt: "Aircraft inside the hangar with teams working around it",
    tall: false,
  },
];

export const HANGAR = {
  location: "Subang, Selangor, Malaysia",
  image: "/images/aviation/hangar-subang-exterior.webp",
  imageAlt: "Aetherlink Global hangar in Subang with an aircraft parked outside",
};
