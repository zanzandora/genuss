import FooterSection from '@/components/sections/(maketing)/FooterSection';
import NavBar from '@/components/sections/navbar/NavBar';
import { Suspense } from 'react';
import Loading from './loading';
import { Toaster } from 'sonner';

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-dvh bg-secondary'>
      <NavBar />

      <main className='min-h-dvh p-4'>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>

      <Toaster position='bottom-right' />

      <FooterSection />
    </div>
  );
}
