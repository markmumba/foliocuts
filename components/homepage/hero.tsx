"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Check, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/ui/VideoModal";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm">🇰🇪</span>
                <span className="text-primary text-sm font-medium">
                  Built for Kenyan Barbershops
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-sm font-medium">
                  Limited Q1 2024 Spots
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground leading-[1.1] mb-6">
              Your barbershop deserves{" "}
              <span className="italic">better</span> than paper ledgers
            </h1>

            <p className="text-lg md:text-xl text-foreground-muted mb-8 leading-relaxed">
              Intelligent commission tracking, M-Pesa payments, and automatic loyalty rewards.{" "}
              <span className="text-secondary font-semibold">No apps required.</span>
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="https://foliocuts-frontend-df8m.vercel.app"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold text-base rounded-full hover:bg-secondary-light transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Start free trial</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/20 text-foreground font-medium text-base hover:border-accent hover:text-accent transition-all duration-200 rounded-full"
              >
                <Play size={18} className="group-hover:scale-110 transition-transform" />
                <span>Watch 2-min demo</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground-muted"
            >
              <span className="flex items-center gap-1.5">
                <Check size={16} className="text-accent" />
                Free 14-day trial
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={16} className="text-accent" />
                3-minute setup
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={16} className="text-accent" />
                No credit card required
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Stats Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Main Stats Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white rounded-2xl border border-neutral shadow-card-hover p-8"
              >
                <div className="absolute -top-3 -right-3 bg-secondary text-primary rounded-full px-4 py-2 flex items-center gap-2 text-sm font-bold shadow-lg">
                  <TrendingUp size={16} />
                  Live Stats
                </div>

                <div className="space-y-6">
                  {/* Revenue Card */}
                  <div className="p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground-muted font-medium">Monthly Revenue</span>
                      <TrendingUp size={16} className="text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">KES 450K</div>
                    <div className="text-xs text-accent font-medium mt-1">+23% from last month</div>
                  </div>

                  {/* Transactions Card */}
                  <div className="p-5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground-muted font-medium">Transactions</span>
                      <Zap size={16} className="text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">1,247</div>
                    <div className="text-xs text-accent font-medium mt-1">This month</div>
                  </div>

                  {/* Active Customers Card */}
                  <div className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground-muted font-medium">Active Customers</span>
                      <Users size={16} className="text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">850+</div>
                    <div className="text-xs text-accent font-medium mt-1">Growing daily</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Top Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -left-6 bg-primary text-white rounded-lg shadow-lg px-4 py-3"
              >
                <p className="text-sm font-medium">🎉 50+ Active Shops</p>
              </motion.div>

              {/* Floating Badge - Bottom */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-neutral shadow-card p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold">
                    98%
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Satisfaction Rate</p>
                    <p className="text-xs text-foreground-muted">From happy clients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-24 pt-12 border-t border-neutral"
        >
          <p className="text-center text-sm text-foreground-muted mb-8 tracking-wider">
            TRUSTED BY LEADING BARBERSHOPS ACROSS NAIROBI
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Westlands", "Kilimani", "Karen", "Runda", "Lavington"].map((area) => (
              <span
                key={area}
                className="text-foreground-muted/60 font-medium text-sm md:text-base hover:text-foreground transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
