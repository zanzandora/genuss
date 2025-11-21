/**
 * Animation Configuration - Performance-optimized settings
 * Centralized configuration for consistent animations across the app
 */

export const ANIMATION_CONFIG = {
  // Performance-optimized durations (in seconds)
  durations: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
  },

  // Consistent easing functions
  easing: {
    smooth: 'easeOut',
    bouncy: 'easeOut',
  },

  // Optimized viewport settings for scroll animations
  viewport: {
    once: true, // Animation only runs once for performance
    amount: 0.15, // Trigger when 15% of element is visible
    margin: '-50px', // Start slightly before element comes into view
  },

  // Stagger delays for sequential animations
  stagger: {
    fast: 0.1, // 100ms between items
    normal: 0.15, // 150ms between items
    slow: 0.2, // 200ms between items
  },

  // Breakpoint for enabling/disabling animations
  breakpoints: {
    mobile: 768, // Disable complex animations on mobile for performance
  },
} as const;

// Animation preset names for easy reference
export const ANIMATION_PRESETS = {
  fadeInUp: 'fadeInUp',
  fadeInDown: 'fadeInDown',
  slideInLeft: 'slideInLeft',
  slideInRight: 'slideInRight',
  scaleIn: 'scaleIn',
  bounceIn: 'bounceIn',
} as const;

export type AnimationPreset =
  (typeof ANIMATION_PRESETS)[keyof typeof ANIMATION_PRESETS];
