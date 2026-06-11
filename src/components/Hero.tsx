"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = "Build Smarter. Scale Faster. Lead Boldly.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background — deep navy gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-primary)] -z-20" />

      {/* Subtle radial glow — hero centerpiece lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--accent)] opacity-[0.06] blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Animated Ambient Orbs with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10 overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/30 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-blue-800/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </motion.div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 -z-10 pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        style={{ opacity: opacityFade }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUpVariant}>
          <div className="inline-flex items-center gap-2 bg-[var(--surface-primary)]/80 backdrop-blur-xl border border-[var(--border)] rounded-full px-4 py-1.5 mb-8">
            <Sparkles size={12} className="text-[var(--accent)]" />
            <span className="text-xs font-medium text-[var(--text-secondary)] tracking-wide">
              AI · Automation · Enterprise Engineering
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={containerVariants}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-bold leading-[1.05] tracking-tight mb-8 flex flex-wrap justify-center gap-x-4"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={
                word.includes("Faster.")
                  ? "text-[var(--accent)] font-bold"
                  : "text-[var(--text-primary)]"
              }
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUpVariant}
          className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          We engineer intelligent systems that work as hard as your ambitions.
          From AI pipelines to enterprise platforms — DAFT Labs turns your most
          complex technical challenges into your biggest competitive advantages.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <a
              href="#contact"
              className="btn-primary px-8 py-4 text-[15px] flex items-center group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Start Your Project
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#services"
              className="btn-secondary px-8 py-4 text-[15px] flex items-center group"
            >
              <Play size={14} className="text-[var(--accent)] fill-[var(--accent)] mr-2" />
              See What We Build
            </a>
          </MagneticButton>
        </motion.div>


      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
}
