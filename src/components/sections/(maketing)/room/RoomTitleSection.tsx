type Props = {
  title: string;
  subtitle: string;
  price: string;
};

const RoomTitleSection = ({ title, subtitle, price }: Props) => {
  return (
    <div className='flex items-start justify-between'>
      <div className='space-y-8'>
        <h1 className='text-h3'>{title}</h1>
        <p className='text-paragraph-m'>Tính năng phòng: {subtitle}</p>
      </div>
      <div className='text-h3 font-normal text-primary'>
        Từ <span className='text-paragraph-b text-primary'>{price} / Đêm</span>
      </div>
    </div>
  );
};

export default RoomTitleSection;
