import { MetadataRoute } from "next";
import { getBlogPosts } from "@/app/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts();

  const staticPages = [
    {
      url: "https://www.entre-pawtes.fr",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://www.entre-pawtes.fr/qui-suis-je",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://www.entre-pawtes.fr/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `https://www.entre-pawtes.fr/blog/${post.slug}`,
    lastModified: new Date(post.lastUpdated || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
