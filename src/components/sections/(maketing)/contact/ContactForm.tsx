'use client';

import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useRoomStore } from '@/stores/useRoomStore';
import { useBookingDataStore } from '@/stores/useBookingDataStore';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import axios from 'axios';
import { formatCurrency } from '@/lib/utils';
import { useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

// Zod schema for contact form
const contactSchema = z.object({
  title: z.string().optional(),
  fullName: z.string().min(1, 'Full name is required'),
  email: z.email('Invalid email address'),
  country: z.string().min(1, 'Country is required'),
  phone: z.string().min(1, 'Phone number is required'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

type Props = {
  requireBookingData?: boolean;
  hotelEmail?: string;
};

const ContactForm = ({
  requireBookingData = false,
  hotelEmail = 'maiminhtu130803@gmail.com',
}: Props) => {
  const tContactForm = useTranslations('common.forms.contact');
  const tBookingForm = useTranslations('common.forms.bookingForm');
  const tLabel = useTranslations('common.labels');
  const tButton = useTranslations('common.buttons');

  const locale = useLocale();

  const items = useRoomStore((state) => state.items);
  const getTotalPrice = useRoomStore((state) => state.getTotalPrice);
  const clearStore = useRoomStore((state) => state.clearStore);

  const bookingData = useBookingDataStore((state) => state.bookingData);
  const clearBookingData = useBookingDataStore(
    (state) => state.clearBookingData,
  );

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    control,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      title: '',
      fullName: '',
      email: '',
      country: '',
      phone: '',
      message: '',
    },
  });

  const title = useWatch({ control, name: 'title', defaultValue: '' });

  const onSubmit = async (data: ContactFormData) => {
    if (requireBookingData) {
      if (items.length === 0) {
        toast.error('Please add at least one room to your booking');
        return;
      }
      if (!bookingData.checkIn) {
        toast.error('Please select check-in date');
        return;
      }
      if (!bookingData.checkOut) {
        toast.error('Please select check-out date');
        return;
      }
      if (bookingData.checkOut <= bookingData.checkIn) {
        toast.error('Check-out date must be after check-in date');
        return;
      }
    }

    try {
      // Generate idempotency key
      const idempotencyKey = uuidv4();
      localStorage.setItem('bookingIdempotencyKey', idempotencyKey);

      // Prepare payload
      const payload = {
        user: {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          country: data.country,
          message: data.message,
        },
        booking_data: requireBookingData
          ? {
              hotelEmail,
              checkIn: bookingData.checkIn
                ? format(bookingData.checkIn, 'yyyy-MM-dd')
                : '',
              checkOut: bookingData.checkOut
                ? format(bookingData.checkOut, 'yyyy-MM-dd')
                : '',
              adultCount: parseInt(bookingData.adultCount),
              childCount: parseInt(bookingData.childCount),
              currency: locale === 'vi' ? 'VND' : 'USD',
              totalPrice: formatCurrency(getTotalPrice()),
            }
          : undefined,
        rooms: requireBookingData
          ? items.map((item) => ({
              name: item.name,
              quantity: item.quantity,
              pricePerNight: item.pricePerNight,
            }))
          : [],
      };

      // Send to API using axios
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
      await axios.post(`${apiBaseUrl}/api/bookings/send-emails`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey,
        },
      });

      toast.success(
        requireBookingData
          ? 'Booking submitted successfully! We will contact you soon.'
          : 'Message sent successfully! We will get back to you.',
      );

      // Reset form
      reset();

      if (requireBookingData) {
        clearStore();
        clearBookingData();
      }

      // Clear idempotency key
      localStorage.removeItem('bookingIdempotencyKey');

      router.push('/');
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit. Please try again.');
    }
  };

  return (
    <section id={'Contact'} className='w-full'>
      <div className='mx-auto max-w-2xl px-4'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-h2'>
            {requireBookingData
              ? tContactForm('titleBooking')
              : tContactForm('title')}
          </h2>
          <p className='text-paragraph-m text-muted-foreground'>
            {requireBookingData
              ? tContactForm('desciptionsBooking')
              : tContactForm('desciptions')}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <Select
              value={title}
              onValueChange={(value) => setValue('title', value)}
            >
              <SelectTrigger
                className='w-32 rounded-none border-0 bg-muted'
                aria-label='Select Mr/Mrs'
              >
                <SelectValue placeholder='Mr/Mrs' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='mr'>Mr</SelectItem>
                <SelectItem value='mrs'>Mrs</SelectItem>
                <SelectItem value='ms'>Ms</SelectItem>
              </SelectContent>
            </Select>

            <div className='col-span-2'>
              <Input
                {...register('fullName')}
                type='text'
                placeholder={tContactForm('form.fullName')}
                className='w-full rounded-none border-0 bg-muted placeholder:text-paragraph-m'
              />
              {errors.fullName && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.fullName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Input
              {...register('email')}
              type='email'
              placeholder={tContactForm('form.email')}
              className='rounded-none border-0 bg-muted placeholder:text-paragraph-m'
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              {...register('country')}
              type='text'
              placeholder={tContactForm('form.country')}
              className='rounded-none border-0 bg-muted placeholder:text-paragraph-m'
            />
            {errors.country && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <Input
              {...register('phone')}
              type='text'
              placeholder={tContactForm('form.phone')}
              className='rounded-none border-0 bg-muted placeholder:text-paragraph-m'
            />
            {errors.phone && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <Textarea
              {...register('message')}
              placeholder={tContactForm('form.message')}
              className='min-h-32 rounded-none border-0 bg-muted placeholder:text-paragraph-m'
            />
          </div>

          {/* Show booking summary */}
          {requireBookingData && items.length > 0 && (
            <div className='rounded-lg border bg-muted p-4'>
              <h4 className='mb-2 font-semibold capitalize'>
                {tLabel('bookingSummary')}
              </h4>
              <div className='space-y-1 text-sm'>
                {items.map((item) => (
                  <div key={item.id} className='flex justify-between'>
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>
                      {formatCurrency(item.pricePerNight * item.quantity)}/night
                    </span>
                  </div>
                ))}
                <div className='mt-2 border-t pt-2 font-semibold'>
                  {tLabel('total')}: {formatCurrency(getTotalPrice())}
                </div>
                {bookingData.checkIn && bookingData.checkOut && (
                  <div className='mt-2 text-sm'>
                    <div>
                      {tBookingForm('checkIn')}:{' '}
                      {format(bookingData.checkIn, 'd/MM/yyyy')}
                    </div>
                    <div>
                      {tBookingForm('checkOut')}:{' '}
                      {format(bookingData.checkOut, 'd/MM/yyyy')}
                    </div>
                    <div>
                      {tBookingForm('adult')}: {bookingData.adultCount},{' '}
                      {tBookingForm('child')}: {bookingData.childCount}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div>
            <Button
              type='submit'
              size={'lg'}
              disabled={isSubmitting}
              className='cursor-pointer border-2 border-border bg-transparent text-xl font-bold text-primary uppercase hover:border-primary-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-50'
            >
              {isSubmitting ? tLabel('submitting') : tButton('send')}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
