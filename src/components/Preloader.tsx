"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the preloader for 3.6 seconds to accommodate the new multi-stage sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);

  // Custom butter-smooth easing curve
  const appleEase = [0.76, 0, 0.24, 1];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-primary)]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: appleEase }}
        >
          {/* Subtle radial glow behind logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[400px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" />
          </div>

          <div className="relative flex items-center justify-center w-80 h-80 overflow-visible">
            
            {/* The SVG Swooshes (Renders around the DL after collapse) */}
            <svg viewBox="0 0 200 200" className="absolute w-64 h-64 overflow-visible z-0 pointer-events-none">
              {/* Outer Swoosh */}
              <motion.path
                d="M 110 30 A 70 70 0 0 0 40 100 A 70 70 0 0 0 110 170"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.8, ease: "easeInOut" }}
              />
              
              {/* Inner Swoosh */}
              <motion.path
                d="M 90 50 A 50 50 0 0 0 50 100 A 50 50 0 0 0 90 150"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 2.0, ease: "easeInOut" }}
              />
            </svg>

            {/* Topography Morph Sequence */}
            <motion.div 
              className="flex items-end font-black z-10 text-[var(--text-primary)]"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0, x: [0, -10] }}
              transition={{ 
                opacity: { duration: 0.8, ease: "easeOut" },
                y: { duration: 0.8, ease: "easeOut" },
                x: { duration: 0.8, delay: 1.4, ease: appleEase } // Nudges the DL center after collapsing
              }}
            >
              {/* "D" */}
              <span className="text-6xl tracking-tighter" style={{ lineHeight: 0.8 }}>D</span>
              
              {/* "AFT" Collapse */}
              <motion.span
                className="text-5xl tracking-tight overflow-hidden whitespace-nowrap"
                style={{ lineHeight: 0.85 }}
                initial={{ width: "auto", opacity: 1, marginRight: "16px" }}
                animate={{ width: 0, opacity: 0, marginRight: "0px" }}
                transition={{ duration: 0.8, delay: 1.4, ease: appleEase }}
              >
                AFT
              </motion.span>

              {/* "L" */}
              <span className="text-6xl tracking-tighter" style={{ lineHeight: 0.8 }}>L</span>
              
              {/* "abs" Collapse */}
              <motion.span
                className="text-5xl tracking-normal overflow-hidden whitespace-nowrap lowercase"
                style={{ lineHeight: 0.85 }}
                initial={{ width: "auto", opacity: 1 }}
                animate={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.4, ease: appleEase }}
              >
                abs
              </motion.span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
