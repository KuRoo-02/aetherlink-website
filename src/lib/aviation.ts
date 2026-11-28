import {
  FileSearch,
  Wrench,
  PaintRoller,
  PackageSearch,
  Recycle,
  Handshake,
  Globe2,
  Layers,
  ShieldCheck,
  Tags,
  Scissors,
  Package,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Capabilities — grouped along the aircraft lifecycle.                */
/* Delivered by Aetherlink together with its aviation partners.        */
/* ------------------------------------------------------------------ */

export type AviationCapability = {
  slug: string;
  stage: string;
  title: string;
  short: string;
  items: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

export const AVIATION_CAPABILITIES: AviationCapability[] = [
  {
    slug: "advisory-acquisition",
    stage: "Acquire",
    title: "Advisory & Asset Acquisition",
    short:
      "Independent technical consultancy and transaction support for aircraft, engines, APUs and landing gear.",
    items: [
      "Aircraft, engine, APU and landing gear acquisition",
      "Pre-purchase inspection (PPI) and records review",
      "Aircraft acceptance, redelivery and lease management support",
      "CAMO, continuing airworthiness and regulatory compliance",
      "Maintenance programme and technical documentation (AMO/CAMO manuals)",
    ],
    icon: FileSearch,
    image: "/images/aviation/service-asset-acquisition.webp",
    imageAlt: "Aircraft engine, APU and landing gear staged on stands in a hangar",
  },
  {
    slug: "maintenance-engineering",
    stage: "Maintain",
    title: "Maintenance & Engineering",
    short:
      "Base and line maintenance from narrow body to wide body, backed by licensed engineers and in-house NDT.",
    items: [
      "Airframe heavy maintenance — C-, D- and phase checks, bridging checks",
      "Line maintenance — transit, daily and weekly checks, defect rectification",
      "Engine, APU and landing gear change; AOG recovery",
      "B1/B2 licensed engineer secondment",
      "Borescope and non-destructive testing (NDT)",
      "Fleet technical management — planning, maintenance control, reliability",
    ],
    icon: Wrench,
    image: "/images/aviation/service-consultancy.webp",
    imageAlt: "Wing-mounted engine with cowlings open for technical inspection",
  },
  {
    slug: "modification-refurbishment",
    stage: "Upgrade",
    title: "Modification, Cabin & Paint",
    short:
      "Cabin, interior and structural modifications, refurbishment and full aircraft painting.",
    items: [
      "Minor and major modifications, including VVIP configurations",
      "Cabin interior upgrades and seat refurbishment",
      "Paint stripping, repaint and custom livery",
      "Flight control painting and balancing",
      "Simulator, mock-up and R&D component builds",
    ],
    icon: PaintRoller,
    image: "/images/aviation/cabin-interior.webp",
    imageAlt: "Narrowbody aircraft cabin with rows of economy seats",
  },
  {
    slug: "components-parts-trading",
    stage: "Supply",
    title: "Components & Parts Trading",
    short:
      "Sourcing and supply of OEM and serviceable used parts, with full traceability and airworthiness documentation.",
    items: [
      "Engines, APUs and landing gear",
      "Wheels, brakes, avionics and interiors",
      "ATR 42/72, A320 family and B737NG components",
      "Consumables and AOG parts support",
      "Short- and long-term spare parts storage",
    ],
    icon: PackageSearch,
    image: "/images/aviation/service-parts-trading.webp",
    imageAlt: "Aircraft components and parts arranged on pallets in a warehouse",
  },
  {
    slug: "teardown-asset-recovery",
    stage: "Retire",
    title: "Teardown, Part-Out & Storage",
    short:
      "End-of-life aircraft and engines turned into recoverable value — from first panel off to last crate shipped.",
    items: [
      "Aircraft and engine disassembly and part-out",
      "Airframe disposal and material recycling",
      "Packaging, crating, warehousing and logistics",
      "Aircraft parking and storage programmes",
      "On-site teardown at the customer's location",
    ],
    icon: Recycle,
    image: "/images/aviation/service-teardown.webp",
    imageAlt: "Technicians stripping insulation inside an aircraft fuselage during teardown",
  },
];

/* ------------------------------------------------------------------ */
/* Partners                                                            */
/* ------------------------------------------------------------------ */

export type AviationPartner = {
  name: string;
  location: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  url: string;
  focus: string;
  tags: string[];
};

export const AVIATION_PARTNERS: AviationPartner[] = [
  {
    name: "Asia AeroTechnic",
    location: "Subang, Malaysia",
    logo: "/images/partners/asia-aerotechnic.webp",
    logoWidth: 177,
    logoHeight: 128,
    url: "https://asiaaerotechnics.com/",
    focus:
      "Base and line maintenance for narrow body to wide body aircraft — heavy checks, painting, modifications and fleet technical management.",
    tags: ["Heavy maintenance", "Line maintenance", "Painting", "Modifications"],
  },
  {
    name: "PT. Akasa Aero Mandiri",
    location: "West Java, Indonesia",
    logo: "/images/partners/akasa-aero-mandiri.webp",
    logoWidth: 316,
    logoHeight: 199,
    url: "https://akasaaeromandiri.com/",
    focus:
      "Aircraft end-of-life specialist — disassembly and part-out, airframe recycling, component storage, logistics and parts supply.",
    tags: ["Teardown & part-out", "Storage", "Logistics", "Parts supply"],
  },
  {
    name: "Tiger Aerotech",
    location: "Indonesia",
    logo: "/images/partners/tiger-aerotech.webp",
    logoWidth: 579,
    logoHeight: 150,
    url: "https://tiger-aerotech.com/",
    focus:
      "Licensed B1/B2 engineer support, pre-purchase inspections, borescope and NDT, technical documentation and parts trading.",
    tags: ["Licensed engineers", "PPI", "NDT", "Parts trading"],
  },
];

/* ------------------------------------------------------------------ */
/* Why work with us                                                    */
/* ------------------------------------------------------------------ */

export const AVIATION_STRENGTHS = [
  {
    icon: Handshake,
    title: "One accountable partner",
    body: "A single point of contact for consultancy, maintenance, parts and teardown — we coordinate the right specialists behind the scenes.",
  },
  {
    icon: Layers,
    title: "The full asset lifecycle",
    body: "From pre-purchase inspection and acquisition through maintenance and upgrades to end-of-life recovery, without changing provider.",
  },
  {
    icon: Globe2,
    title: "Regional reach",
    body: "Partner facilities and engineering teams across Malaysia and Indonesia, with on-site support where and when it is needed.",
  },
  {
    icon: ShieldCheck,
    title: "Traceable and sustainable",
    body: "Every part tagged, documented and traceable. Retired airframes are treated as resources — reused first, recycled after.",
  },
];

/* ------------------------------------------------------------------ */
/* Teardown process                                                    */
/* ------------------------------------------------------------------ */

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
      "Wire-saw cold cutting to avoid hot spots",
      "No mixing of material streams",
      "Up to 92% of aircraft weight recovered",
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
      "Custom in-house treated wooden crates",
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
    image: "/images/aviation/teardown-747-wing-transport.webp",
    imageAlt: "Crane loading a removed Boeing 747 wing onto a flatbed trailer for transport",
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
    src: "/images/aviation/teardown-fuselage-cabin-view.webp",
    alt: "View through an opened fuselage towards a separated Boeing 737 section on site",
    tall: true,
  },
];

export const HANGAR_GALLERY = [
  {
    src: "/images/aviation/hangar-exterior.webp",
    alt: "Wide view of the aircraft hangar and apron",
    main: true,
  },
  {
    src: "/images/aviation/hangar-aircraft-entry.webp",
    alt: "Narrowbody aircraft positioned at the hangar entrance",
    main: false,
  },
  {
    src: "/images/aviation/hangar-engine.webp",
    alt: "Turbofan engine with cowlings open for inspection",
    main: false,
  },
  {
    src: "/images/aviation/hangar-fuselage-section.webp",
    alt: "Fuselage section opened up for component removal inside the hangar",
    main: false,
  },
];

export const HANGAR = {
  location: "Subang, Selangor, Malaysia",
};
