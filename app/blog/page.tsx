import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { BlogPostCard } from "@/components/sections/BlogPostCard";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog: Insights on Civil, MEP & Industrial Contracting in KSA",
  description:
    "Field notes, technical guidance and industry insight from RSS Contracting's engineering and site teams in Saudi Arabia.",
  path: "/blog",
  keywords: ["MEP contracting blog Saudi Arabia", "HVAC insights KSA"],
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Insights"
        title="Field notes from our engineering and site teams"
        description="Technical guidance and project insight on civil, MEP, HVAC and industrial contracting in Saudi Arabia."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container>
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-navy-200 bg-navy-50 p-12 text-center">
              <Newspaper className="mx-auto h-8 w-8 text-navy-400" aria-hidden />
              <h2 className="mt-4 text-lg font-semibold text-navy-900">
                Our first articles are on the way
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-navy-600">
                We&apos;re preparing technical guides and project insight from
                our engineering team. Check back soon, or follow our project
                updates on the Projects page in the meantime.
              </p>
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
