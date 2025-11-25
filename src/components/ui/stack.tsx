'use client';

import { cn } from '@/lib/utils';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import { useState } from 'react';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className='absolute cursor-grab'
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}
type SizeUnit = 'px' | '%' | 'rem' | 'em' | 'vw' | 'vh';

export type CSSSize = `${number}${SizeUnit}` | 'auto';

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?:
    | {
        width: CSSSize;
        height: CSSSize;
      }
    | {
        xs?: { width: CSSSize; height: CSSSize };
        sm?: { width: CSSSize; height: CSSSize };
        md?: { width: CSSSize; height: CSSSize };
        lg?: { width: CSSSize; height: CSSSize };
        xl?: { width: CSSSize; height: CSSSize };
      };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string; alt?: string }[];
  animationConfig?: { stiffness: number; damping: number };
  className?: string;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: '208px', height: '208px' },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  className,
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          {
            id: 1,
            img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format',
          },
          {
            id: 2,
            img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format',
          },
          {
            id: 3,
            img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format',
          },
          {
            id: 4,
            img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format',
          },
        ],
  );

  // Media queries for responsive breakpoints
  const isXl = useMediaQuery('(min-width: 1280px)');
  const isLg = useMediaQuery('(min-width: 1024px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isSm = useMediaQuery('(min-width: 640px)');
  const isXs = useMediaQuery('(min-width: 475px)');

  const getCurrentDimensions = (
    dimensions: StackProps['cardDimensions'],
  ): { width: CSSSize; height: CSSSize } => {
    if (!dimensions) return { width: '208px', height: '208px' };

    // If it's a single dimensions object
    if ('width' in dimensions) return dimensions;

    // If it's a responsive object
    if (isXl && dimensions.xl) return dimensions.xl;
    if (isLg && dimensions.lg) return dimensions.lg;
    if (isMd && dimensions.md) return dimensions.md;
    if (isSm && dimensions.sm) return dimensions.sm;
    if (isXs && dimensions.xs) return dimensions.xs;

    // Fallback to first available dimension
    return (
      dimensions.xs ||
      dimensions.sm ||
      dimensions.md ||
      dimensions.lg || { width: '208px', height: '208px' }
    );
  };

  const currentDimensions = getCurrentDimensions(cardDimensions);

  const extractNumericValue = (size: CSSSize): number => {
    const match = size.match(/^(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 208;
  };

  const generateImageSizes = (dimensions: {
    width: CSSSize;
    height: CSSSize;
  }): string => {
    const width = extractNumericValue(dimensions.width);
    return `(max-width: ${width}px) ${width}px, ${width}px`;
  };

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className={cn('relative', className)}
      style={{
        width: currentDimensions.width,
        height: currentDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        // Use deterministic "random" rotation based on card id to avoid SSR mismatch
        const deterministicRotate = randomRotation
          ? ((card.id * 9.7) % 10) - 5
          : 0;
        const rotateZ = (cards.length - index - 1) * 4 + deterministicRotate;
        const scale =
          Math.round((1 + index * 0.06 - cards.length * 0.06) * 100) / 100;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className='relative overflow-hidden rounded-2xl border-4 border-white'
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              initial={{
                rotateZ,
                scale,
                transformOrigin: '90% 90%',
              }}
              animate={{
                rotateZ,
                scale,
                transformOrigin: '90% 90%',
              }}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: currentDimensions.width,
                height: currentDimensions.height,
              }}
            >
              <Image
                fill
                sizes={generateImageSizes(currentDimensions)}
                src={card.img}
                alt={card.alt || `card-${card.id}`}
                className='pointer-events-none h-full w-full object-cover'
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
