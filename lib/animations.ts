import { Variants, Transition } from "framer-motion";

/**
 * Custom easing curve - Nordic Precision
 * Smooth, elegant, professional
 */
const easeNordic: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Fade in from bottom - primary entrance animation
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeNordic,
    },
  },
};

/**
 * Fade in from left
 */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeNordic,
    },
  },
};

/**
 * Fade in from right
 */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeNordic,
    },
  },
};

/**
 * Scale in - for cards and interactive elements
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeNordic,
    },
  },
};

/**
 * Stagger children - for list animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Stagger children (faster) - for compact lists
 */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/**
 * Hero-specific animation - slower, more dramatic
 */
export const heroAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeNordic,
    },
  },
};

/**
 * Button hover effect
 */
export const buttonHover = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  } as Transition,
};

/**
 * Button tap effect
 */
export const buttonTap = {
  scale: 0.98,
};

/**
 * Card hover effect - subtle lift
 */
export const cardHover = {
  y: -4,
  transition: {
    duration: 0.3,
    ease: easeNordic,
  } as Transition,
};

/**
 * Hover lift for interactive elements
 */
export const hoverLift = {
  whileHover: {
    y: -4,
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * Scale on tap for buttons
 */
export const tapScale = {
  whileTap: { scale: 0.98 },
};

/**
 * Animated gradient mesh for hero background
 */
export const heroMesh: Variants = {
  animate: {
    background: [
      "radial-gradient(circle at 20% 50%, rgba(212,168,83,0.1), transparent)",
      "radial-gradient(circle at 80% 50%, rgba(26,26,26,0.1), transparent)",
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

/**
 * Scroll indicator bounce animation
 */
export const scrollIndicator: Variants = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Icon spring animation
 */
export const iconSpring = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  whileHover: {
    scale: 1.1,
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.4 },
  },
};

/**
 * Mobile menu slide animation
 */
export const mobileMenuSlide: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeNordic,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

/**
 * Accordion expand/collapse
 */
export const accordionContent: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.3,
        ease: easeNordic,
      },
      opacity: {
        duration: 0.2,
        delay: 0.1,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.2,
        ease: "easeIn",
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
};

/**
 * Chevron rotation for accordion
 */
export const chevronRotate: Variants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

/**
 * Filter pill animation
 */
export const filterPill: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

/**
 * Testimonial slide animation
 */
export const testimonialSlide: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeNordic,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  }),
};
