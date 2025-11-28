import { BinocularsIcon, DumbbellIcon, MapPin, SunIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatedSection } from '@/components/ui/animations/AnimatedSection';
import { AnimatedContainer } from '@/components/ui/animations/AnimatedContainer';
import Stack from '@/components/ui/stack';

const IntroduceSection = () => {
  const tIntroduce = useTranslations('home.introduce');

  const introducesImage = [
    {
      id: 1,
      image: '/images/introduces/introduce-1.jpg',
      alt: tIntroduce('title'),
    },
    {
      id: 2,
      image: '/images/introduces/introduce-2.jpg',
      alt: tIntroduce('title'),
    },
    {
      id: 3,
      image: '/images/introduces/introduce-3.jpg',
      alt: tIntroduce('title'),
    },
    {
      id: 4,
      image: '/images/introduces/introduce-4.jpg',
      alt: tIntroduce('title'),
    },
    {
      id: 5,
      image: '/images/introduces/introduce-5.jpg',
      alt: tIntroduce('title'),
    },
    {
      id: 6,
      image: '/images/introduces/introduce-6.jpg',
      alt: tIntroduce('title'),
    },
  ];

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
        <div className='grid gap-16 md:grid-cols-2 md:gap-18'>
          <AnimatedSection variant='slideInLeft' delay={0.2}>
            <div className='mx-auto w-full max-w-md overflow-hidden rounded-4xl sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
              {/* Hotel Exterior */}

              <Stack
                className='mx-auto'
                sendToBackOnClick={true}
                cardDimensions={{
                  xs: { width: '220px', height: '220px' },
                  sm: { width: '260px', height: '260px' },
                  md: { width: '300px', height: '300px' },
                  lg: { width: '340px', height: '340px' },
                  xl: { width: '380px', height: '380px' },
                }}
                cardsData={introducesImage.map((imageObj) => ({
                  id: imageObj.id,
                  img: imageObj.image,
                  alt: imageObj.alt,
                }))}
              />
            </div>
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
                    <h3 className='text-base font-bold text-gray-900 uppercase md:text-lg lg:text-xl'>
                      {tIntroduce(feature.titleKey)}
                    </h3>
                    <p className='mt-1 text-sm text-primary'>
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
