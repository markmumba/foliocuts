"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ChartNoAxesCombined, HeartHandshake, Smartphone } from "lucide-react";
import { ease, fadeUp, staggerContainer } from "@/components/ui/reveal";

const benefits = [
  {
    Icon: Smartphone,
    title: "Made for your everyday",
    body: "Cash, M-Pesa, walk-ins, regulars. A simpler way to manage the way your shop already works.",
  },
  {
    Icon: HeartHandshake,
    title: "A team on the same page",
    body: "Connect every service to the person behind it. Keep commission calculations clear and consistent.",
  },
  {
    Icon: ChartNoAxesCombined,
    title: "Your numbers, in one place",
    body: "See what came in, who earned what, and which customers keep coming back.",
  },
];

export default function Introduction() {
  const reduce = useReducedMotion();
  return (
    <section className="section container introduction" aria-labelledby="intro-title">
      <motion.div
        className="section-heading"
        initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease }}
      >
        <p className="eyebrow">A LITTLE LESS ADMIN. A LOT MORE CLARITY.</p>
        <h2 id="intro-title">
          Good for your business.
          <br />
          Better for your peace of mind.
        </h2>
      </motion.div>

      <motion.div
        className="benefit-grid"
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer(0.09)}
      >
        {benefits.map(({ Icon, title, body }) => (
          <motion.div key={title} variants={fadeUp}>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
