"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing, Variants } from "framer-motion";
import { ArrowUpRight, Scissors, Users, Wallet } from "lucide-react";
import { registerUrl } from "@/lib/links";

const ease: Easing = [0.23, 1, 0.32, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, transform: "translateY(20px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: { duration: 0.45, ease },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  {
    value: "500+",
    label: "Shops onboarded",
    description:
      "Barbershops and salons across Kenya managing their daily operations with FolioCuts.",
    icon: Scissors,
  },
  {
    value: "95%",
    label: "Commission accuracy",
    description:
      "No more end-of-day disputes. Automatic calculation means every barber knows exactly what they earned.",
    icon: Wallet,
  },
  {
    value: "2,000+",
    label: "Active staff",
    description:
      "Barbers, stylists, and receptionists using FolioCuts to track their work and get paid right.",
    icon: Users,
  },
];

export default function PricingStats() {
  const reduce = useReducedMotion();

  return (
    <section className="pricing-stats-section">
      <div className="container">
        <div className="pricing-stats-inner">
          <motion.div
            className="pricing-stats-copy"
            initial={reduce ? false : { opacity: 0, transform: "translateX(-20px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease }}
          >
            <h2>
              A management
              <br />
              platform to help
              <br />
              you succeed
            </h2>
            <p>
              Built specifically for barbershops and salons in Kenya. Simple tools
              that match how your business actually works.
            </p>
            <a className="button" href={registerUrl}>
              Start free trial <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="pricing-stats-grid"
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} className="pricing-stat-card" variants={fadeUp}>
                <div className="stat-icon">
                  <stat.icon size={20} aria-hidden="true" />
                </div>
                <span className="stat-value">{stat.value}</span>
                <strong className="stat-label">{stat.label}</strong>
                <p>{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
