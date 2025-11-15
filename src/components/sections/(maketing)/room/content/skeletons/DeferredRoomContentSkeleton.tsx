import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function DeferredRoomContentSkeleton() {
  return (
    <>
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
    </>
  );
}
