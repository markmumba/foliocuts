"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function HowItWorks() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const steps = [
    {
      number: "1",
      title: "Quick Setup",
      description:
        "Add your barbershop details, staff members, and services. Our guided setup takes just 3 minutes and you're ready to go.",
      color: "secondary",
      benefits: ["Guided setup wizard", "Import existing customer data", "M-Pesa integration setup"],
    },
    {
      number: "2",
      title: "Record Services",
      description:
        "Simply tap to record each service as it's completed. Payment, commissions, and loyalty points are automatically calculated.",
      color: "accent",
      benefits: ["One-tap service recording", "Instant M-Pesa payments", "Auto loyalty tracking"],
    },
    {
      number: "3",
      title: "Track & Grow",
      description:
        "Watch your business insights come alive. Track performance, identify trends, and make data-driven decisions to grow your revenue.",
      color: "primary",
      benefits: ["Real-time dashboards", "Staff performance reports", "Customer retention insights"],
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-medium text-sm">🚀 Simple Setup Process</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-foreground mb-6">
            Get Started in <span className="italic text-secondary">3 Easy Steps</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            No complex installations or lengthy training. Transform your barbershop operations in
            minutes, not months.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-accent to-primary transform z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center group"
              >
                {/* Number Badge */}
                <div
                  className={`w-16 h-16 bg-${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  style={{
                    backgroundColor:
                      step.color === "secondary"
                        ? "#f5b700"
                        : step.color === "accent"
                        ? "#2eb67d"
                        : "#1c1e26",
                  }}
                >
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Visual Card */}
                <div className="bg-neutral rounded-2xl p-6 mb-6 hover:shadow-card-hover transition-all duration-300">
                  <div className="bg-background rounded-xl p-4 space-y-3">
                    {index === 0 && (
                      <>
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-primary text-sm">Shop Setup</h4>
                          <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                            <span className="text-xs">⚙️</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-neutral rounded w-full"></div>
                          <div className="h-3 bg-neutral rounded w-3/4"></div>
                          <div className="h-3 bg-accent/20 rounded w-1/2"></div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="flex-1 h-8 bg-secondary/20 rounded text-xs flex items-center justify-center text-primary font-medium">
                            Add Staff
                          </div>
                          <div className="flex-1 h-8 bg-accent/20 rounded text-xs flex items-center justify-center text-accent font-medium">
                            Set Services
                          </div>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-primary text-sm">New Service</h4>
                          <div className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                            Live
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-xs">👤</span>
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-primary">Customer: 0722...</div>
                            <div className="text-xs text-foreground-muted">Haircut + Beard</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="flex-1 h-8 bg-accent rounded text-xs flex items-center justify-center text-white font-medium">
                            KES 500
                          </div>
                          <div className="flex-1 h-8 bg-primary/10 rounded text-xs flex items-center justify-center text-primary font-medium">
                            M-Pesa Pay
                          </div>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-primary text-sm">Analytics</h4>
                          <div className="text-xs text-accent">↗️ +25%</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-accent/10 p-2 rounded text-center">
                            <div className="text-lg font-bold text-accent">45K</div>
                            <div className="text-xs text-foreground-muted">Revenue</div>
                          </div>
                          <div className="bg-secondary/10 p-2 rounded text-center">
                            <div className="text-lg font-bold text-secondary">38</div>
                            <div className="text-xs text-foreground-muted">Customers</div>
                          </div>
                        </div>
                        <div className="flex items-end space-x-1 h-12">
                          {[30, 40, 60, 50, 35, 45].map((height, i) => (
                            <div
                              key={i}
                              className="bg-accent w-2 rounded-t"
                              style={{ height: `${height}%`, opacity: 0.3 + i * 0.1 }}
                            ></div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-serif font-normal text-foreground mb-4">
                  {step.title}
                </h3>

                <p className="text-foreground-muted leading-relaxed mb-6">{step.description}</p>

                {/* Benefits */}
                <ul className="space-y-2 text-sm text-left">
                  {step.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-foreground-muted">
                      <Check
                        size={16}
                        className={`text-${step.color} mr-2 flex-shrink-0 mt-0.5`}
                        style={{
                          color:
                            step.color === "secondary"
                              ? "#f5b700"
                              : step.color === "accent"
                              ? "#2eb67d"
                              : "#1c1e26",
                        }}
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-neutral">
            <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-4">
              That's It! Your Barbershop is Now <span className="italic">Digital</span>
            </h3>

            <p className="text-foreground-muted text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              No lengthy training sessions. No complex software. Just simple, powerful tools that
              work the way your barbershop works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://foliocuts-frontend-df8m.vercel.app"
                target="_blank"
                className="px-8 py-4 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary-light transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Free Trial Today
              </a>

              <div className="flex items-center gap-2 text-foreground-muted">
                <span>💳</span>
                <span className="text-sm">No credit card required</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
