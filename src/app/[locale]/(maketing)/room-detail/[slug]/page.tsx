import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import RoomDetailsContent from '@/components/sections/(maketing)/room/content/RoomDetailsContent';
import { getTranslations } from 'next-intl/server';

const RoomDetailsPage = async (
  props: PageProps<'/[locale]/room-detail/[slug]'>,
) => {
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
