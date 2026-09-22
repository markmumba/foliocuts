"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Easing } from "framer-motion";

const ease: Easing = [0.23, 1, 0.32, 1];

function DrawnPath({ d, delay = 0 }: { d: string; delay?: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      initial={reduce ? false : { pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay }}
    />
  );
}

export function PaymentsDoodle() {
  return (
    <div className="doodle doodle-payments" aria-hidden="true">
      <span>Staff earnings, clear.</span>
      <svg viewBox="0 0 130 66">
        <DrawnPath d="M4 12 C34 2 66 8 82 26 C92 37 99 44 119 47" />
        <DrawnPath d="M105 35 L120 47 L104 55" delay={0.12} />
      </svg>
    </div>
  );
}

export function VisitsDoodle() {
  return (
    <div className="doodle doodle-visits" aria-hidden="true">
      <svg viewBox="0 0 115 72">
        <DrawnPath d="M108 63 C74 62 59 52 48 36 C39 23 27 17 7 18" />
        <DrawnPath d="M18 8 L6 18 L18 28" delay={0.12} />
      </svg>
      <span>Every visit, captured.</span>
    </div>
  );
}

export function CommissionDoodle() {
  return (
    <div className="doodle doodle-commission" aria-hidden="true">
      <svg viewBox="0 0 160 72">
        <DrawnPath d="M16 41 C34 9 128 5 146 34 C160 59 61 72 21 52 C7 45 5 33 19 23" />
      </svg>
    </div>
  );
}

export function CtaDoodle() {
  return (
    <div className="doodle doodle-cta" aria-hidden="true">
      <span>Start here</span>
      <svg viewBox="0 0 120 70">
        <DrawnPath d="M108 8 C84 10 80 27 65 37 C53 45 39 48 13 49" />
        <DrawnPath d="M25 38 L12 49 L25 60" delay={0.12} />
      </svg>
    </div>
  );
}
