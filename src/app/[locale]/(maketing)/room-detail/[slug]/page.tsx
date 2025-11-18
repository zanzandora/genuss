import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import RoomDetailsContent from '@/components/sections/(maketing)/room/content/RoomDetailsContent';
import { getTranslations } from 'next-intl/server';

interface RoomDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const RoomDetailsPage = async (props: RoomDetailPageProps) => {
  const tMenu = await getTranslations('menu');

  const { slug } = await props.params;

  return (
    <section>
      <NormalBanner title={tMenu('roomDetails')} />

      <RoomDetailsContent slug={slug} />
    </section>
  );
};

export default RoomDetailsPage;
