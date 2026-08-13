import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CheckList } from "@/components/sections/CheckList";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug, services } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.name} in Saudi Arabia`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = service.relatedProjectSlugs
    .map((s) => getProjectBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          serviceSchema(service),
          faqSchema(service.faqs),
        ]}
      />
      <PageHero
        eyebrow={service.category}
        title={service.name}
        description={service.shortDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      >
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-300"
          >
            Request a Quote for {service.name}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="space-y-16 lg:col-span-2">
            <ImagePlaceholder
              label={service.shortDescription}
              src={service.heroImage}
              aspect="aspect-[16/9]"
              variant="gold"
              priority
            />

            <div>
              <SectionHeading eyebrow="Overview" title={`About Our ${service.name} Service`} />
              <div className="mt-6 space-y-4">
                {service.description.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-navy-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Capabilities" title="Key Features" />
              <div className="mt-6">
                <CheckList items={service.features} />
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Where It's Used" title="Applications" />
              <div className="mt-6">
                <CheckList items={service.applications} />
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Impact" title="Benefits" />
              <div className="mt-6">
                <CheckList items={service.benefits} />
              </div>
            </div>

            {service.galleryImages && service.galleryImages.length > 1 && (
              <div>
                <SectionHeading eyebrow="On Site" title="Site Photos" />
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.galleryImages.map((image) => (
                    <ImagePlaceholder
                      key={image}
                      label={`${service.name} site photo`}
                      src={image}
                      variant="navy"
                      aspect="aspect-[4/3]"
                    />
                  ))}
                </div>
              </div>
            )}

            <div>
              <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
              <div className="mt-6">
                <FAQAccordion faqs={service.faqs} />
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">
                Industries Served
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.industries.map((industry) => (
                  <Badge key={industry} tone="navy">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-navy-950 p-6 text-white">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-300">
                Why Choose RSS
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "In-house engineering, civil, mechanical and electrical teams",
                  "QA/QC-controlled site execution with documented handover",
                  "HSE-led safety program on every site",
                  "Trusted by 30+ clients including STC, Nestlé and Carrier",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-navy-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-navy-50 py-20 sm:py-24">
          <Container>
            <FadeIn>
              <SectionHeading
                eyebrow="Proof of Work"
                title="Related Projects"
                description={`Real ${service.name.toLowerCase()} scopes delivered for RSS clients across Saudi Arabia.`}
              />
            </FadeIn>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={`Ready to discuss your ${service.name} project?`}
        description="Share your scope and site details, and our engineering team will respond with a tailored proposal."
      />
    </>
  );
}
