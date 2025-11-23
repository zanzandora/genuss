'use client';

import { useRouter } from '@/i18n/routing';
import { useRoomStore } from '@/stores/useRoomStore';
import { TRoom } from '@/types/room.type';
import { toast } from 'sonner';
import { useBookingDataStore } from '@/stores/useBookingDataStore';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export const useBookRoom = () => {
  const tToast = useTranslations('common.forms.bookingForm.toast');

  const router = useRouter();
  const addItem = useRoomStore((state) => state.addItem);
  const bookingData = useBookingDataStore((state) => state.bookingData);
  const [isLoading, setIsLoading] = useState(false);

  const bookRoom = async (room: TRoom, checkIn?: string, checkOut?: string) => {
    // Use provided dates or fall back to booking store dates
    const finalCheckIn =
      checkIn ||
      (bookingData.checkIn
        ? bookingData.checkIn.toISOString().split('T')[0]
        : '');
    const finalCheckOut =
      checkOut ||
      (bookingData.checkOut
        ? bookingData.checkOut.toISOString().split('T')[0]
        : '');

    setIsLoading(true);

    try {
      // Simulate async operation (you can remove this timeout if not needed)
      await new Promise((resolve) => setTimeout(resolve, 500));

      addItem(room, finalCheckIn, finalCheckOut);
      toast.success(tToast('success'));
      router.push('/booking-detail');
      return true;
    } catch {
      toast.error(tToast('error'));
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { bookRoom, isLoading };
};
