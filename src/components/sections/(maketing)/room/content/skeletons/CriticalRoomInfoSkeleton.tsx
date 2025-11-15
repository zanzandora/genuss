import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export function CriticalRoomInfoSkeleton() {
  return (
    <div className='space-y-8 lg:col-span-2'>
      {/* Room Title Section Skeleton */}
      <div className='flex justify-between'>
        <div className='space-y-8'>
          <Skeleton className='h-12 w-64 md:h-14 md:w-96' />
          <Skeleton className='h-6 w-full md:w-80' />
        </div>
        <div className='pt-2'>
          <Skeleton className='h-12 w-32 md:h-14 md:w-40' />
        </div>
      </div>

      <Separator className='bg-gray-500' />

      {/* Room Features Skeleton */}
      <section>
        <div className='grid grid-cols-1 gap-4 pb-8 md:grid-cols-2 md:grid-rows-2'>
          {/* Bed Feature */}
          <div className='flex items-center gap-4 rounded-lg p-4'>
            <Skeleton className='h-8 w-8 rounded' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-16' />
              <Skeleton className='h-6 w-24' />
            </div>
          </div>

          {/* Room Space Feature */}
          <div className='flex items-center gap-4 rounded-lg p-4'>
            <Skeleton className='h-8 w-8 rounded' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-20' />
              <Skeleton className='h-6 w-16' />
            </div>
          </div>

          {/* Max Guests Feature */}
          <div className='flex items-center gap-4 rounded-lg p-4'>
            <Skeleton className='h-8 w-8 rounded' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-20' />
              <Skeleton className='h-6 w-16' />
            </div>
          </div>

          {/* Room View Feature */}
          <div className='flex items-center gap-4 rounded-lg p-4'>
            <Skeleton className='h-8 w-8 rounded' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-16' />
              <Skeleton className='h-6 w-24' />
            </div>
          </div>
        </div>

        {/* Description Skeleton */}
        <div className='space-y-4'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-3/4' />
        </div>
      </section>
    </div>
  );
}
