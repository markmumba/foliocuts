import type { Metadata } from "next";
import BlogGrid from "@/components/blog/blog-grid";
import ContactCta from "@/components/contact/contact-cta";
import Footer from "@/components/homepage/footer";
import { sanityClient } from "@/sanity/lib/client";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
import type { BLOG_POSTS_QUERY_RESULT } from "@/sanity.types";

export const metadata: Metadata = {
  title: "Barbershop Management Guides",
  description:
    "Practical barbershop management guides for owners in Kenya. Learn about staff commissions, M-Pesa payments, customer loyalty, pricing, and shop growth.",
  alternates: { canonical: "/blogs" },
};

export default async function BlogsPage() {
  const posts = await sanityClient.fetch<BLOG_POSTS_QUERY_RESULT>(BLOG_POSTS_QUERY, {}, {
    next: { revalidate: 30 },
  });

  return (
    <>
      <main id="main-content">
        <BlogGrid posts={posts} />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
