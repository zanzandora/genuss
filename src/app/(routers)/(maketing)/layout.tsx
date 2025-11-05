import FooterSection from '@/components/sections/(maketing)/home/FooterSection';
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

      <div className='min-h-screen'>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>

      <FooterSection />
    </div>
  );
}
