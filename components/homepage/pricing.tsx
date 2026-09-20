"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Scissors, Sprout, Store } from "lucide-react";
import { registerUrl } from "@/lib/links";
import { ease, fadeUp, staggerContainer } from "@/components/ui/reveal";

// Preserve the existing landing page's advertised monthly pricing.
const plans = [
  {
    name: "Basic",
    price: "2,500",
    description: "A little structure for your growing shop.",
    icon: Scissors,
    features: [
      "Up to 5 staff members",
      "Digital service records",
      "Staff commission tracking",
      "Customer visit history",
      "Business overview",
    ],
  },
  {
    name: "Pro",
    price: "4,500",
    description: "More room for a busy team to thrive.",
    icon: Sprout,
    features: [
      "Up to 15 staff members",
      "Everything in Basic",
      "M-Pesa payment integration",
      "Customer loyalty rewards",
      "Staff performance analytics",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "7,500",
    description: "For bigger teams with bigger plans.",
    icon: Store,
    features: [
      "16+ staff members",
      "Everything in Pro",
      "Advanced business analytics",
      "Custom commission rules",
      "Dedicated onboarding",
    ],
  },
];

export default function Pricing() {
  const reduce = useReducedMotion();
  return (
    <section
      id="pricing"
      className="pricing-section"
      aria-labelledby="pricing-title"
    >
      <div className="container">
        <motion.div
          className="section-heading heading-row"
          initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease }}
        >
          <div>
            <p className="eyebrow">A PLAN FOR YOUR NEXT CHAPTER</p>
            <h2 id="pricing-title">
              Small shop. Big ambitions.
              <br />
              There&apos;s a place for you here.
            </h2>
          </div>
          <div className="billing-note">
            <span>Simple monthly pricing</span>
            <small>In Kenyan shillings. Per shop.</small>
          </div>
        </motion.div>

        <motion.div
          className="pricing-grid"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer(0.1)}
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              className={`plan-card ${plan.featured ? "plan-featured" : ""}`}
              variants={fadeUp}
            >
              <div className="plan-top">
                <span className="plan-icon">
                  <plan.icon size={20} aria-hidden="true" />
                </span>
                {plan.featured && (
                  <span className="plan-tag">FOR GROWING TEAMS</span>
                )}
              </div>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price">
                <span>KES</span>
                <strong>{plan.price}</strong>
                <span>/ month</span>
              </div>
              <a
                href={registerUrl}
                className={`button ${plan.featured ? "button-lime" : "button-outline"}`}
                aria-label={`Start a free trial with ${plan.name}`}
              >
                Start free trial <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <div className="plan-features">
                <p>What&apos;s included</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="pricing-footnote">
          Find your fit during your free trial. Choose your plan when you
          register.
        </p>
      </div>
    </section>
  );
}
