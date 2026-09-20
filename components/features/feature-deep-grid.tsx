"use client";
import { motion, useReducedMotion } from "framer-motion";
import { BarChart2, Check, Scissors, Users, Wallet } from "lucide-react";
import { Avatar } from "@/components/homepage/product-preview";
import { ease, fadeUp, staggerContainer } from "@/components/ui/reveal";

function RecordsMock() {
  const rows = [
    { initials: "JK", name: "James Kamau", service: "Haircut & beard", amount: "KES 800" },
    { initials: "AN", tone: "lime", name: "Alex Njoroge", service: "Fade & styling", amount: "KES 600" },
    { initials: "DM", tone: "lavender", name: "David Mwangi", service: "Classic haircut", amount: "KES 500" },
  ];
  return (
    <div className="deep-feature-mock">
      <div className="card-title">
        <span><Scissors size={13} /> Today&apos;s visits</span>
        <span className="tiny-label">3 recorded</span>
      </div>
      {rows.map((r) => (
        <div className="deep-mini-row" key={r.name}>
          <Avatar initials={r.initials} tone={r.tone} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <strong style={{ fontSize: 11 }}>{r.name}</strong>
            <small style={{ display: "block", fontSize: 9.5, color: "#728077" }}>{r.service}</small>
          </div>
          <span className="deep-mini-amount">{r.amount}</span>
        </div>
      ))}
    </div>
  );
}

function CommissionMock() {
  const staff = [
    { initials: "BO", tone: "lime", name: "Brian Otieno", earned: "KES 760", rate: "40%" },
    { initials: "SM", tone: "peach", name: "Sarah Mutua", earned: "KES 540", rate: "35%" },
  ];
  return (
    <div className="deep-feature-mock">
      <div className="card-title">
        <span><Wallet size={13} /> Commission today</span>
      </div>
      {staff.map((s) => (
        <div className="deep-mini-row" key={s.name}>
          <Avatar initials={s.initials} tone={s.tone} />
          <div style={{ flex: 1 }}>
            <strong style={{ fontSize: 11 }}>{s.name}</strong>
            <small style={{ display: "block", fontSize: 9.5, color: "#728077" }}>Rate · {s.rate}</small>
          </div>
          <span className="deep-mini-badge">{s.earned}</span>
        </div>
      ))}
      <div
        style={{
          marginTop: 12,
          background: "#e7f2dd",
          borderRadius: 6,
          padding: "10px 12px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          alignItems: "center",
        }}
      >
        <span style={{ color: "#4a6e3a" }}>Total paid out</span>
        <strong style={{ fontSize: 13 }}>KES 1,300</strong>
      </div>
    </div>
  );
}

function AnalyticsMock() {
  const bars = [30, 55, 42, 70, 58, 100, 80];
  return (
    <div className="deep-feature-mock">
      <div className="card-title">
        <span><BarChart2 size={13} /> Weekly revenue</span>
        <span className="tiny-label">KES 24,850</span>
      </div>
      <div className="deep-chart-mini">
        {bars.map((h, i) => (
          <div
            key={i}
            className={i === 5 ? "active" : ""}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 9, color: "#728077" }}>
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    icon: Scissors,
    label: "SERVICE RECORDS",
    title: "Every visit, captured.",
    body: "Log the service, barber, and payment in one flow. Your records are ready before the next client sits down.",
    Mock: RecordsMock,
  },
  {
    icon: Wallet,
    label: "COMMISSIONS",
    title: "Fair pay, automatically.",
    body: "Set rates once. FolioCuts calculates what every team member earned as soon as a transaction is completed.",
    Mock: CommissionMock,
  },
  {
    icon: BarChart2,
    label: "BUSINESS OVERVIEW",
    title: "Your week at a glance.",
    body: "See revenue by day, split by payment method. Spot your busiest days without pulling numbers from a notebook.",
    Mock: AnalyticsMock,
  },
];

export default function FeatureDeepGrid() {
  const reduce = useReducedMotion();
  return (
    <section className="deep-feature-section">
      <div className="container">
        <motion.div
          className="section-heading heading-row"
          initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease }}
        >
          <div>
            <p className="eyebrow">WHAT&apos;S INSIDE</p>
            <h2>
              All the tools your
              <br />
              shop needs to run.
            </h2>
          </div>
          <p style={{ maxWidth: 280 }}>
            Built for the real rhythm of a barbershop — busy, fast-moving, and
            cash-heavy.
          </p>
        </motion.div>

        <motion.div
          className="deep-feature-grid"
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer(0.1)}
        >
          {cards.map(({ icon: Icon, label, title, body, Mock }) => (
            <motion.div className="deep-feature-card" key={title} variants={fadeUp}>
              <p className="eyebrow">
                <Icon size={13} aria-hidden="true" /> {label}
              </p>
              <h3>{title}</h3>
              <p>{body}</p>
              <Mock />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
