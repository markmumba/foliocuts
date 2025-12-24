"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const frontendUrl: string = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://foliocuts.blazor-movies.online/register";

export default function Features() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <section id="features" className="py-32 bg-background relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-medium text-sm">✨ Features</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Everything your barbershop needs to{" "}
            <span className="italic text-secondary">thrive</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Built specifically for Kenyan barbershops. No complicated setup, no expensive hardware.
          </p>
        </motion.div>

        {/* Primary Features - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Feature 1 */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-white rounded-2xl border border-neutral p-8 hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 border border-secondary/30 group-hover:scale-110 transition-transform">
              <span className="text-3xl">💰</span>
            </div>

            <h3 className="text-xl font-serif font-normal text-foreground mb-3">
              Commission Transparency
            </h3>

            <p className="text-base text-foreground-muted leading-relaxed mb-6">
              Real-time commission tracking with transparent payouts. Build trust with your team.
            </p>

            <ul className="space-y-3">
              {["Automated calculations", "Daily & weekly reports", "Zero disputes"].map(
                (item) => (
                  <li key={item} className="flex items-start text-sm text-foreground-muted">
                    <Check size={16} className="text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-white rounded-2xl border border-neutral p-8 hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 border border-accent/30 group-hover:scale-110 transition-transform">
              <span className="text-3xl">📱</span>
            </div>

            <h3 className="text-xl font-serif font-normal text-foreground mb-3">
              M-Pesa Integration
            </h3>

            <p className="text-base text-foreground-muted leading-relaxed mb-6">
              Seamless mobile payments with STK Push. Accept the methods customers prefer.
            </p>

            <ul className="space-y-3">
              {["Instant STK Push", "Auto receipts", "85% cashless rate"].map((item) => (
                <li key={item} className="flex items-start text-sm text-foreground-muted">
                  <Check size={16} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group bg-white rounded-2xl border border-neutral p-8 hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🎯</span>
            </div>

            <h3 className="text-xl font-serif font-normal text-foreground mb-3">
              Invisible Loyalty
            </h3>

            <p className="text-base text-foreground-muted leading-relaxed mb-6">
              Automatic rewards using phone numbers. No apps or cards required.
            </p>

            <ul className="space-y-3">
              {["Phone-based tracking", "Auto calculations", "35% retention boost"].map(
                (item) => (
                  <li key={item} className="flex items-start text-sm text-foreground-muted">
                    <Check size={16} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>

        {/* Secondary Features - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Staff Management */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 border border-secondary/20 hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 border border-secondary/30">
              <span className="text-3xl">👥</span>
            </div>

            <h3 className="text-xl font-serif font-normal text-foreground mb-3">
              Staff Management
            </h3>

            <p className="text-base text-foreground-muted leading-relaxed mb-6">
              Individual dashboards and transparent earnings for your entire team.
            </p>

            <ul className="space-y-3">
              {["Performance tracking", "Weekly reports"].map((item) => (
                <li key={item} className="flex items-start text-sm text-foreground-muted">
                  <Check size={16} className="text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Analytics & Support */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 border border-accent/30">
              <span className="text-3xl">📊</span>
            </div>

            <h3 className="text-xl font-serif font-normal text-foreground mb-3">
              Analytics & Support
            </h3>

            <p className="text-base text-foreground-muted leading-relaxed mb-6">
              Real-time insights with 24/7 local Kenyan support.
            </p>

            <ul className="space-y-3">
              {["Live sales analytics", "WhatsApp support"].map((item) => (
                <li key={item} className="flex items-start text-sm text-foreground-muted">
                  <Check size={16} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Card */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl p-12 md:p-16 text-center shadow-lg-custom"
        >
          <h3 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 max-w-2xl mx-auto">
            Ready to go <span className="italic">digital?</span>
          </h3>

          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Join 50+ shops using FolioCuts across Kenya. Start your free trial today.
          </p>

          <Link
            href={frontendUrl}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold text-base rounded-full hover:bg-secondary hover:text-primary transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Start free trial</span>
            <span>→</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 pt-8 border-t border-white/20">
            {["14-day free trial", "3-min setup", "No credit card"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-white/80">
                <Check size={16} className="text-white" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
