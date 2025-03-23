import React from "react";
import fs from "fs";
import path from "path";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <div
      className="py-6 sm:py-8 md:py-10 px-4 md:px-0 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto 
      prose prose-base sm:prose md:prose-md lg:prose-lg leading-relaxed
      prose-headings:mt-6 sm:prose-headings:mt-8 prose-headings:font-bold prose-headings:text-black 
      prose-h1:font-extrabold 
      prose-p:my-4 sm:prose-p:my-5 prose-li:my-1
      prose-h1:text-3xl sm:prose-h1:text-4xl md:prose-h1:text-5xl 
      prose-h2:text-2xl sm:prose-h2:text-3xl md:prose-h2:text-4xl 
      prose-h3:text-xl sm:prose-h3:text-2xl md:prose-h3:text-3xl 
      prose-h4:text-lg sm:prose-h4:text-xl md:prose-h4:text-2xl 
      prose-h5:text-base sm:prose-h5:text-lg md:prose-h5:text-xl 
      prose-h6:text-sm sm:prose-h6:text-base md:prose-h6:text-lg"
    >
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");

  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export const dynamicParams = false;
