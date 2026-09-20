"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ClipboardList,
  Scissors,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";
import { Avatar, RevenueChart } from "@/components/homepage/product-preview";

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

/* ── Mini product cards ── */

function RecordsCard() {
  return (
    <div className="pricing-feature-mock">
      <div className="mock-head">
        <span className="mock-icon">
          <ClipboardList size={16} />
        </span>
        <span>Service Records</span>
      </div>
      <div className="mock-body">
        {[
          { name: "James Kamau", service: "Haircut & beard", amount: "KES 800" },
          { name: "Alex Njoroge", service: "Fade & styling", amount: "KES 600" },
        ].map((row) => (
          <div key={row.name} className="mock-row">
            <Avatar initials={row.name.split(" ").map((w) => w[0]).join("")} />
            <div>
              <strong>{row.name}</strong>
              <small>{row.service}</small>
            </div>
            <span className="mock-amount">{row.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommissionsCard() {
  return (
    <div className="pricing-feature-mock">
      <div className="mock-head">
        <span className="mock-icon icon-lime">
          <Wallet size={16} />
        </span>
        <span>Commissions</span>
        <span className="mock-meta">Today</span>
      </div>
      <div className="mock-body">
        <div className="mock-stat-row">
          <span>Total paid out</span>
          <strong className="mock-highlight">KES 1,850</strong>
        </div>
        <div className="mock-progress">
          <div className="mock-progress-fill" style={{ width: "72%" }} />
        </div>
        <div className="mock-stat-row small">
          <span>3 staff members</span>
          <span>72% of revenue</span>
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard() {
  return (
    <div className="pricing-feature-mock">
      <div className="mock-head">
        <span className="mock-icon icon-yellow">
          <ArrowUpRight size={16} />
        </span>
        <span>Analytics</span>
        <span className="mock-meta">
          This week <ChevronDown size={10} />
        </span>
      </div>
      <div className="mock-body">
        <div className="mock-big-number">
          <small>KES</small> 24,850
          <span className="growth-pill" style={{ fontSize: 11 }}>
            <ArrowUpRight size={10} /> 12.8%
          </span>
        </div>
        <RevenueChart />
        <div className="revenue-split" style={{ marginTop: 8, fontSize: 11 }}>
          <span>
            <i /> M-Pesa <strong>18,350</strong>
          </span>
          <span>
            <i /> Cash <strong>6,500</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Service Records",
    description:
      "Every visit, service, and payment recorded digitally. No notebook, no guesswork, no missing entries.",
    card: <RecordsCard />,
  },
  {
    title: "Commission Tracking",
    description:
      "Set your rates once. FolioCuts calculates what each barber earned — automatically, every transaction.",
    card: <CommissionsCard />,
  },
  {
    title: "Business Analytics",
    description:
      "See your revenue by day, week, or month. M-Pesa vs cash split, staff performance, customer trends.",
    card: <AnalyticsCard />,
  },
];

export default function PricingFeatures() {
  const reduce = useReducedMotion();

  return (
    <section className="pricing-features-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease }}
        >
          <h2>Elevate your shop&apos;s efficiency</h2>
          <p className="section-subtitle">
            Every plan gives your team the tools to spend less time on admin and
            more time behind the chair.
          </p>
        </motion.div>

        <motion.div
          className="pricing-features-grid"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {features.map((f) => (
            <motion.div key={f.title} className="pricing-feature-item" variants={fadeUp}>
              {f.card}
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
