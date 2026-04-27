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
        className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#0071e3] blur-[130px] pointer-events-none" 
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
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            One Platform.{" "}
            <span className="text-[#0071e3]">Every Operation.</span>
          </h2>
          <p className="text-[#6e6e73] max-w-xl mx-auto text-base">
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
            <div className="inline-flex items-center gap-2 bg-[rgba(0,113,227,0.1)] border border-[rgba(0,113,227,0.1)] rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#0071e3] tracking-wide">DAFT ERP</span>
              <span className="text-xs text-[#6e6e73]">— Enterprise Resource Planning</span>
            </div>

            <h3
              className="text-3xl font-bold mb-5 leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Business Intelligence,
              <br />
              Built Into Your Workflow
            </h3>
            <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
              DAFT ERP is not another bloated enterprise system with a 12-month implementation
              timeline. It&apos;s a modular, configurable platform that fits your existing
              processes — while making them dramatically faster, more accurate, and easier to
              manage. Built on a modern cloud-native stack, it scales with you from 10 to 10,000
              employees.
            </p>
            <p className="text-[#6e6e73] text-sm leading-relaxed mb-8">
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
                    className="text-[#0071e3] flex-shrink-0"
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
                    className="text-sm text-[#6e6e73]"
                  >
                    {point}
                  </motion.span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 btn-primary px-7 py-3.5 text-sm w-fit inline-block"
              style={{ fontFamily: "var(--font-display)" }}
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
                  className="bg-white border border-[#d2d2d7] shadow-sm rounded-xl p-4 group hover:bg-[#f5f5f7] transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#0071e3]">{f.icon}</span>
                    <span
                      className="text-xs font-semibold group-hover:text-[#0071e3] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {f.label}
                    </span>
                  </div>
                  <p className="text-[#6e6e73] text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
