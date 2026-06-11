"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "AI & Automation", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
    { label: "Enterprise Solutions", href: "#services" },
    { label: "Product Engineering", href: "#services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/kalai-selvan-6866372b/" },
  { icon: <Mail size={16} />, href: "mailto:daftlabs.reply@gmail.com" },
];

export default function Footer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef, { once: true, margin: "0px" });

  const colVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <footer ref={containerRef} className="relative border-t border-[var(--border)] overflow-hidden bg-[var(--bg-secondary)]">
      <motion.div style={{ y }} className="pt-16 pb-8">
        {/* subtle background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[var(--accent)] opacity-[0.03] blur-[80px] pointer-events-none" />

        <div ref={inViewRef} className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-5 gap-10 mb-12"
          >
            {/* 🔥 BRAND */}
            <motion.div variants={colVariants} className="md:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-4 group" aria-label="DAFT Labs Home">
                {/* ✅ SAME NAVBAR SVG LOGO WITH CONTINUOUS ROTATION */}
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  viewBox="0 0 200 200"
                  className="w-9 h-9"
                >
                  <path
                    d="M 110 30 A 70 70 0 0 0 40 100 A 70 70 0 0 0 110 170"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 90 50 A 50 50 0 0 0 50 100 A 50 50 0 0 0 90 150"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <motion.text
                    // Keep text upright by rotating it in reverse
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    style={{ originX: "100px", originY: "100px" }}
                    x="85"
                    y="118"
                    fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
                    fontWeight="900"
                    fontSize="64"
                    fill="var(--text-primary)"
                    letterSpacing="-4"
                  >
                    DL
                  </motion.text>
                </motion.svg>

                {/* TEXT */}
                <span
                  className="text-xl font-black tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300"
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" }}
                >
                  DAFT <span className="text-[var(--accent)]">Labs</span>
                </span>
              </a>

              {/* DESCRIPTION */}
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs mb-6">
                Technology Reimagined. We engineer AI-powered systems, automation platforms,
                and enterprise software for ambitious organizations.
              </p>

              {/* SOCIALS */}
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <MagneticButton key={i}>
                    <a
                      href={s.href}
                      className="w-9 h-9 bg-[var(--surface-primary)] border border-[var(--border)] rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] transition-all duration-200"
                      aria-label={i === 0 ? "LinkedIn" : "Email"}
                    >
                      {s.icon}
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </motion.div>

            {/* 🔗 LINKS */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <motion.div variants={colVariants} key={section}>
                <p
                  className="text-xs font-semibold text-[var(--text-muted)] mb-5 tracking-widest uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {section}
                </p>

                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* 🔻 BOTTOM BAR */}
          <motion.div variants={colVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--text-muted)] text-xs">
              © {new Date().getFullYear()} DAFT Labs. All rights reserved.
            </p>

            <p className="text-[var(--text-muted)] text-xs">
              Built with precision · Coimbatore, India
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}