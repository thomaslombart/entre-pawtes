import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getBlogPosts } from "@/app/lib/blog";

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

      <div className="grid gap-6 md:gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <Link href={`/blog/${post.slug}`} className="block p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {post.banner ? (
                  <Image
                    src={post.banner}
                    alt={post.title}
                    width={200}
                    height={200}
                    className="rounded-lg w-full md:w-32 h-48 md:h-32 object-cover flex-shrink-0"
                    priority
                  />
                ) : null}
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold text-black group-hover:text-primary transition-colors mb-2 md:mb-3">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-gray-600 leading-relaxed text-md md:text-base flex-grow">
                      {post.description}
                    </p>
                  )}
                  <p className="text-gray-500 text-sm md:text-base mt-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {post.date
                      ? new Date(post.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "Date non disponible"}
                  </p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
