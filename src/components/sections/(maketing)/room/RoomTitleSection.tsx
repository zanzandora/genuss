type Props = {
  title: string;
  subtitle: string;
  price: number;
};

const RoomTitleSection = ({ title, subtitle, price }: Props) => {
  return (
    <div className='flex justify-between'>
      <div className='space-y-8'>
        <h1 className='text-h3'>{title}</h1>
        <p className='text-paragraph-m'>{subtitle}</p>
      </div>
      <div className='pt-2 text-h3 font-normal text-primary'>
        From{' '}
        <span className='text-paragraph-b text-primary'>${price} / Night</span>
      </div>
    </div>
  );
};

export default RoomTitleSection;
