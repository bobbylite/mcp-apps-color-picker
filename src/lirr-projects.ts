// LIRR Capital Program Projects Data
// Source: MTA 2025-2029 Capital Plan and historical data

export interface LIRRProject {
  id: string;
  name: string;
  category: string;
  description: string;
  estimatedCost: number; // in millions
  actualCost?: number; // in millions (if known)
  startYear: number;
  completionYear?: number;
  status: "completed" | "in-progress" | "planned" | "under-study";
  location: string;
  keyComponents: string[];
}

export const lirrProjects: LIRRProject[] = [
  // Major Completed Projects
  {
    id: "gcm",
    name: "Grand Central Madison",
    category: "Expansion",
    description:
      "New 8-track terminal beneath Grand Central Terminal providing direct LIRR service to Manhattan's East Side, reducing travel times and increasing capacity.",
    estimatedCost: 11100,
    actualCost: 11100,
    startYear: 2007,
    completionYear: 2023,
    status: "completed",
    location: "Manhattan - Grand Central Terminal",
    keyComponents: [
      "8 new underground tracks",
      "4 new platforms",
      "New East Side Access tunnels",
      "Harold Interlocking improvements",
      "Ventilation facilities",
    ],
  },
  {
    id: "mle",
    name: "Main Line Expansion (Third Track)",
    category: "Capacity",
    description:
      "Addition of a third track on the LIRR Main Line between Floral Park and Hicksville, enabling bi-directional service and eliminating 7 grade crossings.",
    estimatedCost: 2600,
    actualCost: 2600,
    startYear: 2018,
    completionYear: 2022,
    status: "completed",
    location: "Floral Park to Hicksville",
    keyComponents: [
      "9.8 miles of new third track",
      "7 grade crossing eliminations",
      "5 new parking structures",
      "Station improvements at 5 stations",
      "New Belmont Park station",
    ],
  },

  // Rolling Stock Projects
  {
    id: "m9-cars",
    name: "M9 Electric Multiple Unit Cars",
    category: "Rolling Stock",
    description:
      "Purchase of 202 new M9 electric railcars from Kawasaki to modernize the LIRR fleet and replace aging M3 cars from the 1980s.",
    estimatedCost: 1800,
    actualCost: 1800,
    startYear: 2013,
    completionYear: 2021,
    status: "completed",
    location: "System-wide",
    keyComponents: [
      "202 new M9 cars",
      "Open gangway design",
      "Enhanced passenger amenities",
      "Improved accessibility",
      "Modern HVAC systems",
    ],
  },
  {
    id: "m9a-cars",
    name: "M9A Electric Railcars",
    category: "Rolling Stock",
    description:
      "Additional order of M9A electric railcars to continue fleet modernization and increase service capacity for Grand Central Madison.",
    estimatedCost: 1200,
    startYear: 2019,
    completionYear: 2025,
    status: "in-progress",
    location: "System-wide",
    keyComponents: [
      "182 new M9A cars",
      "Enhanced reliability features",
      "Digital displays",
      "USB charging ports",
      "Improved accessibility",
    ],
  },
  {
    id: "dual-mode-locos",
    name: "Dual-Mode Locomotive Replacement",
    category: "Rolling Stock",
    description:
      "Purchase of up to 44 new dual-mode locomotives to replace aging diesel fleet that has exceeded useful life.",
    estimatedCost: 950,
    startYear: 2024,
    completionYear: 2029,
    status: "in-progress",
    location: "Non-electrified branches",
    keyComponents: [
      "44 dual-mode locomotives",
      "Electric and diesel operation",
      "Cleaner emissions",
      "Improved reliability",
      "Enhanced passenger comfort",
    ],
  },
  {
    id: "coach-replacement",
    name: "Passenger Coach Replacement",
    category: "Rolling Stock",
    description:
      "Replacement of aging bi-level coaches used on diesel branches with modern equipment.",
    estimatedCost: 450,
    startYear: 2025,
    completionYear: 2030,
    status: "planned",
    location: "Diesel branches",
    keyComponents: [
      "New bi-level coaches",
      "Modern amenities",
      "ADA compliance upgrades",
      "Enhanced HVAC",
      "Improved seating",
    ],
  },

  // Power Infrastructure
  {
    id: "substation-renewal",
    name: "Traction Power Substation Program",
    category: "Power Infrastructure",
    description:
      "Replacement and renewal of 16 traction power substations that convert grid electricity to third rail power.",
    estimatedCost: 800,
    startYear: 2024,
    completionYear: 2029,
    status: "in-progress",
    location: "System-wide",
    keyComponents: [
      "16 substation replacements",
      "Increased power capacity",
      "Modern switchgear",
      "Enhanced reliability",
      "Redundancy improvements",
    ],
  },
  {
    id: "third-rail-renewal",
    name: "Third Rail Renewal Program",
    category: "Power Infrastructure",
    description:
      "Systematic replacement of aging third rail sections to ensure reliable power delivery across the electrified network.",
    estimatedCost: 350,
    startYear: 2023,
    completionYear: 2028,
    status: "in-progress",
    location: "Electrified territory",
    keyComponents: [
      "Third rail replacement",
      "Contact rail upgrades",
      "Protection board renewal",
      "Anchor replacements",
      "Improved drainage",
    ],
  },

  // Station Accessibility
  {
    id: "ada-bellerose",
    name: "Bellerose Station Accessibility",
    category: "Accessibility",
    description:
      "Making Bellerose station fully ADA accessible with new elevators, ramps, and platform improvements.",
    estimatedCost: 85,
    startYear: 2025,
    completionYear: 2027,
    status: "planned",
    location: "Bellerose, Queens",
    keyComponents: [
      "New elevators",
      "Platform edge improvements",
      "Tactile warning strips",
      "Accessible pathways",
      "Station rehabilitation",
    ],
  },
  {
    id: "ada-douglaston",
    name: "Douglaston Station Accessibility",
    category: "Accessibility",
    description:
      "Full accessibility upgrades at Douglaston station including elevators and platform modifications.",
    estimatedCost: 90,
    startYear: 2025,
    completionYear: 2027,
    status: "planned",
    location: "Douglaston, Queens",
    keyComponents: [
      "New elevators",
      "Platform modifications",
      "ADA-compliant restrooms",
      "Wayfinding improvements",
      "Lighting upgrades",
    ],
  },
  {
    id: "ada-cold-spring",
    name: "Cold Spring Harbor Station Accessibility",
    category: "Accessibility",
    description:
      "Accessibility improvements at Cold Spring Harbor station to achieve ADA compliance.",
    estimatedCost: 75,
    startYear: 2026,
    completionYear: 2028,
    status: "planned",
    location: "Cold Spring Harbor, Suffolk",
    keyComponents: [
      "Elevator installation",
      "Platform edge work",
      "Accessible parking",
      "Path of travel improvements",
      "Signage upgrades",
    ],
  },

  // Bridge and Infrastructure
  {
    id: "webster-ave-bridge",
    name: "Webster Avenue Bridge Replacement",
    category: "Bridges",
    description:
      "Complete reconstruction of the Webster Avenue Bridge in Manhasset, which has reached the end of its structural lifespan.",
    estimatedCost: 120,
    startYear: 2024,
    completionYear: 2026,
    status: "in-progress",
    location: "Manhasset, Nassau",
    keyComponents: [
      "Bridge replacement",
      "Roadway reconstruction",
      "Sidewalk improvements",
      "Drainage upgrades",
      "Utility relocation",
    ],
  },
  {
    id: "bridge-program",
    name: "Systemwide Bridge Rehabilitation",
    category: "Bridges",
    description:
      "Ongoing program to inspect, repair, and rehabilitate bridges throughout the LIRR network.",
    estimatedCost: 400,
    startYear: 2020,
    completionYear: 2029,
    status: "in-progress",
    location: "System-wide",
    keyComponents: [
      "Steel repairs",
      "Concrete rehabilitation",
      "Deck replacements",
      "Bearing replacements",
      "Protective coatings",
    ],
  },

  // Signal and Communications
  {
    id: "signal-modernization",
    name: "Signal System Modernization",
    category: "Signals",
    description:
      "Replacement of legacy signal systems with modern technology to improve safety and capacity.",
    estimatedCost: 650,
    startYear: 2023,
    completionYear: 2030,
    status: "in-progress",
    location: "System-wide",
    keyComponents: [
      "Modern signal heads",
      "Interlocking upgrades",
      "Centralized control",
      "Communication systems",
      "Positive Train Control integration",
    ],
  },
  {
    id: "ptc-implementation",
    name: "Positive Train Control",
    category: "Signals",
    description:
      "Implementation of federally mandated Positive Train Control safety system across all LIRR territory.",
    estimatedCost: 500,
    actualCost: 500,
    startYear: 2015,
    completionYear: 2020,
    status: "completed",
    location: "System-wide",
    keyComponents: [
      "Onboard computers",
      "Wayside systems",
      "Back office servers",
      "Communication network",
      "GPS integration",
    ],
  },

  // Electrification Studies
  {
    id: "mainline-electrification",
    name: "Main Line Electrification to Yaphank",
    category: "Electrification",
    description:
      "Study and potential implementation of electrification extending the Main Line electric territory from Ronkonkoma to Yaphank.",
    estimatedCost: 1500,
    startYear: 2025,
    status: "under-study",
    location: "Ronkonkoma to Yaphank",
    keyComponents: [
      "Catenary or third rail extension",
      "New substations",
      "Station modifications",
      "Environmental review",
      "Community engagement",
    ],
  },
  {
    id: "port-jeff-electrification",
    name: "Port Jefferson Branch Electrification",
    category: "Electrification",
    description:
      "Study of potential electrification of the Port Jefferson Branch from Huntington to Port Jefferson.",
    estimatedCost: 1200,
    startYear: 2024,
    status: "under-study",
    location: "Huntington to Port Jefferson",
    keyComponents: [
      "Third rail installation",
      "Substation construction",
      "Signal modifications",
      "Grade crossing work",
      "Environmental assessment",
    ],
  },
  {
    id: "montauk-improvements",
    name: "Montauk Branch Improvements",
    category: "Electrification",
    description:
      "Study of service improvements and potential electrification options for the Montauk Branch.",
    estimatedCost: 800,
    startYear: 2025,
    status: "under-study",
    location: "Babylon to Montauk",
    keyComponents: [
      "Service analysis",
      "Electrification feasibility",
      "Station improvements",
      "Track upgrades",
      "Capacity analysis",
    ],
  },

  // Yard and Maintenance Facilities
  {
    id: "hillside-facility",
    name: "Hillside Maintenance Facility Modernization",
    category: "Maintenance Facilities",
    description:
      "Modernization of the Hillside Maintenance Complex to support new railcar fleet maintenance requirements.",
    estimatedCost: 300,
    startYear: 2022,
    completionYear: 2026,
    status: "in-progress",
    location: "Jamaica, Queens",
    keyComponents: [
      "Shop equipment upgrades",
      "Wheel truing machines",
      "Cleaning facilities",
      "Parts storage",
      "Environmental systems",
    ],
  },
  {
    id: "mid-suffolk-yard",
    name: "Mid-Suffolk Yard Expansion",
    category: "Maintenance Facilities",
    description:
      "Expansion of yard facilities in Suffolk County to support increased service levels.",
    estimatedCost: 180,
    startYear: 2026,
    completionYear: 2029,
    status: "planned",
    location: "Ronkonkoma, Suffolk",
    keyComponents: [
      "Additional storage tracks",
      "Servicing facilities",
      "Crew facilities",
      "Security improvements",
      "Access roads",
    ],
  },

  // Penn Station Access
  {
    id: "psa-lirr",
    name: "Penn Station Access - LIRR Connections",
    category: "Expansion",
    description:
      "LIRR improvements related to the Penn Station Access project bringing Metro-North to Penn Station.",
    estimatedCost: 200,
    startYear: 2023,
    completionYear: 2027,
    status: "in-progress",
    location: "Penn Station Area",
    keyComponents: [
      "Track modifications",
      "Signal integration",
      "Platform coordination",
      "Operations planning",
      "Passenger wayfinding",
    ],
  },
];

