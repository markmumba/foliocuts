import Hero from "@/components/homepage/hero";
import Features from "@/components/homepage/features";
import HowItWorks from "@/components/homepage/how-it-works";
import Testimonials from "@/components/homepage/testimonials";
import Pricing from "@/components/homepage/pricing";
import Footer from "@/components/homepage/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
