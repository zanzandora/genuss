import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

const ContactInfo = () => {
  const tContact = useTranslations('contact');
  return (
    <section className='-mx-4 mb-4 bg-primary py-12 sm:-mt-12 sm:mb-16 md:mb-24 md:py-20'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
          {/* Phone */}
          <div className='flex flex-col items-center'>
            <div className='mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-foreground'>
              <Phone size={64} fill='black' />
            </div>
            <h2 className='mb-6 text-h2 text-primary-foreground'>
              {tContact('phone')}
            </h2>
            <div className='space-y-0.5 text-h4 text-primary-foreground'>
              <p>0978 552 968</p>
            </div>
          </div>

          {/* Email */}
          <div className='flex flex-col items-center text-center'>
            <div className='mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-foreground'>
              <Mail size={64} />
            </div>
            <h2 className='mb-6 text-h2 text-primary-foreground'>Email</h2>
            <p className='text-h4 text-sm text-primary-foreground'>
              genusstamdao2968@gmail.com
            </p>
          </div>

          {/* Location */}
          <div className='flex flex-col items-center text-center'>
            <div className='mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-foreground'>
              <MapPin size={64} />
            </div>
            <h2 className='mb-6 text-h2 text-primary-foreground'>
              {tContact('location.title')}
            </h2>
            <p className='mb-4 text-h4 text-primary-foreground'>
              {tContact('location.address')}
            </p>
            <Link
              href='https://www.google.com/maps/place/Kh%C3%A1ch+s%E1%BA%A1n+Genuss+Tam+%C4%90%E1%BA%A3o/@21.4572571,105.6403567,772m/data=!3m2!1e3!4b1!4m10!3m9!1s0x3134e7650ddc749f:0x9fde527b2b8fb0ca!5m3!1s2025-11-23!4m1!1i2!8m2!3d21.4572522!4d105.6452276!16s%2Fg%2F11t99qzv_x?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              rel='noopener noreferrer'
              className='text-h4 text-primary-foreground underline transition hover:text-blue-400'
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
