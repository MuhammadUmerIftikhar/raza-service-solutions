import type { Metadata } from "next";
import { Compass, Target } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { OrgChart } from "@/components/sections/OrgChart";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CoreValueCard } from "@/components/sections/CoreValueCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { aboutParagraphs, ceoMessage, coreValues, mission, vision } from "@/data/company";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About RSS Contracting: Our Company, Mission & Vision",
  description:
    "Learn about Raza Service Solutions (RSS): a 100% foreign investment contracting company backed by three decades of Civil, MEP and Industrial experience, now serving Saudi Arabia.",
  path: "/about",
  keywords: ["about RSS contracting", "Saudi Arabia contracting company", "MEP company profile KSA"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About RSS"
        title="A 100% foreign investment contracting company built on three decades of experience"
        description="Raza Service Solutions (RSS) brings a legacy of Civil, MEP and Industrial contracting expertise to the Kingdom of Saudi Arabia, aligned with Vision 2030."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Our Story" title="About Us" />
            <div className="mt-6 space-y-5">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-navy-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <SectionHeading eyebrow="Leadership" title="A Message from Our CEO" className="mt-16" />
            <div className="mt-6 space-y-5">
              {ceoMessage.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-navy-700">
                  {paragraph}
                </p>
              ))}
              <p className="pt-2 text-sm font-semibold uppercase tracking-wide text-navy-950">
                {COMPANY.ceo}, Chief Executive Officer
              </p>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <ImagePlaceholder
              label="Construction growth in Saudi Arabia, aligned with Vision 2030"
              src="/images/about-growth-skyline.png"
              aspect="aspect-[4/3]"
              variant="gold"
            />
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">
                Company Snapshot
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-navy-500">Legal name</dt>
                  <dd className="text-right font-medium text-navy-900">{COMPANY.legalName}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-navy-500">CR Number</dt>
                  <dd className="font-medium text-navy-900">{COMPANY.crNumber}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-navy-500">VAT Number</dt>
                  <dd className="font-medium text-navy-900">{COMPANY.vatNumber}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-navy-500">Ownership</dt>
                  <dd className="text-right font-medium text-navy-900">100% Foreign Investment</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-navy-500">Head Office</dt>
                  <dd className="text-right font-medium text-navy-900">Riyadh, KSA</dd>
                </div>
              </dl>
            </div>
          </aside>
        </Container>
      </section>

      <section id="mission-vision" className="bg-navy-50 py-20 sm:py-24 scroll-mt-24">
        <Container>
          <SectionHeading eyebrow="Mission & Vision" title="What drives RSS forward" align="center" />
          <StaggerGroup className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            <StaggerItem>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Target className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-950">Our Mission</h3>
                <p className="mt-3 text-sm leading-6 text-navy-600">{mission}</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Compass className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-950">Our Vision</h3>
                <p className="mt-3 text-sm leading-6 text-navy-600">{vision}</p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our Culture" title="Core Values" align="center" />
          <StaggerGroup className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <StaggerItem key={value.title}>
                <CoreValueCard title={value.title} icon={value.icon} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Structure"
            title="Organization Chart"
            description="A dedicated team across HSE, Civil, Mechanical, Electrical and QA/QC, each led by supervisors and technical staff on the ground."
            align="center"
          />
          <div className="mt-12">
            <OrgChart />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
