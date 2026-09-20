"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

const ease: Easing = [0.23, 1, 0.32, 1];

export default function BlogDetail({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  const reduce = useReducedMotion();

  return (
    <>
      {/* Hero — lime bg */}
      <section className="blog-detail-hero">
        <div className="container">
          <motion.div
            initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="blog-detail-meta">
              <span>{post.category}</span>
              <span>
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
            <h1>{post.title}</h1>
            <p className="blog-detail-date">{post.date}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="blog-detail-content">
        <div className="container">
          <div className="blog-detail-body">
            {post.content.map((block, i) => {
              if (block.type === "heading") {
                return <h2 key={i}>{block.text}</h2>;
              }
              if (block.type === "list") {
                return (
                  <ul key={i}>
                    {block.items?.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="blog-related">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="blog-grid blog-grid-related">
              {related.map((r) => (
                <a key={r.slug} href={`/blogs/${r.slug}`} className="blog-card">
                  <div className="blog-card-image">
                    <div className="blog-card-placeholder">
                      <Tag size={24} />
                      <span>{r.category}</span>
                    </div>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>{r.date}</span>
                      <span>
                        <Clock size={12} /> {r.readTime}
                      </span>
                    </div>
                    <h3>{r.title}</h3>
                    <span className="blog-card-link">
                      Read more <ArrowUpRight size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
