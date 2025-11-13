import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import RoomDetailsContent from '@/components/sections/(maketing)/room/content/RoomDetailsContent';

const RoomDetailsPage = async (props: PageProps<'/room-detail/[slug]'>) => {
  const { slug } = await props.params;

  return (
    <section>
      <NormalBanner title='Room Details' />

      <RoomDetailsContent slug={slug} />
    </section>
  );
};

export default RoomDetailsPage;
