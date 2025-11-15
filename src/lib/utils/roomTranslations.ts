import { useTranslations } from 'next-intl';
import { TRoom } from '@/types/room.type';

export interface TranslatedRoom {
  id: number;
  name: string;
  slug: string;
  quantity: number;
  price: string;
  images?: string[];
  mainImage?: string;
  area: number;
  bed: string[];
  maxOccupancy: number;
  view: string;
  bathroom: string;
  features?: string[];
}

export const useRoomTranslations = () => {
  const t = useTranslations('roomData');

  const translateRoom = (room: TRoom): TranslatedRoom => ({
    ...room,
    bed: room.bed.map((bedType) => t(`bedTypes.${bedType}`)),
    view: t(`viewTypes.${room.view}`),
    bathroom: t(`bathroomTypes.${room.bathroom}`),
    features: room.features?.map((feature) => t(`features.${feature}`)),
  });

  return { translateRoom };
};
