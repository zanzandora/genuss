import { formatCurrency } from '@/lib/utils';
import { useRoomTranslations } from '@/lib/utils/roomTranslations';
import { TRoom } from '@/types/room.type';
import { useTranslations } from 'next-intl';

type Props = {
  room: TRoom;
};

const RoomTitleSection = ({ room }: Props) => {
  const tRooms = useTranslations('rooms');
  const { translateRoom } = useRoomTranslations();
  const translatedRoom = translateRoom(room);

  return (
    <div className='flex items-start justify-between'>
      <div className='space-y-8'>
        <h1 className='text-h3'>{translatedRoom.name}</h1>
      </div>
      <div className='text-h3 font-normal text-primary'>
        {tRooms.rich('priceJSX', {
          value: String(formatCurrency(+room.price)),
          price: (chunks) => (
            <span className='text-paragraph-b text-primary'>{chunks}</span>
          ),
        })}
      </div>
    </div>
  );
};

export default RoomTitleSection;
