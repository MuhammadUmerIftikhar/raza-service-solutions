import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact RSS Contracting: Request a Quote",
  description:
    "Get in touch with RSS Contracting Co. in Riyadh, Saudi Arabia for civil, MEP, HVAC and industrial contracting enquiries.",
  path: "/contact",
  keywords: ["contact RSS contracting", "request quote MEP contractor Riyadh"],
});

const contactDetails = [
  { icon: MapPin, label: "Office Address", value: COMPANY.fullAddress },
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: Mail, label: "Email", value: COMPANY.email, href: COMPANY.emailHref },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about your next project"
        description="Share your site and scope details and our engineering team will respond with a tailored proposal."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Send an Enquiry" title="Request a Quote" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">
                Contact Details
              </h3>
              <ul className="mt-4 space-y-4">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <detail.icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-navy-400">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a href={detail.href} className="text-sm font-medium text-navy-900 hover:text-gold-600">
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-navy-900">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder label="RSS Contracting head office, Jarir District, Riyadh" variant="navy" aspect="aspect-square" />
          </aside>
        </Container>
      </section>
    </>
  );
}
