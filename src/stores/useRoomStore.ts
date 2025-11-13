'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TRoom } from '@/types/room.type';
import { TBookingDetails } from '@/types/bookingDetails.type';

export type RoomStoreItem = TBookingDetails & {
  quantity: number;
  checkIn?: string;
  checkOut?: string;
};

type RoomStore = {
  items: RoomStoreItem[];
  addItem: (room: TRoom, checkIn?: string, checkOut?: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearStore: () => void;
  getTotalPrice: () => number;
  getTotalRooms: () => number;
  getItemById: (id: string) => RoomStoreItem | undefined;
};

export const useRoomStore = create<RoomStore>()(
  persist(
    (set, get) => ({
      items: [],

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
          // Add new item
          const newItem: RoomStoreItem = {
            id: `${room.id}-${Date.now()}`,
            name: room.name,
            pricePerNight: parseFloat(room.price),
            quantity: 1,
            checkIn,
            checkOut,
            maxGuest: room.maxOccupancy,
          };
          set({ items: [...items, newItem] });
        }
      },

      removeItem: (id: string) => {
        const { items } = get();
        const updatedItems = items.filter((item) => item.id !== id);
        set({ items: updatedItems });
      },

      updateQuantity: (id: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        const { items } = get();
        const updatedItems = items.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        );
        set({ items: updatedItems });
      },

      clearStore: () => {
        set({ items: [] });
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
    }),
    {
      name: 'room-store',
    },
  ),
);
