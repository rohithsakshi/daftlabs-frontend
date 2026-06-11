'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageTransition() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9998] bg-[var(--bg-primary)] pointer-events-none"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ originY: isMounted ? 0 : 1 }}
    />
  );
}
