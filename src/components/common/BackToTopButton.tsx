'use client';

import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className='fixed right-6 bottom-6 z-50 rounded-full bg-muted-foreground p-3 shadow-lg transition-all duration-300 hover:bg-muted-foreground/50 hover:shadow-xl'
      size='icon-lg'
      aria-label='Back to top'
    >
      <ChevronUp className='size-5' />
    </Button>
  );
}
