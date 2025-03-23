import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const { default: Content } = await import(`@/content/${slug}.mdx`);

  return (
    <div
      className="py-6 md:py-8 md:py-10 px-4 md:px-0 max-w-full md:max-w-2xl md:max-w-3xl mx-auto 
      prose prose-base md:prose md:prose-md lg:prose-lg leading-relaxed
      prose-headings:mt-6 md:prose-headings:mt-8 prose-headings:font-bold prose-headings:text-black 
      prose-h1:font-extrabold 
      prose-p:my-4 md:prose-p:my-5 prose-li:my-1
      prose-h1:text-3xl md:prose-h1:text-4xl md:prose-h1:text-5xl 
      prose-h2:text-2xl md:prose-h2:text-3xl md:prose-h2:text-4xl 
      prose-h3:text-xl md:prose-h3:text-2xl md:prose-h3:text-3xl 
      prose-h4:text-lg md:prose-h4:text-xl md:prose-h4:text-2xl 
      prose-h5:text-base md:prose-h5:text-lg md:prose-h5:text-xl 
      prose-h6:text-md md:prose-h6:text-base md:prose-h6:text-lg"
    >
      <Content />
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

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  const { data } = matter(fs.readFileSync(filePath, "utf8"));

  return {
    title: `${data.title} | Entre Pawtes`,
    description: data.description,
    openGraph: {
      title: `${data.title} | Entre Pawtes`,
      description: data.description,
      url: `https://www.entre-pawtes.fr/blog/${slug}`,
      type: "article",
      publishedTime: data.date,
      modifiedTime: data.lastUpdated,
    },
  };
}
