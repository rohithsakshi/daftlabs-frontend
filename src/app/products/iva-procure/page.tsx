import { Metadata } from "next";
import { 
  FileText, CheckCircle, Users, ShoppingCart, 
  Receipt, BarChart3, ExternalLink,
  ArrowRight, LayoutDashboard,
  FileEdit, CheckSquare, Package, LineChart, ArrowDown,
  Clock, Eye, Search, DollarSign, Activity
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IVA Procure | Procurement Management Platform by DAFT Labs",
  description: "Explore IVA Procure, a procurement management platform for purchase requests, approvals, vendors, purchase orders, invoices, and reporting.",
};

const workflowSteps = [
  { id: 1, title: "Purchase Request", desc: "Initiate material requests easily.", icon: <FileEdit size={24} /> },
  { id: 2, title: "Approval Workflow", desc: "Automated routing and sign-offs.", icon: <CheckSquare size={24} /> },
  { id: 3, title: "Vendor Selection", desc: "Compare and select the best vendor.", icon: <Users size={24} /> },
  { id: 4, title: "Purchase Order", desc: "Generate and send POs instantly.", icon: <ShoppingCart size={24} /> },
  { id: 5, title: "Goods Receipt", desc: "Track incoming materials.", icon: <Package size={24} /> },
  { id: 6, title: "Invoice Matching", desc: "3-way matching for accuracy.", icon: <Receipt size={24} /> },
  { id: 7, title: "Reporting", desc: "Gain insights into spend data.", icon: <LineChart size={24} /> },
];

const modules = [
  { icon: <LayoutDashboard size={24} />, title: "Dashboard", desc: "Get a high-level overview of procurement activities." },
  { icon: <FileText size={24} />, title: "Purchase Requests", desc: "Streamline material and service requests from teams." },
  { icon: <CheckCircle size={24} />, title: "Approvals", desc: "Manage multi-level approval hierarchies efficiently." },
  { icon: <Users size={24} />, title: "Vendors", desc: "Maintain a centralized vendor master database." },
  { icon: <ShoppingCart size={24} />, title: "Purchase Orders", desc: "Create, track, and manage all your POs." },
  { icon: <Package size={24} />, title: "Goods Receipt", desc: "Log and verify incoming material deliveries." },
  { icon: <Receipt size={24} />, title: "Invoices", desc: "Process and verify vendor invoices easily." },
  { icon: <BarChart3 size={24} />, title: "Reports", desc: "Generate actionable procurement analytics." },
];

const benefits = [
  { icon: <Clock className="text-blue-400 mb-4" size={32} />, title: "Faster approvals", desc: "Speed up procurement with automated multi-level routing." },
  { icon: <Eye className="text-blue-400 mb-4" size={32} />, title: "Clear PO visibility", desc: "Track every purchase order from creation to fulfillment." },
  { icon: <Users className="text-blue-400 mb-4" size={32} />, title: "Better vendor control", desc: "Centralize your vendor master and performance data." },
  { icon: <Activity className="text-blue-400 mb-4" size={32} />, title: "Reduced manual follow-ups", desc: "Automated status updates keep everyone in the loop." },
  { icon: <Search className="text-blue-400 mb-4" size={32} />, title: "Invoice matching visibility", desc: "Ensure you only pay for what was ordered and received." },
  { icon: <DollarSign className="text-blue-400 mb-4" size={32} />, title: "Procurement reporting", desc: "Analyze spend patterns with built-in analytics." },
];

