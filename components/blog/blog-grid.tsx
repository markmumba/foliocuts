"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing, Variants } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import Link from "next/link";
import type { BlogCardPost } from "@/sanity/lib/blog";
import { formatPostDate, formatReadingTime } from "@/sanity/lib/blog";

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

const MotionLink = motion.create(Link);

export default function BlogGrid({ posts }: { posts: BlogCardPost[] }) {
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
          {posts.map((post) => (
            <MotionLink
              key={post.slug}
              href={`/blogs/${post.slug}`}
              aria-label={`Read ${post.title}`}
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
                  <span>{formatPostDate(post.publishedAt)}</span>
                  <span>
                    <Clock size={12} /> {formatReadingTime(post.readingTime)}
                  </span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="blog-card-link">
                  Read more <ArrowUpRight size={14} />
                </span>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
