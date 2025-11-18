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
  view: string[];
  bathroom: string;
  features?: string[];
}

export const useRoomTranslations = () => {
  const t = useTranslations('roomData');
  const tRoom = useTranslations('rooms.room');

  const translateRoomName = (slug: string): string => {
    return tRoom(`name.${slug}` as never);
  };

  const translateRoom = (room: TRoom): TranslatedRoom => {
    let translatedView: string[];

    if (room.view.length === 2) {
      // Use combined key when there are 2 view values
      const firstView = t(`viewTypes.${room.view[0]}`);
      const secondView = t(`viewTypes.${room.view[1]}`);
      translatedView = [t('combined', { a: firstView, b: secondView })];
    } else {
      // Use individual translations for single or multiple views
      translatedView = room.view.map((viewType) => t(`viewTypes.${viewType}`));
    }

    return {
      ...room,
      name: translateRoomName(room.slug),
      bed: room.bed.map((bedType) => t(`bedTypes.${bedType}`)),
      view: translatedView,
      bathroom: t(`bathroomTypes.${room.bathroom}`),
      features: room.features?.map((feature) => t(`features.${feature}`)),
    };
  };

  return { translateRoom };
};
