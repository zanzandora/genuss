/**
 * Animation Variants - Performance-optimized motion definitions
 * Using transform and opacity only for best performance
 */

import { Variants } from 'framer-motion';
import { ANIMATION_CONFIG } from './config';

// Fade animations
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(30px)', // Using transform instead of y for better performance
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      duration: ANIMATION_CONFIG.durations.normal,
      ease: ANIMATION_CONFIG.easing.smooth,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-30px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      duration: ANIMATION_CONFIG.durations.normal,
      ease: ANIMATION_CONFIG.easing.smooth,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_CONFIG.durations.normal,
      ease: ANIMATION_CONFIG.easing.smooth,
    },
  },
};

// Slide animations
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateX(-50px)', // Reduced distance for subtlety
  },
  visible: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: {
      duration: ANIMATION_CONFIG.durations.normal,
      ease: ANIMATION_CONFIG.easing.smooth,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateX(50px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: {
      duration: ANIMATION_CONFIG.durations.normal,
      ease: ANIMATION_CONFIG.easing.smooth,
    },
  },
};

export const slideInUp: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(30px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      duration: ANIMATION_CONFIG.durations.normal,
      ease: ANIMATION_CONFIG.easing.smooth,
    },
  },
};

export const slideInDown: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-30px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      duration: ANIMATION_CONFIG.durations.normal,
      ease: ANIMATION_CONFIG.easing.smooth,
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.9)', // Subtle scale for smooth effect
  },
  visible: {
    opacity: 1,
    transform: 'scale(1)',
    transition: {
      duration: ANIMATION_CONFIG.durations.fast,
      ease: ANIMATION_CONFIG.easing.smooth,
    },
  },
};

export const bounceIn: Variants = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.8)',
  },
  visible: {
    opacity: 1,
    transform: 'scale(1)',
    transition: {
      duration: ANIMATION_CONFIG.durations.normal,
      ease: ANIMATION_CONFIG.easing.bouncy,
      type: 'spring',
      stiffness: 100,
    },
  },
};

// Container variants for stagger animations
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_CONFIG.stagger.normal,
      delayChildren: 0.1,
    },
  },
};

// Fast container for quick sequential animations
export const fastContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_CONFIG.stagger.fast,
      delayChildren: 0.05,
    },
  },
};

// Item variants for staggered children
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      duration: ANIMATION_CONFIG.durations.fast,
      ease: ANIMATION_CONFIG.easing.smooth,
    },
  },
};

// Parallax variants for background elements
export const parallaxVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_CONFIG.durations.slow,
      ease: ANIMATION_CONFIG.easing.smooth,
    },
  },
};

// Export all variants as a map for easy access
export const ANIMATION_VARIANTS = {
  fadeInUp,
  fadeInDown,
  fadeIn,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideInDown,
  scaleIn,
  bounceIn,
  containerVariants,
  fastContainerVariants,
  itemVariants,
  parallaxVariants,
} as const;
