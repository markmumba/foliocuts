import type { Metadata } from "next";
import Hero from "@/components/homepage/hero";
import Introduction from "@/components/homepage/introduction";
import Features from "@/components/homepage/features";
import HowItWorks from "@/components/homepage/how-it-works";
import Pricing from "@/components/homepage/pricing";
import FAQ from "@/components/homepage/faq";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Barbershop Management Software in Kenya",
  description:
    "Run your barbershop or salon with FolioCuts. Record cash and M-Pesa payments, calculate staff commissions, manage customer visits, and reward loyal clients.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <Introduction />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
