"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl backdrop-blur-md bg-white/80 backdrop-blur-xl border-b border-[#e5e5ea] shadow-sm border-b border-[#d2d2d7] shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            {/* New Native SVG Logo */}
            <svg viewBox="0 0 200 200" className="w-10 h-10 group-hover:scale-110 transition-transform duration-300">
              <path
                d="M 110 30 A 70 70 0 0 0 40 100 A 70 70 0 0 0 110 170"
                fill="none"
                stroke="#0071e3"
                strokeWidth="15"
                strokeLinecap="round"
              />
              <path
                d="M 90 50 A 50 50 0 0 0 50 100 A 50 50 0 0 0 90 150"
                fill="none"
                stroke="#0071e3"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <text
                x="85"
                y="118"
                fontFamily="'Inter', -apple-system, sans-serif"
                fontWeight="900"
                fontSize="64"
                fill="#1d1d1f"
                letterSpacing="-4"
              >
                DL
              </text>
            </svg>
            <span
              className="text-[1.35rem] font-black tracking-tighter ml-1"
              style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
            >
              DAFT{" "}
              <span className="text-[#0071e3]">Labs</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="orange-link text-sm font-medium text-[#6e6e73] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="btn-secondary px-5 py-2.5 text-sm"
            >
              Login
            </a>
            <a
              href="#contact"
              className="btn-primary px-5 py-2.5 text-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border-b border-[#d2d2d7] px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[#6e6e73] hover:text-[#0071e3] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-transparent" />
            <div className="flex gap-3 mt-2">
              <a
                href="#contact"
                className="btn-secondary flex-1 py-3 text-sm"
              >
                Login
              </a>
              <a
                href="#contact"
                className="btn-primary flex-1 py-3 text-sm"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
