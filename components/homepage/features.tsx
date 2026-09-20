"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Gift,
  Scissors,
  Smartphone,
  Wallet,
} from "lucide-react";
import { Avatar } from "./product-preview";
import { registerUrl } from "@/lib/links";
import { ease, fadeUp, staggerContainer } from "@/components/ui/reveal";

export default function Features() {
  const reduce = useReducedMotion();
  return (
    <section
      id="features"
      className="container features-section"
      aria-labelledby="features-title"
    >
      <motion.div
        className="section-heading heading-row"
        initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease }}
      >
        <div>
          <p className="eyebrow">LESS TO JUGGLE. MORE TO GROW.</p>
          <h2 id="features-title">
            All the little details.
            <br />
            Already taken care of.
          </h2>
        </div>
        <p>
          More clarity for you.
          <br />A smoother day for your team.
        </p>
      </motion.div>

      <motion.div
        className="feature-grid"
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(0.1)}
      >
        <motion.article className="feature-panel commission-panel" variants={fadeUp}>
          <p className="feature-label">
            <Wallet size={16} aria-hidden="true" /> STAFF COMMISSIONS
          </p>
          <h3>
            Great work deserves
            <br />
            clear earnings.
          </h3>
          <p>
            Set a commission for each service. FolioCuts does the maths when the
            payment is complete.
          </p>
          <div className="commission-preview mock-card">
            <div className="card-title">
              <span>Commission breakdown</span>
              <span className="tiny-label">Today</span>
            </div>
            <div className="commission-person">
              <Avatar initials="BO" tone="peach" />
              <div>
                <strong>Brian Otieno</strong>
                <small>Barber · 3 completed services</small>
              </div>
              <span className="mini-icon">
                <Scissors size={18} />
              </span>
            </div>
            <div className="commission-table">
              <div>
                <span>Service</span>
                <span>Rate</span>
                <span>Earned</span>
              </div>
              <div>
                <span>Haircut & beard</span>
                <span>40%</span>
                <strong>KES 320</strong>
              </div>
              <div>
                <span>Classic haircut</span>
                <span>40%</span>
                <strong>KES 200</strong>
              </div>
              <div>
                <span>Fade & styling</span>
                <span>40%</span>
                <strong>KES 240</strong>
              </div>
            </div>
            <div className="commission-total">
              <span>Total commission</span>
              <strong>KES 760</strong>
            </div>
          </div>
          <span className="panel-caption">
            Clear calculations. Fewer end-of-day questions.
          </span>
        </motion.article>

        <motion.article className="feature-panel mpesa-panel" variants={fadeUp}>
          <p className="feature-label">
            <Smartphone size={16} aria-hidden="true" /> PAYMENTS, CONNECTED
          </p>
          <h3>
            A good cut.
            <br />A smooth checkout.
          </h3>
          <p>
            Collect with M-Pesa or record a cash payment. Keep the service and
            its payment together.
          </p>
          <div className="payment-preview mock-card">
            <div className="payment-brand">
              M-PESA <span>Payment confirmation</span>
            </div>
            <div className="payment-success">
              <Check size={24} />
            </div>
            <strong className="payment-value">KES 800.00</strong>
            <p>Payment received</p>
            <div className="receipt-details">
              <div>
                <span>Customer</span>
                <strong>James Kamau</strong>
              </div>
              <div>
                <span>Service</span>
                <strong>Haircut & beard trim</strong>
              </div>
              <div>
                <span>Status</span>
                <strong className="status-success">
                  Completed <Check size={12} />
                </strong>
              </div>
            </div>
            <div className="receipt-foot">
              Recorded. Reconciled. Ready for the next client.
            </div>
          </div>
        </motion.article>

        <motion.article className="feature-panel loyalty-panel" variants={fadeUp}>
          <div className="loyalty-copy">
            <p className="feature-label">
              <Gift size={16} aria-hidden="true" /> GIVE REGULARS A REASON TO
              RETURN
            </p>
            <h3>
              A familiar face.
              <br />A little thank-you.
            </h3>
            <p>
              Turn visits into rewards with service-based loyalty. Your
              customers just show up. You take care of the rest.
            </p>
            <a className="text-button" href={registerUrl}>
              Make every visit count{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="loyalty-preview mock-card">
            <div className="card-title">
              <span>
                <Scissors size={17} /> The regulars club
              </span>
              <span className="tiny-label">LOYALTY</span>
            </div>
            <div className="loyalty-customer">
              <Avatar initials="JK" tone="peach" />
              <div>
                <strong>Looking sharp, James.</strong>
                <small>Your next reward is getting closer.</small>
              </div>
            </div>
            <div
              className="loyalty-stamps"
              aria-label="5 of 6 visits completed"
            >
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <span key={i} className={i === 5 ? "stamp-empty" : ""}>
                  {i === 5 ? <Gift size={22} /> : <Scissors size={20} />}
                </span>
              ))}
            </div>
            <div className="loyalty-progress">
              <strong>5 of 6 visits</strong>
              <span>One more. One on us.</span>
            </div>
          </div>
        </motion.article>
      </motion.div>

      <p className="sample-note">
        Illustrative product previews. Names, amounts, and reward rules are
        examples.
      </p>
    </section>
  );
}
