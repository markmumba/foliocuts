import type { Metadata } from "next";
import BlogGrid from "@/components/blog/blog-grid";
import ContactCta from "@/components/contact/contact-cta";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Blog — FolioCuts",
  description:
    "Tips, guides, and insights for running a better barbershop. From commissions to M-Pesa to customer loyalty.",
};

export default function BlogsPage() {
  return (
    <>
      <main id="main-content">
        <BlogGrid />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
