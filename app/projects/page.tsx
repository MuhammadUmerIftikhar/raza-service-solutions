import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";

export const metadata: Metadata = buildMetadata({
  title: "Our Projects: Civil, MEP & Industrial Case Studies in Saudi Arabia",
  description:
    "Explore RSS project case studies across aviation, oil & gas, food & beverage, telecom and government sectors, from PEB erection to nationwide compressor overhauling contracts.",
  path: "/projects",
  keywords: ["RSS contracting projects", "MEP project case studies Saudi Arabia", "construction projects Riyadh"],
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <PageHero
        eyebrow="Our Work"
        title="Projects delivered across the Kingdom of Saudi Arabia"
        description="From airport PEB erection and industrial boiler commissioning to nationwide compressor overhauling, each project reflects the same QA/QC and HSE standards."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
