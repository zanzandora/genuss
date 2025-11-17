import RoomTitleSection from '../RoomTitleSection';
import { RoomFeatures } from '../RoomFeatures';
import { RoomGallery } from '../RoomGallery';
import { TRoom } from '@/types/room.type';
import { useRoomTranslations } from '@/lib/utils/roomTranslations';
import RenderMultilineText from '@/components/ui/RenderMultilineText';
import { useTranslations } from 'next-intl';

interface CriticalRoomInfoProps {
  room: TRoom;
}

export function CriticalRoomInfo({ room }: CriticalRoomInfoProps) {
  const tRooms = useTranslations('rooms');
  return (
    <div className='space-y-8 lg:col-span-2'>
      <RoomTitleSection room={room} />

      {/* Gallery and Features  */}
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {/* Room Gallery */}
        <div className='order-1 lg:order-1'>
          <RoomGallery room={room} />
        </div>

        {/* Room Features  */}
        <div className='order-2 lg:order-2'>
          <RoomFeatures room={room} showDescription={false} />
        </div>
      </div>

      {/* Description - Below both columns */}
      <div className='space-y-4'>
        <p className='text-paragraph-m leading-relaxed text-muted-foreground'>
          {/* {translatedRoom.description || ''} */}
          <RenderMultilineText
            text={tRooms(`room.description.${room.slug}` as never)}
          />
        </p>
      </div>
    </div>
  );
}
