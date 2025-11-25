import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

const ContactInfo = () => {
  const tContact = useTranslations('contact');
  return (
    <section className='-mx-4 mb-4 bg-primary py-8 sm:my-12 sm:py-12 md:my-16 md:py-16 lg:my-24 lg:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 md:gap-12'>
          {/* Phone */}
          <div className='flex flex-col items-center'>
            <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground sm:mb-6 sm:h-20 sm:w-20 md:h-24 md:w-24'>
              <Phone size={32} fill='black' className='md:size-12 lg:size-16' />
            </div>
            <h2 className='mb-4 text-center text-xl font-semibold text-primary-foreground sm:mb-6 sm:text-2xl md:text-h2'>
              {tContact('phone')}
            </h2>
            <div className='space-y-0.5 text-center text-base text-primary-foreground sm:text-lg md:text-h4'>
              <p>0978 552 968</p>
            </div>
          </div>

          {/* Email */}
          <div className='flex flex-col items-center text-center'>
            <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground sm:mb-6 sm:h-20 sm:w-20 md:h-24 md:w-24'>
              <Mail size={32} className='md:size-12 lg:size-16' />
            </div>
            <h2 className='mb-4 text-xl font-semibold text-primary-foreground sm:mb-6 sm:text-2xl md:text-h2'>
              Email
            </h2>
            <p className='text-base break-all text-primary-foreground sm:text-sm md:text-h4'>
              genusstamdao2968@gmail.com
            </p>
          </div>

          {/* Location */}
          <div className='flex flex-col items-center text-center'>
            <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground sm:mb-6 sm:h-20 sm:w-20 md:h-24 md:w-24'>
              <MapPin size={32} className='md:size-12 lg:size-16' />
            </div>
            <h2 className='font-playfair_display mb-4 text-center text-xl font-semibold text-primary-foreground sm:mb-6 sm:text-2xl md:text-h2'>
              {tContact('location.title')}
            </h2>
            <p className='mb-3 text-base text-primary-foreground sm:mb-4 sm:text-sm md:text-h4'>
              {tContact('location.address')}
            </p>
            <Link
              href='https://www.google.com/maps/place/Kh%C3%A1ch+s%E1%BA%A1n+Genuss+Tam+%C4%90%E1%BA%A3o/@21.4572571,105.6403567,772m/data=!3m2!1e3!4b1!4m10!3m9!1s0x3134e7650ddc749f:0x9fde527b2b8fb0ca!5m3!1s2025-11-23!4m1!1i2!8m2!3d21.4572522!4d105.6452276!16s%2Fg%2F11t99qzv_x?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              rel='noopener noreferrer'
              className='text-base text-primary-foreground underline transition hover:text-blue-400 sm:text-sm md:text-h4'
            >
              {tContact('location.viewOnGoogleMap')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
