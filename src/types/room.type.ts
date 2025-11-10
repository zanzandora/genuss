export interface TRoom {
  id: number;
  name: string;
  slug: string;
  quantity: number;
  images?: string[];
  mainImage?: string;
  area: number; // diện tích phòng (m2)
  bed: string[];
  maxOccupancy: number;
  view: string;
  bathroom: string;
  features?: string[];
}
