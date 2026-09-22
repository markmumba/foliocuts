import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/data/blogs";
import BlogDetail from "@/components/blog/blog-detail";
import ContactCta from "@/components/contact/contact-cta";
import Footer from "@/components/homepage/footer";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

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
