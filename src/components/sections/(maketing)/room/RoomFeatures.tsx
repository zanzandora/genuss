import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { TRoom } from '@/types/room.type';
import {
  BedDoubleIcon,
  ExpandIcon,
  TreePineIcon,
  Users2Icon,
} from 'lucide-react';

interface RoomFeaturesProps {
  room: TRoom;
}

export function RoomFeatures({ room }: RoomFeaturesProps) {
  return (
    <section>
      <div className='grid grid-cols-1 gap-4 pb-8 md:grid-cols-2 md:grid-rows-2'>
        {/* Bed */}
        <Item className=''>
          <ItemMedia
            variant='icon'
            className='my-auto border-none bg-transparent'
          >
            <BedDoubleIcon className='size-8' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className='text-h4 font-bold'>Bed</ItemTitle>
            <ItemDescription className='text-xl font-bold'>
              {room.bed.join(', ')}
            </ItemDescription>
          </ItemContent>
        </Item>

        {/* Room space */}
        <Item className=''>
          <ItemMedia
            variant='icon'
            className='my-auto border-none bg-transparent'
          >
            <ExpandIcon className='size-8' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className='text-h4 font-bold'>Room Space</ItemTitle>
            <ItemDescription className='text-xl font-bold'>
              {room.area} <span className='ordinal'>m2</span>
            </ItemDescription>
          </ItemContent>
        </Item>

        {/* Max Guesst */}
        <Item className=''>
          <ItemMedia
            variant='icon'
            className='my-auto border-none bg-transparent'
          >
            <Users2Icon className='size-8' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className='text-h4 font-bold'>Max Guesst</ItemTitle>
            <ItemDescription className='text-xl font-bold'>
              {room.maxOccupancy} Guest
            </ItemDescription>
          </ItemContent>
        </Item>

        {/* Room View */}
        <Item className=''>
          <ItemMedia
            variant='icon'
            className='my-auto border-none bg-transparent'
          >
            <TreePineIcon className='size-8' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className='text-h4 font-bold'>Room View</ItemTitle>
            <ItemDescription className='text-xl font-bold'>
              {room.view}
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>

      {/* Description */}
      <div className='space-y-4'>
        <p className='text-paragraph-m leading-relaxed text-muted-foreground'>
          The Superior Double Room at Genest Inn Bao hotel offers a cozy and
          elegant retreat inspired by modern European style. Boasting a spacious
          32 m² area, the room features a comfortable queen-size bed (1 m x 2
          m), LED TV, air conditioning and a private bathroom with hot and cold
          shower and premium toiletries. Large windows open to a charming view
          of Tao Bao. Located in the heart of Bao, the Superior Double Room is
          an ideal choice for couples or travelers seeking a peaceful and
          comfortable stay in an atmospheric atmosphere.
        </p>
      </div>
    </section>
  );
}
