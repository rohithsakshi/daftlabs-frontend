"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { BarChart3, Package, Users, Truck, FileText, Settings, Workflow } from "lucide-react";

const features = [
  { icon: <BarChart3 size={16} />, label: "Financial Management", desc: "Accounts, payroll, tax, and audit — automated end to end." },
  { icon: <Package size={16} />, label: "Inventory & Warehouse", desc: "Real-time stock tracking, reordering triggers, and multi-location support." },
  { icon: <Users size={16} />, label: "HR & Attendance", desc: "Employee lifecycle, leave management, and attendance integration." },
  { icon: <Truck size={16} />, label: "Supply Chain & Procurement", desc: "Vendor management, PO workflows, and delivery tracking in one place." },
  { icon: <FileText size={16} />, label: "Sales & CRM", desc: "Lead pipelines, quotations, invoicing, and customer history." },
  { icon: <Settings size={16} />, label: "Production & Manufacturing", desc: "Work orders, BOM management, and quality control workflows." },
  { icon: <Workflow size={16} />, label: "Custom Workflow Builder", desc: "Drag-and-drop process automation tailored to your operations." },
  { icon: <BarChart3 size={16} />, label: "Analytics & Reporting", desc: "Live dashboards and scheduled reports across every module." },
];

export default function Products() {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const orbOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.01, 0.08, 0.01]);

  return (
    <section ref={containerRef} id="products" className="relative py-28 overflow-hidden">
      <motion.div 
        style={{ opacity: orbOpacity }}
        className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[130px] pointer-events-none" 
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Our Products</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5 text-[var(--text-primary)]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            One Platform.{" "}
            <span className="text-[var(--accent)]">Every Operation.</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-base">
            Introducing DAFT ERP — a fully integrated enterprise platform
            designed to unify your business operations under a single intelligent roof.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-[var(--accent-subtle)] border border-[var(--border-accent)] rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[var(--accent)] tracking-wide">DAFT ERP</span>
              <span className="text-xs text-[var(--text-muted)]">— Enterprise Resource Planning</span>
            </div>

            <h3
              className="text-3xl font-bold mb-5 leading-snug text-[var(--text-primary)]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Business Intelligence,
              <br />
              Built Into Your Workflow
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
              DAFT ERP is not another bloated enterprise system with a 12-month implementation
              timeline. It&apos;s a modular, configurable platform that fits your existing
              processes — while making them dramatically faster, more accurate, and easier to
              manage. Built on a modern cloud-native stack, it scales with you from 10 to 10,000
              employees.
            </p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
              Every module is connected, every report is live, and every workflow can be
              customized — without calling a developer. From the factory floor to the finance
              team, DAFT ERP gives every stakeholder exactly what they need, exactly when they
              need it.
            </p>

            <div className="flex flex-col gap-2">
              {[
                "Modular — adopt one module or all eight",
                "Cloud-native with offline capability",
                "Role-based access control & audit logs",
                "Implementation in weeks, not months",
              ].map((point, index) => (
                <div key={point} className="flex items-center gap-3">
                  <motion.svg 
                    width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
                    className="text-[var(--accent)] flex-shrink-0"
                  >
                    <motion.circle 
                      cx="12" cy="12" r="10" 
                      initial={{ pathLength: 0, opacity: 0 }} 
                      animate={inView ? { pathLength: 1, opacity: 1 } : {}} 
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} 
                    />
                    <motion.path 
                      d="m9 12 2 2 4-4" 
                      initial={{ pathLength: 0, opacity: 0 }} 
                      animate={inView ? { pathLength: 1, opacity: 1 } : {}} 
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }} 
                    />
                  </motion.svg>
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="text-sm text-[var(--text-secondary)]"
                  >
                    {point}
                  </motion.span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 btn-primary px-7 py-3.5 text-sm w-fit inline-block"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Request a Demo
            </a>
          </motion.div>

          {/* Right: Feature Grid with Waterfall cascade */}
          <div className="grid grid-cols-2 gap-3 relative z-10">
            {features.map((f, i) => {
              const row = Math.floor(i / 2);
              const col = i % 2;
              const delay = 0.2 + (row + col) * 0.12;

              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay, type: "spring", stiffness: 100, damping: 15 }}
                  className="bg-[var(--surface-primary)] border border-[var(--border)] rounded-xl p-4 group hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)] transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[var(--accent)]">{f.icon}</span>
                    <span
                      className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {f.label}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* New Product Card: IVA Procure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-[var(--surface-primary)] border border-blue-500/20 rounded-2xl p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
          
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-blue-400 tracking-wide">Procurement Application</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[var(--text-primary)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              IVA Procure
            </h3>
            <p className="text-[var(--text-primary)] font-medium mb-2">
              A procurement and purchase order management system for modern teams.
            </p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-2xl">
              IVA Procure helps teams manage purchase requests, approvals, vendors, purchase orders, and procurement visibility from one clean workflow.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="flex flex-col items-center gap-1">
              <button 
                onClick={() => window.open(process.env.NEXT_PUBLIC_IVA_PROCURE_DEMO_URL || "#", "_blank")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 w-full justify-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Start Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </button>
              <span className="text-[10px] text-[var(--text-muted)]">Demo uses sample data only.</span>
            </div>
            <a 
              href="/iva-procure"
              className="bg-transparent hover:bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-primary)] px-6 py-3 rounded-lg text-sm font-medium transition-all w-full text-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              View Procurement Module
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
