import { Variants } from 'framer-motion'

export const ANIMATION_TIMING = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  slower: 0.9,
}

export const EASING = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0.2, 0, 0, 1],
  easeIn: [0.4, 0, 1, 1],
  custom: [0.25, 0.46, 0.45, 0.94],
}

// Fade animations
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: EASING.easeOut,
    },
  },
}

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: EASING.easeOut,
    },
  },
}

// Scale animations
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: EASING.easeOut,
    },
  },
}

export const scaleUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_TIMING.slow,
      ease: EASING.custom,
    },
  },
}

// Slide animations
export const slideInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: EASING.easeOut,
    },
  },
}

export const slideInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: EASING.easeOut,
    },
  },
}

// Stagger animations for containers
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerSlowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// Number counter animation
export const numberCounterVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_TIMING.slow,
      ease: EASING.easeOut,
    },
  },
}

// Rotate animation
export const rotateVariants: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: EASING.easeOut,
    },
  },
}

// Hover animations
export const hoverScaleVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: ANIMATION_TIMING.fast,
      ease: EASING.easeInOut,
    },
  },
}

export const hoverLiftVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: -8,
    transition: {
      duration: ANIMATION_TIMING.fast,
      ease: EASING.easeInOut,
    },
  },
}

// Stagger list items
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.normal,
      ease: EASING.easeOut,
    },
  },
}

// Glow/pulse animation
export const glowVariants: Variants = {
  initial: { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
  animate: {
    boxShadow: [
      '0 0 20px rgba(99, 102, 241, 0.3)',
      '0 0 40px rgba(99, 102, 241, 0.5)',
      '0 0 20px rgba(99, 102, 241, 0.3)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
}

// Card entrance
export const cardEntranceVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_TIMING.slow,
      ease: EASING.custom,
    },
  },
}

// Button click animation
export const buttonTapVariants: Variants = {
  tap: { scale: 0.95 },
}
