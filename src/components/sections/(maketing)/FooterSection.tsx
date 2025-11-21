import { BLUR_DATA_URL } from '@/constants';
import { Link } from '@/i18n/routing';
import { PinIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const FooterSection = () => {
  const tFooter = useTranslations('footer');

  return (
    <footer className='mt-20 rounded-t-2xl bg-primary px-4 py-12 text-primary-foreground sm:px-6 sm:py-16'>
      <div className='mx-auto max-w-7xl space-y-12 sm:space-y-16 lg:space-y-20'>
        <div className='mx-auto grid max-w-7xl gap-x-12 gap-y-20 md:grid-cols-2'>
          <div className='mb-6 flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8'>
            <div className='flex justify-center sm:justify-start'>
              <div className='h-12 w-12 sm:h-16 sm:w-16'>
                <Image
                  width={64}
                  height={64}
                  src={'/logo/genuss-logo.svg'}
                  alt='Genuss Logo'
                  className='h-full w-full object-contain'
                  placeholder='blur'
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            </div>
            <div className='flex-1 text-center sm:text-left'>
              <h4 className='mb-4 text-h4 uppercase sm:mb-6'>
                {tFooter('contactUs.title')}
              </h4>
              <div className='space-y-2 sm:space-y-4'>
                <p className='text-paragraph-m font-normal'>
                  {tFooter('contactUs.Tel')}:
                </p>
                <div className='flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4'>
                  <span className='text-paragraph-m font-normal'>
                    0978 352 968
                  </span>
                  <span className='text-paragraph-m font-normal'>
                    0978 452 968
                  </span>
                  <span className='text-paragraph-m font-normal'>
                    0978 552 968
                  </span>
                </div>
                <p className='text-paragraph-m font-normal'>
                  Email: sale01.td@genuss.vn
                </p>
              </div>
            </div>
          </div>

          <div className='mb-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12'>
            <div className='text-center lg:text-left'>
              <h4 className='mb-4 text-h4 uppercase sm:mb-6'>
                {tFooter('hotelAddress.title')}
              </h4>
              <p className='text-paragraph-m leading-relaxed font-normal'>
                {tFooter('hotelAddress.address')}
              </p>
            </div>
            <div className='relative h-48 min-h-[200px] w-full sm:h-56 sm:min-h-[240px] lg:h-60 lg:min-h-[241px]'>
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

        <div className='w-full'>
          <h4 className='mb-6 text-center text-h4 uppercase sm:mb-8 lg:mb-10 lg:text-left'>
            {tFooter('hotelAddress.offices.title')}
          </h4>
          <div className='grid w-full grid-cols-1 gap-8 text-paragraph-m font-normal sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 lg:gap-16'>
            <div className='space-y-4'>
              <h5 className='flex text-lg font-semibold'>
                <PinIcon className='mr-2' />
                {tFooter('hotelAddress.offices.cities.hanoi.name')}
              </h5>
              <div className='ml-3 space-y-2'>
                <div className='tracking-normal'>
                  {tFooter('hotelAddress.offices.cities.hanoi.offices.office1')}
                </div>
                <div className='tracking-normal'>
                  {tFooter('hotelAddress.offices.cities.hanoi.offices.office2')}
                </div>
              </div>
            </div>
            <div className='space-y-4'>
              <h5 className='flex text-lg font-semibold'>
                <PinIcon className='mr-2' />
                {tFooter('hotelAddress.offices.cities.hochiminh.name')}
              </h5>
              <div className='ml-3 tracking-normal'>
                {tFooter(
                  'hotelAddress.offices.cities.hochiminh.offices.office1',
                )}
              </div>
            </div>
          </div>
          <div className='mt-8 text-center'>
            <Link
              href='/contact#office-addresses'
              className='text-primary-foreground underline transition-colors hover:text-primary-foreground/80'
            >
              {tFooter('hotelAddress.viewAllOffices') ||
                'View all office addresses'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
