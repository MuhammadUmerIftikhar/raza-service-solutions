import type { BlogPost } from "@/types";

// No articles have been published yet. This array is the single source of
// truth for /blog and /blog/[slug]. Add posts here and both routes,
// metadata and the sitemap pick them up automatically.
export const blogPosts: BlogPost[] = [];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
