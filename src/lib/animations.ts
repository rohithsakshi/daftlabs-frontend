import { Variants } from 'framer-motion';

export const springConfig = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1
};

export const slowSpringConfig = {
  type: "spring",
  stiffness: 50,
  damping: 20,
  mass: 1
};

export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textRevealVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: springConfig 
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50, rotate: 5, scale: 0.9 },
  show: { 
    opacity: 1, 
    x: 0, 
    rotate: 0, 
    scale: 1, 
    transition: springConfig 
  }
};

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: springConfig 
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: springConfig 
  }
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  show: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    transition: springConfig 
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};
