"use client";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import type { Easing } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Scissors,
  Sprout,
  Store,
} from "lucide-react";
import { registerUrl } from "@/lib/links";

const ease: Easing = [0.23, 1, 0.32, 1];

const plans = [
  {
    name: "Basic",
    monthly: 2500,
    yearly: 2000,
    description: "A little structure for your growing shop.",
    icon: Scissors,
    includes: [
      "Up to 5 staff members",
      "Digital service records",
      "Staff commission tracking",
      "Customer visit history",
      "Business overview dashboard",
    ],
  },
  {
    name: "Pro",
    monthly: 4500,
    yearly: 3600,
    description: "More room for a busy team to thrive.",
    icon: Sprout,
    lime: true,
    includes: [
      "Up to 15 staff members",
      "Everything in Basic",
      "M-Pesa payment integration",
      "Customer loyalty rewards",
      "Staff performance analytics",
      "Revenue breakdown (M-Pesa vs cash)",
    ],
  },
  {
    name: "Enterprise",
    monthly: 7500,
    yearly: 6000,
    description: "For bigger teams with bigger plans.",
    icon: Store,
    includes: [
      "16+ staff members",
      "Everything in Pro",
      "Advanced business analytics",
      "Custom commission rules",
      "Dedicated onboarding support",
      "Priority customer support",
    ],
  },
];

function formatPrice(amount: number) {
  return amount.toLocaleString("en-KE");
}

export default function PricingHero() {
  const [yearly, setYearly] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section className="pricing-page-hero" aria-labelledby="pricing-page-title">
      <div className="container">
        {/* Copy */}
        <motion.div
          className="pricing-page-copy"
          initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.55, ease }}
        >
          <h1 id="pricing-page-title">Pricing Plan</h1>
          <p className="hero-description">
            Simple, transparent pricing for barbershops and salons.
            <br />
            Every plan starts with a free trial — no payment details required.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          className="billing-toggle"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease, delay: 0.15 }}
        >
          <span className={!yearly ? "active" : ""}>Billed monthly</span>
          <button
            className={`toggle-track ${yearly ? "toggle-on" : ""}`}
            onClick={() => setYearly(!yearly)}
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
          >
            <span className="toggle-thumb" />
          </button>
          <span className={yearly ? "active" : ""}>
            Billed yearly
          </span>
          {yearly && <span className="save-badge">Save up to 20%</span>}
        </motion.div>

        {/* Plan cards — compact */}
        <motion.div
          className="pricing-page-grid"
          initial={reduce ? false : { opacity: 0, transform: "translateY(28px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-page-card ${"lime" in plan && plan.lime ? "pricing-page-lime" : ""}`}
            >
              <div className="pricing-page-card-top">
                <span className="pricing-page-icon">
                  <plan.icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </div>
              </div>

              <div className="pricing-page-price">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={yearly ? "y" : "m"}
                    className="price-value"
                    initial={{ opacity: 0, transform: "translateY(6px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "translateY(-6px)" }}
                    transition={{ duration: 0.2, ease }}
                  >
                    <small>KES</small>
                    {formatPrice(yearly ? plan.yearly : plan.monthly)}
                  </motion.span>
                </AnimatePresence>
                <span className="price-detail">
                  / per shop<br />/ per month
                </span>
              </div>

              <a
                href={registerUrl}
                className="button button-card"
                aria-label={`Get started with ${plan.name}`}
              >
                Get Started
              </a>
            </article>
          ))}
        </motion.div>

        {/* Includes section — below cards */}
        <motion.div
          className="pricing-includes-grid"
          initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.5, ease, delay: 0.35 }}
        >
          {plans.map((plan) => (
            <div key={plan.name} className="pricing-includes-col">
              <p className="includes-label">Includes :</p>
              <ul>
                {plan.includes.map((item) => (
                  <li key={item}>
                    <Check size={14} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
