import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import type { ServiceCategory } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Our Services: Civil, MEP, HVAC & Industrial Contracting",
  description:
    "Explore RSS's full range of contracting services in Saudi Arabia: engineering design, civil construction, process piping, HVAC, electrical, cold storage, air compressors and more.",
  path: "/services",
  keywords: ["contracting services Saudi Arabia", "MEP services KSA", "HVAC services Riyadh"],
});

const categoryOrder: ServiceCategory[] = [
  "Engineering & Design",
  "Civil",
  "Industrial & Mechanical",
  "HVAC",
  "Electrical",
  "Plumbing & Fire Fighting",
  "Cold Storage",
  "Air Compressors",
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Our Services"
        title="Fourteen contracting disciplines, delivered by one team"
        description="From engineering design and civil construction through HVAC, electrical, cold storage and air compressor trading, every RSS service is backed by in-house engineers and QA/QC-controlled site execution."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="space-y-16">
          {categoryOrder.map((category) => {
            const categoryServices = services.filter((s) => s.category === category);
            if (categoryServices.length === 0) return null;
            return (
              <div key={category} id={category.toLowerCase().replace(/[^a-z]+/g, "-")}>
                <SectionHeading eyebrow="Category" title={category} />
                <StaggerGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryServices.map((service) => (
                    <StaggerItem key={service.slug}>
                      <ServiceCard service={service} />
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            );
          })}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
