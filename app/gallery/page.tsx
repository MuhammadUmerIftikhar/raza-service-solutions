import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PreviewableImage } from "@/components/ui/PreviewableImage";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";

export const metadata: Metadata = buildMetadata({
  title: "Project Gallery: Site Photos from RSS Contracting",
  description:
    "Browse photos from RSS civil, MEP, HVAC, cold storage and industrial projects delivered across Saudi Arabia.",
  path: "/gallery",
  keywords: ["RSS contracting gallery", "construction site photos Saudi Arabia"],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        eyebrow="Gallery"
        title="A look at RSS projects on site"
        description="Site photography grouped by project, from pre-engineered building erection to cold storage and compressor overhauling works."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="space-y-16">
          {projects.map((project) => {
            // The hero photo is often reused as one of the gallery shots
            // (useful on the project detail page), so dedupe by image path
            // here to avoid showing the same photo twice in one grid.
            const seen = new Set<string>();
            const tiles: { key: string; label: string; image?: string }[] = [];

            if (project.heroImage) seen.add(project.heroImage);
            tiles.push({ key: "hero", label: project.imageLabel, image: project.heroImage });

            project.gallery.forEach((item, index) => {
              if (item.image) {
                if (seen.has(item.image)) return;
                seen.add(item.image);
              }
              tiles.push({ key: `${project.slug}-${index}`, label: item.label, image: item.image });
            });

            return (
              <div key={project.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-lg font-semibold text-navy-950">{project.title}</h2>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-semibold text-gold-600 hover:text-gold-700"
                  >
                    View project →
                  </Link>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {tiles.map((tile) =>
                    tile.image ? (
                      <PreviewableImage key={tile.key} src={tile.image} label={tile.label} aspect="aspect-square" />
                    ) : (
                      <ImagePlaceholder key={tile.key} label={tile.label} variant="navy" aspect="aspect-square" />
                    )
                  )}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
