"use client";

import { Zap, Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "AI & Automation", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
    { label: "Enterprise Solutions", href: "#services" },
    { label: "Product Engineering", href: "#services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  { icon: <Github size={16} />, href: "#" },
  { icon: <Linkedin size={16} />, href: "#" },
  { icon: <Twitter size={16} />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#d2d2d7] pt-16 pb-8 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#0071e3] opacity-[0.03] blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-[#0071e3] flex items-center justify-center">
                <Zap size={16} className="text-black fill-black" />
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                DAFT <span className="text-[#0071e3]">LABS</span>
              </span>
            </a>
            <p className="text-[#6e6e73] text-sm leading-relaxed max-w-xs mb-6">
              Technology Reimagined. We engineer AI-powered systems, automation platforms, and enterprise software for ambitious organizations.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border border-[#d2d2d7] rounded-lg flex items-center justify-center text-[#6e6e73] hover:text-[#0071e3] hover:border-[rgba(0,113,227,0.1)] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p
                className="text-xs font-semibold text-[#6e6e73] mb-5 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {section}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#d2d2d7] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6e6e73] text-xs">
            © {new Date().getFullYear()} DAFT Labs. All rights reserved.
          </p>
          <p className="text-[#6e6e73] text-xs">
            Built with precision · Coimbatore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
