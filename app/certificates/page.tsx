import type { Metadata } from "next";
import { Award, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PreviewableImage } from "@/components/ui/PreviewableImage";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import {
  certifications,
  hsePolicyClosing,
  hsePolicyIntro,
  hsePolicyPoints,
  qualityPolicy,
} from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Certifications, Quality Policy & HSE Policy",
  description:
    "RSS Contracting Co. is a registered, VAT-compliant entity in the Kingdom of Saudi Arabia, operating under a documented Quality Policy and HSE Policy across every project.",
  path: "/certificates",
  keywords: ["RSS certifications", "quality policy contractor Saudi Arabia", "HSE policy KSA contractor"],
});

export default function CertificatesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Certificates", path: "/certificates" },
        ])}
      />
      <PageHero
        eyebrow="Compliance & Assurance"
        title="Certifications, Quality Policy & HSE Policy"
        description="RSS operates as a fully registered entity in the Kingdom of Saudi Arabia, with documented quality and safety policies applied to every project."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Certificates", path: "/certificates" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Registration" title="Certifications" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-2xl border border-navy-100 bg-white p-6">
                <PreviewableImage src={cert.image} label={cert.name} aspect="aspect-[4/5]" />
                <h3 className="mt-4 text-sm font-semibold text-navy-950">{cert.name}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
              <Award className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-navy-950">Quality Policy</h2>
            <div className="mt-5 space-y-4">
              {qualityPolicy.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-6 text-navy-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
              <ShieldCheck className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-navy-950">HSE Policy</h2>
            <div className="mt-5 space-y-4">
              {hsePolicyIntro.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-6 text-navy-700">
                  {paragraph}
                </p>
              ))}
              <ul className="space-y-2.5">
                {hsePolicyPoints.map((point) => (
                  <li key={point} className="rounded-xl bg-white px-4 py-3 text-sm leading-6 text-navy-700">
                    {point}
                  </li>
                ))}
              </ul>
              {hsePolicyClosing.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-6 text-navy-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
