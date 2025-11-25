'use server';

import fs from 'fs/promises';
import path from 'path';
import { servicesData as baseServices } from '../data/services';
import { Service } from '../../types/service.type';
import { generateAltText } from '../seo/metadata';

const IMAGE_EXT_RE = /\.(jpe?g|png|webp|avif|gif)$/i;

let _cache: {
  ts: number;
  data: Service[];
} | null = null;
const CACHE_TTL_MS = 1000 * 60 * 60 * 24; // 24h

function publicImagesPathForSlug(slug: string) {
  // returns '/images/services/<slug>/<file>'
  return (file: string) =>
    `/${path.posix.join('images', 'services', slug, file)}`;
}

// Service name mapping for alt text generation
const SERVICE_NAMES = {
  dinning: 'Restaurant & Dining Service',
  event: 'Conference & Event Service',
  recreation: 'Recreation & Wellness Service',
  swimming: 'All-Year Outdoor Swimming Pool',
};

function getServiceName(slug: string): string {
  return SERVICE_NAMES[slug as keyof typeof SERVICE_NAMES] || 'Service';
}

async function readImagesForSlug(slug: string) {
  const folder = path.join(process.cwd(), 'public', 'images', 'services', slug);
  try {
    const entries = await fs.readdir(folder, { withFileTypes: true });
    const files = entries
      .filter((e) => e.isFile() && IMAGE_EXT_RE.test(e.name))
      .map((e) => e.name)
      .sort((a, b) => {
        // Sort by filename alphabetically
        return a.localeCompare(b);
      });

    // Convert to the format { id: number, img: string, alt: string }
    const serviceName = getServiceName(slug);

    return files.map((file, index) => {
      // Extract filename without extension for description
      const filename = file.replace(/\.[^/.]+$/, '');
      const cleanFilename = filename
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase())
        .replace(/\d+/g, '') // Remove numbers
        .trim();

      // Generate alt text using the SEO function
      const altText = generateAltText(
        'service',
        serviceName,
        cleanFilename,
        'Tam Dao',
      );

      return {
        id: index + 1,
        img: publicImagesPathForSlug(slug)(file),
        alt: altText,
      };
    });
  } catch {
    return [];
  }
}

/**
 * Trả về mảng services kèm images: { id: number, img: string, alt: string }[]
 * Chạy server-side (Server Component). Có cache in-memory TTL.
 * Alt text được tự động generate bằng SEO function cho accessibility và search engine optimization.
 */
export async function getServiceDatas(forceRefresh = false) {
  const now = Date.now();
  if (!forceRefresh && _cache && now - _cache.ts < CACHE_TTL_MS) {
    return _cache.data;
  }

  // đọc đồng thời cho tất cả services
  const result = (
    await Promise.all(
      baseServices.map(async (service) => {
        const images = await readImagesForSlug(service.slug);
        return {
          ...service,
          images,
        };
      }),
    )
  ).sort((a, b) => parseInt(a.id) - parseInt(b.id));

  _cache = { ts: now, data: result };
  return result;
}

/**
 * Lấy 1 service theo slug kèm images
 */
export async function getServiceBySlugWithImages(slug: string) {
  const services = await getServiceDatas();
  return services.find((s) => s.slug === slug) ?? null;
}

/**
 * Lấy các service khác (không bao gồm service hiện tại) kèm images
 */
export async function getOtherServicesWithImages(currentSlug: string) {
  const services = await getServiceDatas();
  const otherServices = services
    .filter((service) => service.slug !== currentSlug)
    .map((service) => ({
      id: service.id,
      nameKey: service.titleKey,
      date: 'July 16, 2022',
      imageSrc:
        service.images && service.images.length > 0
          ? service.images[0].img
          : service.imageSrc,
      slug: service.slug,
    }));

  return otherServices.slice(0, 3); // Return only 3 other services
}
