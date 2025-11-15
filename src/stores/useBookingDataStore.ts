import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * TODO: Manage booking data state with persistence and validation
 * Automatically saves to localStorage and validates date logic
 */
export interface BookingData {
  checkIn: Date | null;
  checkOut: Date | null;
  adultCount: string;
  childCount: string;
}

interface BookingDataStore {
  bookingData: BookingData;
  setCheckIn: (date: Date | null) => void;
  setCheckOut: (date: Date | null) => void;
  setAdultCount: (count: string) => void;
  setChildCount: (count: string) => void;
  setBookingData: (data: Partial<BookingData>) => void;
  clearBookingData: () => void;
}

const initialState: BookingData = {
  checkIn: null,
  checkOut: null,
  adultCount: '1',
  childCount: '0',
};

export const useBookingDataStore = create<BookingDataStore>()(
  persist(
    (set) => ({
      bookingData: initialState,

      setCheckIn: (date) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            checkIn: date,
            // Clear checkOut if checkIn is after checkOut
            checkOut:
              date &&
              state.bookingData.checkOut &&
              date >= state.bookingData.checkOut
                ? null
                : state.bookingData.checkOut,
          },
        })),

      setCheckOut: (date) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            checkOut: date,
          },
        })),

      setAdultCount: (count) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            adultCount: count || '1',
          },
        })),

      setChildCount: (count) =>
        set((state) => {
          return {
            bookingData: {
              ...state.bookingData,
              childCount: count || '0',
            },
          };
        }),

      setBookingData: (data) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            ...data,
          },
        })),

      clearBookingData: () => set({ bookingData: initialState }),
    }),
    {
      name: 'booking-data-storage',

      partialize: (state) => ({
        bookingData: {
          ...state.bookingData,
          checkIn: state.bookingData.checkIn
            ? state.bookingData.checkIn.toISOString()
            : null,
          checkOut: state.bookingData.checkOut
            ? state.bookingData.checkOut.toISOString()
            : null,
          adultCount: state.bookingData.adultCount,
          childCount: state.bookingData.childCount,
        },
      }),

      onRehydrateStorage: () => (state) => {
        if (!state) return;

        const bd = state.bookingData;
        if (!bd) return;

        // Ensure default values are always applied
        bd.adultCount =
          bd.adultCount && bd.adultCount !== '' ? String(bd.adultCount) : '1';

        bd.childCount =
          bd.childCount !== undefined &&
          bd.childCount !== null &&
          bd.childCount !== ''
            ? String(bd.childCount)
            : '0';

        // Convert ISO string to Date
        bd.checkIn =
          bd.checkIn && !(bd.checkIn instanceof Date)
            ? new Date(bd.checkIn)
            : bd.checkIn;

        bd.checkOut =
          bd.checkOut && !(bd.checkOut instanceof Date)
            ? new Date(bd.checkOut)
            : bd.checkOut;
      },
    },
  ),
);
