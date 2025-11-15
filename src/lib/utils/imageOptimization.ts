import { TRoom } from '@/types/room.type';

// Define optimized image type for Next.js Image component
export interface OptimizedImageProps {
  src: string;
  alt: string;
  blurDataURL: string;
  placeholder: 'blur';
  priority: boolean;
  loading: 'eager' | 'lazy';
  sizes: string;
  className: string;
}

/**
 * TODO: Generate a simple blur placeholder for images
 * Creates a low-quality placeholder that loads instantly for better UX
 * @param width - Placeholder width in pixels
 * @param height - Placeholder height in pixels
 * @returns Base64 encoded SVG placeholder
 */
export function generateBlurPlaceholder(
  width: number = 400,
  height: number = 300,
): string {
  // Create a simple SVG blur placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect width="100%" height="100%" fill="url(#gradient)"/>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#e5e7eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d1d5db;stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>
  `;

  // Convert SVG to base64
  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * TODO: Get image props with optimization for Next.js Image component
 * Generates optimized props including blur placeholders and loading strategies
 * @param imageUrl - Image source URL
 * @param index - Image index for priority determination
 * @returns Optimized image props for Next.js Image component
 */
export function getOptimizedImageProps(
  imageUrl: string,
  index: number,
): OptimizedImageProps {
  return {
    src: imageUrl,
    alt: `Room image ${index + 1}`,
    blurDataURL: generateBlurPlaceholder(),
    placeholder: 'blur',
    priority: index === 0,
    loading: index === 0 ? 'eager' : 'lazy',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    className: 'transition-transform duration-300 hover:scale-105',
  };
}

/**
 * TODO: Preload critical images for better performance
 * Identifies and returns the most important images for immediate loading
 * @param room - Room object containing images array
 * @returns Array of critical image URLs for preloading
 */
export function getCriticalImageUrls(room: TRoom): string[] {
  if (!room.images) {
    return [];
  }

  // Return first 2 images for preloading
  return room.images.slice(0, 2);
}

/**
 * TODO: Get room with optimized image metadata (doesn't modify original room)
 * Enhances room object with image optimization metadata for better performance
 * @param room - Original room object
 * @returns Enhanced room object with image metadata
 */
export function getRoomWithImageMetadata(room: TRoom) {
  if (!room.images) {
    return room;
  }

  // Return room with additional metadata for images
  return {
    ...room,
    imageMetadata: room.images.map((imageUrl, index) => ({
      url: imageUrl,
      priority: index === 0,
      loading: index === 0 ? 'eager' : ('lazy' as const),
      blurDataURL: generateBlurPlaceholder(),
    })),
  };
}
