"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 400);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[200px] bg-[#0071e3] opacity-[0.04] blur-[80px] pointer-events-none rounded-full" />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Get In Touch</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Build Something{" "}
            <span className="text-[#0071e3]">Remarkable</span>
          </h2>
          <p className="text-[#6e6e73] max-w-lg mx-auto text-base">
            Have a project in mind? A problem to solve? Or just curious about
            what&apos;s possible? We&apos;d love to hear from you. We typically respond within one business day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-white border border-[#d2d2d7] shadow-sm rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[rgba(0,113,227,0.1)] border border-[rgba(0,113,227,0.1)] flex items-center justify-center text-[#0071e3] mb-4">
                <Mail size={18} />
              </div>
              <p className="text-xs text-[#6e6e73] mb-1 font-medium uppercase tracking-wider">Email Us</p>
              <a
                href="mailto:daftlabs.reply@gmail.com"
                className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors font-medium"
              >
                daftlabs.reply@gmail.com
              </a>
            </div>

            <div className="bg-white border border-[#d2d2d7] shadow-sm rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[rgba(0,113,227,0.1)] border border-[rgba(0,113,227,0.1)] flex items-center justify-center text-[#0071e3] mb-4">
                <MapPin size={18} />
              </div>
              <p className="text-xs text-[#6e6e73] mb-1 font-medium uppercase tracking-wider">Location</p>
              <p className="text-sm text-[#1d1d1f] font-medium">Coimbatore, India</p>
              <p className="text-xs text-[#6e6e73] mt-1">Available for remote engagements globally</p>
            </div>

            <div className="bg-white border border-[#d2d2d7] shadow-sm rounded-2xl p-6">
              <p className="text-sm font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>Office Hours</p>
              <p className="text-xs text-[#6e6e73]">Monday – Friday</p>
              <p className="text-xs text-[#6e6e73]">9:00 AM – 6:00 PM IST</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400">Currently accepting new projects</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="bg-white border border-[#d2d2d7] shadow-sm rounded-2xl p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="text-xs text-[#6e6e73] mb-2 block uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#f5f5f7] border border-[#d2d2d7] focus:border-[rgba(0,113,227,0.1)] rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder-white/20 outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#6e6e73] mb-2 block uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@yourcompany.com"
                      className="w-full bg-[#f5f5f7] border border-[#d2d2d7] focus:border-[rgba(0,113,227,0.1)] rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder-white/20 outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#6e6e73] mb-2 block uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project, challenge, or idea..."
                      className="w-full bg-[#f5f5f7] border border-[#d2d2d7] focus:border-[rgba(0,113,227,0.1)] rounded-xl px-4 py-3 text-sm text-[#1d1d1f] placeholder-white/20 outline-none transition-colors duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary py-3.5 text-sm"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Send Message <Send size={15} />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,113,227,0.1)] border border-[rgba(0,113,227,0.1)] flex items-center justify-center mb-5">
                    <CheckCircle2 size={28} className="text-[#0071e3]" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-[#6e6e73] text-sm max-w-xs">
                    Thanks for reaching out. A member of the DAFT Labs team will be in
                    touch within one business day.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
