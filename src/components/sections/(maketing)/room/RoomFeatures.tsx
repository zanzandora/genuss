import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { TRoom } from '@/types/room.type';
import {
  BedDoubleIcon,
  ExpandIcon,
  TreePineIcon,
  Users2Icon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRoomTranslations } from '@/lib/utils/roomTranslations';

interface RoomFeaturesProps {
  room: TRoom;
}

export function RoomFeatures({ room }: RoomFeaturesProps) {
  const tRooms = useTranslations('rooms.room');
  const { translateRoom } = useRoomTranslations();
  const translatedRoom = translateRoom(room);

  return (
    <section>
      <div className='grid grid-cols-1 gap-4 pb-8 md:grid-cols-2 md:grid-rows-2'>
        {/* Bed */}
        <Item className=''>
          <ItemMedia
            variant='icon'
            className='my-auto border-none bg-transparent'
          >
            <BedDoubleIcon className='size-8' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className='text-h4 font-bold'>{tRooms('bed')}</ItemTitle>
            <ItemDescription className='text-xl font-bold'>
              {translatedRoom.bed.join(', ')}
            </ItemDescription>
          </ItemContent>
        </Item>

        {/* Room space */}
        <Item className=''>
          <ItemMedia
            variant='icon'
            className='my-auto border-none bg-transparent'
          >
            <ExpandIcon className='size-8' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className='text-h4 font-bold'>
              {tRooms('space')}
            </ItemTitle>
            <ItemDescription className='text-xl font-bold'>
              {room.area} <span className='ordinal'>m2</span>
            </ItemDescription>
          </ItemContent>
        </Item>

        {/* Max Guesst */}
        <Item className=''>
          <ItemMedia
            variant='icon'
            className='my-auto border-none bg-transparent'
          >
            <Users2Icon className='size-8' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className='text-h4 font-bold'>
              {tRooms('maximum')}
            </ItemTitle>
            <ItemDescription className='text-xl font-bold'>
              {room.maxOccupancy} {tRooms('people')}
            </ItemDescription>
          </ItemContent>
        </Item>

        {/* Room View */}
        <Item className=''>
          <ItemMedia
            variant='icon'
            className='my-auto border-none bg-transparent'
          >
            <TreePineIcon className='size-8' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className='text-h4 font-bold'>
              {tRooms('view')}
            </ItemTitle>
            <ItemDescription className='text-xl font-bold'>
              {translatedRoom.view}
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>

      {/* Description */}
      <div className='space-y-4'>
        <p className='text-paragraph-m leading-relaxed text-muted-foreground'>
          Phòng Superior Double tại khách sạn Genest Inn Bao mang đến một không
          gian nghỉ dưỡng ấm cúng và thanh lịch lấy cảm hứng từ phong cách châu
          Âu hiện đại. Với diện tích rộng rãi 32 m², phòng được trang bị giường
          cỡ Queen thoải mái (1 m x 2 m), TV LED, máy lạnh và phòng tắm riêng
          với vòi sen nước nóng lạnh cùng đồ vệ sinh cá nhân cao cấp. Cửa sổ lớn
          mở ra quang cảnh quyến rũ của Tao Bao. Tọa lạc tại trung tâm Bao,
          Phòng Đôi Cao Cấp là lựa chọn lý tưởng cho các cặp đôi hoặc du khách
          tìm kiếm một kỳ nghỉ yên bình và thoải mái trong bầu không khí ấm
          cúng.
        </p>
      </div>
    </section>
  );
}
