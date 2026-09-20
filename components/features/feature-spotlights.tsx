"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Gift, Scissors, Smartphone, Wallet } from "lucide-react";
import { ease, fadeUp } from "@/components/ui/reveal";
import { Avatar, RevenueChart } from "@/components/homepage/product-preview";
import { registerUrl } from "@/lib/links";

/* ── Shared bullet list ── */
function Bullets({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="spotlight-bullets">
      {items.map((item) => (
        <li key={item}>
          <Check size={15} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ── Spotlight 1: Commission (lime bg) ── */
function CommissionCard() {
  return (
    <div className="spotlight-card">
      <div className="spotlight-card-head">
        <div className="card-title">
          <span><Wallet size={14} /> Commission breakdown</span>
          <span className="tiny-label">Today</span>
        </div>
      </div>
      <div className="spotlight-card-body">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { name: "Brian Otieno", service: "Haircut & beard", rate: "40%", earned: "KES 320" },
            { name: "Sarah Mutua", service: "Classic haircut", rate: "35%", earned: "KES 175" },
            { name: "Tom Ochieng", service: "Fade & styling", rate: "38%", earned: "KES 228" },
          ].map((row) => (
            <div
              key={row.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                paddingBottom: 10,
                borderBottom: "1px solid #f0f2ee",
                fontSize: 12,
                gap: 8,
              }}
            >
              <div>
                <strong style={{ display: "block", fontSize: 12.5 }}>{row.name}</strong>
                <small style={{ color: "#728077", fontSize: 10 }}>
                  {row.service} · {row.rate}
                </small>
              </div>
              <strong style={{ fontSize: 13, color: "#063b26" }}>{row.earned}</strong>
            </div>
          ))}
          <div
            style={{
              background: "#e7f2dd",
              borderRadius: 8,
              padding: "12px 14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <span style={{ fontSize: 11, color: "#4a6e3a" }}>Total paid out today</span>
            <strong style={{ fontSize: 16 }}>KES 723</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Spotlight 2: M-Pesa (dark bg) ── */
function MpesaCard() {
  return (
    <div className="spotlight-card">
      <div
        style={{
          background: "#063b26",
          padding: "18px 22px 14px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 11,
          }}
        >
          <strong style={{ color: "#cfff92", letterSpacing: 0.5 }}>M-PESA</strong>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 10 }}>
            Payment confirmation
          </span>
        </div>
      </div>
      <div className="spotlight-card-body">
        <div style={{ textAlign: "center", padding: "16px 0 20px" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#e7f2dd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 12px",
              color: "#063b26",
            }}
          >
            <Check size={22} />
          </div>
          <strong style={{ fontSize: 28, letterSpacing: -1, display: "block" }}>
            KES 800.00
          </strong>
          <span style={{ fontSize: 12, color: "#728077", display: "block", marginTop: 4 }}>
            Payment received
          </span>
        </div>
        <div style={{ borderTop: "1px solid #f0f2ee", paddingTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            ["Customer", "James Kamau"],
            ["Service", "Haircut & beard trim"],
            ["Status", "Completed ✓"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}
            >
              <span style={{ color: "#728077" }}>{label}</span>
              <strong style={{ fontWeight: 500, fontSize: 12, color: label === "Status" ? "#2e7d32" : "inherit" }}>
                {value}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Spotlight 3: Analytics (yellow bg) ── */
function AnalyticsCard() {
  return (
    <div className="spotlight-card">
      <div className="spotlight-card-head">
        <div className="card-title">
          <span>Business overview</span>
          <span style={{ fontSize: 9, color: "#728077" }}>This week</span>
        </div>
      </div>
      <div className="spotlight-card-body">
        <div style={{ marginBottom: 4 }}>
          <span style={{ fontSize: 10, color: "#728077" }}>Total collected</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <strong style={{ fontSize: 26, letterSpacing: -1 }}>
              <small style={{ fontSize: 13, fontWeight: 400 }}>KES</small> 24,850
            </strong>
            <span className="growth-pill">
              <ArrowUpRight size={11} /> 12.8%
            </span>
          </div>
        </div>
        <RevenueChart />
        <div className="revenue-split" style={{ marginTop: 10 }}>
          <span>
            <i /> M-Pesa <strong>18,350</strong>
          </span>
          <span>
            <i /> Cash <strong>6,500</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Loyalty card for bonus section ── */
function LoyaltyCard() {
  return (
    <div className="spotlight-card">
      <div className="spotlight-card-head">
        <div className="card-title">
          <span><Scissors size={14} /> The regulars club</span>
          <span className="tiny-label">LOYALTY</span>
        </div>
      </div>
      <div className="spotlight-card-body">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <Avatar initials="JK" tone="peach" />
          <div>
            <strong style={{ fontSize: 13, display: "block" }}>Looking sharp, James.</strong>
            <small style={{ color: "#728077", fontSize: 10 }}>Your next reward is close.</small>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            marginBottom: 14,
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: i === 5 ? "#fff" : "#063b26",
                border: i === 5 ? "1.5px dashed #b0bfae" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: i === 5 ? "#b0bfae" : "#cfff92",
              }}
            >
              {i === 5 ? <Gift size={16} /> : <Scissors size={15} />}
            </span>
          ))}
        </div>
        <div
          style={{
            background: "#e7f2dd",
            borderRadius: 8,
            padding: "10px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 12 }}>5 of 6 visits</span>
          <strong style={{ fontSize: 12, color: "#063b26" }}>One more. On us.</strong>
        </div>
      </div>
    </div>
  );
}

/* ── Reusable spotlight section ── */
function SpotlightSection({
  colorClass,
  eyebrow,
  title,
  description,
  bullets,
  card,
  reverse = false,
}: {
  colorClass: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  card: React.ReactNode;
  reverse?: boolean;
}) {
  const reduce = useReducedMotion();

  const copyEl = (
    <motion.div
      className="spotlight-copy"
      initial={reduce ? false : { opacity: 0, transform: "translateX(-20px)" }}
      whileInView={{ opacity: 1, transform: "translateX(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <Bullets items={bullets} />
      <a className="button" href={registerUrl} style={{ alignSelf: "flex-start" }}>
        Start free trial <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </motion.div>
  );

  const visualEl = (
    <motion.div
      className="spotlight-visual"
      initial={reduce ? false : { opacity: 0, transform: "translateX(20px)" }}
      whileInView={{ opacity: 1, transform: "translateX(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease, delay: 0.1 }}
    >
      {card}
    </motion.div>
  );

  return (
    <section className={`spotlight-section ${colorClass}`}>
      <div className="container">
        <div className="spotlight-inner" style={reverse ? { direction: "rtl" } : {}}>
          <div style={reverse ? { direction: "ltr" } : {}}>{reverse ? visualEl : copyEl}</div>
          <div style={reverse ? { direction: "ltr" } : {}}>{reverse ? copyEl : visualEl}</div>
        </div>
      </div>
    </section>
  );
}

export default function FeatureSpotlights() {
  return (
    <>
      {/* 1 — Commission (lime) */}
      <SpotlightSection
        colorClass="spotlight-lime"
        eyebrow="STAFF COMMISSIONS"
        title={`Commission tracking\nthat does the maths.`}
        description="Set your rates once. Every time a service is completed and paid for, FolioCuts calculates exactly what each barber earned — no spreadsheet, no end-of-day guesswork."
        bullets={[
          "Set different rates per staff member per service",
          "Automatic calculation the moment payment is recorded",
          "Daily commission summary every barber can check",
          "Clear breakdown to prevent end-of-day disputes",
        ]}
        card={<CommissionCard />}
      />

      {/* 2 — M-Pesa (dark) */}
      <SpotlightSection
        colorClass="spotlight-dark"
        eyebrow="M-PESA PAYMENTS"
        title={`M-Pesa built right\ninto your workflow.`}
        description="No switching between apps. Send a payment request from the dashboard, watch the confirmation come in, and see it automatically added to today's records."
        bullets={[
          "Request payment directly from the service record",
          "Customer receives STK push on their phone",
          "Confirmation recorded the moment payment arrives",
          "Cash payments handled in the same flow",
        ]}
        card={<MpesaCard />}
        reverse
      />

      {/* 3 — Analytics (yellow) */}
      <SpotlightSection
        colorClass="spotlight-yellow"
        eyebrow="BUSINESS OVERVIEW"
        title={`Know your numbers\nwithout the notebook.`}
        description="See everything that came in today, this week, or this month — split by M-Pesa and cash. A clear picture of your business without touching a spreadsheet."
        bullets={[
          "Revenue by day, week, and month at a glance",
          "M-Pesa vs cash split always visible",
          "Staff performance — who served whom and what they earned",
          "Customer visit history tied to every transaction",
        ]}
        card={<AnalyticsCard />}
      />

      {/* 4 — Loyalty (peach/paper light) */}
      <SpotlightSection
        colorClass=""
        eyebrow="CUSTOMER LOYALTY"
        title={`Reward your regulars\nautomatically.`}
        description="Set a visit-based reward for any service. FolioCuts tracks progress using the customer's phone number — no loyalty card, no app download, no extra work for your team."
        bullets={[
          "Configure rewards per service (e.g. every 6th haircut free)",
          "Tracks customers by phone number — no card needed",
          "Progress visible when you pull up a customer",
          "Customers love it. Your team barely notices.",
        ]}
        card={<LoyaltyCard />}
        reverse
      />
    </>
  );
}
