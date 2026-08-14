import type { Metadata } from "next";
import { Mail, Send, Users2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CoreValueCard } from "@/components/sections/CoreValueCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { coreValues } from "@/data/company";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Careers at RSS Contracting",
  description:
    "Join RSS Contracting's multidisciplinary team of engineers, technicians and site staff delivering civil, MEP and industrial projects across Saudi Arabia.",
  path: "/careers",
  keywords: ["RSS contracting careers", "jobs Saudi Arabia contracting company"],
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
      <PageHero
        eyebrow="Careers"
        title="Build the Kingdom's infrastructure with RSS"
        description="We're a multinational, multidisciplinary team of engineers, technicians and site staff. If you want to work on real civil, MEP and industrial projects, we'd like to hear from you."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ImagePlaceholder
              label="Tools and PPE ready for a site crew"
              src="/images/careers-tools.png"
              aspect="aspect-[16/9]"
              variant="gold"
              className="mb-12"
            />
            <SectionHeading eyebrow="Our Culture" title="What it's like to work at RSS" />
            <p className="mt-6 text-base leading-7 text-navy-700">
              RSS employs qualified and experienced managers, engineers and a
              skilled multinational workforce across civil, mechanical and
              electrical disciplines. Our management maintains a strong
              commitment to continually enhancing the capabilities of our
              people: the same commitment that has driven our growth as we
              expand into the Kingdom of Saudi Arabia.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              {coreValues.map((value) => (
                <CoreValueCard key={value.title} title={value.title} icon={value.icon} />
              ))}
            </div>

            <SectionHeading eyebrow="Open Positions" title="Current openings" className="mt-16" />
            <div className="mt-6 rounded-2xl border border-dashed border-navy-200 bg-navy-50 p-8 text-center">
              <Users2 className="mx-auto h-8 w-8 text-navy-400" aria-hidden />
              <p className="mt-3 text-sm font-medium text-navy-700">
                We don&apos;t have any open positions listed right now.
              </p>
              <p className="mt-1 text-sm text-navy-500">
                We&apos;re always glad to hear from experienced civil,
                mechanical and electrical engineers, supervisors and
                technicians. Submit your CV below and we&apos;ll keep it on
                file for future openings.
              </p>
            </div>
          </div>

          <aside>
            <div className="rounded-2xl border border-navy-100 bg-navy-950 p-8 text-white">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400 text-navy-950">
                <Send className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Submit your CV</h3>
              <p className="mt-2 text-sm leading-6 text-navy-200">
                Email your CV and the discipline you specialize in (civil,
                mechanical, electrical, HVAC or QA/QC) and our team will
                reach out when a matching role opens.
              </p>
              <Button
                href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(
                  "Career Application: RSS Contracting"
                )}`}
                variant="primary"
                className="mt-6 w-full"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Email {COMPANY.email}
              </Button>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
