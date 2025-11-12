// components/ScrollToTop.tsx
'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function ScrollToTop({
  behavior = 'auto',
}: {
  behavior?: ScrollBehavior;
}) {
  useScrollToTop({ behavior });
  return null;
}
