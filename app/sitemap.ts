import type { MetadataRoute } from "next";
import { sanityClient } from "@/sanity/lib/client";
import { BLOG_SITEMAP_QUERY } from "@/sanity/lib/queries";
import type { BLOG_SITEMAP_QUERY_RESULT } from "@/sanity.types";

const siteUrl = "https://foliocuts.markian.fit";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await sanityClient.fetch<BLOG_SITEMAP_QUERY_RESULT>(BLOG_SITEMAP_QUERY, {}, {
    next: { revalidate: 3600 },
  });
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/features", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/blogs", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return [
    ...pages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: new Date("2026-09-21"),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
