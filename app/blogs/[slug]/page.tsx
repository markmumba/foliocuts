import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "@/components/blog/blog-detail";
import ContactCta from "@/components/contact/contact-cta";
import Footer from "@/components/homepage/footer";
import { sanityClient } from "@/sanity/lib/client";
import {
  BLOG_POST_QUERY,
  BLOG_POST_SLUGS_QUERY,
  RELATED_BLOG_POSTS_QUERY,
} from "@/sanity/lib/queries";
import type {
  BLOG_POST_QUERY_RESULT,
  BLOG_POST_SLUGS_QUERY_RESULT,
  RELATED_BLOG_POSTS_QUERY_RESULT,
} from "@/sanity.types";

export async function generateStaticParams() {
  return sanityClient.fetch<BLOG_POST_SLUGS_QUERY_RESULT>(
    BLOG_POST_SLUGS_QUERY,
    {},
    { cache: "no-store" },
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityClient.fetch<BLOG_POST_QUERY_RESULT>(BLOG_POST_QUERY, { slug }, {
    next: { revalidate: 30 },
  });
  if (!post) return { title: "Article not found" };
  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, related] = await Promise.all([
    sanityClient.fetch<BLOG_POST_QUERY_RESULT>(BLOG_POST_QUERY, { slug }, { next: { revalidate: 30 } }),
    sanityClient.fetch<RELATED_BLOG_POSTS_QUERY_RESULT>(
      RELATED_BLOG_POSTS_QUERY,
      { slug },
      { next: { revalidate: 30 } },
    ),
  ]);
  if (!post) notFound();

  return (
    <>
      <main id="main-content">
        <BlogDetail post={post} related={related} />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
