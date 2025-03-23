import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  lastUpdated?: string;
};

export function getBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(contentDir, file);

      const { data } = matter(fs.readFileSync(filePath, "utf8"));

      return {
        slug,
        title:
          data.title ||
          slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
        date: data.date
          ? new Date(data.date).toISOString()
          : new Date().toISOString(),
        lastUpdated: data.lastUpdated
          ? new Date(data.lastUpdated).toISOString()
          : undefined,
        description: data.description,
      };
    });
}
