import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve: Aviation, Oil & Gas, Food & Beverage and More",
  description:
    "RSS delivers sector-specific contracting solutions across aviation, oil & gas, food & beverage, telecom, government, manufacturing, water utilities, hospitality and cold chain logistics.",
  path: "/industries",
  keywords: ["industries served Saudi Arabia contractor", "sector specific MEP contractor KSA"],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <PageHero
        eyebrow="Who We Serve"
        title="Industries we deliver for across Saudi Arabia"
        description="Every sector has different compliance, access and uptime requirements. Our teams bring proven, sector-specific delivery experience to each one."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industries.map((industry) => {
              const relatedServices = industry.relatedServiceSlugs
                .map((slug) => getServiceBySlug(slug))
                .filter((s): s is NonNullable<typeof s> => Boolean(s));

              return (
                <StaggerItem key={industry.slug}>
                  <div id={industry.slug} className="scroll-mt-24 rounded-2xl border border-navy-100 bg-white p-8">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                      <industry.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h2 className="mt-5 text-xl font-semibold text-navy-950">{industry.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-navy-600">{industry.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {relatedServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-700 hover:bg-gold-50 hover:text-gold-700"
                        >
                          {service.name}
                          <ArrowRight className="h-3 w-3" aria-hidden />
                        </Link>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
