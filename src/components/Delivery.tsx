"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { Search, Layers, Gauge } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <Search size={20} />,
    title: "Discover & Define",
    desc: "We start by deeply understanding your business — not just the technical requirements. Stakeholder interviews, domain research, and architectural scoping ensure we build the right thing before writing a single line of code.",
    tags: ["Requirements Analysis", "Architecture Scoping", "Risk Identification"],
  },
  {
    num: "02",
    icon: <Layers size={20} />,
    title: "Design & Develop",
    desc: "Our engineers work in structured sprints with full visibility. Weekly demos, shared project dashboards, and async communication keep you in the loop — while we focus on shipping high-quality, well-tested software.",
    tags: ["Agile Sprints", "Weekly Demos", "CI/CD From Day One"],
  },
  {
    num: "03",
    icon: <Gauge size={20} />,
    title: "Deploy & Scale",
    desc: "Launch is just the beginning. We handle production deployments, performance hardening, and post-launch iteration. Our systems are designed to scale as your user base grows — without re-architecting from scratch.",
    tags: ["Zero-Downtime Releases", "Performance Monitoring", "Continuous Iteration"],
  },
];

export default function Delivery() {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 12, mass: 0.8 }
    }
  };

  return (
    <section ref={containerRef} id="delivery" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0071e3] opacity-[0.03] blur-[100px] pointer-events-none rounded-full" />

      {/* Global section progress indicator */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-1 bg-[#0071e3]/10 transform origin-top"
      >
        <motion.div 
          className="w-full bg-[#0071e3]"
          style={{ height: "100%", scaleY: progressSpring, transformOrigin: "top" }}
        />
      </motion.div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">How We Work</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Process Built on{" "}
            <span className="text-[#0071e3]">Transparency</span>
          </h2>
          <p className="text-[#6e6e73] max-w-lg mx-auto text-base">
            No black boxes. No surprise pivots. Just a structured, accountable delivery process that keeps you informed at every milestone.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line with SVG path animation */}
          <div className="absolute top-12 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px hidden lg:block overflow-visible z-0">
            <svg width="100%" height="2" className="overflow-visible">
              <motion.line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,113,227,0.1)" />
                  <stop offset="50%" stopColor="rgba(0,113,227,0.6)" />
                  <stop offset="100%" stopColor="rgba(0,113,227,0.1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6 relative z-10"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={stepVariants}
                className="bg-white border border-[#d2d2d7] shadow-sm rounded-2xl p-7 relative group hover:bg-[#f5f5f7] transition-colors duration-300"
              >
                {/* Step number */}
                <div
                  className="text-5xl font-bold text-[#1d1d1f]/[0.04] absolute top-5 right-6 select-none transition-transform duration-500 group-hover:scale-110"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.num}
                </div>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[rgba(0,113,227,0.1)] border border-[rgba(0,113,227,0.1)] flex items-center justify-center text-[#0071e3] mb-6 group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>

                <h3
                  className="text-lg font-bold mb-3 group-hover:text-[#0071e3] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed mb-5">{step.desc}</p>

                {/* Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
                >
                  {step.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariants}
                      className="text-xs px-2.5 py-1 rounded-full bg-[rgba(0,113,227,0.1)] border border-[rgba(0,113,227,0.1)] text-[#0071e3]/80"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
