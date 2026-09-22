"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing } from "framer-motion";
import { contactEmail } from "@/lib/links";

const ease: Easing = [0.23, 1, 0.32, 1];

export default function ContactForm() {
  const reduce = useReducedMotion();

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = `${data.get("firstName")} ${data.get("lastName")}`.trim();
    const subject = String(data.get("subject") || "FolioCuts demo request");
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      `Mobile: ${data.get("phone")}`,
      "",
      String(data.get("message") || "I would like to book a FolioCuts demo."),
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact-hero">
      <div className="container">
        <motion.div
          className="contact-card"
          initial={reduce ? false : { opacity: 0, transform: "translateY(24px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="contact-card-copy">
            <h1>Book a FolioCuts demo</h1>
            <p>
              See how FolioCuts manages barbershop payments, staff commissions,
              customer records, and loyalty rewards.
              <br />
              Fill in your details and we'll be in touch.
            </p>
          </div>

          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">Full Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="e.g. Amina"
                  autoComplete="given-name"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="e.g. Kamau"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">
                  Mobile Number<span className="required">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +254 712 345 678"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="e.g. Demo for a three-chair shop"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Write Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us what you would like to see in the demo…"
                rows={4}
              />
            </div>

            <button type="submit" className="button contact-submit">
              Send via email
            </button>
            <p className="contact-form-note">
              This opens your email app with the request ready to send.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
