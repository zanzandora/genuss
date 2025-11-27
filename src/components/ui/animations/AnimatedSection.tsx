/**
 * AnimatedSection - Performance-optimized animation wrapper
 * Provides consistent scroll animations with accessibility support
 */

'use client';

import { motion, MotionProps } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/lib/animations/config';
import { ANIMATION_VARIANTS } from '@/lib/animations/variants';
import { AnimationPreset } from '@/lib/animations/config';
import { useEffect, useState } from 'react';

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
  disabled = false,
  ...motionProps
}: AnimatedSectionProps) {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Check for reduced motion preference and mobile breakpoint
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsClient(true);

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      const isMobile = window.innerWidth < ANIMATION_CONFIG.breakpoints.mobile;

      if (disabled || prefersReducedMotion || isMobile) {
        setShouldAnimate(false);
      }
    });
  }, [disabled]);

  // Get the appropriate variant
  const animationVariant =
    ANIMATION_VARIANTS[variant as keyof typeof ANIMATION_VARIANTS];

  // Type-safe transition handling
  const visibleVariant = animationVariant.visible as {
    [key: string]: unknown;
    transition?: { delay?: number; [key: string]: unknown };
  };

  // Don't render anything special on server-side or if animations are disabled
  if (!isClient || !shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      layout
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
            layout: {
              duration: ANIMATION_CONFIG.durations.fast,
              ease: ANIMATION_CONFIG.easing.smooth,
            },
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
