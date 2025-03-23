import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "../lib/blog";

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-black mb-8 text-primary">
        Les articles d&apos;Entre Pawtes
      </h1>

      <Image
        src="/images/banner.png"
        alt=""
        width={500}
        height={500}
        className="rounded-lg w-full h-48 object-cover mb-16"
      />

      <div className="space-y-12">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="pb-12 border-b border-gray-200 last:border-b-0"
          >
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-bold text-black group-hover:underline mb-3">
                {post.title}
              </h2>
              {post.description && (
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.description}
                </p>
              )}
              <p className="text-gray-600 mt-2">
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
