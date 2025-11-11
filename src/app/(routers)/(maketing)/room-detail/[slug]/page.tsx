import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import { Suspense } from 'react';
import RoomDetailsSkeleton from '@/components/common/skeleton/RoomDetailsSkeleton';
import RoomDetailsContent from '@/components/sections/(maketing)/room/content/RoomDetailsContent';

interface PageProps {
  params: {
    slug: string;
  };
}

const RoomDetailsPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <section>
      <NormalBanner title='Room Details' />

      <Suspense fallback={<RoomDetailsSkeleton />}>
        <RoomDetailsContent slug={slug} />
      </Suspense>
    </section>
  );
};

export default RoomDetailsPage;
