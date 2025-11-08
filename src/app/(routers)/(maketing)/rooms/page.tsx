import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import RoomCards from '@/components/sections/(maketing)/rooms/RoomCards';

const RoomsPage = () => {
  return (
    <div>
      <NormalBanner title='Rooms' />

      <RoomCards />

      <BackToTopButton />
    </div>
  );
};

export default RoomsPage;
