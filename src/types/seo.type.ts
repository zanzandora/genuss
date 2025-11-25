export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    type?: string;
    locale?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    title?: string;
    description?: string;
    images?: string[];
  };
  canonical?: string;
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      'max-video-preview'?: number;
      'max-image-preview'?: 'large' | 'standard' | 'none';
      'max-snippet'?: number;
    };
  };
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export interface HotelStructuredData extends StructuredData {
  '@type': 'Hotel';
  name: string;
  description: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode?: string;
  };
  telephone: string;
  email?: string;
  url: string;
  starRating?: string;
  priceRange?: string;
  amenity?: string[];
  image?: string[];
  sameAs?: string[];
}

export interface RoomStructuredData extends StructuredData {
  '@type': 'HotelRoom' | 'Suite';
  name: string;
  description: string;
  bed?: {
    '@type': 'Bed';
    type: string;
    quantity?: number;
  };
  occupancy: number;
  floorSize?: {
    '@type': 'QuantitativeValue';
    value: number;
    unitCode: 'MTK';
  };
  amenity?: string[];
  offers?: {
    '@type': 'Offer';
    price: string;
    priceCurrency: string;
    availability: string;
    validFrom?: string;
  };
  photo?: string[];
}

export interface ServiceStructuredData extends StructuredData {
  '@type': 'Service';
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  areaServed?: {
    '@type': 'Place';
    name: string;
  };
  hasOfferCatalog?: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: Array<{
      '@type': 'Offer';
      itemOffered: string;
      price?: string;
    }>;
  };
}

export interface BreadcrumbStructuredData extends StructuredData {
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }>;
}

export type PageType =
  | 'home'
  | 'rooms'
  | 'room-detail'
  | 'services'
  | 'service-detail'
  | 'booking'
  | 'contact'
  | 'booking-detail';
