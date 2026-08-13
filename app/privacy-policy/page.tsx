import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { COMPANY, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses and protects information submitted through this website.`,
  path: "/privacy-policy",
  noIndex: false,
});

const sections = [
  {
    title: "Information We Collect",
    body: "When you submit our contact form or email us directly, we collect the information you choose to provide, such as your name, company, email address, phone number and project details. We do not require account registration or collect payment information through this website.",
  },
  {
    title: "How We Use Your Information",
    body: "Information submitted through our contact form is used solely to respond to your enquiry, prepare quotations, and communicate about your project. We do not sell, rent or trade your personal information to third parties.",
  },
  {
    title: "Cookies & Analytics",
    body: "This website does not currently set marketing or tracking cookies. Should we introduce analytics tools in the future, this policy will be updated to describe what is collected and how it is used.",
  },
  {
    title: "Data Retention",
    body: "Enquiry information is retained only for as long as necessary to respond to your request and maintain business records, in line with standard commercial practice in the Kingdom of Saudi Arabia.",
  },
  {
    title: "Your Rights",
    body: "You may request that we correct or delete personal information you have submitted to us by contacting us using the details below.",
  },
  {
    title: "Contact Us",
    body: `For any questions about this Privacy Policy, contact ${COMPANY.legalName} at ${COMPANY.email} or ${COMPANY.phone}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: 2026. This policy explains how we handle information submitted through this website."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-navy-950">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-navy-600">{section.body}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
