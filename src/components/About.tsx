"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Cpu, Users, Globe } from "lucide-react";

const capabilities = [
  {
    icon: <Cpu size={18} className="text-[#0071e3]" />,
    title: "AI-First Engineering",
    desc: "Every system we build has intelligence at its core — not as an add-on, but as a foundation.",
  },
  {
    icon: <ShieldCheck size={18} className="text-[#0071e3]" />,
    title: "Production-Grade Quality",
    desc: "Code that ships. Systems that scale. No shortcuts, no compromise.",
  },
  {
    icon: <Users size={18} className="text-[#0071e3]" />,
    title: "True Partnership",
    desc: "We embed with your team, understand your domain, and care about outcomes — not just deliverables.",
  },
  {
    icon: <Globe size={18} className="text-[#0071e3]" />,
    title: "End-to-End Capability",
    desc: "From architecture and design to deployment and maintenance — one team, full ownership.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Ambient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#0071e3] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4">Who We Are</p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Engineering with{" "}
              <span className="text-[#0071e3]">Intent.</span>
              <br />
              Building for{" "}
              <span className="text-[#0071e3]">Decades.</span>
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
              DAFT Labs is a product and technology company built for the era of intelligent
              software. We don't just write code — we design systems that think, automate
              processes that drain resources, and build platforms that give your business
              an unfair advantage.
            </p>
            <p className="text-[#6e6e73] text-sm leading-relaxed">
              Based in Coimbatore, India, our team of engineers and architects works with
              startups and enterprises alike — helping them move faster, operate leaner,
              and build technology that compounds in value over time.
            </p>

            <div className="mt-10 flex gap-8">
              {[
                { num: "5+", label: "Years of Experience" },
                { num: "20+", label: "Engineers" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-bold text-[#0071e3]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-xs text-[#6e6e73] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
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
                <div className="w-9 h-9 rounded-lg bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border border-[rgba(0,113,227,0.1)] flex items-center justify-center flex-shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <h3
                    className="font-semibold text-sm mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
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
