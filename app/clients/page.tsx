import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ClientLogoWall } from "@/components/sections/ClientLogoWall";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/motion/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { clients } from "@/data/clients";

export const metadata: Metadata = buildMetadata({
  title: "Our Clients: Trusted by Leading Organizations in Saudi Arabia",
  description:
    "RSS Contracting is trusted by 30+ organizations across aviation, food & beverage, telecom, hospitality and industry, including STC, Nestlé, Carrier, Trane and Zamil Air Conditioners.",
  path: "/clients",
  keywords: ["RSS contracting clients", "trusted MEP contractor Saudi Arabia"],
});

export default function ClientsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Clients", path: "/clients" },
        ])}
      />
      <PageHero
        eyebrow="Prestigious Clients"
        title="Trusted by leading organizations across the Kingdom"
        description="From national telecom and utility corporations to global manufacturing and hospitality brands, RSS has earned repeat business through consistent, quality-first delivery."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Clients", path: "/clients" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <FadeIn>
            <ClientLogoWall clients={clients} />
          </FadeIn>
        </Container>
      </section>

      <CTASection
        title="Join our growing list of satisfied clients"
        description="Let's discuss how RSS can support your next civil, MEP or industrial project."
      />
    </>
  );
}
