import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Clock, ShieldCheck, Users } from "lucide-react";
import { HomeHero } from "@/components/sections/HomeHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { IndustryCard } from "@/components/sections/IndustryCard";
import { ClientLogoWall } from "@/components/sections/ClientLogoWall";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { industries } from "@/data/industries";
import { clients } from "@/data/clients";
import { coreValues } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "RSS Contracting: Civil, MEP & Industrial Contractor in Saudi Arabia",
  description:
    "Raza Service Solutions (RSS) delivers civil construction, HVAC, electrical, process piping, cold storage and air compressor solutions for oil & gas, aviation, government and industrial clients across Saudi Arabia.",
  path: "/",
  keywords: [
    "MEP contractor Saudi Arabia",
    "civil construction company Riyadh",
    "HVAC contractor KSA",
    "industrial maintenance Saudi Arabia",
  ],
});

const whyUs = [
  {
    icon: Clock,
    title: "Timely Completion",
    description:
      "Personal job-site assistance and continuous communication keep every schedule on track: a founding pillar of our mission.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-First Execution",
    description:
      "A comprehensive HSE program integrated into our work ethic, so every employee owns the safety of people, equipment and property.",
  },
  {
    icon: Award,
    title: "In-House QA/QC",
    description:
      "Work-specific quality plans developed before mobilization and monitored on site, backed by our internal QA/QC Manual.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description:
      "Qualified managers, engineers and a skilled multinational workforce covering civil, mechanical and electrical disciplines in-house.",
  },
];

export default function Home() {
  const featuredServices = services.slice(0, 8);
  const featuredProjects = projects.filter((p) =>
    ["gaca-airport", "swcc-housing-compound", "stc-data-centers", "warda-al-mashraq-cheese-project"].includes(p.slug)
  );

  return (
    <>
      <HomeHero />

      {/* Services overview */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title="Full-scope contracting, from design to maintenance"
              description="Fourteen service disciplines spanning engineering design, civil construction, industrial mechanical works, HVAC, electrical, cold storage and air compressor trading."
            />
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700"
            >
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-navy-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why RSS"
            title="Built on quality, safety and long-term relationships"
            description="Our mission and core values put client satisfaction, timely delivery and a safe working environment at the center of every project."
            align="center"
          />
          <StaggerGroup className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <item.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy-600">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our Work"
              title="Projects delivered across the Kingdom"
              description="From airport PEB erection to nationwide compressor overhauling contracts: real scopes, real clients, real results."
            />
            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700"
            >
              View all projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-navy-950 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Industries we work in"
            description="Sector-specific delivery experience across aviation, food & beverage, telecom, oil & gas, government and more."
            align="center"
            light
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <IndustryCard industry={industry} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Core values */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <SectionHeading
                eyebrow="Our Culture"
                title="Core values that guide every project"
                description="From speed and quality to boundary-less thinking, these are the values our teams operate by on every site, every day."
              />
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700"
              >
                More about RSS
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {coreValues.map((value) => (
                  <li
                    key={value}
                    className="rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-medium text-navy-800"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Clients */}
      <section className="bg-navy-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Trusted By"
            title="Prestigious clients across the Kingdom"
            align="center"
          />
          <div className="mt-12">
            <ClientLogoWall clients={clients.slice(0, 15)} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/clients" className="text-sm font-semibold text-gold-600 hover:text-gold-700">
              View all clients →
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
