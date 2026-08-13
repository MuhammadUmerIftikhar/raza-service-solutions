import { Plane, UtensilsCrossed, Server, Fuel, ShieldCheck, Cog, Droplet, Building, Truck } from "lucide-react";
import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "aviation-airports",
    name: "Aviation & Airports",
    icon: Plane,
    description:
      "PEB erection, civil works and infrastructure delivered inside live airport environments, including King Fahad International Airport and KAIA Jeddah.",
    relatedServiceSlugs: ["civil-construction", "plumbing-fire-fighting", "engineering-design-detailing"],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage Processing",
    icon: UtensilsCrossed,
    description:
      "Cold rooms, HVAC and air compressor systems for dairy, poultry, milling and packaging facilities across the Kingdom.",
    relatedServiceSlugs: ["cold-rooms-cold-storage", "air-compressors", "compressor-overhauling", "floor-epoxy-coatings"],
  },
  {
    slug: "telecom-data-centers",
    name: "Telecom & Data Centers",
    icon: Server,
    description:
      "Nationwide compressor overhauling and cooling plant maintenance for mission-critical data center infrastructure since 2010.",
    relatedServiceSlugs: ["compressor-overhauling", "hvac-systems", "chillers"],
  },
  {
    slug: "oil-gas-petrochemical",
    name: "Oil, Gas & Petrochemical",
    icon: Fuel,
    description:
      "LSTK process piping, storage tanks and vessels, and plant maintenance for oil, gas, petrochemical and fertilizer facilities.",
    relatedServiceSlugs: ["process-piping-fabrication", "storage-tanks-vessels"],
  },
  {
    slug: "government-military",
    name: "Government & Military",
    icon: ShieldCheck,
    description:
      "HVAC, electrical and civil works delivered for government authorities and military installations, including Prince Sultan Air Base.",
    relatedServiceSlugs: ["hvac-systems", "electrical-systems", "civil-construction"],
  },
  {
    slug: "manufacturing-industrial",
    name: "Manufacturing & Industrial",
    icon: Cog,
    description:
      "PEB buildings, steel structures, epoxy flooring and compressed air systems for factories and industrial plants.",
    relatedServiceSlugs: ["civil-construction", "air-compressors", "floor-epoxy-coatings", "process-piping-fabrication"],
  },
  {
    slug: "water-utilities",
    name: "Water & Utilities",
    icon: Droplet,
    description:
      "Chilled water piping, VRF retrofits and housing compound HVAC delivered for national water and utility corporations.",
    relatedServiceSlugs: ["chilled-water-piping", "vrf-vrv-systems", "hvac-systems"],
  },
  {
    slug: "hospitality-real-estate",
    name: "Hospitality & Real Estate",
    icon: Building,
    description:
      "Chiller, VRF and MEP works for hotel and residential portfolios, sized for occupied-building retrofit programs.",
    relatedServiceSlugs: ["chillers", "vrf-vrv-systems", "electrical-systems"],
  },
  {
    slug: "cold-chain-logistics",
    name: "Cold Chain & Logistics",
    icon: Truck,
    description:
      "Warehouse-scale cold storage and racking-ready cold rooms for dairy, hydroponic and general cold-chain logistics clients.",
    relatedServiceSlugs: ["cold-rooms-cold-storage"],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
