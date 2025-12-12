'use client';
import { cn } from '@/lib/utils';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { ANIMATION_CONFIG } from '@/lib/animations/config';

export function AnimatedWordsPullUp({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const splittedText = text.split(' ');

  // Custom variant for word-by-word animation using standardized config
  const wordsPullUpVariants: Variants = {
    hidden: {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    visible: (i: number) => ({
      opacity: 1,
      transform: 'translateY(0)',
      transition: {
        duration: ANIMATION_CONFIG.durations.normal,
        ease: ANIMATION_CONFIG.easing.smooth,
        delay: i * ANIMATION_CONFIG.stagger.normal,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: ANIMATION_CONFIG.viewport.once,
    amount: ANIMATION_CONFIG.viewport.amount,
    margin: ANIMATION_CONFIG.viewport.margin,
  });

  return (
    <div className='flex justify-center'>
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={wordsPullUpVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          custom={i}
          className={cn(
            'text-center text-xl font-bold tracking-tighter sm:text-4xl md:text-6xl md:leading-[4rem]',
            'pr-2', // class to sperate words
            className,
          )}
        >
          {current == '' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
