/**
 * AnimatedSection - Performance-optimized animation wrapper
 * Provides consistent scroll animations with accessibility support
 */

'use client';

import { motion, MotionProps } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/lib/animations/config';
import { ANIMATION_VARIANTS } from '@/lib/animations/variants';
import { AnimationPreset } from '@/lib/animations/config';

interface AnimatedSectionProps
  extends Omit<
    MotionProps,
    'variants' | 'initial' | 'whileInView' | 'viewport'
  > {
  children: React.ReactNode;
  variant?: AnimationPreset;
  delay?: number;
  className?: string;
  disabled?: boolean; // Force disable animations
  viewportOnce?: boolean; // Override default viewport once setting
}

/**
 * AnimatedSection - Wrapper component for scroll-triggered animations
 *
 * @param children - Content to animate
 * @param variant - Animation preset type
 * @param delay - Custom delay in seconds
 * @param className - Additional CSS classes
 * @param disabled - Force disable animations
 * @param viewportOnce - Override viewport once setting
 *
 * @example
 * <AnimatedSection variant="fadeInUp" delay={0.1}>
 *   <div>Content that fades in</div>
 * </AnimatedSection>
 */
export function AnimatedSection({
  children,
  variant = 'fadeInUp',
  delay = 0,
  className = '',
  viewportOnce = ANIMATION_CONFIG.viewport.once,
  ...motionProps
}: AnimatedSectionProps) {
  // Get the appropriate variant
  const animationVariant =
    ANIMATION_VARIANTS[variant as keyof typeof ANIMATION_VARIANTS];

  // Type-safe transition handling
  const visibleVariant = animationVariant.visible as {
    [key: string]: unknown;
    transition?: { delay?: number; [key: string]: unknown };
  };

  return (
    <motion.div
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={{
        once: viewportOnce,
        amount: ANIMATION_CONFIG.viewport.amount,
        margin: ANIMATION_CONFIG.viewport.margin,
      }}
      variants={{
        hidden: animationVariant.hidden,
        visible: {
          ...visibleVariant,
          transition: {
            ...visibleVariant.transition,
            delay: (visibleVariant.transition?.delay || 0) + delay,
          },
        },
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
