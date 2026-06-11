"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Bot, Cloud, Building2, Rocket, Code2, Lightbulb,
  TestTube2, Headphones, X, CheckCircle2, ChevronRight
} from "lucide-react";

export interface BentoItem {
  icon: React.ReactNode;
  title: string;
  short: string;
  detail: string;
  bullets: string[];
}

const services: BentoItem[] = [
  {
    icon: <Bot size={22} />,
    title: "Automation, AI & Data",
    short: "Turn repetitive workflows into intelligent, self-running systems.",
    detail:
      "We design and deploy end-to-end AI and automation solutions — from custom ML models and LLM integrations to robotic process automation and real-time data pipelines. Whether you're automating operations or extracting insights from raw data, we build the systems that do it reliably at scale.",
    bullets: [
      "Custom ML model development & deployment",
      "LLM integration & RAG pipelines",
      "RPA for business process automation",
      "Real-time data pipelines & analytics dashboards",
    ],
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud & DevOps",
    short: "Infrastructure that scales with your ambition — not against it.",
    detail:
      "We architect, migrate, and manage cloud environments on AWS, Azure, and GCP. Our DevOps practice brings CI/CD maturity, container orchestration, and infrastructure-as-code to teams that need to ship faster without sacrificing stability.",
    bullets: [
      "Multi-cloud architecture & migration",
      "Kubernetes & container orchestration",
      "CI/CD pipeline design & automation",
      "Infrastructure as Code (Terraform, Pulumi)",
    ],
  },
  {
    icon: <Building2 size={22} />,
    title: "Enterprise Solutions",
    short: "Complex systems, built for organizations that can't afford downtime.",
    detail:
      "Enterprise software demands more — more reliability, more security, more governance. We build integrated platforms, modernize legacy systems, and architect solutions that align with your compliance requirements and long-term roadmap.",
    bullets: [
      "Legacy system modernization",
      "Enterprise integration & API strategy",
      "Security & compliance-first architecture",
      "Scalable microservices & event-driven systems",
    ],
  },
  {
    icon: <Rocket size={22} />,
    title: "Product Engineering & MVP",
    short: "From idea to live product — fast, focused, and fundable.",
    detail:
      "We help founders and product teams go from concept to market with speed and precision. Our MVP process is structured to validate assumptions early, eliminate waste, and ship something users actually want.",
    bullets: [
      "Rapid MVP development in 6–12 weeks",
      "Design sprints & product discovery",
      "Full-stack web & mobile engineering",
      "Iterative shipping with user feedback loops",
    ],
  },
  {
    icon: <Code2 size={22} />,
    title: "Custom Software Development",
    short: "Bespoke software, precision-engineered for your exact use case.",
    detail:
      "When off-the-shelf doesn't cut it, we build exactly what you need. Our engineers work across the full stack to deliver tailor-made applications with clean architecture, test coverage, and documentation that doesn't become a liability.",
    bullets: [
      "Full-stack web application development",
      "API design & backend systems",
      "Mobile app development (iOS & Android)",
      "Clean architecture, code reviews & documentation",
    ],
  },
  {
    icon: <Lightbulb size={22} />,
    title: "IT Consulting",
    short: "Strategic technology guidance from people who've built at scale.",
    detail:
      "Technology decisions made today compound for years. Our consultants bring battle-tested experience in system design, digital transformation, and vendor selection to help you make smart, informed choices — before committing resources.",
    bullets: [
      "Technology stack assessment & selection",
      "Digital transformation roadmapping",
      "Architecture review & risk analysis",
      "CTO-as-a-service for growing teams",
    ],
  },
  {
    icon: <TestTube2 size={22} />,
    title: "QA & Testing",
    short: "Ship with confidence. Break it before your users do.",
    detail:
      "Quality isn't a phase — it's a culture. Our QA team embeds into your development process, building automated test suites, conducting performance audits, and ensuring every release meets a standard your users can depend on.",
    bullets: [
      "Automated testing (unit, integration, E2E)",
      "Performance & load testing",
      "Security vulnerability assessments",
      "QA process design & team training",
    ],
  },
  {
    icon: <Headphones size={22} />,
    title: "Maintenance & Support",
    short: "Post-launch peace of mind. Your tech, always running, always evolving.",
    detail:
      "Great software requires ongoing care. We offer structured maintenance plans that cover bug resolution, security patching, feature iterations, and proactive monitoring — so you can focus on growing your business, not worrying about your stack.",
    bullets: [
      "SLA-backed bug fixes & incident response",
      "Security patches & dependency updates",
      "Feature development & enhancements",
      "24/7 monitoring & alerting",
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState<BentoItem | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-28 overflow-hidden bg-[#081220]">
      {/* Background Ambience */}
      <div className="absolute right-0 top-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[140px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">WHAT WE DO</p>
          <h2
            className="text-4xl md:text-5xl font-black mb-5 text-[var(--text-primary)] tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Services Built for{" "}
            <span className="text-[var(--accent)]">Real Scale</span>
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-[17px] leading-relaxed">
            Eight focused capabilities. One engineering team that owns the outcome.
          </p>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelected(service)}
              className="relative group bg-[#111827] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(59,130,246,0.45)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] min-h-[260px] w-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] flex items-center justify-center text-[#3B82F6] group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:text-blue-400 transition-all duration-300">
                  {service.icon}
                </div>
                <div className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-[10px] font-medium text-[#94A3B8] tracking-wide uppercase">
                  Service
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-3 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {service.title}
              </h3>
              
              <p className="text-[13px] text-[#94A3B8] leading-relaxed flex-grow">
                {service.short}
              </p>
              
              <div className="mt-5 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center text-[13px] font-semibold text-[#3B82F6] transition-colors duration-300 group-hover:text-blue-400">
                View Details 
                <ChevronRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side Panel / Drawer */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[rgba(15,23,42,0.98)] backdrop-blur-2xl border-l border-[rgba(255,255,255,0.08)] z-[110] shadow-2xl flex flex-col"
            >
              <div className="p-6 sm:p-8 flex-grow overflow-y-auto hide-scrollbar flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-[14px] bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] flex items-center justify-center text-[var(--accent)] shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                    {selected.icon}
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-[var(--text-muted)] hover:text-white bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] rounded-full transition-all p-1.5"
                    aria-label="Close panel"
                  >
                    <X size={18} />
                  </button>
                </div>

                <h3
                  className="text-2xl font-bold mb-2 text-[#F8FAFC] leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {selected.title}
                </h3>
                <p className="text-[var(--accent)] text-xs font-bold tracking-wide uppercase mb-4">{selected.short}</p>
                <p className="text-[#94A3B8] text-[13.5px] leading-relaxed mb-6">{selected.detail}</p>

                <div className="space-y-2.5 flex-grow">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-3">Key Capabilities</p>
                  {selected.bullets.map((b, i) => (
                    <motion.div 
                      key={b} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                    >
                      <CheckCircle2 size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                      <span className="text-[13px] text-[#CBD5E1]">{b}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4">
                  <a
                    href="#contact"
                    onClick={() => setSelected(null)}
                    className="btn-primary w-full py-3 block text-center text-[14px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Discuss This Service <ChevronRight size={16} className="inline ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
