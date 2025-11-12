import FooterSection from '@/components/sections/(maketing)/FooterSection';
import NavBar from '@/components/sections/navbar/NavBar';
import { Suspense } from 'react';
import Loading from './loading';

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-secondary'>
      <NavBar />

      <main className='min-h-screen p-4'>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>

      <FooterSection />
    </div>
  );
}
