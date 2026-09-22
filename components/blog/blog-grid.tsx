"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing, Variants } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blogs";

const ease: Easing = [0.23, 1, 0.32, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, transform: "translateY(20px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: { duration: 0.45, ease },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function BlogGrid() {
  const reduce = useReducedMotion();

  return (
    <section className="blog-listing">
      <div className="container">
        <motion.div
          className="blog-listing-header"
          initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.55, ease }}
        >
          <h1>Barbershop management guides</h1>
          <p>
            Practical advice for running and growing a barbershop in Kenya.
            <br />
            Learn about staff commissions, M-Pesa payments, and customer loyalty.
          </p>
        </motion.div>

        <motion.div
          className="blog-grid"
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={stagger}
        >
          {blogPosts.map((post) => (
            <motion.a
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="blog-card"
              variants={fadeUp}
            >
              <div className="blog-card-image">
                <div className="blog-card-placeholder">
                  <Tag size={24} />
                  <span>{post.category}</span>
                </div>
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="blog-card-link">
                  Read more <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
