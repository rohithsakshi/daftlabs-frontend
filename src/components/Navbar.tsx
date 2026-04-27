"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: { 
      opacity: 0, 
      y: "-100%", 
      transition: { duration: 0.2 } 
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-white/80 border-b border-[#d2d2d7] shadow-sm backdrop-blur-xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
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
              className="text-[1.35rem] font-black tracking-tighter ml-1 group-hover:text-[#0071e3] transition-colors duration-300"
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
                className="relative group text-sm font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0071e3] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="btn-secondary px-5 py-2.5 text-sm group"
            >
              Login
            </a>
            <a
              href="#contact"
              className="btn-primary px-5 py-2.5 text-sm group"
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
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-white/95 backdrop-blur-xl px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <motion.a
                variants={mobileItemVariants}
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-bold text-[#1d1d1f] hover:text-[#0071e3] transition-colors border-b border-[#e5e5ea] pb-4"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div variants={mobileItemVariants} className="flex flex-col gap-3 mt-4">
              <a
                href="#contact"
                className="btn-secondary w-full py-4 text-center text-base"
              >
                Login
              </a>
              <a
                href="#contact"
                className="btn-primary w-full py-4 text-center text-base"
              >
                Get Started
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
