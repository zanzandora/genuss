import RoomTitleSection from '../RoomTitleSection';
import { RoomFeatures } from '../RoomFeatures';
import { RoomGallery } from '../RoomGallery';
import { TRoom } from '@/types/room.type';

interface CriticalRoomInfoProps {
  room: TRoom;
}

export function CriticalRoomInfo({ room }: CriticalRoomInfoProps) {
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
    </div>
  );
}
