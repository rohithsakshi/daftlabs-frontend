"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

const QUICK_REPLIES = [
  "What services do you offer?",
  "Tell me about your ERP product",
  "How do I get started?",
  "What's your tech stack?",
];

const BOT_RESPONSES: Record<string, string> = {
  default:
    "Great question! For a detailed answer, please reach out to our team at daftlabs.reply@gmail.com or use the contact form on this page. We typically respond within one business day.",
  services:
    "DAFT Labs offers 8 core services: AI & Automation, Cloud & DevOps, Enterprise Solutions, Product Engineering & MVP, Custom Software Development, IT Consulting, QA & Testing, and Maintenance & Support.",
  erp: "DAFT ERP is our flagship product — a modular, cloud-native enterprise platform covering Finance, Inventory, HR, Supply Chain, Sales CRM, Production, and more. Implementations typically take weeks, not months. Want to schedule a demo?",
  started:
    "Getting started is easy! Use the contact form on this page, or email us directly at daftlabs.reply@gmail.com. We'll schedule a free discovery call to understand your needs.",
  stack:
    "We work across a wide range: React/Next.js, Node.js, Python, Go on the backend; AWS/GCP/Azure for cloud; Kubernetes & Terraform for DevOps; and PyTorch/TensorFlow for AI/ML.",
};

function getBotReply(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("service") || lower.includes("offer") || lower.includes("do you"))
    return BOT_RESPONSES.services;
  if (lower.includes("erp") || lower.includes("product") || lower.includes("platform"))
    return BOT_RESPONSES.erp;
  if (lower.includes("start") || lower.includes("begin") || lower.includes("contact"))
    return BOT_RESPONSES.started;
  if (lower.includes("stack") || lower.includes("tech") || lower.includes("language") || lower.includes("framework"))
    return BOT_RESPONSES.stack;
  return BOT_RESPONSES.default;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      text: "Hi! I'm the DAFT Labs assistant. Ask me anything about our services.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: getBotReply(text),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#0071e3] hover:bg-[#1d4ed8] text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,113,227,0.1)] transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border border-[#d2d2d7] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ maxHeight: "500px" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-[#d2d2d7] bg-[rgba(0,113,227,0.1)]">
              <div className="w-9 h-9 rounded-full bg-[#0071e3] flex items-center justify-center flex-shrink-0">
                <Bot size={18} className="text-black" />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  DAFT Assistant
                </p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-[#6e6e73]">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ minHeight: 0 }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] text-sm px-3.5 py-2.5 rounded-xl leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#0071e3] text-black font-medium rounded-br-sm"
                        : "bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border border-[#d2d2d7] text-[#6e6e73] rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border border-[#d2d2d7] px-4 py-3 rounded-xl rounded-bl-sm flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block"
                        style={{ animation: `pulseOrange 1.2s ease ${i * 0.2}s infinite` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/80 border border-[#d2d2d7] shadow-sm backdrop-blur-xl border border-white/[0.1] text-[#6e6e73] hover:text-[#0071e3] hover:border-[rgba(0,113,227,0.1)] transition-colors duration-200"
                >
                  {qr}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-[#d2d2d7]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Type a message..."
                className="flex-1 bg-[#f5f5f7] border border-[#d2d2d7] rounded-xl px-3 py-2 text-sm text-[#1d1d1f] placeholder-white/25 outline-none focus:border-[rgba(0,113,227,0.1)] transition-colors"
              />
              <button
                onClick={() => sendMessage(input)}
                className="w-9 h-9 rounded-xl bg-[#0071e3] hover:bg-[#1d4ed8] text-black flex items-center justify-center flex-shrink-0 transition-colors duration-200"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
