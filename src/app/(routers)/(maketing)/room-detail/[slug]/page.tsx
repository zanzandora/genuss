import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
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

      <RoomDetailsContent slug={slug} />
    </section>
  );
};

export default RoomDetailsPage;
