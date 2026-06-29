import type { Transition, Variants } from "framer-motion";

export const springTransition: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 24,
};

export const smoothTransition: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
};

export const slowTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 18,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -18,
  },
};

export const fadeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const slideUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 28,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const slideDownVariants: Variants = {
  initial: {
    opacity: 0,
    y: -28,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const slideLeftVariants: Variants = {
  initial: {
    opacity: 0,
    x: 28,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const slideRightVariants: Variants = {
  initial: {
    opacity: 0,
    x: -28,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const scaleVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

export const cardHover = {
  y: -8,
  scale: 1.015,
  transition: springTransition,
};

export const cardTap = {
  scale: 0.985,
};

export const buttonHover = {
  scale: 1.04,
  transition: springTransition,
};

export const buttonTap = {
  scale: 0.96,
};

export const iconHover = {
  rotate: -8,
  scale: 1.08,
  transition: springTransition,
};

export const inputHover = {
  y: -1,
};

export const inputFocus = {
  y: -1,
  scale: 1.005,
};

export const modalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.94,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 20,
  },
};

export const drawerVariants: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "100%",
  },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const arrowHover = {
  x: 6,
  rotate: 8,
  transition: springTransition,
};

export const chipHover = {
  scale: 1.04,
  transition: springTransition,
};

export const fabHover = {
  scale: 1.08,
  rotate: 12,
  transition: springTransition,
};

export const listItemHover = {
  x: 4,
  transition: springTransition,
};

export const pulseAnimation = {
  scale: [1, 1.08, 1],
  opacity: [1, 0.85, 1],
};

export const quickActionHover = {
  y: -8,
  scale: 1.02,
};

export const quickActionTap = {
  scale: 0.98,
};


export const modalBackdrop = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },
};

export const modalContainer = {
  initial: {
    opacity: 0,
    scale: 0.94,
    y: 30,
  },

  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },

  exit: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },
};


export const sidebarToggleRotation = {
  duration: 0.25,
  ease: "easeInOut",
};