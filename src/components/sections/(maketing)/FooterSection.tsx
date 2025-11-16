import { BLUR_DATA_URL } from '@/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const FooterSection = () => {
  const tFooter = useTranslations('footer');

  return (
    <footer className='mt-20 rounded-t-2xl bg-primary px-6 py-16 text-primary-foreground'>
      <div className='mx-auto grid max-w-7xl gap-32 md:grid-cols-2'>
        <div className='mb-6 grid grid-cols-2'>
          <div className='h-30 w-30'>
            <Image
              width={50}
              height={50}
              src={'/logo/genuss-logo.svg'}
              alt='Genuss Logo'
              className='h-full w-full object-cover font-bold'
              placeholder='blur'
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
          <div>
            <h4 className='mb-4 text-h4 uppercase'>
              {tFooter('contactUs.title')}
            </h4>
            <p className='mb-4 text-paragraph-m font-normal'>
              {tFooter('contactUs.Tel')}:
              <br />
              0978 352 968
              <br />
              0978 452 968
              <br />
              0978 552 968
            </p>
            <p className='text-paragraph-m font-normal'>
              Email: sale01.td@genuss.vn
            </p>
          </div>
        </div>

        <div className='mb-6 grid grid-cols-1 gap-2 md:grid-cols-2'>
          <div>
            <h4 className='mb-6 text-h4 uppercase'>
              {tFooter('hotelAddress.title')}
            </h4>
            <p className='text-paragraph-m font-normal'>
              {tFooter('hotelAddress.address')}
            </p>
          </div>
          <div className='relative h-60 min-h-[241px] w-full'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0969447657!2d105.6403567!3d21.4572571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134e7650ddc749f:0x9fde527b2b8fb0ca!2sKh%C3%A1ch+s%E1%BA%A1n+Genuss+Tam+%C4%90%E1%BA%A3o!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s'
              className='absolute inset-0 h-full w-full rounded border-2 border-gray-700'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Genuss Hotel Location Map'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