export default function IvaProcurePage() {
  const DEMO_URL = "https://iva-procure-demo.vercel.app/";

  const scrollToWorkflow = () => {
    const workflowSection = document.getElementById("walkthrough-embed");
    if (workflowSection) {
      workflowSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Procurement Automation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-[var(--text-primary)] leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Control Procurement <br className="hidden md:block" /> From Request To Payment
          </h1>
          
          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            IVA Procure helps teams manage purchase requests, approvals, vendors, purchase orders, invoices, and reporting from one centralized workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a 
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-blue-500/20"
            >
              Launch Interactive Demo <ExternalLink size={18} />
            </a>
            <button 
              onClick={scrollToWorkflow}
              className="bg-[var(--surface-primary)] hover:bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-primary)] px-8 py-3.5 rounded-lg font-medium transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <ArrowDown size={18} className="text-blue-400 group-hover:translate-y-1 transition-transform" />
              Watch Workflow
            </button>
          </div>
          <p className="text-xs text-[var(--text-muted)]">Demo uses fictional sample data only.</p>
        </div>
      </section>

      {/* 2. Procurement Workflow Section */}
      <section id="procurement-workflow" className="py-24 bg-[var(--surface-primary)] border-y border-[var(--border)] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Visual Procurement Lifecycle
            </h2>
            <p className="text-[var(--text-secondary)]">A seamless, end-to-end journey from request to payment.</p>
          </div>

          <div className="overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex flex-col md:flex-row items-center min-w-max md:min-w-0 md:flex-wrap md:justify-center gap-y-12">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col md:flex-row items-center">
                  <div className="group relative flex flex-col items-center text-center w-32 md:w-40 hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center text-blue-400 mb-4 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all relative z-10">
                      {step.icon}
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">{step.title}</h3>
                    <p className="text-xs text-[var(--text-muted)] leading-tight px-2">{step.desc}</p>
                  </div>
                  
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:flex w-8 md:w-12 h-px bg-[var(--border)] relative mx-2">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-[var(--border)] rotate-45" />
                    </div>
                  )}
                  {index < workflowSteps.length - 1 && (
                    <div className="md:hidden flex py-4 text-[var(--border)]">
                      <ArrowDown size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HTML Walkthrough Embed Section */}
      <section id="walkthrough-embed" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              See IVA Procure In Action
            </h2>
            <p className="text-[var(--text-secondary)]">Watch a complete procurement workflow from request creation to invoice matching and reporting.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="/iva_procure_demo.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--surface-primary)] hover:bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-primary)] px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            >
              Open Walkthrough <ExternalLink size={16} />
            </a>
            <a 
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              Launch Interactive Demo <ExternalLink size={16} />
            </a>
          </div>

          {/* Browser Frame */}
          <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-primary)] shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)]">
            <div className="bg-[var(--bg-primary)] px-4 py-3 border-b border-[var(--border)] flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="bg-[var(--surface-primary)] px-4 py-1 rounded text-xs text-[var(--text-secondary)] font-medium font-mono border border-[var(--border)]">
                IVA Procure Workflow Demo
              </div>
            </div>
            <div className="relative w-full aspect-video">
              <iframe
                src="/iva_procure_demo.html"
                className="absolute inset-0 w-full h-full border-0 bg-[var(--bg-primary)]"
                loading="lazy"
                allowFullScreen
                title="IVA Procure Workflow Walkthrough"
              />
            </div>
          </div>
          
          <div className="mt-8 text-center bg-[var(--surface-primary)] border border-[var(--border)] rounded-lg p-4">
            <p className="text-sm text-[var(--text-secondary)]">
              This walkthrough uses fictional sample data and does not contain any client, vendor, employee, financial, or production information.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Modules Section */}
      <section className="py-24 relative bg-[var(--surface-primary)] border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Platform Modules
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto md:mx-0">Dedicated tools for every step of the procurement process.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, i) => (
              <div key={i} className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-[var(--text-secondary)] group-hover:text-blue-400 transition-colors mb-4">
                  {m.icon}
                </div>
                <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {m.title}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Business Benefits
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Streamline operations and maintain total control over your procurement spending.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[var(--surface-primary)] border border-[var(--border)] hover:border-blue-500/20 transition-all">
                {b.icon}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{b.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-32 relative overflow-hidden bg-[var(--surface-primary)] border-y border-[var(--border)]">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Ready to explore IVA Procure?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto">
            Try the interactive demo or talk to DAFT Labs about building procurement automation for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center gap-2 justify-center w-full sm:w-auto shadow-lg shadow-blue-500/20"
            >
              Launch Interactive Demo <ExternalLink size={18} />
            </a>
            
            <button 
              onClick={scrollToContact}
              className="bg-transparent hover:bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-medium transition-all w-full sm:w-auto"
            >
              Schedule Consultation
            </button>
          </div>
          
          <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto mt-8">
            Demo and walkthrough use fictional sample data only. No real client, vendor, employee, invoice, purchase order, or company data is displayed.
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
