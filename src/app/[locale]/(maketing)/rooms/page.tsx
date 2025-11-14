import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import RoomCards from '@/components/sections/(maketing)/rooms/RoomCards';
import { useTranslations } from 'next-intl';

const RoomsPage = () => {
  const tMenu = useTranslations('menu');

  return (
    <div>
      <NormalBanner title={tMenu('rooms')} />

      <RoomCards />

      <BackToTopButton />
    </div>
  );
};

export default RoomsPage;
