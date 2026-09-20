"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing, Variants } from "framer-motion";
import { ArrowUpRight, Check, Scissors, Users } from "lucide-react";
import { registerUrl } from "@/lib/links";
import { Avatar, RevenueChart } from "@/components/homepage/product-preview";

const ease: Easing = [0.23, 1, 0.32, 1];

function StatCard({
  value,
  label,
  children,
}: {
  value: string;
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="cta-stat-card">
      {children}
      <strong className="cta-stat-value">{value}</strong>
      <span className="cta-stat-label">{label}</span>
    </div>
  );
}

export default function ContactCta() {
  const reduce = useReducedMotion();

  return (
    <section className="contact-cta-section">
      <div className="container">
        <motion.div
          className="contact-cta-card"
          initial={reduce ? false : { opacity: 0, transform: "translateY(24px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="contact-cta-copy">
            <h2>
              Run your barbershop
              <br />
              with clarity.
            </h2>
            <p>
              Join hundreds of barbershops and salons already using FolioCuts to
              manage payments, commissions, and customer loyalty — in minutes,
              not hours.
            </p>
            <a className="button button-lime" href={registerUrl}>
              Start free trial <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-cta-stats">
            <StatCard value="95%" label="Commission accuracy">
              <div className="cta-mini-chart">
                <RevenueChart />
              </div>
            </StatCard>
            <StatCard value="500+" label="Shops already on board">
              <div className="cta-avatars">
                <Avatar initials="JK" />
                <Avatar initials="AN" tone="lime" />
                <Avatar initials="DM" tone="lavender" />
                <span className="cta-avatar-more">10+</span>
              </div>
            </StatCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
