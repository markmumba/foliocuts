"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing } from "framer-motion";

const ease: Easing = [0.23, 1, 0.32, 1];

export default function ContactForm() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submitDemoRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
          website: data.get("website"),
          pageUri: window.location.href,
        }),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Unable to send your request.");

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your request.");
      setStatus("error");
    }
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

          <form className="contact-form" onSubmit={submitDemoRequest}>
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
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

            <button
              type="submit"
              className="button contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Request a demo"}
            </button>
            <div className="contact-form-feedback" aria-live="polite">
              {status === "success" && (
                <p className="contact-form-success">
                  Thank you. Your request has been sent and we’ll be in touch soon.
                </p>
              )}
              {status === "error" && <p className="contact-form-error">{errorMessage}</p>}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
