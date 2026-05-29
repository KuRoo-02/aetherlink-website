export type Leader = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  credentials: string[];
  bio: string[];
  quote: string;
};

export const LEADERSHIP: Leader[] = [
  {
    name: "Mohd Arif Hakimi Mohd Radhi",
    role: "Director | Strategy & Business Development",
    initials: "AH",
    photo: "/images/team/ariff-hakimi.png",
    credentials: [
      "Engineering Technologist, Board of Engineers Malaysia (BEM)",
      "B. Aircraft Engineering Technology (Mechanical), UniKL MIAT",
    ],
    bio: [
      "Experience across aviation engineering, aerospace operations and industrial project management.",
      "Specialises in aircraft teardown, asset recovery and aviation operations, with hands-on experience managing projects within airport environments and regulated operational settings.",
      "Strong background in project management, technical sales and tender execution, supporting business development, partnerships and commercial growth.",
    ],
    quote: "Driving growth through engineering capability and commercial execution.",
  },
  {
    name: "Khairul Fazly Hamidon",
    role: "Director | Technical & Operations",
    initials: "KF",
    photo: "/images/team/khairul-fazly.png",
    credentials: ["MBA, Universiti Tun Abdul Razak (UNITAR)"],
    bio: [
      "A telecommunications professional with over 17 years of experience in VSAT, satellite communications, LTE and mission-critical infrastructure within the Oil & Gas and industrial sectors.",
      "Proven track record in end-to-end project delivery, offshore deployments and managing complex operations with consistent >98% SLA performance.",
      "Project exposure includes major clients such as PETRONAS, Shell and Total Energies — delivering reliable connectivity across offshore platforms and remote environments.",
    ],
    quote: "Execution focused — ensuring systems perform reliably where it matters most.",
  },
];
