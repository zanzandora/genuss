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
        <p className='text-paragraph-m'>Room Features: {subtitle}</p>
      </div>
      <div className='text-h3 font-normal text-primary'>
        From{' '}
        <span className='text-paragraph-b text-primary'>{price} / Night</span>
      </div>
    </div>
  );
};

export default RoomTitleSection;
