import type { Metadata } from "next";
import PricingHero from "@/components/pricing/pricing-hero";
import PricingFeatures from "@/components/pricing/pricing-features";
import PricingStats from "@/components/pricing/pricing-stats";
import FAQ from "@/components/homepage/faq";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Barbershop Management Software Pricing",
  description:
    "Simple, transparent pricing for barbershops and salons. Service records, staff commissions, M-Pesa payments, and customer loyalty — starting at KES 2,999/month.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <main id="main-content">
        <PricingHero />
        <PricingFeatures />
        <PricingStats />
        <div className="pricing-faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
