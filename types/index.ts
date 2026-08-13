import type { LucideIcon } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceCategory =
  | "Engineering & Design"
  | "Civil"
  | "Industrial & Mechanical"
  | "HVAC"
  | "Electrical"
  | "Plumbing & Fire Fighting"
  | "Cold Storage"
  | "Air Compressors";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: LucideIcon;
  shortDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  description: string[];
  features: string[];
  applications: string[];
  benefits: string[];
  industries: string[];
  relatedProjectSlugs: string[];
  faqs: FAQItem[];
  heroImage?: string;
  galleryImages?: string[];
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  location: string;
  value?: string;
  area?: string;
  year?: string;
  scope: string[];
  description: string;
  summary: string;
  relatedServiceSlugs: string[];
  imageLabel: string;
  heroImage?: string;
  gallery: { label: string; image?: string }[];
};

export type ClientLogo = {
  name: string;
  logo: string;
};

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  relatedServiceSlugs: string[];
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  content?: string[];
};

export type Stat = {
  label: string;
  value: string;
  suffix?: string;
};
