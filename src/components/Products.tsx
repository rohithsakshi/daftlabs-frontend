"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, BarChart3, Package, Users, Truck, FileText, Settings, Workflow } from "lucide-react";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#0071e3] opacity-[0.04] blur-[130px] pointer-events-none" />

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
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={15} className="text-[#0071e3] flex-shrink-0" />
                  <span className="text-sm text-[#6e6e73]">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 btn-primary px-7 py-3.5 text-sm w-fit"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request a Demo
            </a>
          </motion.div>

          {/* Right: Feature Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
