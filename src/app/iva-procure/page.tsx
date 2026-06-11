import { Metadata } from "next";
import { 
  FileText, CheckCircle, Users, ShoppingCart, 
  PackageCheck, Receipt, BarChart3, ExternalLink,
  PlayCircle, ArrowRight, LayoutDashboard,
  Zap, Eye, TrendingUp, PieChart, MousePointerClick,
  FileEdit, CheckSquare, Package, LineChart, ArrowDown
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IVA Procure | Procurement Management Platform by DAFT Labs",
  description: "Procurement Management Platform for modern businesses. Manage purchase requests, approvals, vendors, POs, and invoices from a single platform.",
};

const workflowSteps = [
  { id: 1, title: "Purchase Request", desc: "Initiate material requests easily.", icon: <FileEdit size={24} /> },
  { id: 2, title: "Approval Workflow", desc: "Automated routing and sign-offs.", icon: <CheckSquare size={24} /> },
  { id: 3, title: "Vendor Evaluation", desc: "Compare and select the best vendor.", icon: <Users size={24} /> },
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
  { icon: <Receipt size={24} />, title: "Invoices", desc: "Process and verify vendor invoices easily." },
  { icon: <BarChart3 size={24} />, title: "Reports", desc: "Generate actionable procurement analytics." },
];

export default function IvaProcurePage() {
  const DEMO_URL = "https://iva-procure-demo.vercel.app/";

  const scrollToWorkflow = () => {
    const workflowSection = document.getElementById("procurement-workflow");
    if (workflowSection) {
      workflowSection.scrollIntoView({ behavior: "smooth" });
    }
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
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Procurement Management Platform for modern businesses</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-[var(--text-primary)] leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Control Procurement <br className="hidden md:block" /> From Request To Payment
          </h1>
          
          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            IVA Procure helps teams manage purchase requests, approvals, vendors, purchase orders, invoices, and procurement analytics from one centralized platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
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
            <div className="flex items-center min-w-max md:min-w-0 md:flex-wrap md:justify-center gap-y-12">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
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
                    <div className="md:hidden flex px-4 text-[var(--border)]">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Modules Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Platform Modules
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto md:mx-0">Dedicated tools for every step of the procurement process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((m, i) => (
              <div key={i} className="bg-[var(--surface-primary)] border border-[var(--border)] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/30 transition-colors group">
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

      {/* 4. Demo CTA Section */}
      <section className="py-32 relative overflow-hidden bg-[var(--surface-primary)] border-y border-[var(--border)]">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Explore IVA Procure
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl mx-auto">
            Experience a realistic procurement workflow using sample data.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6">
            <a 
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center gap-2 justify-center w-full sm:w-auto shadow-lg shadow-blue-500/20"
            >
              Launch Interactive Demo <ExternalLink size={18} />
            </a>
            
            <p className="text-sm text-[var(--text-muted)] max-w-md mt-4">
              Demo environment uses fictional sample data.<br/>
              No customer, vendor, financial, or company information is displayed.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
