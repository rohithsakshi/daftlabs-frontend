"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, GitMerge, HeartHandshake, ChevronRight, Activity, Cpu, MapPin, Users } from "lucide-react";
import CardSwap, { Card } from "./CardSwap/CardSwap";

const capabilities = [
  {
    icon: <Code2 size={18} className="text-[var(--accent)]" />,
    title: "End-to-End Product Engineering",
    desc: "We own the full build — architecture, backend, frontend, and deployment. No handoffs, no gaps.",
  },
  {
    icon: <Zap size={18} className="text-[var(--accent)]" />,
    title: "AI & Workflow Automation",
    desc: "We integrate intelligence where it creates leverage — automating operations and surfacing insights.",
  },
  {
    icon: <GitMerge size={18} className="text-[var(--accent)]" />,
    title: "Direct Access, Zero Bureaucracy",
    desc: "You work directly with the engineers writing the code. Decisions move fast with no org chart in the way.",
  },
  {
    icon: <HeartHandshake size={18} className="text-[var(--accent)]" />,
    title: "Invested Beyond the Invoice",
    desc: "We take on fewer projects so we can be genuinely invested in each. Your success is our primary metric.",
  },
];

const maskRevealVariants = {
  hidden: { y: "100%" },
  visible: { 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div ref={ref} className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-12 lg:gap-16 items-center">

          {/* Left: Text & Stats */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textContainerVariants}
            className="flex flex-col gap-6"
          >
            <div className="overflow-hidden">
              <motion.p variants={maskRevealVariants} className="section-label">Who We Are</motion.p>
            </div>
            
            <div className="overflow-hidden">
              <motion.h2
                variants={maskRevealVariants}
                className="text-4xl md:text-5xl lg:text-[46px] font-black tracking-tighter leading-[1.1] text-[var(--text-primary)]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                A Small Team.
                <br />
                <span className="text-[var(--accent)]">Serious About</span>
                <br />
                What We Build.
              </motion.h2>
            </div>

            <div className="overflow-hidden mt-2">
              <motion.p variants={maskRevealVariants} className="text-[var(--text-secondary)] text-[16px] leading-relaxed">
                DAFT Labs is a focused software engineering team based in Coimbatore, India. We build AI-powered systems, automation platforms, and custom enterprise software for teams that need reliable execution.
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.p variants={maskRevealVariants} className="text-[var(--text-secondary)] text-[16px] leading-relaxed">
                We work with a small number of projects at a time so every build gets direct engineering attention. No handoffs, no inflated process — just thoughtful architecture, clean delivery, and software that solves real business problems.
              </motion.p>
            </div>

            {/* Compact Stats Row */}
            <motion.div variants={maskRevealVariants} className="grid grid-cols-2 gap-y-4 gap-x-2 mt-4 pt-6 border-t border-[rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-[var(--accent)] opacity-80" />
                <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wide">4+ Active Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} className="text-[var(--accent)] opacity-80" />
                <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wide">100% Engineering-Led</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-[var(--accent)] opacity-80" />
                <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wide">AI + Automation Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[var(--accent)] opacity-80" />
                <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wide">Coimbatore, India</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right: CardSwap Interaction */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative w-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0 h-[450px]"
          >
            <div className="relative w-[380px] h-[310px] scale-[0.85] sm:scale-100 transform origin-center lg:origin-right">
              <CardSwap
                width={380}
                height={310}
                cardDistance={35}
                verticalDistance={42}
                delay={4500}
                pauseOnHover={true}
                skewAmount={2}
                easing="elastic"
              >
                {capabilities.map((cap, i) => (
                  <Card 
                    key={i} 
                    className="p-6 md:p-7 flex flex-col justify-between group bg-[rgba(15,23,42,0.92)] border-[rgba(255,255,255,0.08)] hover:border-[rgba(37,99,235,0.4)] transition-colors duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 to-transparent rounded-[24px] pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4 md:mb-5">
                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.15)] flex items-center justify-center transition-colors group-hover:bg-[rgba(37,99,235,0.15)] group-hover:border-[rgba(37,99,235,0.3)]">
                          {cap.icon}
                        </div>
                        <span className="text-[10px] font-bold text-[#64748B] font-mono tracking-widest uppercase">
                          0{i + 1}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-[19px] font-bold mb-2 text-[#F8FAFC] leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {cap.title}
                      </h3>
                      
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-[#94A3B8] flex-grow">
                        {cap.desc}
                      </p>

                      <div className="mt-4 pt-4 md:mt-5 md:pt-4 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#3B82F6]">
                          Explore
                        </span>
                        <ChevronRight size={14} className="text-[#3B82F6] transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
