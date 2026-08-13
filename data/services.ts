import {
  Compass,
  Building2,
  Factory,
  Container,
  Wind,
  Droplets,
  Snowflake,
  Gauge,
  Thermometer,
  Wrench,
  Settings,
  Zap,
  Flame,
  PaintBucket,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "engineering-design-detailing",
    name: "Engineering, Design & Detailing",
    category: "Engineering & Design",
    icon: Compass,
    shortDescription:
      "Civil, electrical and mechanical design and detailing that turns concepts into buildable, coordinated drawing packages.",
    primaryKeyword: "Engineering Design and Detailing Services in Saudi Arabia",
    secondaryKeywords: [
      "MEP design consultancy Riyadh",
      "civil engineering detailing KSA",
      "mechanical shop drawings Saudi Arabia",
      "pre-engineered building design",
    ],
    description: [
      "RSS runs its civil, electrical and mechanical scopes from a single in-house engineering desk, so design intent and site execution stay aligned from the first drawing to final handover.",
      "Our engineers produce constructability-checked packages: general arrangement drawings, shop drawings, isometrics, single-line diagrams and as-built documentation, that our own site teams and client consultants can build from without ambiguity.",
    ],
    features: [
      "Civil design and structural detailing",
      "Electrical single-line diagrams and panel schedules",
      "Mechanical and HVAC layout, ducting and piping drawings",
      "Pre-engineered building (PEB) design coordination",
      "Shop drawings and as-built documentation",
      "Constructability review before site mobilization",
    ],
    applications: [
      "Pre-engineered building design packages",
      "Process piping isometrics and P&IDs support",
      "Electrical single-line diagrams and load schedules",
      "HVAC layout and ductwork routing drawings",
      "Steel structure and platform detailing",
    ],
    benefits: [
      "One engineering desk across civil, electrical and mechanical reduces coordination gaps",
      "Constructability review before mobilization cuts rework and change orders",
      "Drawing standards aligned to RSS's own QA/QC procedures",
      "Faster site mobilization with ready-to-build documentation",
    ],
    industries: ["Aviation", "Oil, Gas & Petrochemical", "Manufacturing", "Government & Military"],
    heroImage: "/images/service-engineering-design.png",
    relatedProjectSlugs: ["gaca-airport", "gulf-packaging-industries"],
    faqs: [
      {
        question: "Can RSS take on engineering-only scopes without construction?",
        answer:
          "Yes. Our design and detailing team supports clients and consultants on a standalone basis for civil, electrical and mechanical packages, as well as full design-and-build contracts.",
      },
      {
        question: "Do you coordinate with our appointed consultant?",
        answer:
          "Yes, our engineers regularly work alongside client-appointed consultants and PMCs to align shop drawings with approved-for-construction documents.",
      },
      {
        question: "Which disciplines are covered in-house?",
        answer:
          "Civil, electrical and mechanical design and detailing are all handled by our internal engineering department, backed by our QA/QC manual.",
      },
    ],
  },
  {
    slug: "civil-construction",
    name: "Civil Construction & Infrastructure",
    category: "Civil",
    icon: Building2,
    shortDescription:
      "Roads, RCC and pre-engineered building construction, waterproofing and underground utility networks built to KSA standards.",
    primaryKeyword: "Civil Construction Company in Saudi Arabia",
    secondaryKeywords: [
      "PEB erection contractor Riyadh",
      "RCC structural works KSA",
      "underground utilities construction Saudi Arabia",
      "industrial building contractor Jubail",
    ],
    description: [
      "Civil works are the foundation of every RSS project, from road works and RCC structural elements to full pre-engineered building erection for industrial and government clients.",
      "Our civil teams have delivered PEB buildings, footings, grade beams and grade slabs, waterproofing, and underground infrastructure networks across multiple industrial cities in the Kingdom, including King Fahad International Airport, Jubail and Al Kharaj.",
    ],
    features: [
      "Road works and site infrastructure",
      "Buildings construction: RCC and pre-engineered buildings (PEB)",
      "Waterproofing and roof insulation",
      "RCC structural works: footings, pedestals, grade beams, grade slabs",
      "Plumbing and sanitary works",
      "Underground utilities and infrastructure networks",
    ],
    applications: [
      "Warehouse and factory shell construction",
      "PEB erection for operations and maintenance buildings",
      "Airport and government facility buildings",
      "Industrial plant infrastructure and hardstand areas",
      "Sewage tanks and underground utility routing",
    ],
    benefits: [
      "Proven PEB erection track record on airport and industrial projects",
      "In-house structural detailing feeds directly into site execution",
      "Waterproofing and insulation delivered by the same crew as the shell, with no handover gaps",
      "HSE-led site management on live industrial and government facilities",
    ],
    industries: ["Aviation", "Manufacturing", "Government & Military", "Food & Beverage"],
    heroImage: "/images/hero-peb-construction.png",
    galleryImages: ["/images/hero-peb-construction.png", "/images/service-civil-underground-utilities.png"],
    relatedProjectSlugs: [
      "gaca-airport",
      "gulf-packaging-industries",
      "bunyan-company",
      "al-manhal-water",
      "specialized-works",
    ],
    faqs: [
      {
        question: "Does RSS erect client-supplied PEB structures?",
        answer:
          "Yes, at Gulf Packaging Industries we erected client-supplied pre-engineered buildings including structural steel, roof and wall sandwich panels for multiple production lines.",
      },
      {
        question: "Can you handle the full civil package from footings to shell?",
        answer:
          "Yes. Our scope regularly covers footings, pedestals, grade beams and grade slabs through to structural steel erection and cladding, as delivered at Bunyan Company and Al Manhal Water.",
      },
      {
        question: "Do you work inside operational or restricted-access sites?",
        answer:
          "Yes, including airside works at King Fahad International Airport under GACA and military base construction at Prince Sultan Air Base. Both require strict HSE and access control compliance, which our teams are experienced with.",
      },
    ],
  },
  {
    slug: "process-piping-fabrication",
    name: "Process Piping, Fabrication & Plant Maintenance",
    category: "Industrial & Mechanical",
    icon: Factory,
    shortDescription:
      "LSTK industrial projects, process piping, on-site fabrication, rigging/millwright and steel structure works for plants and process facilities.",
    primaryKeyword: "Process Piping and Plant Maintenance Contractor Saudi Arabia",
    secondaryKeywords: [
      "LSTK contractor Saudi Arabia",
      "on-site fabrication KSA",
      "rigging and millwright services Riyadh",
      "industrial steel structure contractor",
    ],
    description: [
      "RSS delivers Lump Sum Turn Key (LSTK) industrial packages covering process piping, on-site fabrication, rigging/millwright and steel structure: the mechanical backbone of oil & gas, petrochemical, power and food-processing facilities.",
      "Our teams combine engineering detailing with hands-on plant maintenance experience, so process interruptions are minimised and installations meet process integrity requirements from day one.",
    ],
    features: [
      "LSTK (Lump Sum Turn Key) industrial project delivery",
      "Process piping fabrication and installation",
      "Scheduled and breakdown plant maintenance",
      "On-site fabrication of piping and structural components",
      "Rigging and millwright services for heavy equipment",
      "Structural steel works",
    ],
    applications: [
      "Oil & gas and petrochemical process piping",
      "Boiler and utility piping installation",
      "Plant shutdown and turnaround maintenance",
      "Heavy equipment rigging and repositioning",
      "Industrial steel platforms and structures",
    ],
    benefits: [
      "Single contractor for LSTK scope reduces interface risk",
      "In-house fabrication shortens lead time versus third-party subcontracting",
      "Millwright-trained riggers for safe heavy-equipment handling",
      "Plant maintenance experience built on continuous data-center and factory contracts since 2010",
    ],
    industries: ["Oil, Gas & Petrochemical", "Manufacturing", "Telecom & Data Centers", "Food & Beverage"],
    heroImage: "/images/service-process-piping.png",
    galleryImages: ["/images/service-process-piping.png", "/images/hero-industrial-plant-night.png"],
    relatedProjectSlugs: ["masdar-al-hayat", "al-khuriji-perfumes-factory", "stc-data-centers"],
    faqs: [
      {
        question: "What does an LSTK scope with RSS typically include?",
        answer:
          "Design input, procurement coordination, fabrication, installation, testing and commissioning delivered under a single lump-sum contract, minimising interfaces for the client.",
      },
      {
        question: "Do you fabricate piping and structures on-site or off-site?",
        answer:
          "Both. We run on-site fabrication for site-specific components and platforms (as delivered at Al Khuriji Perfumes Factory) while sourcing engineered items through our supply chain when it's faster.",
      },
      {
        question: "Can you support planned plant shutdowns?",
        answer:
          "Yes, our mechanical teams plan and execute maintenance and overhaul work around client shutdown windows to minimise production downtime.",
      },
    ],
  },
  {
    slug: "storage-tanks-vessels",
    name: "Storage Tanks & Vessels",
    category: "Industrial & Mechanical",
    icon: Container,
    shortDescription:
      "Fabrication, erection and maintenance of storage tanks and pressure vessels for industrial and process facilities.",
    primaryKeyword: "Storage Tanks and Vessels Contractor Saudi Arabia",
    secondaryKeywords: [
      "storage tank erection KSA",
      "industrial vessel fabrication Riyadh",
      "tank farm construction Saudi Arabia",
    ],
    description: [
      "Storage tanks and vessels are a core industrial discipline at RSS, delivered alongside our process piping and steel structure teams so tankage integrates cleanly with the rest of the plant.",
      "From foundation works to shell erection and tie-ins, our crews follow the same QA/QC and HSE procedures applied across every RSS industrial contract.",
    ],
    features: [
      "Storage tank fabrication and erection",
      "Pressure vessel installation support",
      "Foundation and civil works coordination for tankage",
      "Piping tie-ins and instrumentation support",
      "Inspection and maintenance support",
    ],
    applications: [
      "Process and utility storage tanks",
      "Chemical and water storage installations",
      "Tank farm construction for industrial facilities",
      "Vessel installation for process plants",
    ],
    benefits: [
      "Delivered by the same team as our process piping and steel structure scopes for seamless tie-ins",
      "Civil, structural and mechanical coordination under one contractor",
      "HSE-led lifting and erection procedures",
    ],
    industries: ["Oil, Gas & Petrochemical", "Manufacturing", "Water & Utilities"],
    heroImage: "/images/service-storage-tanks-vessels.png",
    relatedProjectSlugs: ["masdar-al-hayat"],
    faqs: [
      {
        question: "Do you handle both fabrication and erection?",
        answer:
          "Yes, we manage tank and vessel scopes from foundation coordination through fabrication, erection and tie-in to the surrounding process piping.",
      },
      {
        question: "Can RSS maintain existing tanks and vessels?",
        answer:
          "Yes, our maintenance division supports inspection, repair and overhaul work on existing storage assets alongside new installations.",
      },
    ],
  },
  {
    slug: "hvac-systems",
    name: "HVAC Systems: Supply, Installation & Testing",
    category: "HVAC",
    icon: Wind,
    shortDescription:
      "DX units, CRAC units, AHUs, fresh air units and ducted systems, supplied, installed, air-balanced and commissioned.",
    primaryKeyword: "HVAC Installation Company in Saudi Arabia",
    secondaryKeywords: [
      "DX and CRAC unit installation KSA",
      "AHU supply and installation Riyadh",
      "HVAC testing and commissioning Saudi Arabia",
      "ducted split unit installation",
    ],
    description: [
      "RSS is a solution provider for HVAC systems across DX units, CRAC units, package units, AHUs and ducted split systems, covering supply, ducting, installation, air balancing, testing and commissioning as one scope.",
      "We've delivered HVAC packages for airport facilities, military bases and food-processing plants, including metallic and fabric ducting, insulation, cladding, concrete foundations and full control-panel commissioning.",
    ],
    features: [
      "Solution provider for DX units and CRAC units",
      "Supply and installation of Air Handling Units (AHUs)",
      "Installation of Fresh Air Units",
      "Ducted split units and high-wall split installation",
      "Metallic and fabric ductwork with insulation and cladding",
      "Air balancing, testing and commissioning",
      "Panels and controls installation",
    ],
    applications: [
      "Commercial and government building HVAC",
      "Military base and temporary facility climate control",
      "Data center CRAC unit installation",
      "Industrial plant fresh-air and ventilation systems",
      "Retrofit and replacement of ageing HVAC plant",
    ],
    benefits: [
      "Single contractor for supply, ducting, installation and commissioning",
      "Experience with both permanent buildings and rapid-deployment military facilities",
      "Testing and commissioning delivered by the installing team, so performance data stays accountable",
      "Trading division stocks HVAC-adjacent spares to reduce downtime",
    ],
    industries: ["Government & Military", "Aviation", "Telecom & Data Centers", "Hospitality & Real Estate"],
    heroImage: "/images/hero-hvac-rooftop-units.png",
    galleryImages: ["/images/hero-hvac-rooftop-units.png", "/images/service-hvac-rooftop-install.png"],
    relatedProjectSlugs: ["prince-sultan-air-base", "swcc-housing-compound"],
    faqs: [
      {
        question: "Can you supply and install package units with ducting in one contract?",
        answer:
          "Yes, at Prince Sultan Air Base we supplied and installed package units with metallic and fabric duct, insulation, cladding, concrete foundations, control panels and full commissioning.",
      },
      {
        question: "Do you replace old AHUs with modern VRF equipment?",
        answer:
          "Yes, we've replaced ageing AHUs with new Variable Refrigerant Flow units at scale, including roughly 300 indoor units across 100 villas and apartments at SWCC's Jubail housing compound.",
      },
      {
        question: "Do you provide testing and commissioning reports?",
        answer:
          "Yes, air balancing, testing and commissioning are documented as part of our QA/QC handover package for every HVAC scope.",
      },
    ],
  },
  {
    slug: "chilled-water-piping",
    name: "Chilled Water Piping (Aboveground & Underground)",
    category: "HVAC",
    icon: Droplets,
    shortDescription:
      "Supply, installation, testing and commissioning of stainless steel and HDPE chilled water pipelines and galvanized drains.",
    primaryKeyword: "Chilled Water Piping Contractor Saudi Arabia",
    secondaryKeywords: [
      "HDPE chilled water pipeline installation KSA",
      "stainless steel piping contractor Riyadh",
      "underground chilled water network Saudi Arabia",
    ],
    description: [
      "RSS supplies, installs, tests and commissions stainless steel and HDPE chilled water pipelines, both aboveground and buried, complete with galvanized iron drain networks.",
      "This service is typically delivered alongside our HVAC scope, so chilled water distribution and the AHUs/package units it feeds are commissioned as a single coordinated system.",
    ],
    features: [
      "Supply of stainless steel and HDPE chilled water pipe",
      "Aboveground pipe rack installation",
      "Underground/buried pipeline installation with trenching",
      "Galvanized iron (GI) drain installation",
      "Pressure testing and commissioning",
    ],
    applications: [
      "Campus and industrial-site chilled water distribution",
      "Central plant to building HVAC connections",
      "Underground utility corridors",
      "Drainage networks for HVAC plant rooms",
    ],
    benefits: [
      "Material choice (SS or HDPE) matched to site and corrosion conditions",
      "Coordinated with our HVAC installation teams for single-point accountability",
      "Trenching and reinstatement handled in-house alongside our civil division",
    ],
    industries: ["Manufacturing", "Government & Military", "Hospitality & Real Estate"],
    heroImage: "/images/service-chilled-water-piping-1.png",
    galleryImages: ["/images/service-chilled-water-piping-1.png", "/images/project-chilled-water-underground.png"],
    relatedProjectSlugs: [],
    faqs: [
      {
        question: "Do you install chilled water piping underground or only aboveground?",
        answer:
          "Both. We route pipe racks aboveground where practical and trench for buried sections, using stainless steel or HDPE pipe depending on the application.",
      },
      {
        question: "Is testing and commissioning included?",
        answer:
          "Yes, every chilled water piping scope includes pressure testing and commissioning before handover.",
      },
    ],
  },
  {
    slug: "chillers",
    name: "Chiller Supply & Maintenance",
    category: "HVAC",
    icon: Snowflake,
    shortDescription:
      "Supply, installation and scheduled maintenance of chillers for commercial, residential and industrial cooling loads.",
    primaryKeyword: "Chiller Maintenance Company in Saudi Arabia",
    secondaryKeywords: [
      "chiller installation Riyadh",
      "commercial chiller servicing KSA",
      "industrial chiller supplier Saudi Arabia",
    ],
    description: [
      "Chillers sit at the center of RSS's Trading and Maintenance division: we supply chiller equipment and keep it running through scheduled servicing, overhauls and emergency callouts.",
      "Our maintenance engineers work on rooftop and plant-room chillers across residential compounds, commercial buildings and industrial sites.",
    ],
    features: [
      "Chiller supply and installation",
      "Preventive maintenance contracts",
      "Compressor and control-panel diagnostics",
      "Emergency breakdown response",
      "Refrigerant and component replacement",
    ],
    applications: [
      "Commercial building central cooling plants",
      "Residential compound chiller systems",
      "Industrial process cooling",
      "Hotel and hospitality cooling plants",
    ],
    benefits: [
      "Same team handles supply and ongoing maintenance, with no vendor handover gaps",
      "Preventive maintenance contracts reduce unplanned downtime",
      "Spare parts stocked through our Trading division",
    ],
    industries: ["Hospitality & Real Estate", "Manufacturing", "Government & Military"],
    heroImage: "/images/service-chillers-rooftop.png",
    galleryImages: [
      "/images/service-chillers-rooftop.png",
      "/images/service-chillers-trane-unit.png",
      "/images/service-chillers-hiller-tower.png",
    ],
    relatedProjectSlugs: ["swcc-housing-compound"],
    faqs: [
      {
        question: "Do you offer annual maintenance contracts for chillers?",
        answer:
          "Yes, we run preventive maintenance contracts sized to the client's equipment inventory and criticality, similar to the compressor maintenance programs we run for clients like Arab Milling Company.",
      },
      {
        question: "Can you supply replacement chillers as well as maintain existing ones?",
        answer:
          "Yes, our Trading and Maintenance division covers both new equipment supply and servicing of existing chiller plant.",
      },
    ],
  },
  {
    slug: "vrf-vrv-systems",
    name: "VRF / VRV & TVR System Installation and Maintenance",
    category: "HVAC",
    icon: Gauge,
    shortDescription:
      "Replacement, installation and maintenance of Variable Refrigerant Flow (VRF/VRV) and TVR systems for large residential and commercial portfolios.",
    primaryKeyword: "VRF VRV System Installation Saudi Arabia",
    secondaryKeywords: [
      "TVR system maintenance KSA",
      "VRF replacement contractor Riyadh",
      "variable refrigerant flow installation Jubail",
    ],
    description: [
      "RSS has replaced ageing air-conditioning plant with modern VRF (Variable Refrigerant Flow) systems at scale, including a full retrofit of roughly 300 indoor terminal units across 100 villas and apartments for Saline Water Conversion Corporation's Jubail housing compound.",
      "We also install and maintain TVR and VRV systems as part of our ongoing Trading and Maintenance division.",
    ],
    features: [
      "VRF/VRV outdoor and indoor unit installation",
      "TVR system installation and servicing",
      "Large-scale retrofit of multi-unit residential compounds",
      "Refrigerant piping and controls wiring",
      "Preventive maintenance contracts",
    ],
    applications: [
      "Residential compound and villa retrofits",
      "Multi-tenant commercial buildings",
      "Hotel and hospitality room-by-room cooling",
      "Housing compounds for utility and industrial clients",
    ],
    benefits: [
      "Proven large-scale retrofit experience (300+ indoor units delivered)",
      "Minimises disruption to occupied villas/apartments during changeover",
      "Ongoing maintenance keeps warranty and performance intact",
    ],
    industries: ["Hospitality & Real Estate", "Government & Military", "Water & Utilities"],
    heroImage: "/images/service-vrf-cutaway.png",
    galleryImages: [
      "/images/service-vrf-cutaway.png",
      "/images/service-vrf-open-panel-1.png",
      "/images/service-vrf-open-panel-2.png",
    ],
    relatedProjectSlugs: ["swcc-housing-compound"],
    faqs: [
      {
        question: "What is the largest VRF retrofit RSS has completed?",
        answer:
          "Around 300 Variable Refrigerant Flow indoor terminal units replacing old AHUs across 100 villas and apartments at the SWCC Jubail housing compound.",
      },
      {
        question: "Can you work in occupied residential units during a retrofit?",
        answer:
          "Yes, we plan phased installation schedules to minimise disruption for residents in occupied compounds.",
      },
    ],
  },
  {
    slug: "cold-rooms-cold-storage",
    name: "Cold Rooms & Cold Storage Facilities",
    category: "Cold Storage",
    icon: Thermometer,
    shortDescription:
      "Design, supply and installation of cold rooms, blast freezers and cold storage facilities for food, pharma and hydroponic applications.",
    primaryKeyword: "Cold Room Installation Company in Saudi Arabia",
    secondaryKeywords: [
      "cold storage construction KSA",
      "blast freezer installation Riyadh",
      "supermarket freezer contractor Saudi Arabia",
      "hydroponic cold room installation",
    ],
    description: [
      "Cold rooms and cold storage are among RSS's most repeated project types, from an 80m × 32m × 7.5m cold room with racking for a cheese production facility, to hydroponic-plant cold storage and blast freezer installations.",
      "Scope typically covers sandwich-panel envelopes, doors, evaporator and condenser units, control panels and full electrical and HVAC integration.",
    ],
    features: [
      "Cold room design, supply and installation",
      "Sandwich panel envelope construction",
      "Blast freezer supply and installation",
      "Condenser, evaporator and compressor installation",
      "Racking-compatible layouts for warehousing",
      "Control panel installation and commissioning",
    ],
    applications: [
      "Food and dairy processing and storage",
      "Supermarket and retail freezer rooms",
      "Hydroponic and agricultural cold storage",
      "Pharmaceutical and industrial cold storage",
      "Cold chain logistics warehousing",
    ],
    benefits: [
      "Delivered projects from single rooms to 80m × 32m warehouse-scale cold stores",
      "Envelope, refrigeration and electrical handled by one contractor",
      "Trading division supplies panels, doors and refrigeration components directly",
    ],
    industries: ["Food & Beverage", "Cold Chain & Logistics", "Manufacturing"],
    heroImage: "/images/service-cold-storage-interior.png",
    galleryImages: ["/images/service-cold-storage-interior.png", "/images/gallery-warehouse-racking.png"],
    relatedProjectSlugs: ["warda-al-mashraq-cheese-project", "nesma", "saptex-insulation-factory"],
    faqs: [
      {
        question: "What size cold rooms has RSS built?",
        answer:
          "Our largest delivered cold room to date is an 80m × 32m × 7.5m facility with racking and condenser machines for a cheese production client in Riyadh's Industrial City 2.",
      },
      {
        question: "Can you supply a cold room for hydroponic or agricultural use?",
        answer:
          "Yes, we've supplied and installed cold rooms specifically for hydroponic plant storage, alongside associated HVAC and electrical works.",
      },
      {
        question: "Do you also install blast freezers?",
        answer:
          "Yes, blast freezer supply and installation is part of our cold storage service line.",
      },
    ],
  },
  {
    slug: "air-compressors",
    name: "Air Compressor Supply & Trading",
    category: "Air Compressors",
    icon: Wrench,
    shortDescription:
      "Full range of contractor, professional and heavy-duty industrial air compressors, dryers and spare parts.",
    primaryKeyword: "Air Compressor Supplier in Saudi Arabia",
    secondaryKeywords: [
      "industrial air compressor supplier KSA",
      "air compressor spare parts Riyadh",
      "heavy duty air compressor Saudi Arabia",
    ],
    description: [
      "Our Trading and Maintenance division supplies a full range of contractor, professional and heavy-duty industrial air compressors, along with dryers and spare parts: filters, valves, pumps, motors, belt guards, oils, hoses, switches and vibration pads.",
      "We supply and install compressors complete with tanks, dryers and exhaust ducting, as delivered for clients like Golden Chicken Facility and Al Khuriji Perfumes Factory.",
    ],
    features: [
      "Contractor and professional air compressors: belt driven, electric belt driven, gas belt driven, oil-less and oil-lube direct driven",
      "Heavy-duty industrial compressors: base mounted, duplex, gas base/tank mounted, silent, simplex horizontal tank",
      "Air compressor spare parts: filters, valves, pumps, motors, belt guards, oils, hoses, switches, vibration pads",
      "Stainless steel piping, tanks and air dryers supplied with installation",
      "Exhaust ducting and installation support",
    ],
    applications: [
      "Food and beverage processing plants",
      "Perfume and cosmetics manufacturing",
      "General industrial and manufacturing facilities",
      "Workshops and light industrial use",
    ],
    benefits: [
      "Full catalogue from contractor-grade to heavy-duty industrial units",
      "Supply paired with installation, piping and commissioning",
      "Spare parts stocked to minimise compressor downtime",
    ],
    industries: ["Food & Beverage", "Manufacturing", "Telecom & Data Centers"],
    heroImage: "/images/service-air-compressors-row.png",
    galleryImages: [
      "/images/service-air-compressors-row.png",
      "/images/service-air-compressors-heavy-duty.png",
      "/images/service-air-compressor-parts.png",
    ],
    relatedProjectSlugs: ["golden-chicken-facility", "al-khuriji-perfumes-factory"],
    faqs: [
      {
        question: "What types of air compressors does RSS supply?",
        answer:
          "Our range spans contractor and professional compressors (belt driven, electric/gas belt driven, oil-less and oil-lube direct driven) through to heavy-duty industrial units (base mounted, duplex, gas base/tank mounted, silent, simplex horizontal tank).",
      },
      {
        question: "Do you supply spare parts as well as new units?",
        answer:
          "Yes, our special Trading and Maintenance division stocks filters, valves, pumps, motors, belt guards, oils, hoses, switches and vibration pads.",
      },
    ],
  },
  {
    slug: "compressor-overhauling",
    name: "Compressor Overhauling & Preventive Maintenance",
    category: "Air Compressors",
    icon: Settings,
    shortDescription:
      "Overhauling of semi-hermetic and screw compressors, plus scheduled preventive maintenance contracts for industrial clients.",
    primaryKeyword: "Compressor Overhauling Services Saudi Arabia",
    secondaryKeywords: [
      "screw compressor overhaul KSA",
      "semi-hermetic compressor repair Riyadh",
      "data center compressor maintenance Saudi Arabia",
      "preventive maintenance contract air compressor",
    ],
    description: [
      "Since 2010, RSS has overhauled semi-hermetic and screw compressors for STC data center sites across the Kingdom: a 10 million SAR standing scope that reflects the depth of our compressor maintenance capability.",
      "We also run fixed-term preventive maintenance contracts, such as our one-year air compressor maintenance program for Arab Milling Company, keeping client equipment running to spec year-round.",
    ],
    features: [
      "Semi-hermetic compressor overhauling",
      "Screw compressor overhauling",
      "Motor and control panel diagnostics and replacement",
      "Scheduled preventive maintenance contracts",
      "Emergency breakdown response",
      "Nationwide site coverage across the Kingdom",
    ],
    applications: [
      "Data center cooling plant compressors",
      "Food processing and milling facility compressors",
      "Cold storage and refrigeration compressor plant",
      "Industrial process cooling systems",
    ],
    benefits: [
      "Long-standing nationwide contract experience (STC, since 2010)",
      "Skilled technicians for both semi-hermetic and screw compressor types",
      "Preventive maintenance contracts reduce unplanned outages",
    ],
    industries: ["Telecom & Data Centers", "Food & Beverage", "Manufacturing"],
    heroImage: "/images/service-compressor-overhaul-1.png",
    galleryImages: [
      "/images/service-compressor-overhaul-1.png",
      "/images/service-compressor-overhaul-2.png",
      "/images/service-compressor-parts-warehouse.png",
    ],
    relatedProjectSlugs: ["stc-data-centers", "arab-milling-company"],
    faqs: [
      {
        question: "What compressor types does RSS overhaul?",
        answer:
          "We overhaul both semi-hermetic and screw compressors, as delivered continuously for STC data center sites across Saudi Arabia since 2010.",
      },
      {
        question: "Do you offer annual maintenance contracts?",
        answer:
          "Yes. For example, we run a one-year preventive maintenance contract for Arab Milling Company's air compressor fleet, and similar contracts can be scoped to your equipment inventory.",
      },
    ],
  },
  {
    slug: "electrical-systems",
    name: "Electrical Systems (LV / ELV)",
    category: "Electrical",
    icon: Zap,
    shortDescription:
      "Low and extra-low voltage electrical works: transformers, RMUs, panels, controls, cabling and conduiting.",
    primaryKeyword: "Electrical Contracting Company in Saudi Arabia",
    secondaryKeywords: [
      "LV ELV electrical contractor KSA",
      "transformer and RMU installation Riyadh",
      "industrial cabling and conduiting Saudi Arabia",
    ],
    description: [
      "RSS delivers low voltage (LV) and extra-low voltage (ELV) electrical works as part of our integrated MEP capability: transformers, ring main units (RMUs), distribution panels, controls and cabling/conduiting for industrial, commercial and government facilities.",
      "Electrical scopes are typically delivered alongside our HVAC and mechanical installations, so control panels and power distribution are commissioned in step with the equipment they serve.",
    ],
    features: [
      "Transformers and Ring Main Units (RMUs)",
      "Distribution panels and control systems",
      "Cabling and conduiting: medium and low voltage",
      "Control panel installation for mechanical/HVAC equipment",
      "Electrical coordination with civil and mechanical scopes",
    ],
    applications: [
      "Industrial plant power distribution",
      "HVAC and process equipment control panels",
      "Government and airport facility electrical systems",
      "Compressor and refrigeration control wiring",
    ],
    benefits: [
      "Electrical scope coordinated directly with mechanical/HVAC installation for faster commissioning",
      "Experience on regulated sites (airports, government, military)",
      "Panels and controls tested as part of full-system commissioning, not in isolation",
    ],
    industries: ["Government & Military", "Aviation", "Manufacturing", "Oil, Gas & Petrochemical"],
    heroImage: "/images/service-electrical-panels.png",
    relatedProjectSlugs: ["nesma", "swcc-housing-compound"],
    faqs: [
      {
        question: "Does RSS handle both LV and ELV scopes?",
        answer:
          "Yes, our electrical teams cover both low voltage and extra-low voltage works, including transformers, RMUs, panels, controls and cabling/conduiting.",
      },
      {
        question: "Can electrical works be delivered alongside HVAC or mechanical installation?",
        answer:
          "Yes, this is our standard approach, ensuring control panels and power distribution are commissioned together with the mechanical or HVAC equipment they support.",
      },
    ],
  },
  {
    slug: "plumbing-fire-fighting",
    name: "Plumbing & Fire Fighting Systems",
    category: "Plumbing & Fire Fighting",
    icon: Flame,
    shortDescription:
      "Water supply, drainage, storm water and firefighting networks including fire protection systems.",
    primaryKeyword: "Fire Fighting and Plumbing Contractor Saudi Arabia",
    secondaryKeywords: [
      "firefighting network installation KSA",
      "fire protection system contractor Riyadh",
      "plumbing and sanitary works Saudi Arabia",
    ],
    description: [
      "RSS installs water supply, drains, storm water drainage, firefighting networks and fire protection systems as part of its integrated civil and MEP scope, including sewage tank construction and valve box installations for large infrastructure clients.",
      "Recent scopes include construction of sewage tanks in Al Kharj/Dammam and 20 valve boxes for the King Abdulaziz International Airport (KAIA) Jeddah project.",
    ],
    features: [
      "Water supply and drainage systems",
      "Storm water drainage networks",
      "Firefighting network installation",
      "Fire protection systems",
      "Sewage tank construction",
      "Valve box construction and installation",
    ],
    applications: [
      "Airport and infrastructure utility networks",
      "Industrial and commercial fire protection systems",
      "Government and municipal drainage projects",
      "Plant and warehouse sanitary systems",
    ],
    benefits: [
      "Delivered on major national infrastructure (KAIA Jeddah, Al Kharj/Dammam)",
      "Integrated with our civil and underground utilities division",
      "Fire protection systems commissioned to code requirements",
    ],
    industries: ["Aviation", "Government & Military", "Water & Utilities", "Manufacturing"],
    heroImage: "/images/project-sewage-tank-alkharj.png",
    galleryImages: ["/images/project-valve-box-kaia.png", "/images/project-sewage-tank-alkharj.png"],
    relatedProjectSlugs: ["specialized-works"],
    faqs: [
      {
        question: "Has RSS worked on airport infrastructure before?",
        answer:
          "Yes, including the construction of 20 valve boxes for the King Abdulaziz International Airport (KAIA) Jeddah project.",
      },
      {
        question: "Do you construct sewage and utility tanks?",
        answer:
          "Yes, we've constructed sewage tanks such as the installation delivered in Al Kharj/Dammam.",
      },
    ],
  },
  {
    slug: "floor-epoxy-coatings",
    name: "Floor Epoxy Coatings",
    category: "Civil",
    icon: PaintBucket,
    shortDescription:
      "Supply and installation of industrial epoxy flooring systems for factories and processing facilities.",
    primaryKeyword: "Epoxy Flooring Contractor in Saudi Arabia",
    secondaryKeywords: [
      "industrial epoxy floor installation KSA",
      "SIKA epoxy flooring Riyadh",
      "factory floor coating Saudi Arabia",
    ],
    description: [
      "RSS supplies and installs industrial epoxy flooring for factories and processing facilities, including 3mm SIKA epoxy systems designed for hygiene, durability and chemical resistance in demanding production environments.",
    ],
    features: [
      "Supply and installation of SIKA and equivalent epoxy systems",
      "3mm and custom-thickness industrial floor coatings",
      "Surface preparation and priming",
      "Hygienic, chemical- and wash-down-resistant finishes",
    ],
    applications: [
      "Food and beverage processing floors",
      "Perfume and cosmetics manufacturing facilities",
      "Warehouses and industrial production floors",
      "Cold storage and wash-down areas",
    ],
    benefits: [
      "Delivered as part of a wider facility fit-out, reducing coordination for the client",
      "Durable, hygienic finish suited to food-grade and industrial environments",
    ],
    industries: ["Food & Beverage", "Manufacturing"],
    heroImage: "/images/project-floor-epoxy-aerial.png",
    galleryImages: ["/images/project-floor-epoxy-1.png", "/images/project-floor-epoxy-aerial.png"],
    relatedProjectSlugs: ["specialized-works"],
    faqs: [
      {
        question: "What epoxy systems does RSS install?",
        answer:
          "We supply and install SIKA and equivalent industrial epoxy floor systems, including the 3mm system delivered at Al Khuraiji Factory.",
      },
      {
        question: "Is epoxy flooring suitable for food processing areas?",
        answer:
          "Yes, epoxy coatings provide a hygienic, chemical- and wash-down-resistant finish well suited to food and beverage production environments.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
