import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const ContactInfo = () => {
  return (
    <section className='-mx-4 -mt-12 mb-4 bg-primary py-12 sm:mb-16 md:mb-24 md:py-20'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
          {/* Phone */}
          <div className='flex flex-col items-center'>
            <div className='mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-foreground'>
              <Phone size={64} fill='black' />
            </div>
            <h2 className='mb-6 text-h2 text-primary-foreground'>Phone</h2>
            <div className='space-y-0.5 text-h4 text-primary-foreground'>
              <p>0978 352 968</p>
              <p>0978 352 968</p>
              <p>0978 352 968</p>
            </div>
          </div>

          {/* Email */}
          <div className='flex flex-col items-center text-center'>
            <div className='mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-foreground'>
              <Mail size={64} />
            </div>
            <h2 className='mb-6 text-h2 text-primary-foreground'>Email</h2>
            <p className='text-h4 text-sm text-primary-foreground'>
              info@genusstmdao.com
            </p>
          </div>

          {/* Location */}
          <div className='flex flex-col items-center text-center'>
            <div className='mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-foreground'>
              <MapPin size={64} />
            </div>
            <h2 className='mb-6 text-h2 text-primary-foreground'>Location</h2>
            <p className='mb-4 text-h4 text-primary-foreground'>
              No 1, Tam Dao, Phu Tho, Viet Nam
            </p>
            <Link
              href='#'
              className='text-h4 text-primary-foreground underline transition hover:text-blue-400'
            >
              View on Google Map
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
