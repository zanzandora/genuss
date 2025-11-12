// app/hooks/useScrollToTop.ts
'use client';

import { usePathname } from 'next/navigation';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

export function useScrollToTop(options: { behavior?: ScrollBehavior } = {}) {
  const { behavior = 'auto' } = options;
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    // Scroll lên đầu khi pathname thay đổi
    window.scrollTo({ top: 0, behavior });
  }, [pathname, behavior]);
}
