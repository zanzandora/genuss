import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt?: string;
  fallbackAlt?: string;
  generateAlt?: boolean;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  fallbackAlt = 'Genuss Hotel Tam Dao',
  generateAlt = true,
  className,
  ...props
}: OptimizedImageProps) {
  // Generate alt text automatically if not provided
  const generateAltText = (imageSrc: string | string[]): string => {
    if (typeof imageSrc !== 'string') {
      return fallbackAlt;
    }

    // Extract filename from path
    const filename = imageSrc.split('/').pop()?.split('.')[0] || '';

    // Convert filename to readable text
    const readableText = filename
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .replace(/\d+/g, '') // Remove numbers
      .trim();

    // Add hotel context
    return readableText
      ? `${readableText} - Genuss Hotel Tam Dao`
      : fallbackAlt;
  };

  const finalAlt =
    alt ||
    (generateAlt
      ? generateAltText(typeof src === 'string' ? src : '')
      : fallbackAlt);

  return (
    <Image
      {...props}
      src={src}
      alt={finalAlt}
      className={cn('transition-opacity duration-300', className)}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    />
  );
}

// Room specific optimized image
interface RoomImageProps extends Omit<OptimizedImageProps, 'alt'> {
  roomName?: string;
  roomType?: string;
  roomBed?: string[];
  view?: string[];
}

export function RoomImage({
  roomName,
  roomBed = [],
  view = [],
  ...props
}: RoomImageProps) {
  const generateRoomAlt = (): string => {
    const parts = [];

    if (roomName) parts.push(roomName);
    if (roomBed.length > 0) parts.push(roomBed.join(' & '));
    if (view.length > 0) parts.push(view.join(' & '));

    parts.push('Genuss Hotel Tam Dao');

    return parts.join(' - ');
  };

  return (
    <OptimizedImage {...props} alt={generateRoomAlt()} generateAlt={false} />
  );
}

// Service specific optimized image
interface ServiceImageProps extends Omit<OptimizedImageProps, 'alt'> {
  serviceName?: string;
  serviceType?: string;
}

export function ServiceImage({
  serviceName,
  serviceType,
  ...props
}: ServiceImageProps) {
  const generateServiceAlt = (): string => {
    const parts = [];

    if (serviceName) parts.push(serviceName);
    if (serviceType && serviceType !== serviceName) parts.push(serviceType);

    parts.push('Service - Genuss Hotel Tam Dao');

    return parts.join(' - ');
  };

  return (
    <OptimizedImage {...props} alt={generateServiceAlt()} generateAlt={false} />
  );
}

// Facility specific optimized image
interface FacilityImageProps extends Omit<OptimizedImageProps, 'alt'> {
  facilityName?: string;
  facilityType?: string;
}

export function FacilityImage({
  facilityName,
  facilityType,
  ...props
}: FacilityImageProps) {
  const generateFacilityAlt = (): string => {
    const parts = [];

    if (facilityName) parts.push(facilityName);
    if (facilityType && facilityType !== facilityName) parts.push(facilityType);

    parts.push('Facility - Genuss Hotel Tam Dao');

    return parts.join(' - ');
  };

  return (
    <OptimizedImage
      {...props}
      alt={generateFacilityAlt()}
      generateAlt={false}
    />
  );
}
