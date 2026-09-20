import Hero from "@/components/homepage/hero";
import Introduction from "@/components/homepage/introduction";
import Features from "@/components/homepage/features";
import HowItWorks from "@/components/homepage/how-it-works";
import Pricing from "@/components/homepage/pricing";
import FAQ from "@/components/homepage/faq";
import Footer from "@/components/homepage/footer";

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
