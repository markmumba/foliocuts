import type { Metadata } from "next";
import FeaturesHero from "@/components/features/features-hero";
import FeatureDeepGrid from "@/components/features/feature-deep-grid";
import FeatureSpotlights from "@/components/features/feature-spotlights";
import FAQ from "@/components/homepage/faq";
import Footer from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "Features — FolioCuts",
  description:
    "Service records, staff commissions, M-Pesa payments, and customer loyalty — all in one place. Built for Kenyan barbershops.",
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
