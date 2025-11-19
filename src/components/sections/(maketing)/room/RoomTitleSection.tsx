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
    <div className='flex flex-col items-start justify-between gap-x-8 gap-y-4 md:flex-row'>
      <p className='text-h3 text-pretty'>{translatedRoom.name}</p>
      <p className='text-h4 font-normal text-primary'>
        {tRooms.rich('priceJSX', {
          value: String(formatCurrency(+room.price)),
          price: (chunks) => (
            <span className='text-paragraph-b text-primary'>{chunks}</span>
          ),
        })}
      </p>
    </div>
  );
};

export default RoomTitleSection;
