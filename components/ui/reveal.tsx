"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing, Variants } from "framer-motion";
import type { ReactNode } from "react";

export const ease: Easing = [0.23, 1, 0.32, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, transform: "translateY(20px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: { duration: 0.45, ease },
  },
};

export const staggerContainer = (stagger = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

/** Fade-up reveal on scroll — wraps children in a motion.div */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: { duration: 0.45, ease, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger parent — wraps children, each child should use `variants={fadeUp}` */
export function StaggerParent({
  children,
  stagger = 0.08,
  className,
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer(reduce ? 0 : stagger)}
    >
      {children}
    </motion.div>
  );
}
