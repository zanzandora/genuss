'use client';

import { ANIMATION_CONFIG } from '@/lib/animations/config';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function AnimatedTyppingText({
  text = 'Typing Effect',
  className,
  fontText,
  typingSpeed,
}: {
  text: string;
  className?: string;
  fontText?: string;
  disabled?: boolean;
  typingSpeed?: number; // Custom delay between each character (in seconds)
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: ANIMATION_CONFIG.viewport.once });

  return (
    <h1 ref={ref} className={className}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: ANIMATION_CONFIG.durations.fast - 0.1,
            delay: index * (typingSpeed || ANIMATION_CONFIG.stagger.fast),
          }}
          className={fontText}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
}
