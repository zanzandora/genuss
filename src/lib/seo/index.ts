// Export all SEO utilities
export * from './metadata';
export * from './structured-data';
export * from './optimized-image';
export * from '../utils/imageOptimization';

// Re-export commonly used functions for convenience
export { generateSEOMetadata, generateCanonicalUrl } from './metadata';

export {
  generateHotelStructuredData,
  generateRoomStructuredData,
  generateServiceStructuredData,
  generateBreadcrumbStructuredData,
  generateLocalBusinessStructuredData,
  generateFAQStructuredData,
  generateJSONLDScript,
} from './structured-data';

export {
  OptimizedImage,
  RoomImage,
  ServiceImage,
  FacilityImage,
} from './optimized-image';

export { generateBlurPlaceholder } from '../utils/imageOptimization';
