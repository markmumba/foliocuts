import type { Metadata } from "next";
import FeaturesHero from "@/components/features/features-hero";
import FeatureDeepGrid from "@/components/features/feature-deep-grid";
import FeatureSpotlights from "@/components/features/feature-spotlights";
import FAQ from "@/components/homepage/faq";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Barbershop Management Software Features",
  description:
    "Explore FolioCuts features for Kenyan barbershops and salons: digital service records, automatic staff commissions, M-Pesa payments, customer history, and loyalty rewards.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <main id="main-content">
        <FeaturesHero />
        <FeatureDeepGrid />
        <FeatureSpotlights />
        <div className="features-faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
