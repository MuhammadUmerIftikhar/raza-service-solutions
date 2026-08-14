import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Building2, Calendar, MapPin, Ruler, Wallet } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, projectSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getProjectBySlug, projects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    keywords: [project.title, project.client, project.location],
  });
}

const factItems = (project: NonNullable<ReturnType<typeof getProjectBySlug>>) => [
  { icon: Building2, label: "Client", value: project.client },
  { icon: MapPin, label: "Location", value: project.location },
  ...(project.value ? [{ icon: Wallet, label: "Contract Value", value: project.value }] : []),
  ...(project.area ? [{ icon: Ruler, label: "Area / Scale", value: project.area }] : []),
  ...(project.year ? [{ icon: Calendar, label: "Duration", value: project.year }] : []),
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedServices = project.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // The hero banner above already shows project.heroImage, so drop any
  // gallery entry pointing at that same photo to avoid showing it twice.
  const secondaryGallery = project.gallery.filter(
    (image) => !project.heroImage || image.image !== project.heroImage
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
          projectSchema(project),
        ]}
      />
      <PageHero
        eyebrow="Case Study"
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <ImagePlaceholder
              label={project.imageLabel}
              src={project.heroImage}
              aspect="aspect-[16/9]"
              variant="gold"
              priority
            />

            <div>
              <SectionHeading eyebrow="Project Detail" title="Description" />
              <p className="mt-6 text-base leading-7 text-navy-700">{project.description}</p>
            </div>

            <div>
              <SectionHeading eyebrow="Delivered By RSS" title="Scope of Work" />
              <ul className="mt-6 space-y-3">
                {project.scope.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm leading-6 text-navy-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {secondaryGallery.length > 0 && (
              <div>
                <SectionHeading eyebrow="Site Photos" title="Project Gallery" />
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {secondaryGallery.map((image) => (
                    <ImagePlaceholder
                      key={image.label}
                      label={image.label}
                      src={image.image}
                      variant="navy"
                      aspect="aspect-[4/3]"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">
                Project Facts
              </h3>
              <dl className="mt-4 space-y-4">
                {factItems(project).map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <fact.icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-navy-400">
                        {fact.label}
                      </dt>
                      <dd className="text-sm font-semibold text-navy-900">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </Container>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-navy-50 py-20 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Related" title="Services Used on This Project" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title="Have a similar project in mind?"
        description="Tell us about your site and scope, and we'll respond with a proposal grounded in real delivery experience."
      />
    </>
  );
}
