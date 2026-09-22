import type { Metadata } from "next";
import BlogGrid from "@/components/blog/blog-grid";
import ContactCta from "@/components/contact/contact-cta";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Barbershop Management Guides",
  description:
    "Practical barbershop management guides for owners in Kenya. Learn about staff commissions, M-Pesa payments, customer loyalty, pricing, and shop growth.",
  alternates: { canonical: "/blogs" },
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
