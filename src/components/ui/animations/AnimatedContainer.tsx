/**
 * AnimatedContainer - Stagger animation wrapper for lists and grids
 * Provides sequential animations for child elements
 */

'use client';

import { motion, MotionProps } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/lib/animations/config';
import { ANIMATION_VARIANTS } from '@/lib/animations/variants';
import { AnimationPreset } from '@/lib/animations/config';

interface AnimatedContainerProps
  extends Omit<
    MotionProps,
    'variants' | 'initial' | 'whileInView' | 'viewport'
  > {
  children: React.ReactNode;
  variant?: 'container' | 'fastContainer';
  itemVariant?: AnimationPreset;
  staggerDelay?: number;
  className?: string;
  disabled?: boolean;
  viewportOnce?: boolean;
  alternatingPattern?:
    | 'left-right'
    | 'right-left'
    | 'up-down'
    | 'down-up'
    | 'none';
}

/**
 * AnimatedContainer - Wrapper for staggered child animations
 *
 * @param children - Content to animate (should be direct children)
 * @param variant - Container animation type
 * @param itemVariant - Animation preset for child items
 * @param staggerDelay - Custom stagger delay between children
 * @param className - Additional CSS classes
 * @param disabled - Force disable animations
 * @param viewportOnce - Override viewport once setting
 *
 * @example
 * <AnimatedContainer variant="container" itemVariant="fadeInUp">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </AnimatedContainer>
 */
export function AnimatedContainer({
  children,
  variant = 'container',
  itemVariant = 'fadeInUp',
  staggerDelay,
  className = '',
  viewportOnce = ANIMATION_CONFIG.viewport.once,
  alternatingPattern = 'none',
  ...motionProps
}: AnimatedContainerProps) {
  // Get appropriate container variant
  const containerVariant =
    variant === 'fastContainer'
      ? ANIMATION_VARIANTS.fastContainerVariants
      : ANIMATION_VARIANTS.containerVariants;

  // Get appropriate item variant
  const itemAnimationVariant =
    ANIMATION_VARIANTS[itemVariant as keyof typeof ANIMATION_VARIANTS];

  // Create custom container variant with custom stagger delay if provided
  const customContainerVariant = staggerDelay
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.05,
          },
        },
      }
    : containerVariant;

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
      variants={customContainerVariant}
      {...motionProps}
    >
      {Array.isArray(children)
        ? children.map((child, index) => {
            // Determine variant based on alternating pattern
            let variantToUse = itemAnimationVariant;

            if (alternatingPattern !== 'none') {
              switch (alternatingPattern) {
                case 'left-right':
                  variantToUse =
                    ANIMATION_VARIANTS[
                      index % 2 === 0 ? 'slideInLeft' : 'slideInRight'
                    ];
                  break;
                case 'right-left':
                  variantToUse =
                    ANIMATION_VARIANTS[
                      index % 2 === 0 ? 'slideInRight' : 'slideInLeft'
                    ];
                  break;
                case 'up-down':
                  variantToUse =
                    ANIMATION_VARIANTS[
                      index % 2 === 0 ? 'slideInUp' : 'slideInDown'
                    ];
                  break;
                case 'down-up':
                  variantToUse =
                    ANIMATION_VARIANTS[
                      index % 2 === 0 ? 'slideInDown' : 'slideInUp'
                    ];
                  break;
                default:
                  variantToUse = itemAnimationVariant;
              }
            }

            return (
              <motion.div key={index} variants={variantToUse}>
                {child}
              </motion.div>
            );
          })
        : children}
    </motion.div>
  );
}

export default AnimatedContainer;
