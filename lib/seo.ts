import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  imageLabel?: string;
  noIndex?: boolean;
};

/**
 * Single helper for per-page metadata so title templates, canonicals and
 * OG/Twitter fields stay consistent across every route.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  noIndex,
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_SA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
