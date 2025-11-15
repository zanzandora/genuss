import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function BookingPanelSkeleton() {
  return (
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
  );
}
