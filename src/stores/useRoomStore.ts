'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TRoom } from '@/types/room.type';
import { TBookingDetails } from '@/types/bookingDetails.type';
import { rooms } from '@/lib/data/rooms';

export type RoomStoreItem = TBookingDetails & {
  quantity: number;
  checkIn?: string;
  checkOut?: string;
};

type RoomStore = {
  items: RoomStoreItem[];
  initializeAllRooms: () => void;
  addItem: (room: TRoom, checkIn?: string, checkOut?: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearStore: () => void;
  resetQuantities: () => void;
  getTotalPrice: () => number;
  getTotalRooms: () => number;
  getItemById: (id: string) => RoomStoreItem | undefined;
  getItemsWithQuantity: () => RoomStoreItem[];
};

export const selectItemsWithQuantity = (state: RoomStore) =>
  state.items.filter((item) => item.quantity > 0);

export const useRoomStore = create<RoomStore>()(
  persist(
    (set, get) => ({
      items: [],

      initializeAllRooms: () => {
        const allRooms: RoomStoreItem[] = rooms.map((room) => ({
          id: room.id.toString(),
          name: room.name,
          pricePerNight: parseFloat(room.price),
          quantity: 0,
          maxGuest: room.maxOccupancy,
        }));
        set({ items: allRooms });
      },

      addItem: (room: TRoom, checkIn?: string, checkOut?: string) => {
        const { items } = get();
        const existingItemIndex = items.findIndex(
          (item) =>
            item.name === room.name &&
            item.checkIn === checkIn &&
            item.checkOut === checkOut,
        );

        if (existingItemIndex !== -1) {
          // Update quantity if room with same dates already exists
          const updatedItems = [...items];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1,
          };
          set({ items: updatedItems });
        } else {
          // Find existing room by name and increment quantity
          const roomIndex = items.findIndex((item) => item.name === room.name);
          if (roomIndex !== -1) {
            const updatedItems = [...items];
            updatedItems[roomIndex] = {
              ...updatedItems[roomIndex],
              quantity: updatedItems[roomIndex].quantity + 1,
              checkIn,
              checkOut,
            };
            set({ items: updatedItems });
          }
        }
      },

      updateQuantity: (id: string, quantity: number) => {
        const { items } = get();
        const updatedItems = items.map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item,
        );
        set({ items: updatedItems });
      },

      clearStore: () => {
        set({ items: [] });
      },

      resetQuantities: () => {
        const { items } = get();
        const updatedItems = items.map((item) => ({ ...item, quantity: 0 }));
        set({ items: updatedItems });
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.pricePerNight * item.quantity,
          0,
        );
      },

      getTotalRooms: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getItemById: (id: string) => {
        const { items } = get();
        return items.find((item) => item.id === id);
      },

      getItemsWithQuantity: () => {
        const { items } = get();
        return items.filter((item) => item.quantity > 0);
      },
    }),
    {
      name: 'room-store',
    },
  ),
);
