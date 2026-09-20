"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Gift,
  Scissors,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";
import { registerUrl } from "@/lib/links";
import { Avatar, RevenueChart } from "@/components/homepage/product-preview";

const ease: Easing = [0.23, 1, 0.32, 1];

const overviewItems = [
  {
    num: "01",
    title: "Service Records",
    description:
      "Every visit, service, and payment recorded in one place. No notebook required.",
  },
  {
    num: "02",
    title: "Staff Commissions",
    description:
      "Set rates per service. FolioCuts does the maths automatically at checkout.",
  },
  {
    num: "03",
    title: "M-Pesa Payments",
    description:
      "Send a payment request, receive confirmation, and record it — all in seconds.",
  },
  {
    num: "04",
    title: "Customer Loyalty",
    description:
      "Reward regulars by visit count. No loyalty card, no extra app for your customers.",
  },
];

function ActivityCardMini() {
  return (
    <div className="preview-card features-card-tall">
      <div className="card-title">
        <span>
          <Scissors size={14} /> Today at the shop
        </span>
        <span className="tiny-label">4 visits</span>
      </div>
      <div className="activity-row">
        <Avatar initials="JK" />
        <div>
          <strong>James Kamau</strong>
          <small>Haircut & beard trim</small>
        </div>
        <span className="amount">
          800<small>KES</small>
        </span>
      </div>
      <div className="activity-row">
        <Avatar initials="AN" tone="lime" />
        <div>
          <strong>Alex Njoroge</strong>
          <small>Fade & styling</small>
        </div>
        <span className="amount">
          600<small>KES</small>
        </span>
      </div>
      <div className="activity-row">
        <Avatar initials="DM" tone="lavender" />
        <div>
          <strong>David Mwangi</strong>
          <small>Classic haircut</small>
        </div>
        <span className="amount">
          500<small>KES</small>
        </span>
      </div>
      <div className="card-bottom">
        <span>Every visit, accounted for.</span>
        <Check size={14} />
      </div>
    </div>
  );
}

function RevenueCardMini() {
  return (
    <div className="preview-card revenue-card">
      <div className="card-title">
        <span>Business overview</span>
        <span className="period-label">
          This week <ChevronDown size={11} />
        </span>
      </div>
      <span className="revenue-label">Total collected</span>
      <div className="revenue-total">
        <span>
          <small>KES</small> 24,850
        </span>
        <span className="growth-pill">
          <ArrowUpRight size={12} /> 12.8%
        </span>
      </div>
      <RevenueChart />
      <div className="revenue-split">
        <span>
          <i /> M-Pesa <strong>18,350</strong>
        </span>
        <span>
          <i /> Cash <strong>6,500</strong>
        </span>
      </div>
    </div>
  );
}

function StaffCardMini() {
  return (
    <div className="preview-card" style={{ padding: "22px 20px" }}>
      <div className="card-title">
        <span>
          <Wallet size={14} /> Staff earnings
        </span>
      </div>
      <div className="staff-person" style={{ marginTop: 8 }}>
        <Avatar initials="BO" tone="lime" />
        <div>
          <strong>Brian Otieno</strong>
          <small style={{ display: "block", color: "#728077" }}>
            Commission today
          </small>
        </div>
      </div>
      <div className="earnings-total" style={{ marginTop: 12 }}>
        KES 1,850{" "}
        <span className="earnings-subtitle">Calculated for you</span>
      </div>
      <div
        className="payment-notification"
        style={{ marginTop: 14, padding: "12px 12px" }}
      >
        <span className="notification-icon" style={{ width: 28, height: 28 }}>
          <Smartphone size={14} />
        </span>
        <div>
          <strong>M-Pesa received</strong>
          <small>KES 800 · Recorded</small>
        </div>
        <span className="notification-check">
          <Check size={10} />
        </span>
      </div>
    </div>
  );
}

export default function FeaturesHero() {
  const reduce = useReducedMotion();

  return (
    <section className="features-hero">
      <div className="container">
        {/* Copy — on white bg */}
        <motion.div
          className="features-hero-copy"
          initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.55, ease }}
        >
          <h1>Features</h1>
          <p className="hero-description">
            Service records, commissions, M-Pesa, loyalty. Everything in one
            place — so the business side takes care of itself.
          </p>
        </motion.div>

        {/* Product cards inside dark green rounded card */}
        <motion.div
          className="features-cards-container"
          initial={reduce ? false : { opacity: 0, transform: "translateY(32px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
        >
          <div className="features-cards-showcase" aria-hidden="true">
            <ActivityCardMini />
            <RevenueCardMini />
            <StaffCardMini />
          </div>
        </motion.div>

        {/* 4-item overview */}
        <motion.div
          className="feature-overview-row"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
        >
          {overviewItems.map((item) => (
            <div className="feature-overview-item" key={item.num}>
              <span className="feature-overview-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
