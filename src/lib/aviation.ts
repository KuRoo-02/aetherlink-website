import {
  FileSearch,
  PlaneTakeoff,
  PackageSearch,
  Wrench,
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
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

export const AVIATION_SERVICES: AviationService[] = [
  {
    slug: "aviation-consultancy",
    title: "Aviation Consultancy",
    short:
      "Independent technical consultancy for aircraft acquisition, acceptance, CAMO and continuing-airworthiness support, maintenance programmes, MRO coordination, and regulatory compliance.",
    icon: FileSearch,
    image: "/images/aviation/service-consultancy.webp",
    imageAlt: "Wing-mounted engine with cowlings open for technical inspection",
  },
  {
    slug: "asset-acquisition",
    title: "Aircraft, Engine, APU and Landing Gear Acquisition",
    short:
      "We source and support the acquisition of aircraft, engines, APUs, and landing gear—combining technical due diligence with commercial insight and transactional support.",
    icon: PlaneTakeoff,
    image: "/images/aviation/service-asset-acquisition.webp",
    imageAlt: "Aircraft engine, APU and landing gear staged on stands in a hangar",
  },
  {
    slug: "components-parts-trading",
    title: "Components and Parts Trading",
    short:
      "Reliable sourcing and supply of aircraft components, parts, and consumables—backed by traceability, airworthiness documentation, and responsive service.",
    icon: PackageSearch,
    image: "/images/aviation/service-parts-trading.webp",
    imageAlt: "Aircraft components and parts arranged on pallets in a warehouse",
  },
  {
    slug: "teardown-asset-recovery",
    title: "Aircraft Teardown & Asset Recovery",
    short:
      "End-of-life aircraft and engines turned into recoverable value — from first panel off to last crate shipped.",
    icon: Wrench,
    image: "/images/aviation/service-teardown.webp",
    imageAlt: "Technicians stripping insulation inside an aircraft fuselage during teardown",
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
    image: "/images/aviation/teardown-nacelle-removal.webp",
    imageAlt: "Engine nacelle opened up for component removal on the apron",
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
];

export const HANGAR = {
  location: "Subang, Selangor, Malaysia",
};
