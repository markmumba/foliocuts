"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Scissors } from "lucide-react";
import { registerUrl } from "@/lib/links";
import { ease, fadeUp, staggerContainer } from "@/components/ui/reveal";

const steps = [
  [
    "Make it your shop",
    "Add your services, prices, and team. Set the commission rules that work for your business.",
  ],
  [
    "Keep the day moving",
    "Record a visit, select the service and barber, then collect payment by cash or M-Pesa.",
  ],
  [
    "Close the day with clarity",
    "See your collections, staff earnings, and customer activity together in your dashboard.",
  ],
];

export default function HowItWorks() {
  const reduce = useReducedMotion();
  return (
    <section
      id="how-it-works"
      className="container section workflow"
      aria-labelledby="workflow-title"
    >
      <motion.div
        className="shop-photo"
        initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="shop-photo-inner">
          <Image
            src="/barbershop.jpg"
            alt="Barber chairs and workstations in a carefully arranged barbershop"
            fill
            sizes="(max-width: 760px) 90vw, 480px"
          />
          <div className="photo-caption">
            <Scissors size={22} aria-hidden="true" />
            <span>
              You take care of the cut.
              <br />
              <strong>We help with the business.</strong>
            </span>
          </div>
        </div>
        <span className="photo-footnote">
          FOR THE CRAFT. AND THE PEOPLE BEHIND IT.
        </span>
      </motion.div>

      <div className="workflow-copy">
        <motion.div
          initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease }}
        >
          <p className="eyebrow">FITS RIGHT INTO YOUR DAY</p>
          <h2 id="workflow-title">
            Less paperwork.
            <br />
            More chair time.
          </h2>
          <p>
            You didn&apos;t open a barbershop to spend your evenings balancing a
            notebook. Let&apos;s make the business side simpler.
          </p>
        </motion.div>

        <motion.ol
          className="workflow-steps"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.1)}
        >
          {steps.map(([title, description], index) => (
            <motion.li key={title} variants={fadeUp}>
              <span className="step-number">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <motion.a
          className="text-button"
          href={registerUrl}
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease, delay: 0.35 }}
        >
          Let&apos;s set up your shop <ArrowUpRight size={17} aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
