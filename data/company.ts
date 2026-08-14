import {
  Lightbulb,
  Handshake,
  HardHat,
  Wrench,
  Trophy,
  Infinity as InfinityIcon,
  Users,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import type { Stat } from "@/types";

export const stats: Stat[] = [
  { label: "Years of combined contracting legacy", value: "30", suffix: "+" },
  { label: "Delivered projects & standing contracts", value: "16", suffix: "+" },
  { label: "Prestigious clients served", value: "30", suffix: "+" },
  { label: "Service disciplines", value: "14" },
];

export const coreValues = [
  { title: "Customer Satisfaction Through Speed, Quality & Efficiency", icon: Lightbulb },
  { title: "Long Business Relations", icon: Handshake },
  { title: "Professional Behaviour", icon: HardHat },
  { title: "Flexible in Discussions", icon: Wrench },
  { title: "Passion for Winning", icon: Trophy },
  { title: "Boundary-Less Thinking", icon: InfinityIcon },
  { title: "Team Work", icon: Users },
  { title: "Recognition, Growth, Respect & Dignity of Individuals", icon: HeartHandshake },
  { title: "Respect of Each Other", icon: MessageCircle },
];

export const mission =
  "Our goal is to execute the best possible results at the most affordable costs. We strive to provide our customers with personal job site assistance, attentive management, construction scheduling, and continuous communication for smooth and successful project completion. You can count on us for top-quality services and flawless results.";

export const vision =
  "Our long-term vision is to stay dedicated and committed to serving our potential and existing clients until they are fully satisfied with our work. We are building and growing with ethics to become a market leader across the Kingdom of Saudi Arabia in the contracting and maintenance industry, while taking an active part in corporate social responsibility.";

export const aboutParagraphs: string[] = [
  "RSS (Raza Service Solutions) Contracting Company has taken a giant leap forward, expanding its operations into the Kingdom of Saudi Arabia. We carry a legacy of three decades across Civil, Pre-Engineered Buildings, Storage Tanks, Vessels, Process Piping, Gas Pipelines (UG/AG), Air Compressors (supply and maintenance), Electrical (LV, ELV), Plumbing, Fire Fighting, HVAC, Cold Storage and Floor Epoxies, bringing a wealth of experience and expertise to the Saudi Arabian market.",
  "As a 100% foreign investment company, RSS is committed to providing the highest quality services and products to our clients while maintaining the highest standards of professionalism and integrity. We believe in building long-term relationships based on trust, mutual respect, and a deep understanding of our clients' needs and goals.",
  "We are proud to be part of the vibrant and dynamic business community in Saudi Arabia, contributing to the Kingdom's economic growth in alignment with Vision 2030. As a socially responsible company, we are committed to giving back to the communities where we operate and supporting local initiatives that promote sustainable development.",
];

export const ceoMessage: string[] = [
  "RSS Contracting Co. Ltd. is active in the construction and management of Oil & Gas, Petrochemical, Fertilizer, Power and Food Processing industry projects. Additionally, we have expertise in commercial and residential property developments. Furthermore, our specialization includes maintenance, overhauling, testing and commissioning of mechanical (piping and equipment), electrical and telecommunication sectors.",
  "Our organization employs qualified and experienced managers, engineers and a skilled multinational workforce that enables us to offer and provide several services in the construction field. Company management has a strong commitment to the continual enhancement of its capabilities and the services it offers to clients, a commitment that has driven our fast growth over the past few years and will continue to drive our growth for years to come.",
  "Timely completion, high-quality work and providing a safe working environment are the main pillars of a successfully executed project. We, at RSS, put these objectives before us once we start a project, and our records show that our clients have always been more than happy, especially in these three aspects of every project we have executed.",
  "The safety and health of our employees, and protection of the environment, are of the highest concern to RSS management. A comprehensive safety program has been integrated into our work ethic so that every employee understands their responsibility for the safety of themselves, others, equipment and property.",
];

export const qualityPolicy: string[] = [
  "R.S.S Engineering believes that real strength lies in client satisfaction, which can only be achieved by providing quality and on-time completion of work in accordance with the client's exact needs, backed by an efficient system of cost control and technical support. Quality is our number one priority: we keep clients in focus across all activities, and motivate and train employees and clients to enhance and accept this responsibility.",
  "R.S.S has installed an in-house QA/QC program, implemented by the QA/QC Manager through their department and fully supported by company management and employees at all levels. Our Quality Manual details the quality policy, quality system procedures, quality organization, and the responsibility and authority of key personnel.",
  "The QA/QC Manager is responsible for constant review of the quality manual, procedures, plans and work instructions, and recommends improvements to the Chief Executive. Assurance of quality at sites is the direct responsibility of the Site Manager, who reports to the Quality Manager at the Head Office. Work-specific quality plans are developed for each job prior to mobilization, forming the basis of work instructions followed by workmen executing the job, monitored by QA/QC inspectors during execution and on completion, with all activities recorded in approved formats.",
];

export const hsePolicyIntro: string[] = [
  "The Directors of R.S.S regard the promotion of health and safety measures, and appropriate programs to maintain a healthy environment, as a mutual objective for management and employees at all levels.",
  "R.S.S policy is to review costs as appropriate, to do all that is reasonable to prevent personal injury and damage to property, and to protect staff and the general public from foreseeable work hazards including environmental nuisances.",
];

export const hsePolicyPoints: string[] = [
  "To provide and maintain safe and healthy working conditions for all of its employees.",
  "To provide the necessary training and instruction to enable employees to perform their work safely and efficiently.",
  "To make available all necessary safety devices and protective equipment to enable safe working activities to be undertaken.",
  "To maintain a constant and continuing interest in health and safety matters applicable to the company's activities, in particular by consulting and involving employees or their representatives wherever possible.",
];

export const hsePolicyClosing: string[] = [
  "The co-operation of all employees is essential to enable the company to fulfil its legal obligations and responsibilities. Implementation of this policy is the responsibility of Directors, Managers and Supervisors. It is the company's continuing aim to promote and maintain a high standard of safety to minimize personal injuries and to safeguard the health and safety of employees and the public.",
  "An annual safety review monitors the effectiveness of the company policy to ensure that general procedures and policies are implemented and maintained. Responsibility for implementing this policy lies with individual Directors and management, who are responsible for ensuring compliance within their own area of control.",
];

export const orgChart = {
  ceo: "C.E.O",
  reportsToCeo: ["GM / Manager Projects"],
  underGm: ["Secretary"],
  departments: [
    { name: "HSE", roles: [] },
    { name: "Civil Engineer", roles: ["Supervisor", "Technical Staff", "Team"] },
    { name: "Mechanical Engineer", roles: ["Supervisor", "Technical Staff", "Team"] },
    { name: "Electrical Engineer", roles: ["Supervisor", "Technical Staff", "Team"] },
    { name: "QA/QC", roles: [] },
  ],
};

export const certifications = [
  {
    name: "Zakat, Tax and Customs Authority Certificate",
    description: "Certifies RSS Contracting Co. as a taxpayer in good standing with GAZT for its tax obligations.",
    image: "/images/certificate-zakat-tax.png",
  },
  {
    name: "VAT Registration Certificate",
    description: "VAT Registration No. 311294803800003, effective 1 July 2022, registered with the General Authority of Zakat & Tax.",
    image: "/images/certificate-vat-registration-1.png",
  },
  {
    name: "Company Registration Certificate",
    description: "Ministry of Commerce Commercial Registration No. 1010799326, registered in Riyadh as a 100% foreign-owned limited liability company, CR No. 1010799326.",
    image: "/images/certificate-company-registration.png",
  },
];

export const tradingCatalog = {
  contractorCompressors: [
    "Belt Driven",
    "Electric Belt Driven",
    "Gas Belt Driven",
    "Oil-Less Direct Driven",
    "Oil-Lube Direct Driven",
  ],
  heavyDutyCompressors: [
    "Base Mounted",
    "Duplex",
    "Gas Base Mounted",
    "Gas Tank Mounted",
    "Silent",
    "Simplex Horizontal Tank",
  ],
  tradingItems: [
    "Cold Rooms",
    "Sandwich Panels",
    "Doors, Package Units",
    "Supermarkets & Freezer Compressors",
    "Condensers & Evaporator Units",
    "Air Compressors",
    "Motor Control Panels",
    "Electro-Mechanical Equipment",
  ],
  maintenanceItems: [
    "Chillers",
    "Cold Storage Rooms",
    "Compressor Overhauling",
    "Package Units",
    "TVR System",
    "VRV System",
  ],
};
