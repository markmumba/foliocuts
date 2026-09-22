"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Scissors } from "lucide-react";
import { registerUrl } from "@/lib/links";
import ProductPreview from "./product-preview";

const ease: Easing = [0.23, 1, 0.32, 1];

function item(delay: number) {
  return {
    initial: { opacity: 0, transform: "translateY(16px)" },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: 0.5, ease, delay },
  };
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            {...(reduce ? {} : item(0))}
          >
            <Scissors size={14} aria-hidden="true" /> BARBERSHOP MANAGEMENT
            SOFTWARE FOR KENYA
          </motion.p>

          {/* Tip #7 — blur bridges the headline entrance gap */}
          <motion.h1
            initial={reduce ? undefined : { opacity: 0, transform: "translateY(16px)", filter: "blur(8px)" }}
            animate={reduce ? undefined : { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
            transition={reduce ? undefined : { duration: 0.65, ease, delay: 0.08 }}
          >
            Manage your barbershop.
            <br />
            Beautifully in order.
          </motion.h1>

          <motion.p
            className="hero-description"
            {...(reduce ? {} : item(0.2))}
          >
            Manage every service, cash and M-Pesa payment, staff commission,
            <br className="desktop-break" /> and customer visit from one clear
            dashboard.
          </motion.p>

          <motion.div
            className="hero-actions"
            {...(reduce ? {} : item(0.28))}
          >
            <a className="button" href={registerUrl}>
              Start your free trial{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="text-button" href="#how-it-works">
              See how it works <ArrowDown size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="hero-reassurance"
            {...(reduce ? {} : item(0.35))}
          >
            <span>
              <Check size={13} aria-hidden="true" /> No credit card needed
            </span>
            <span>
              <Check size={13} aria-hidden="true" /> Built for Kenyan shops
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, transform: "translateY(28px)" }}
          animate={reduce ? undefined : { opacity: 1, transform: "translateY(0px)" }}
          transition={reduce ? undefined : { duration: 0.7, ease, delay: 0.1 }}
        >
          <ProductPreview />
        </motion.div>

        <motion.div
          className="hero-bottom"
          {...(reduce ? {} : item(0.42))}
        >
          <span>One place for the things that keep your shop moving.</span>
          <div>
            <span>M-Pesa & cash</span>
            <span>Staff commissions</span>
            <span>Customer loyalty</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