// Estimation factors for Woody's Wild Guess
export const estimationFactors = {
  // Multipliers based on project type complexity
  categoryMultipliers: {
    Expansion: 1.5,
    "Rolling Stock": 1.1,
    "Power Infrastructure": 1.2,
    Accessibility: 1.0,
    Bridges: 1.15,
    Signals: 1.25,
    Electrification: 1.4,
    "Maintenance Facilities": 1.1,
    Capacity: 1.35,
  } as Record<string, number>,

  // Risk factors
  riskFactors: {
    low: { min: 0.95, max: 1.1, label: "Low Risk" },
    medium: { min: 0.9, max: 1.25, label: "Medium Risk" },
    high: { min: 0.8, max: 1.5, label: "High Risk" },
    veryHigh: { min: 0.7, max: 2.0, label: "Very High Risk" },
  },

  // Historical accuracy data
  historicalOverruns: {
    "Grand Central Madison": 1.0, // Actually came in close to final estimates
    "Main Line Expansion": 0.95, // Slightly under budget
    average: 1.15, // 15% average overrun on large transit projects
  },
};

// Fun Woody quotes for the estimation UI
export const woodyQuotes = [
  "That's gonna cost ya! But let's see exactly how much...",
  "In my professional opinion... *checks notes*... this is a big one!",
  "Time to make some educated guesses! Well, VERY educated guesses.",
  "Let me consult my magic calculator... just kidding, it's math!",
  "Another day, another multi-million dollar estimate!",
  "Did someone say infrastructure? That's my favorite word!",
  "Hold onto your hard hats, here comes the estimate!",
  "You want numbers? I got numbers!",
  "Let's see what the LIRR has in store for your wallet!",
  "Choo choo! All aboard the estimation train!",
];

