import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const { default: Content } = await import(`@/content/${slug}.mdx`);

  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  const { data } = matter(fs.readFileSync(filePath, "utf8"));

  return (
    <div className="max-w-full md:max-w-3xl mx-auto px-4 md:px-0">
      <div
        className="prose prose-base md:prose md:prose-md lg:prose-lg leading-relaxed
        prose-headings:mt-6 md:prose-headings:mt-8 prose-headings:font-bold prose-headings:text-black 
        prose-p:my-4 md:prose-p:my-5 prose-li:my-1"
      >
        <h1>{data.title}</h1>
        {data.banner && (
          <Image
            src={data.banner}
            alt={data.title}
            priority
            className="rounded-xl"
            width={1200}
            height={600}
          />
        )}
        <Content />
      </div>
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
      images: [
        {
          url: data.banner,
          width: 1200,
          height: 600,
          alt: data.title,
        },
      ],
      publishedTime: data.date,
      modifiedTime: data.lastUpdated,
    },
  };
}
