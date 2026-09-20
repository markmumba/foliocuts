"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing } from "framer-motion";

const ease: Easing = [0.23, 1, 0.32, 1];

export default function ContactForm() {
  const reduce = useReducedMotion();

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
            <h1>Book A Free Demo</h1>
            <p>
              See how FolioCuts can simplify your barbershop operations.
              <br />
              Fill in your details and we'll be in touch.
            </p>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">Full Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Your first name"
                  autoComplete="given-name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Your last name"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your mail"
                  autoComplete="email"
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">
                  Mobile Number<span className="required">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter number"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Type your subject"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Write Message</label>
              <textarea
                id="message"
                placeholder="Type your messages"
                rows={4}
              />
            </div>

            <button type="submit" className="button contact-submit">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
