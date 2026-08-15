import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "gaca-airport",
    title: "PEB Erection for GACA: APSCO, PASCO, BAKRI, SSAS, PAL, UGAFCO",
    client: "AJ Corporation (General Authority of Civil Aviation)",
    location: "King Fahad International Airport",
    value: "5.1 million SAR",
    area: "16,000 m²",
    scope: [
      "Erection of pre-engineered building (PEB) operations and maintenance buildings",
      "Structural steel erection for six operational units (APSCO, PASCO, BAKRI, SSAS, PAL, UGAFCO)",
      "Roof and wall cladding",
      "Airside-compliant site access and HSE management",
      "Supply, installation, testing and commissioning of stainless steel and HDPE chilled water pipelines and galvanized iron drains (aboveground and underground)",
      "Installation of fresh air unit",
      "Supply and installation of AHUs",
      "Supply and installation of ducted split units",
      "Supply and installation of high wall split units",
    ],
    summary:
      "Erection of PEB operations and maintenance buildings across six units at King Fahad International Airport for client AJ Corporation.",
    description:
      "RSS erected pre-engineered operations and maintenance buildings covering a 16,000 m² footprint at King Fahad International Airport on behalf of AJ Corporation, spanning six operational units: APSCO, PASCO, BAKRI, SSAS, PAL and UGAFCO. Work was carried out within an active airport environment, requiring strict adherence to airside access control and HSE procedures alongside standard PEB erection sequencing. The scope also included aboveground and underground chilled water piping (stainless steel and HDPE) with galvanized iron drains, plus HVAC works covering fresh air units, AHUs, ducted split units and high wall split units.",
    relatedServiceSlugs: ["civil-construction", "engineering-design-detailing", "chilled-water-piping", "hvac-systems"],
    imageLabel: "PEB operations building, King Fahad International Airport",
    heroImage: "/images/project-gaca-airport-1.png",
    gallery: [
      { label: "Stainless steel chilled water piping with flanged joints", image: "/images/service-chilled-water-piping-1.png" },
      { label: "Underground chilled water pipeline installation", image: "/images/project-chilled-water-underground.png" },
      { label: "Rooftop package air-conditioning units with an aircraft on the tarmac below", image: "/images/project-gaca-airport-2.png" },
      { label: "Rooftop chiller units on an elevated platform", image: "/images/service-chillers-rooftop.png" },
    ],
  },
  {
    slug: "gulf-packaging-industries",
    title: "Pre-Engineered Building Erection for Gulf Packaging Industries Ltd",
    client: "Gulf Packaging Industries Ltd",
    location: "Jubail",
    value: "3.0 million SAR",
    area: "32,745 sqm (PEB installation area)",
    scope: [
      "Erection of client-supplied pre-engineered buildings for CCP1, CCP2 and Line-04",
      "Structural steel, roof and wall sandwich panel installation",
      "Plaster and blockwork",
      "Roof waterproofing and insulation",
    ],
    summary:
      "Erection of client-supplied PEB structures across three production lines (CCP1, CCP2, Line-04) at Gulf Packaging Industries' Jubail plant.",
    description:
      "RSS erected client-supplied pre-engineered buildings across a 32,745 sqm installation area for Gulf Packaging Industries Ltd in Jubail, covering CCP1, CCP2 and Line-04 buildings. Scope included structural installation, roof and wall sandwich panels, plaster and blockwork, and roof waterproofing and insulation, delivering weathertight production buildings ready for plant fit-out.",
    relatedServiceSlugs: ["civil-construction", "floor-epoxy-coatings"],
    imageLabel: "Structural steel erection with fire-protection piping ahead of cladding",
    heroImage: "/images/project-gaca-airport-3.png",
    gallery: [
      { label: "Technician on an aerial platform fitting insulated ductwork", image: "/images/project-gaca-airport-4.png" },
      { label: "Interior facility room during fit-out", image: "/images/project-facility-interior.png" },
      { label: "Rooftop waterproofing and insulation works in progress", image: "/images/project-gulf-packaging-1.png" },
    ],
  },
  {
    slug: "bunyan-company",
    title: "Lightweight PEB Structure for Bunyan Company",
    client: "Bunyan Company",
    location: "Al Kharaj",
    area: "6,000 sqm",
    scope: [
      "Supply and installation of lightweight pre-engineered structure (PEB)",
      "Construction of footings, pedestals, grade beams and grade slab",
    ],
    summary:
      "Supply and installation of a 6,000 sqm lightweight PEB structure, including full foundation works, for Bunyan Company in Al Kharaj.",
    description:
      "RSS delivered a complete civil-to-structural package for Bunyan Company in Al Kharaj: constructing footings, pedestals, grade beams and grade slab before supplying and installing a lightweight pre-engineered building structure across 6,000 sqm.",
    relatedServiceSlugs: ["civil-construction"],
    imageLabel: "Steel structure erected, Bunyan Company, Al Kharaj",
    heroImage: "/images/hero-peb-construction.png",
    gallery: [
      { label: "Mobile crane lifting a steel member into place", image: "/images/project-bunyan-crane.png" },
    ],
  },
  {
    slug: "al-manhal-water",
    title: "Lightweight PEB Structure for Al Manhal Water",
    client: "Al Manhal Water",
    location: "Riyadh",
    area: "4,200 sqm",
    scope: [
      "Supply and installation of lightweight pre-engineered structure (PEB)",
      "Construction of footings, pedestals, grade beams and grade slab",
    ],
    summary:
      "Supply and installation of a 4,200 sqm lightweight PEB structure, including full foundation works, for Al Manhal Water in Riyadh.",
    description:
      "For Al Manhal Water in Riyadh, RSS delivered footings, pedestals, grade beams and grade slab ahead of supplying and installing a lightweight pre-engineered building structure spanning 4,200 sqm, following the same delivery model proven at Bunyan Company.",
    relatedServiceSlugs: ["civil-construction"],
    imageLabel: "Forklift and scissor lift crews installing roof purlins, Al Manhal Water, Riyadh",
    heroImage: "/images/project-bunyan-almanhal-1.png",
    gallery: [
      { label: "Steel frame erection with scissor lift and site crew", image: "/images/project-bunyan-almanhal-2.png" },
    ],
  },
  {
    slug: "masdar-al-hayat",
    title: "Fire Tube Boiler Supply and Commissioning for Masdar Al Hayat (Al Tamimi Group)",
    client: "Masdar Al Hayat (Al Tamimi Group)",
    location: "2nd Industrial City, Riyadh",
    scope: [
      "Supply of a GAVARDO (Italy) fire tube boiler, 1,500 kg/hour capacity",
      "Installation, testing and commissioning",
    ],
    summary:
      "Supply, installation, testing and commissioning of a 1,500 kg/hour GAVARDO fire tube boiler for Masdar Al Hayat, part of the Al Tamimi Group.",
    description:
      "RSS supplied, installed, tested and commissioned a GAVARDO (Italy) fire tube boiler with 1,500 kg per hour capacity for Masdar Al Hayat, part of the Al Tamimi Group, at the 2nd Industrial City in Riyadh: a project requiring precise mechanical installation and controlled commissioning to meet process steam demand.",
    relatedServiceSlugs: ["process-piping-fabrication", "storage-tanks-vessels"],
    imageLabel: "Fire tube boiler shell with control panel, Masdar Al Hayat",
    heroImage: "/images/project-masdar-boiler-1.png",
    gallery: [],
  },
  {
    slug: "arab-milling-company",
    title: "Air Compressor Preventive Maintenance for Arab Milling Company",
    client: "Arab Milling Company",
    location: "Riyadh",
    scope: ["One-year preventive maintenance contract for air compressor fleet"],
    summary:
      "One-year preventive maintenance contract covering the air compressor fleet at Arab Milling Company in Riyadh.",
    description:
      "RSS runs a one-year preventive maintenance contract for Arab Milling Company's air compressor equipment in Riyadh, part of our ongoing Trading and Maintenance division work supporting food-processing clients across the Kingdom.",
    relatedServiceSlugs: ["compressor-overhauling", "air-compressors"],
    imageLabel: "Mechanical plant room, Arab Milling Company",
    heroImage: "/images/project-masdar-boiler-1.png",
    gallery: [],
  },
  {
    slug: "prince-sultan-air-base",
    title: "Package Unit HVAC Installation at American Air Base (Prince Sultan Air Base)",
    client: "U.S. Forces, Prince Sultan Air Base",
    location: "Prince Sultan Air Base, Al Kharaj",
    value: "2.8 million SAR",
    scope: [
      "Supply and installation of HVAC package units",
      "Metallic and fabric ductwork with insulation and cladding",
      "Concrete foundations for machines",
      "Installation of control panels",
      "Commissioning of all units",
    ],
    summary:
      "Supply and installation of HVAC package units with full ductwork, insulation, foundations and commissioning at Prince Sultan Air Base.",
    description:
      "RSS delivered a complete HVAC package unit installation at Prince Sultan Air Base (American Air Base), Al Kharaj: supplying and installing package units with metallic and fabric ductwork, insulation and cladding, concrete equipment foundations, control panel installation, and full commissioning across a mix of permanent and rapid-deployment tented facilities.",
    relatedServiceSlugs: ["hvac-systems", "electrical-systems"],
    imageLabel: "Site store stocked with PPE and safety equipment, Prince Sultan Air Base",
    heroImage: "/images/certificates-hse-store.png",
    gallery: [
      { label: "Crane lifting palletised equipment on base", image: "/images/project-psab-crane-delivery.png" },
      { label: "Package air-conditioning unit connected to a tented facility", image: "/images/project-psab-tent-unit.png" },
      { label: "Row of tented facilities with duct connections", image: "/images/project-psab-tent-row.png" },
    ],
  },
  {
    slug: "al-khuriji-perfumes-factory",
    title: "Steel Platform Fabrication and Erection for Al Khuriji Perfumes Factory",
    client: "Al Khuriji Perfumes Factory",
    location: "Saudi Arabia",
    area: "Steel platform, 50m x 6m x 15m",
    scope: [
      "Supply, fabrication and erection of steel platform (50m x 6m x 15m)",
      "Supply and installation of 3mm SIKA epoxy flooring",
    ],
    summary:
      "Supply, fabrication and erection of a 50m x 6m x 15m steel platform for Al Khuriji Perfumes Factory.",
    description:
      "RSS supplied, fabricated and erected a large-scale steel platform (50m x 6m x 15m) for Al Khuriji Perfumes Factory, providing structural support for rooftop mechanical plant including HVAC package units, alongside supply and installation of 3mm SIKA epoxy flooring at the facility.",
    relatedServiceSlugs: ["process-piping-fabrication", "hvac-systems", "floor-epoxy-coatings"],
    imageLabel: "Rooftop steel platform with HVAC units, Al Khuriji Perfumes Factory",
    heroImage: "/images/service-hvac-rooftop-install.png",
    gallery: [
      { label: "3mm SIKA epoxy flooring installation, Al Khuriji Factory", image: "/images/project-floor-epoxy-1.png" },
    ],
  },
  {
    slug: "golden-chicken-facility",
    title: "Air Compressor Supply and Installation for Golden Chicken Facility",
    client: "Golden Chicken",
    location: "Saudi Arabia",
    scope: [
      "Supply and installation of a 75KV 5PC air compressor",
      "Stainless steel piping including SS tank",
      "Air dryer installation with exhaust duct",
    ],
    summary:
      "Supply and installation of a 75KV 5PC air compressor with stainless steel piping, tank, dryer and exhaust ducting for Golden Chicken Facility.",
    description:
      "RSS supplied and installed a 75KV 5PC air compressor system for Golden Chicken Facility, complete with stainless steel piping and tank, an air dryer, and exhaust duct routing, supporting the facility's continuous production requirements.",
    relatedServiceSlugs: ["air-compressors"],
    imageLabel: "CompAir industrial air compressor with overhead ductwork, Golden Chicken Facility",
    heroImage: "/images/service-air-compressors-row.png",
    gallery: [],
  },
  {
    slug: "swcc-housing-compound",
    title: "VRF Retrofit for Saline Water Conversion Corporation (SWCC) Housing Compound",
    client: "Saline Water Conversion Corporation (SWCC)",
    location: "Jubail",
    value: "1.0 million SAR",
    area: "100 villas & apartments (approx. 300 indoor units)",
    scope: [
      "Replacement of old AHUs with new Variable Refrigerant Flow (VRF) units",
      "Installation of around 300 VRF indoor terminal units across 100 villas and apartments",
    ],
    summary:
      "Replacement of ageing AHUs with new VRF systems across 100 villas and apartments, roughly 300 indoor units, at SWCC's Jubail housing compound.",
    description:
      "RSS replaced old AHUs with new Variable Refrigerant Flow (VRF) units at the Saline Water Conversion Corporation's housing compound in Jubail: a large-scale retrofit covering approximately 300 indoor terminal units across 100 villas and apartments, phased to minimise disruption to residents.",
    relatedServiceSlugs: ["vrf-vrv-systems", "hvac-systems", "chillers"],
    imageLabel: "VRF outdoor unit, cutaway view of internal components, SWCC housing compound",
    heroImage: "/images/service-vrf-cutaway.png",
    gallery: [
      { label: "VRF outdoor condensing unit with open service panel", image: "/images/service-vrf-open-panel-1.png" },
      { label: "Second VRF unit with open panel on an occupied rooftop", image: "/images/service-vrf-open-panel-2.png" },
      { label: "Branded rooftop package unit installed during the retrofit", image: "/images/service-chillers-trane-unit.png" },
    ],
  },
  {
    slug: "saptex-insulation-factory",
    title: "Condenser Machine Supply and Installation for Saptex Insulation Factory",
    client: "Saptex Insulation Factory",
    location: "Riyadh",
    value: "0.9 million SAR",
    scope: [
      "Supply and installation of condenser machine with control panels",
      "Installation within a Freon storage tank warehouse",
    ],
    summary:
      "Supply and installation of a condenser machine with control panels inside a Freon storage tank warehouse for Saptex Insulation Factory.",
    description:
      "RSS supplied and installed a condenser machine with associated control panels inside a Freon storage tank warehouse for Saptex Insulation Factory in Riyadh: a refrigeration installation requiring careful integration with existing storage infrastructure.",
    relatedServiceSlugs: ["cold-rooms-cold-storage", "chillers"],
    imageLabel: "Condenser and control panel installation, Saptex Insulation Factory",
    heroImage: "/images/service-electrical-panels.png",
    gallery: [
      { label: "Evaporator units mounted on the warehouse wall", image: "/images/service-cold-storage-interior.png" },
      { label: "Electrical control panels with indicator lights", image: "/images/service-electrical-panels.png" },
      { label: "Compressor casing disassembled for inspection", image: "/images/service-compressor-overhaul-1.png" },
    ],
  },
  {
    slug: "stc-data-centers",
    title: "Compressor Overhauling for STC Data Centers",
    client: "STC (Saudi Telecom Company)",
    location: "Nationwide, Kingdom of Saudi Arabia",
    value: "10 million SAR",
    year: "Since 2010",
    scope: [
      "Overhauling of semi-hermetic compressors",
      "Overhauling of screw compressors",
      "Ongoing nationwide coverage of STC data center sites",
    ],
    summary:
      "Standing nationwide contract since 2010 for semi-hermetic and screw compressor overhauling across STC data center sites in Saudi Arabia.",
    description:
      "Since 2010, RSS has provided compressor overhauling services, covering both semi-hermetic and screw compressors, for STC data center sites across the Kingdom of Saudi Arabia: a long-running nationwide contract valued at 10 million SAR that reflects the depth of our compressor maintenance capability for mission-critical cooling infrastructure.",
    relatedServiceSlugs: ["compressor-overhauling", "air-compressors"],
    imageLabel: "Satellite communications site with cooling plant, STC data centers",
    heroImage: "/images/project-stc-satellite-site.png",
    gallery: [
      { label: "Overhauled compressor units and motors staged in the workshop", image: "/images/service-air-compressor-parts.png" },
      { label: "Workshop bench with compressor components", image: "/images/service-compressor-overhaul-2.png" },
      { label: "Compressor parts staged in a warehouse", image: "/images/service-compressor-parts-warehouse.png" },
      { label: "Crane servicing a satellite communications site with cooling plant below", image: "/images/project-stc-satellite-site.png" },
    ],
  },
  {
    slug: "nesma",
    title: "Cold Room and HVAC Installation for NESMA Hydroponic Facility",
    client: "NESMA United Industries",
    location: "Kingdom of Saudi Arabia",
    value: "0.7 million SAR",
    scope: [
      "Supply and installation of cold room for hydroponic plant storage",
      "Supply and installation of HVAC solution",
      "Electrical works",
    ],
    summary:
      "Supply and installation of a cold room for hydroponic plant storage, plus HVAC and electrical works, for NESMA.",
    description:
      "RSS supplied and installed a cold room for hydroponic plant storage at a NESMA facility, alongside a complete HVAC solution and supporting electrical works: an integrated mechanical and electrical package for a controlled-environment agriculture application.",
    relatedServiceSlugs: ["cold-rooms-cold-storage", "hvac-systems", "electrical-systems"],
    imageLabel: "Cold room interior with evaporator units, NESMA facility",
    heroImage: "/images/project-cold-room-interior-1.png",
    gallery: [
      { label: "Cold room interior with evaporator fan units", image: "/images/project-cold-room-interior-1.png" },
      { label: "Cold room interior, alternate angle showing insulated panels", image: "/images/project-cold-room-interior-2.png" },
      { label: "Facility building exterior", image: "/images/project-peb-exterior-1.png" },
      { label: "Facility building exterior, alternate angle", image: "/images/project-peb-exterior-2.png" },
    ],
  },
  {
    slug: "warda-al-mashraq-cheese-project",
    title: "Large-Scale Cold Room for Warda Al Mashraq Company (Salam Al Mazro Cheese Project)",
    client: "Warda Al Mashraq Company",
    location: "Industrial City 2, Riyadh",
    area: "80m x 32m x 7.5m cold room",
    scope: [
      "Supply and installation of an 80m x 32m x 7.5m cold room",
      "Installation of condenser machines",
      "Racking-compatible warehouse layout",
    ],
    summary:
      "Supply and installation of an 80m x 32m x 7.5m cold room with condenser machines for the Salam Al Mazro cheese project.",
    description:
      "For Warda Al Mashraq Company's Salam Al Mazro cheese project in Riyadh's Industrial City 2, RSS supplied and installed a warehouse-scale cold room measuring 80m x 32m x 7.5m, complete with condenser machines and a racking-compatible layout for palletised dairy storage.",
    relatedServiceSlugs: ["cold-rooms-cold-storage"],
    imageLabel: "Racked cold storage warehouse, Warda Al Mashraq cheese project",
    heroImage: "/images/project-warda-cold-room-racking.png",
    gallery: [
      { label: "Cold room shell under construction, panels lit green during works", image: "/images/project-warda-cold-room-construction.png" },
      { label: "Empty cold room ready for racking installation", image: "/images/project-warda-cold-room-empty.png" },
      { label: "Cold room aisle with pallet racking installed", image: "/images/project-warda-cold-room-racking.png" },
      { label: "Crew examining an insulated wall panel seam", image: "/images/project-cold-room-wall-panel.png" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
