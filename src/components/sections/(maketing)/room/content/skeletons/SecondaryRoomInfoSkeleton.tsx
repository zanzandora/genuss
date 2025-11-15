import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export function SecondaryRoomInfoSkeleton() {
  return (
    <div className='space-y-8'>
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
    </div>
  );
}