export function getRandomWoodyQuote(): string {
  return woodyQuotes[Math.floor(Math.random() * woodyQuotes.length)];
}

export function searchProjects(query: string): LIRRProject[] {
  const searchTerm = query.toLowerCase();
  return lirrProjects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.category.toLowerCase().includes(searchTerm) ||
      project.location.toLowerCase().includes(searchTerm) ||
      project.keyComponents.some((component) =>
        component.toLowerCase().includes(searchTerm)
      )
  );
}

export function getProjectsByCategory(category: string): LIRRProject[] {
  return lirrProjects.filter(
    (project) => project.category.toLowerCase() === category.toLowerCase()
  );
}

export function getProjectsByStatus(
  status: LIRRProject["status"]
): LIRRProject[] {
  return lirrProjects.filter((project) => project.status === status);
}

export function calculateWoodyEstimate(
  baseCost: number,
  category: string,
  riskLevel: keyof typeof estimationFactors.riskFactors = "medium"
): {
  lowEstimate: number;
  baseEstimate: number;
  highEstimate: number;
  woodyGuess: number;
  confidence: string;
} {
  const categoryMultiplier =
    estimationFactors.categoryMultipliers[category] || 1.0;
  const risk = estimationFactors.riskFactors[riskLevel];

  const adjustedBase = baseCost * categoryMultiplier;
  const lowEstimate = adjustedBase * risk.min;
  const highEstimate = adjustedBase * risk.max;

  // Woody's special guess - slightly optimistic but realistic
  const woodyGuess = adjustedBase * (1 + Math.random() * 0.2 - 0.05);

  let confidence: string;
  if (riskLevel === "low") {
    confidence = "High Confidence";
  } else if (riskLevel === "medium") {
    confidence = "Moderate Confidence";
  } else if (riskLevel === "high") {
    confidence = "Low Confidence";
  } else {
    confidence = "Speculative";
  }

  return {
    lowEstimate: Math.round(lowEstimate * 10) / 10,
    baseEstimate: Math.round(adjustedBase * 10) / 10,
    highEstimate: Math.round(highEstimate * 10) / 10,
    woodyGuess: Math.round(woodyGuess * 10) / 10,
    confidence,
  };
}
