import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BLUR_DATA_URL } from '@/constants';
import { BinocularsIcon, DumbbellIcon, MapPin, SunIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { AnimatedSection } from '@/components/ui/animations/AnimatedSection';
import { AnimatedContainer } from '@/components/ui/animations/AnimatedContainer';

const IntroduceSection = () => {
  const tIntroduce = useTranslations('home.introduce');

  const features = [
    {
      icon: MapPin,
      titleKey: 'features.location.title' as const,
      descriptionKey: 'features.location.description' as const,
    },
    {
      icon: BinocularsIcon,
      titleKey: 'features.spaces.title' as const,
      descriptionKey: 'features.spaces.description' as const,
    },
    {
      icon: SunIcon,
      titleKey: 'features.pool.title' as const,
      descriptionKey: 'features.pool.description' as const,
    },
    {
      icon: DumbbellIcon,
      titleKey: 'features.facilities.title' as const,
      descriptionKey: 'features.facilities.description' as const,
    },
  ];

  return (
    <section className='mb-4 rounded-4xl bg-[#F5F7FA] px-6 py-8 sm:mb-10 md:mb-16 md:p-8 md:py-12'>
      <AnimatedSection
        variant='fadeInDown'
        className='mb-2 flex items-center justify-center'
      >
        <div className='text-sm font-medium'>
          <span className='flex items-center gap-2' aria-hidden='false'>
            <span className='font-playfair_display text-center text-title'>
              {tIntroduce('title')}
            </span>
          </span>
        </div>
      </AnimatedSection>

      <div className='mx-auto max-w-7xl py-8 md:py-12'>
        <div className='grid gap-16 lg:grid-cols-2 lg:gap-18'>
          <AnimatedSection variant='slideInLeft' delay={0.2}>
            <figure className='mx-auto w-[300px] max-w-full overflow-hidden rounded-4xl drop-shadow-xl md:w-[350px] lg:w-[400px] xl:w-[450px]'>
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
          </AnimatedSection>

          {/* Right Column - Feature Sections */}
          <AnimatedContainer
            variant='container'
            itemVariant='slideInRight'
            className='flex flex-col justify-center space-y-12 lg:ml-2'
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className='flex items-start gap-4'>
                  <Icon />
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 uppercase'>
                      {tIntroduce(feature.titleKey)}
                    </h3>
                    <p className='text-mu mt-1 text-sm'>
                      {tIntroduce(feature.descriptionKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
};

export default IntroduceSection;
