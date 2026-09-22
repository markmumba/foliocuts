import type { Metadata } from "next";
import ContactForm from "@/components/contact/contact-form";
import ContactCta from "@/components/contact/contact-cta";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Book a Barbershop Software Demo",
  description:
    "Book a free demo or get in touch. See how FolioCuts can simplify your barbershop operations — payments, commissions, loyalty, all in one place.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <main id="main-content">
        <ContactForm />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
