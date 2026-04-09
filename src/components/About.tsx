"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, GitMerge, HeartHandshake } from "lucide-react";

const capabilities = [
  {
    icon: <Code2 size={18} className="text-[#0071e3]" />,
    title: "End-to-End Product Engineering",
    desc: "We own the full build — architecture, backend, frontend, and deployment. No handoffs, no gaps. One team accountable for the entire product.",
  },
  {
    icon: <Zap size={18} className="text-[#0071e3]" />,
    title: "AI & Workflow Automation",
    desc: "We integrate intelligence where it creates real leverage — automating repetitive operations, surfacing insights from data, and reducing manual overhead across your business.",
  },
  {
    icon: <GitMerge size={18} className="text-[#0071e3]" />,
    title: "Direct Access, Zero Bureaucracy",
    desc: "You work with the engineers writing the code — not account managers relaying messages. Decisions move fast because there's no org chart in the way.",
  },
  {
    icon: <HeartHandshake size={18} className="text-[#0071e3]" />,
    title: "Invested Beyond the Invoice",
    desc: "We take on a small number of projects at a time so we can be genuinely invested in each one. Your product's success is the only metric we care about.",
  },
];

const activeProjects = [
  "Suvik — Full-Stack Platform",
  "TNTTA — Management System",
  "Iva Infra — Dual App Suite",
  "Internal ERP Product",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4">Who We Are</p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-6 text-[#1d1d1f]"
            >
              A Small Team.
              <br />
              <span className="text-[#0071e3]">Serious About</span>
              <br />
              What We Build.
            </h2>

            <p className="text-[#6e6e73] text-[17px] leading-relaxed mb-4">
              DAFT Labs is a young software company based in Coimbatore, India.
              We&apos;re a focused team of developers who care deeply about the quality
              and impact of every product we ship.
            </p>

            <p className="text-[#6e6e73] text-[17px] leading-relaxed mb-10">
              Right now we&apos;re actively building across four client projects — and
              learning something new on every one of them. We believe in being
              honest about where we are, and letting our work speak louder than
              our marketing.
            </p>

            {/* Active Projects (Commented out for now) */}
            {/* 
            <div>
              <p
                className="text-xs font-semibold text-[#1d1d1f] tracking-widest uppercase mb-4"
              >
                Currently Building
              </p>
              <div className="flex flex-col gap-3">
                {activeProjects.map((project, i) => (
                  <motion.div
                    key={project}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0071e3] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#1d1d1f]">{project}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            */}
          </motion.div>

          {/* Right: Capability Cards */}
          <div className="grid gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-[#d2d2d7] shadow-sm rounded-xl p-5 flex gap-4 items-start hover:bg-[#f5f5f7] transition-colors duration-300 cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border-[rgba(0,113,227,0.1)] flex items-center justify-center flex-shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3
                    className="font-semibold text-sm mb-1 text-[#1d1d1f]"
                  >
                    {cap.title}
                  </h3>
                  <p className="text-[#6e6e73] text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
