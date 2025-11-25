# SEO System for Genuss Hotel

This directory contains a comprehensive SEO system for the Genuss Hotel website, providing metadata generation, structured data, and image optimization utilities.

## 📁 File Structure

```
src/lib/seo/
├── index.ts                 # Main exports
├── metadata.ts              # SEO metadata generation
├── structured-data.ts       # Schema.org structured data
├── optimized-image.tsx      # Image optimization components
├── types.ts                # TypeScript type definitions
└── README.md               # This file
```

## 🚀 Quick Start

### Basic Usage in Pages

```typescript
import { generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata('home', locale, {
    imagePath: '/images/hero-image.jpg'
  });
}
```

### Using Optimized Images

```typescript
import { OptimizedImage, RoomImage, ServiceImage } from '@/lib/seo';

// Basic optimized image
<OptimizedImage
  src="/images/hotel-exterior.jpg"
  width={800}
  height={600}
  className="rounded-lg"
/>

// Room-specific image with auto-generated alt text
<RoomImage
  src="/images/rooms/deluxe-room.jpg"
  roomName="Deluxe Room"
  roomType="Superior"
  view={['Mountain', 'Garden']}
  width={800}
  height={600}
/>

// Service-specific image
<ServiceImage
  src="/images/services/swimming-pool.jpg"
  serviceName="Outdoor Swimming Pool"
  serviceType="Recreation"
  width={800}
  height={600}
/>
```

## 📋 Available Functions

### Metadata Generation

- `generateSEOMetadata(pageType, locale, options?)` - Generate complete metadata
- `generateCanonicalUrl(locale, path?)` - Generate canonical URLs
- `generateOpenGraphMetadata(locale, options?)` - Generate Open Graph tags
- `generateTwitterMetadata(locale, options?)` - Generate Twitter Card tags

### Structured Data

- `generateHotelStructuredData(locale?)` - Hotel schema
- `generateRoomStructuredData(room, locale?)` - Room schema
- `generateServiceStructuredData(service, locale?)` - Service schema
- `generateBreadcrumbStructuredData(breadcrumbs, locale?)` - Breadcrumb schema
- `generateLocalBusinessStructuredData(locale?)` - Local business schema
- `generateFAQStructuredData(faqs, locale?)` - FAQ schema
- `generateJSONLDScript(data)` - Convert to JSON-LD script

### Image Optimization

- `OptimizedImage` - Basic optimized image component
- `RoomImage` - Room-specific image with auto alt text
- `ServiceImage` - Service-specific image with auto alt text
- `FacilityImage` - Facility-specific image with auto alt text
- `generateBlurPlaceholder(imageSrc)` - Generate blur placeholder

## 🎯 Page Types

The system supports these page types for metadata generation:

- `home` - Homepage
- `rooms` - Rooms listing page
- `room-detail` - Individual room page
- `services` - Services listing page
- `service-detail` - Individual service page
- `booking` - Booking page
- `contact` - Contact page
- `about` - About page
- `gallery` - Gallery page

## 🌐 Internationalization

The system automatically handles Vietnamese and English content:

```typescript
// Vietnamese (default)
generateSEOMetadata('home', 'vi')

// English
generateSEOMetadata('home', 'en')
```

## 📊 SEO Features

### Automatic Metadata

- Title tags with page-specific keywords
- Meta descriptions with compelling copy
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Hreflang tags for internationalization

### Structured Data

- Hotel schema for rich snippets
- Room schema for accommodation details
- Service schema for facility information
- Breadcrumb navigation
- Local business information
- FAQ schema for Q&A content

### Image Optimization

- Automatic alt text generation
- Responsive image sizing
- Blur placeholders
- Error handling with fallback images
- SEO-friendly file naming

## 🔧 Configuration

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://genuss-hotel.vn
```

### Custom Options

```typescript
generateSEOMetadata('room-detail', 'en', {
  title: 'Custom Title Override',
  description: 'Custom description',
  keywords: ['custom', 'keywords'],
  imagePath: '/custom-image.jpg',
  noIndex: false, // Set to true for dev/staging
  additionalMeta: {
    customProperty: 'value'
  }
})
```

## 📝 Best Practices

1. **Always use OptimizedImage components** instead of regular Image components
2. **Provide specific room/service details** when using specialized image components
3. **Use structured data** on all relevant pages
4. **Keep titles under 60 characters** for optimal display
5. **Keep descriptions under 160 characters** for search results
6. **Use descriptive alt text** for all images
7. **Implement breadcrumbs** for better navigation

## 🚀 Performance Benefits

- **Automatic image optimization** with Next.js Image component
- **Blur placeholders** for better perceived performance
- **Responsive images** with proper sizing
- **SEO-friendly URLs** with proper structure
- **Structured data** for rich snippets in search results

## 📈 SEO Impact

This system helps improve:

- Search engine rankings
- Click-through rates from search results
- Social media sharing appearance
- Website accessibility
- Page load times
- User experience

## 🔄 Updates

The system is designed to be easily extensible. To add new page types or modify existing ones:

1. Update `SEO_CONFIG` in `metadata.ts`
2. Add new structured data generators in `structured-data.ts`
3. Create specialized image components if needed

## 📞 Support

For questions or issues with the SEO system, please refer to the individual file documentation or contact the development team.
