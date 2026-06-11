"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#3B82F6', '#60A5FA']
    });
  };

  const infoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  const formInputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[200px] bg-[var(--accent)] opacity-[0.04] blur-[80px] pointer-events-none rounded-full" />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Get In Touch</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5 text-[var(--text-primary)]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Let&apos;s Build Something{" "}
            <span className="text-[var(--accent)]">Remarkable</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto text-base">
            Have a project in mind? A problem to solve? Or just curious about
            what&apos;s possible? We&apos;d love to hear from you. We typically respond within one business day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Info */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <motion.div variants={infoVariants} className="bg-[var(--surface-primary)] border border-[var(--border)] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--accent)] mb-4">
                <Mail size={18} />
              </div>
              <p className="text-xs text-[var(--text-muted)] mb-1 font-medium uppercase tracking-wider">Email Us</p>
              <a
                href="mailto:daftlabs.reply@gmail.com"
                className="text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-medium"
              >
                daftlabs.reply@gmail.com
              </a>
            </motion.div>

            <motion.div variants={infoVariants} className="bg-[var(--surface-primary)] border border-[var(--border)] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] border border-[var(--border-accent)] flex items-center justify-center text-[var(--accent)] mb-4">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin size={18} />
                </motion.div>
              </div>
              <p className="text-xs text-[var(--text-muted)] mb-1 font-medium uppercase tracking-wider">Location</p>
              <p className="text-sm text-[var(--text-primary)] font-medium">Coimbatore, India</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Available for remote engagements globally</p>
            </motion.div>

            <motion.div variants={infoVariants} className="bg-[var(--surface-primary)] border border-[var(--border)] rounded-2xl p-6">
              <p className="text-sm font-semibold mb-2 text-[var(--text-primary)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Office Hours</p>
              <p className="text-xs text-[var(--text-muted)]">Monday – Saturday</p>
              <p className="text-xs text-[var(--text-muted)]">9:00 AM – 6:00 PM IST</p>
              <div className="flex items-center gap-2 mt-3">
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }} 
                  transition={{ repeat: Infinity, duration: 2 }} 
                  className="w-2 h-2 rounded-full bg-emerald-400" 
                />
                <span className="text-xs text-emerald-400">Currently accepting new projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="bg-[var(--surface-primary)] border border-[var(--border)] rounded-2xl p-8">
              {!submitted ? (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-5"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                >
                  <motion.div variants={formInputVariants}>
                    <label htmlFor="contact-name" className="text-xs text-[var(--text-muted)] mb-2 block uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 outline-none transition-colors duration-200"
                    />
                  </motion.div>
                  <motion.div variants={formInputVariants}>
                    <label htmlFor="contact-email" className="text-xs text-[var(--text-muted)] mb-2 block uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@yourcompany.com"
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 outline-none transition-colors duration-200"
                    />
                  </motion.div>
                  <motion.div variants={formInputVariants}>
                    <label htmlFor="contact-message" className="text-xs text-[var(--text-muted)] mb-2 block uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project, challenge, or idea..."
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 outline-none transition-colors duration-200 resize-none"
                    />
                  </motion.div>
                  <motion.button
                    variants={formInputVariants}
                    type="submit"
                    className="btn-primary py-3.5 text-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Send Message <Send size={15} />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-accent)] flex items-center justify-center mb-5">
                    <CheckCircle2 size={28} className="text-[var(--accent)]" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3 text-[var(--text-primary)]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm max-w-xs">
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
