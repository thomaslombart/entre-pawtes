import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "../lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Entre Pawtes",
  description:
    "Découvrez mes articles sur l'éducation et le comportement canin",
  openGraph: {
    title: "Blog | Entre Pawtes",
    description:
      "Découvrez mes articles sur l'éducation et le comportement canin",
    url: "https://www.entre-pawtes.fr/blog",
    images: [
      {
        url: "https://www.entre-pawtes.fr/images/banner.png",
        width: 1500,
        height: 1000,
      },
    ],
  },
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl md:text-5xl font-black mb-4 md:mb-8 text-primary">
        Les articles d&apos;Entre Pawtes
      </h1>

      <Image
        src="/images/banner.png"
        alt=""
        width={500}
        height={500}
        className="rounded-lg w-full h-32 md:h-40 md:h-48 object-cover mb-8 md:mb-12 md:mb-16"
      />

      <div className="space-y-8 md:space-y-12">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="pb-8 md:pb-12 border-b border-gray-200 last:border-b-0"
          >
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-xl md:text-2xl font-bold text-black group-hover:underline mb-2 md:mb-3">
                {post.title}
              </h2>
              {post.description && (
                <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-md md:text-base">
                  {post.description}
                </p>
              )}
              <p className="text-gray-600 mt-2 text-md md:text-base">
                {post.date
                  ? new Date(post.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "Date non disponible"}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
