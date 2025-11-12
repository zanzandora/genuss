import { Card } from '@/components/ui/card';
import BookingRoomForm from '../../../../common/BookingRoomForm';

export function BookingPanel() {
  return (
    <div className='lg:col-span-1'>
      <Card className='sticky top-8 p-6'>
        <div className='w-full'>
          <div className='mx-6 mb-6'>
            <h2 className='text-xl font-semibold text-foreground'>
              Book Rooms
            </h2>
          </div>
          <BookingRoomForm
            orientation='vertical'
            className='relative my-0 gap-3'
            buttonClass='text-muted-foreground hover:text-muted'
          />
        </div>
      </Card>
    </div>
  );
}
