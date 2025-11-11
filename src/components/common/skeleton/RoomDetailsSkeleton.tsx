import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const RoomDetailsSkeleton = () => {
  return (
    <section>
      <div className='mx-auto mb-16 max-w-6xl'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <main className='space-y-8 lg:col-span-2'>
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

            <Separator className='bg-gray-500' />

            {/* Room Amenities Skeleton */}
            <div className='space-y-4'>
              <Skeleton className='h-10 w-48' />
              <div className='grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3'>
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className='flex cursor-default items-center gap-6 rounded-2xl border p-4'
                  >
                    <Skeleton className='h-12 w-12 rounded' />
                    <Skeleton className='h-5 w-24' />
                  </div>
                ))}
              </div>
            </div>

            <br />

            {/* Hotel Amenities Skeleton */}
            <div className='space-y-4'>
              <Skeleton className='h-10 w-48' />
              <div className='grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3'>
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className='flex cursor-default items-center gap-6 rounded-2xl border p-4'
                  >
                    <Skeleton className='h-12 w-12 rounded' />
                    <Skeleton className='h-5 w-24' />
                  </div>
                ))}
              </div>
            </div>

            <Separator className='bg-gray-500' />

            {/* Hotel Rules Skeleton */}
            <div>
              <Skeleton className='mb-4 h-10 w-32' />
              <ul className='ml-4 space-y-5'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index}>
                    <Skeleton className='h-4 w-xs' />
                  </li>
                ))}
              </ul>
            </div>
          </main>

          {/* Sidebar - Booking Panel Skeleton */}
          <div className='lg:col-span-1'>
            <Card className='sticky top-8 p-6'>
              <div className='w-full'>
                <div className='mx-6 mb-6'>
                  <Skeleton className='h-7 w-32' />
                </div>
                <div className='space-y-4'>
                  <Skeleton className='h-10 w-full' />
                  <Skeleton className='h-10 w-full' />
                  <Skeleton className='h-10 w-full' />
                  <Skeleton className='h-12 w-full' />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Room Gallery Skeleton */}
      <div className='mb-8 space-y-4'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className='relative aspect-square overflow-hidden rounded-lg'
            >
              <Skeleton className='h-full w-full' />
            </div>
          ))}
        </div>
      </div>

      {/* Room Recommends Skeleton */}
      <section className='relative px-6 py-20'>
        <div className='relative mx-auto max-w-6xl'>
          <div className='mb-14 text-center'>
            <Skeleton className='mb-4 h-10 w-48' />
          </div>

          <div className='mb-8 grid gap-6 md:grid-cols-3'>
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className='overflow-hidden'>
                <div className='relative aspect-[4/3]'>
                  <Skeleton className='h-full w-full' />
                </div>
                <div className='space-y-3 p-4'>
                  <Skeleton className='h-6 w-3/4' />
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-2/3' />
                  <div className='flex items-center justify-between pt-2'>
                    <Skeleton className='h-6 w-20' />
                    <Skeleton className='h-10 w-24' />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className='text-right'>
            <Skeleton className='ml-auto h-6 w-32' />
          </div>
        </div>
      </section>
    </section>
  );
};

export default RoomDetailsSkeleton;
