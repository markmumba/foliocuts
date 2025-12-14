"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/homepage/hero";
import Features from "@/components/homepage/features";
import HowItWorks from "@/components/homepage/how-it-works";
import Testimonials from "@/components/homepage/testimonials";
import Pricing from "@/components/homepage/pricing";
import RiskReversal from "@/components/homepage/risk-reversal";
import Comparison from "@/components/homepage/comparison";
import Footer from "@/components/homepage/footer";
import StickyCTA from "@/components/ui/StickyCTA";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";

export default function Home() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    // Exit intent detection - when mouse leaves the top of the viewport
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is moving upward (toward top of screen)
      if (e.clientY <= 0 && !hasShownExitIntent) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };

    // Also detect when user tries to close tab/window
    const handleBeforeUnload = () => {
      if (!hasShownExitIntent) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasShownExitIntent]);

  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <RiskReversal />
      <Comparison />
      <Footer />
      <StickyCTA />
      <ExitIntentPopup
        isOpen={showExitIntent}
        onClose={() => setShowExitIntent(false)}
      />
    </main>
  );
}
