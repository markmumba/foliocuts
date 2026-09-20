"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "@/components/brand";
import { loginUrl, registerUrl } from "@/lib/links";

const ease: Easing = [0.23, 1, 0.32, 1];

const links = [
  ["Features", "/features"],
  ["Pricing", "/pricing"],
  ["Blogs", "/blogs"],
  ["Contact Us", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Main navigation">
        <Brand />
        <div className="desktop-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="login-link" href={loginUrl}>
            Log in
          </a>
          <a className="button button-small" href={registerUrl}>
            Get started <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, transform: "scale(0.7) rotate(-45deg)" }}
              animate={{ opacity: 1, transform: "scale(1) rotate(0deg)" }}
              exit={{ opacity: 0, transform: "scale(0.7) rotate(45deg)" }}
              transition={{ duration: 0.15, ease }}
              style={{ display: "flex" }}
            >
              {open ? <X /> : <Menu />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="mobile-navigation"
            initial={{ opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(-8px)" }}
            transition={{ duration: 0.2, ease }}
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href={loginUrl}>Log in</a>
            <a className="button" href={registerUrl}>
              Get started <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
