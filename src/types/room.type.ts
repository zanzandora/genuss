export type BedType = 'largeDouble' | 'double' | 'single';
export type ViewType = 'square' | 'mountain';
export type BathroomType = 'bathtubShower' | 'bathtub' | 'shower';
export type FeatureType = 'sofa' | 'balcony' | 'romanticDecor';

export interface TRoom {
  id: number;
  name: string;
  slug: string;
  quantity: number;
  price: string;
  images?: string[];
  mainImage?: string;
  area: number; // diện tích phòng (m2)
  bed: BedType[];
  maxOccupancy: number;
  view: ViewType;
  bathroom: BathroomType;
  features?: FeatureType[];
}
