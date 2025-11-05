import { BLUR_DATA_URL } from '@/constants';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <footer className='mt-20 rounded-t-2xl bg-primary px-6 py-16 text-primary-foreground'>
      <div className='mx-auto grid max-w-7xl gap-32 md:grid-cols-2'>
        <div className='mb-6 grid grid-cols-2'>
          <div className='h-36 w-36'>
            <Image
              width={80}
              height={80}
              src={'/images/genuss-logo.png'}
              alt='Genuss Logo'
              className='h-full w-full object-cover font-bold'
              placeholder='blur'
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
          <div>
            <h4 className='mb-4 text-h4 uppercase'>contact us</h4>
            <p className='mb-4 text-paragraph-m font-normal'>
              Tel:
              <br />
              +84 978 352 968
              <br />
              +84 978 452 968
              <br />
              +84 978 552 968
            </p>
            <p className='text-paragraph-m font-normal'>
              Email: info@genusstamdao.com
            </p>
          </div>
        </div>

        <div className='mb-6 grid grid-cols-2'>
          <div>
            <h4 className='mb-6 text-h4 uppercase'>hotel address</h4>
            <p className='text-paragraph-m font-normal'>
              No 1, Tam Dao, Phu Tho, Viet Nam
            </p>
          </div>
          <Image
            src={'/images/map.png'}
            alt='Genuss Location map'
            width={241}
            height={241}
            className='mx-auto h-60 w-60 rounded border-2 border-gray-700 bg-cover bg-center'
            placeholder='blur'
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
