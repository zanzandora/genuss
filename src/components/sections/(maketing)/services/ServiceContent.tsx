import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Service, OtherService } from '@/types/service.type';
import Stack from '@/components/ui/stack';
import RenderMultilineText from '@/components/ui/RenderMultilineText';
import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ServiceContentProps {
  service: Service;
  otherServices: OtherService[];
}

const ServiceContent = ({ service, otherServices }: ServiceContentProps) => {
  const tServices = useTranslations('services');
  return (
    <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12'>
        {/* Main Content Area - 70% width on desktop */}
        <div className='space-y-8 lg:col-span-2 lg:space-y-12'>
          {/* Hero Image */}
          <div className='relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl md:h-[400px] lg:h-[500px]'>
            <Stack
              className='mx-auto'
              sendToBackOnClick={true}
              cardDimensions={{
                xs: { width: '300px', height: '250px' },
                sm: { width: '350px', height: '300px' },
                md: { width: '400px', height: '350px' },
                lg: { width: '480px', height: '420px' },
              }}
              cardsData={service.images.map((imageObj) => ({
                id: imageObj.id,
                img: imageObj.img,
                alt: imageObj.alt,
              }))}
            />
          </div>

          {/* Service Description */}
          <div className='space-y-6'>
            <div className='prose prose-lg max-w-none text-gray-700'>
              <h1 className='my-4 text-lg leading-relaxed font-semibold'>
                {tServices(service.subTitleKey)}
              </h1>
              <p className='whitespace-pre-line'>
                <RenderMultilineText
                  text={tServices(service.details)}
                  additionalLineBreaks={1}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar - 30% width on desktop */}
        <div className='lg:col-span-1'>
          <div className='sticky top-8 space-y-6'>
            <h2 className='text-2xl font-bold text-primary uppercase'>
              {tServices('ortherService')}
            </h2>

            <div className=''>
              {otherServices.map((otherService) => (
                <Item key={otherService.id}>
                  <ItemMedia>
                    <Avatar className='size-14'>
                      <AvatarImage
                        src={otherService.imageSrc}
                        alt={tServices(otherService.nameKey)}
                      />
                      <AvatarFallback>{otherService.slug}</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>
                      <Link href={`/services/${otherService.slug}`}>
                        <div className='min-w-0 flex-1'>
                          <h3 className='text-lg font-semibold transition-colors hover:text-primary/50 hover:underline'>
                            {tServices(otherService.nameKey)}
                          </h3>
                        </div>
                      </Link>
                    </ItemTitle>
                  </ItemContent>
                </Item>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
