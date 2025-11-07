import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item';
import Image from 'next/image';

interface Amenity {
  icon: string;
  label: string;
}

interface AmenitiesGridProps {
  amenities: Amenity[];
  title: string;
}

export function AmenitiesGrid({ amenities, title }: AmenitiesGridProps) {
  return (
    <div className='space-y-4'>
      <h3 className='py-4 text-h3'>{title}</h3>
      <div className='grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3'>
        {amenities.map((amenity) => (
          <Item
            key={amenity.label}
            variant={'outline'}
            className='flex cursor-pointer items-center gap-6 rounded-2xl p-4 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.04] hover:shadow-xl'
          >
            <ItemMedia className='my-auto border-none bg-transparent'>
              <Image
                src={amenity.icon}
                alt={amenity.label}
                height={52}
                width={52}
                className='size-12'
                loading='lazy'
              />
            </ItemMedia>
            <ItemContent className=''>
              <ItemTitle className='text-lg font-bold text-muted-foreground'>
                {amenity.label}
              </ItemTitle>
            </ItemContent>
          </Item>
        ))}
      </div>
    </div>
  );
}
