import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BLUR_DATA_URL } from '@/constants';
import { BinocularsIcon, DumbbellIcon, MapPin, SunIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const IntroduceSection = () => {
  const tIntroduce = useTranslations('home.introduce');
  return (
    <section className='mb-4 rounded-4xl bg-primary-foreground sm:mb-10 md:mb-16'>
      <div className='mb-2 flex items-center justify-center'>
        <div className='text-sm font-medium'>
          <span className='flex items-center gap-2' aria-hidden='false'>
            <span className='text-2xl font-bold uppercase sm:text-3xl lg:text-4xl'>
              {tIntroduce('title')}
            </span>
          </span>
        </div>
      </div>

      <div className='mx-auto max-w-7xl px-6 py-8 md:py-12'>
        <div className='p-6 md:p-8'>
          <div className='grid gap-8 lg:grid-cols-2 lg:gap-18'>
            <figure className='mx-auto w-[350px] overflow-hidden rounded-tl-4xl rounded-br-4xl drop-shadow-xl md:w-[400px] lg:w-[500px]'>
              {/* Hotel Exterior */}
              <AspectRatio ratio={1 / 1}>
                <Image
                  src='/images/introduce-image-1.jpg'
                  alt='Hotel exterior architecture'
                  fill
                  sizes='(max-width: 768px) 50vw, 25vw'
                  className='object-cover'
                  placeholder='blur'
                  blurDataURL={BLUR_DATA_URL}
                />
              </AspectRatio>
              <figcaption className='sr-only'>
                Introduc image: Why choose GENUSS ?
              </figcaption>
            </figure>

            {/* Right Column - Feature Sections */}
            <div className='ml-2 flex flex-col justify-center space-y-12'>
              {/* Prime Central Location */}
              <div className='flex items-start gap-4'>
                <MapPin />
                <div>
                  <h3 className='text-xl font-bold text-gray-900 uppercase'>
                    {tIntroduce('features.location.title')}
                  </h3>
                  <p className='text-mu mt-1 text-sm'>
                    {tIntroduce('features.location.description')}
                  </p>
                </div>
              </div>

              {/* Modern & Relaxing Spaces */}
              <div className='flex items-start gap-4'>
                <BinocularsIcon />
                <div>
                  <h3 className='text-xl font-bold text-gray-900 uppercase'>
                    {tIntroduce('features.spaces.title')}
                  </h3>
                  <p className='text-mu mt-1 text-sm'>
                    {tIntroduce('features.spaces.description')}
                  </p>
                </div>
              </div>

              {/* All-Year Outdoor Swimming Pool */}
              <div className='flex items-start gap-4'>
                <SunIcon />
                <div>
                  <h3 className='text-xl font-bold text-gray-900 uppercase'>
                    {tIntroduce('features.pool.title')}
                  </h3>
                  <p className='text-mu mt-1 text-sm'>
                    {tIntroduce('features.pool.description')}
                  </p>
                </div>
              </div>

              {/* Full Facilities & 24/7 Service */}
              <div className='flex items-start gap-4'>
                <DumbbellIcon />
                <div>
                  <h3 className='text-xl font-bold text-gray-900 uppercase'>
                    {tIntroduce('features.facilities.title')}
                  </h3>
                  <p className='text-mu mt-1 text-sm'>
                    {tIntroduce('features.facilities.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceSection;
