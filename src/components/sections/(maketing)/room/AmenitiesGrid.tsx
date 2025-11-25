import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FacilityKey } from '@/types/FacilityKey.type';

interface Amenity {
  icon: string;
  labelKey: FacilityKey;
}

interface AmenitiesGridProps {
  amenities: Amenity[];
  title: string;
}

export function AmenitiesGrid({ amenities, title }: AmenitiesGridProps) {
  const t = useTranslations('facilities');

  return (
    <div className='space-y-4'>
      <h3 className='font-playfair_display py-4 text-h3'>{title}</h3>
      <div className='grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3'>
        {amenities.map((amenity) => (
          <Item
            key={amenity.labelKey}
            variant={'outline'}
            className='flex cursor-default items-center gap-6 rounded-2xl p-4 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.04] hover:bg-primary-foreground hover:shadow-2xl'
          >
            <ItemMedia className='my-auto border-none bg-transparent'>
              <Image
                src={amenity.icon}
                alt={t(amenity.labelKey)}
                height={52}
                width={52}
                className='size-12'
                loading='lazy'
              />
            </ItemMedia>
            <ItemContent className=''>
              <ItemTitle className='text-lg font-bold text-muted-foreground'>
                {t(amenity.labelKey)}
              </ItemTitle>
            </ItemContent>
          </Item>
        ))}
      </div>
    </div>
  );
}
