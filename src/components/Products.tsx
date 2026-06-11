"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import * as Tabs from "@radix-ui/react-tabs";
import { BarChart3, Package, Users, Truck, FileText, Settings, Workflow, Cloud, Shield } from "lucide-react";

// --- Components ---

const CardSpotlight = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,.12), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

const AnimatedList = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

const StatCounter = ({ end, label }: { end: number; label: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? end : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <animated.div className="font-mono text-4xl md:text-5xl font-bold text-[var(--accent)] mb-1">
        {number.to(n => n.toFixed(0))}
      </animated.div>
      <div className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase font-semibold">
        {label}
      </div>
    </div>
  );
};

// --- Data ---

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

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDemoModalOpen(false);
    };
    if (isDemoModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isDemoModalOpen]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const orbOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.01, 0.08, 0.01]);

  const headline = "One Platform. Every Operation.";
  const words = headline.split(" ");

  return (
    <section ref={containerRef} id="products" className="relative py-28 overflow-hidden">
      <motion.div 
        style={{ opacity: orbOpacity }}
        className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[130px] pointer-events-none" 
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Our Products</p>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-[var(--text-primary)]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {}
            }}
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                className={`inline-block mr-2 ${w.includes("Operation") ? "text-[var(--accent)]" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                {w}
              </motion.span>
            ))}
          </motion.h2>

          {/* Stat Bar */}
          <div className="flex items-center justify-center gap-8 md:gap-16 mb-8 w-full">
            <StatCounter end={8} label="Modules" />
            <div className="w-px h-12 bg-[var(--border)]"></div>
            <StatCounter end={1} label="Platform" />
            <div className="w-px h-12 bg-[var(--border)]"></div>
            <StatCounter end={4} label="Weeks to Live" />
          </div>

          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base leading-relaxed">
            DAFT ERP is a fully integrated, modular enterprise platform designed to unify your business operations. 
            Built on a modern cloud-native stack, it scales effortlessly while cutting implementation time to weeks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-[var(--accent-subtle)] border border-[var(--border-accent)] rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[var(--accent)] tracking-wide">DAFT ERP</span>
            </div>

            <h3
              className="text-3xl font-bold mb-6 leading-snug text-[var(--text-primary)]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Business Intelligence,
              <br />
              Built Into Your Workflow
            </h3>
            
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
              Every module is connected, every report is live, and every workflow can be
              customized. From the factory floor to the finance
              team, DAFT ERP gives every stakeholder exactly what they need.
            </p>

            {/* Radix Tabs */}
            <Tabs.Root defaultValue="modular" className="w-full">
              <Tabs.List className="flex flex-wrap gap-2 md:gap-4 border-b border-[var(--border)] mb-5 pb-0">
                <Tabs.Trigger value="modular" className="text-sm font-medium px-1 py-2 border-b-2 border-transparent data-[state=active]:border-[var(--accent)] text-[var(--text-muted)] data-[state=active]:text-[var(--accent)] transition-all">
                  Modular
                </Tabs.Trigger>
                <Tabs.Trigger value="cloud" className="text-sm font-medium px-1 py-2 border-b-2 border-transparent data-[state=active]:border-[var(--accent)] text-[var(--text-muted)] data-[state=active]:text-[var(--accent)] transition-all">
                  Cloud-Native
                </Tabs.Trigger>
                <Tabs.Trigger value="roles" className="text-sm font-medium px-1 py-2 border-b-2 border-transparent data-[state=active]:border-[var(--accent)] text-[var(--text-muted)] data-[state=active]:text-[var(--accent)] transition-all">
                  Security
                </Tabs.Trigger>
              </Tabs.List>
              
              <Tabs.Content value="modular" className="text-sm text-[var(--text-secondary)] leading-relaxed min-h-[60px]">
                <div className="flex gap-3 items-start">
                  <Package className="text-[var(--accent)] shrink-0 mt-0.5" size={18} />
                  <p>Adopt one module or all eight. Seamlessly expand functionality as your operational needs evolve.</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="cloud" className="text-sm text-[var(--text-secondary)] leading-relaxed min-h-[60px]">
                <div className="flex gap-3 items-start">
                  <Cloud className="text-[var(--accent)] shrink-0 mt-0.5" size={18} />
                  <p>Reliable cloud-native infrastructure ensures global availability with robust offline capabilities.</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="roles" className="text-sm text-[var(--text-secondary)] leading-relaxed min-h-[60px]">
                <div className="flex gap-3 items-start">
                  <Shield className="text-[var(--accent)] shrink-0 mt-0.5" size={18} />
                  <p>Enterprise-grade role-based access control combined with detailed audit logs for compliance.</p>
                </div>
              </Tabs.Content>
            </Tabs.Root>

            <a
              href="#contact"
              className="mt-8 btn-primary px-7 py-3.5 text-sm w-fit inline-block"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Request a Demo
            </a>
          </motion.div>

          {/* Right: Feature Grid with AnimatedList and CardSpotlight */}
          <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
            {features.map((f, i) => (
              <CardSpotlight
                key={f.label}
                className="bg-[var(--surface-primary)] border border-[var(--border)] rounded-xl p-4 h-full"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[var(--accent)]">{f.icon}</span>
                  <span
                    className="text-xs font-semibold text-[var(--text-primary)]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {f.label}
                  </span>
                </div>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">{f.desc}</p>
              </CardSpotlight>
            ))}
          </AnimatedList>
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
              A procurement management platform for requests, approvals, vendors, purchase orders, invoices, and reports.
            </p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-2xl">
              IVA Procure helps teams manage purchase requests, approvals, vendors, purchase orders, invoices, and procurement visibility from one clean workflow.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="bg-blue-900/40 text-blue-300 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">Includes workflow walkthrough</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 w-full justify-center shadow-lg shadow-blue-500/20"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Start Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l14 9-14 9V3z"></path></svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          aria-labelledby="modal-title" 
          role="dialog" 
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsDemoModalOpen(false)}
          ></div>
          
          {/* Modal Panel */}
          <div className="relative bg-[#081220] border border-blue-500/30 rounded-2xl shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] w-full max-w-5xl overflow-hidden flex flex-col z-10 max-h-[90vh]">
            {/* Header */}
            <div className="px-6 py-4 border-b border-[rgba(255,255,255,0.08)] flex justify-between items-center bg-[#0B1727]">
              <div>
                <h3 id="modal-title" className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  IVA Procure Workflow Demo
                </h3>
                <p className="text-sm text-[#94A3B8]">
                  Watch the complete procurement workflow using fictional sample data.
                </p>
              </div>
              <button 
                onClick={() => setIsDemoModalOpen(false)}
                className="text-gray-400 hover:text-white bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] rounded-lg p-2 transition-colors focus:outline-none"
              >
                <span className="sr-only">Close</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Iframe Container */}
            <div className="relative w-full aspect-video bg-[#081220]">
              <iframe
                src="/iva_procure_demo.html"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                title="IVA Procure Workflow Walkthrough"
              />
            </div>
            
            {/* Footer / Notice */}
            <div className="px-6 py-3 bg-[#0B1727] border-t border-[rgba(255,255,255,0.08)]">
              <p className="text-xs text-[#64748B] flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                This walkthrough uses fictional sample data only. No real client, vendor, employee, financial, invoice, or purchase order data is displayed.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
