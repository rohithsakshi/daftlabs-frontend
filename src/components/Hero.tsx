"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] to-[#f5f5f7] -z-10" />

      {/* Animated Ambient Orbs */}
      
      

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border border-[rgba(0,113,227,0.1)] rounded-full px-4 py-1.5 mb-8">
            <Sparkles size={12} className="text-[#0071e3]" />
            <span className="text-xs font-medium text-[#6e6e73] tracking-wide">
              AI · Automation · Enterprise Engineering
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold leading-[1.05] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Build Smarter.
          <br />
          <span className="text-[#1d1d1f] font-bold">Scale Faster.</span>
          <br />
          Lead Boldly.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          We engineer intelligent systems that work as hard as your ambitions.
          From AI pipelines to enterprise platforms — DAFT Labs turns your most
          complex technical challenges into your biggest competitive advantages.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-primary px-8 py-4 text-[15px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start Your Project
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="#services"
            className="btn-secondary px-8 py-4 text-[15px]"
          >
            <Play size={14} className="text-[#0071e3] fill-[#2563eb]" />
            See What We Build
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="mt-24 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-[#d2d2d7] pt-12"
        >
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "8", label: "Core Services" },
            { num: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-bold text-[#0071e3] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.num}
              </div>
              <div className="text-xs text-[#6e6e73] tracking-wide font-medium uppercase mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none" />
    </section>
  );
}
