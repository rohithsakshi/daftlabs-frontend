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
    <footer ref={containerRef} className="relative border-t border-[#d2d2d7] overflow-hidden bg-white">
      <motion.div style={{ y }} className="pt-16 pb-8">
        {/* subtle background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#0071e3] opacity-[0.03] blur-[80px] pointer-events-none" />

        <div ref={inViewRef} className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-5 gap-10 mb-12"
          >
            {/* 🔥 BRAND */}
            <motion.div variants={colVariants} className="md:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-4 group">
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
                  <motion.text
                    // Keep text upright by rotating it in reverse
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    style={{ originX: "100px", originY: "100px" }}
                    x="85"
                    y="118"
                    fontFamily="'Inter', -apple-system, sans-serif"
                    fontWeight="900"
                    fontSize="64"
                    fill="#1d1d1f"
                    letterSpacing="-4"
                  >
                    DL
                  </motion.text>
                </motion.svg>

                {/* TEXT */}
                <span
                  className="text-xl font-black tracking-tight group-hover:text-[#0071e3] transition-colors duration-300"
                  style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
                >
                  DAFT <span className="text-[#0071e3]">Labs</span>
                </span>
              </a>

              {/* DESCRIPTION */}
              <p className="text-[#6e6e73] text-sm leading-relaxed max-w-xs mb-6">
                Technology Reimagined. We engineer AI-powered systems, automation platforms,
                and enterprise software for ambitious organizations.
              </p>

              {/* SOCIALS */}
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <MagneticButton key={i}>
                    <a
                      href={s.href}
                      className="w-9 h-9 bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl rounded-lg flex items-center justify-center text-[#6e6e73] hover:text-[#0071e3] hover:border-[rgba(0,113,227,0.1)] transition-all duration-200"
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
                  className="text-xs font-semibold text-[#6e6e73] mb-5 tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {section}
                </p>

                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
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
          <motion.div variants={colVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="border-t border-[#d2d2d7] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6e6e73] text-xs">
              © {new Date().getFullYear()} DAFT Labs. All rights reserved.
            </p>

            <p className="text-[#6e6e73] text-xs">
              Built with precision · Coimbatore, India
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}