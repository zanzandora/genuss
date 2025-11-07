import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EnquiryForm } from './EnquiryForm';
import BookingRoomForm from '../../../../common/BookingRoomForm';

type Props = {
  useTabsTwo?: boolean;
};

export function BookingPanel({ useTabsTwo = true }: Props) {
  return (
    <div className='lg:col-span-1'>
      <Card className='sticky top-8 p-6'>
        {useTabsTwo ? (
          <Tabs defaultValue='booking' className='w-full'>
            <TabsList className='mb-6 grid w-full grid-cols-2'>
              <TabsTrigger value='booking'>Book Rooms</TabsTrigger>
              <TabsTrigger value='enquiry'>Enquiry</TabsTrigger>
            </TabsList>

            <TabsContent value='booking'>
              <BookingRoomForm
                orientation='vertical'
                className='relative my-0 gap-3'
                buttonClass='text-muted-foreground hover:text-muted'
              />
            </TabsContent>

            <TabsContent value='enquiry'>
              <EnquiryForm />
            </TabsContent>
          </Tabs>
        ) : (
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
        )}
      </Card>
    </div>
  );
}
