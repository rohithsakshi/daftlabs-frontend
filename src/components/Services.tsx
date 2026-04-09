"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Bot, Cloud, Building2, Rocket, Code2, Lightbulb,
  TestTube2, Headphones, X, CheckCircle2, ChevronRight
} from "lucide-react";

type Service = {
  icon: React.ReactNode;
  title: string;
  short: string;
  detail: string;
  bullets: string[];
};

const services: Service[] = [
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
      "We help founders and product teams go from concept to market with speed and precision. Our MVP process is structured to validate assumptions early, eliminate waste, and ship something users actually want — without burning your runway.",
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
      "Great software requires ongoing care. We offer structured maintenance plans that cover bug resolution, security patching, feature iterations, and proactive monitoring — so you can focus on growing your business, not babysitting your stack.",
    bullets: [
      "SLA-backed bug fixes & incident response",
      "Security patches & dependency updates",
      "Feature development & enhancements",
      "24/7 monitoring & alerting",
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0071e3] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">What We Do</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Services Built for{" "}
            <span className="text-[#0071e3]">Real Scale</span>
          </h2>
          <p className="text-[#6e6e73] max-w-xl mx-auto text-base">
            Eight focused disciplines. One team that owns the outcome.
            Click any service to go deeper.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((svc) => (
            <motion.button
              key={svc.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              onClick={() => setSelected(svc)}
              className="bg-white border border-[#d2d2d7] shadow-sm rounded-2xl p-7 text-left group hover:bg-[#f5f5f7] transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,113,227,0.1)] hover:border-[rgba(0,113,227,0.1)]"
            >
              <div className="w-12 h-12 rounded-xl bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border border-[rgba(0,113,227,0.1)] flex items-center justify-center text-[#0071e3] mb-5 group-hover:bg-[rgba(0,113,227,0.1)] group-hover:scale-110 transition-all duration-300">
                {svc.icon}
              </div>
              <h3
                className="font-bold text-[15px] mb-2 group-hover:text-[#0071e3] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {svc.title}
              </h3>
              <p className="text-[#6e6e73] text-xs leading-relaxed mb-4">{svc.short}</p>
              <div className="flex items-center gap-1.5 text-[#0071e3] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:translate-x-1">
                Learn more <ChevronRight size={14} />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Side Panel / Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border-l border-[#d2d2d7] z-50 overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border border-[rgba(0,113,227,0.1)] flex items-center justify-center text-[#0071e3]">
                    {selected.icon}
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors p-1"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {selected.title}
                </h3>
                <p className="text-[#0071e3] text-sm font-medium mb-5">{selected.short}</p>
                <p className="text-[#6e6e73] text-sm leading-relaxed mb-8">{selected.detail}</p>

                <div className="space-y-3">
                  <p className="section-label mb-4">Key Capabilities</p>
                  {selected.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-[#0071e3] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#6e6e73]">{b}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="mt-10 btn-primary w-full py-3.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Discuss This Service <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
