'use server';

import fs from 'fs/promises';
import path from 'path';
import { rooms as baseRooms } from '../data/rooms';
import { TRoom } from '../../types/room.type';

const IMAGE_EXT_RE = /\.(jpe?g|png|webp|avif|gif)$/i;

let _cache: {
  ts: number;
  data: TRoom[];
} | null = null;
const CACHE_TTL_MS = 1000 * 60 * 60 * 24; // 24h

function publicImagesPathForSlug(slug: string) {
  // returns '/images/rooms/<slug>/<file>'
  return (file: string) => `/${path.posix.join('images', 'rooms', slug, file)}`;
}

function publicMainImagePathForSlug(slug: string) {
  // returns '/images/main-rooms/<slug>/<file>'
  return (file: string) =>
    `/${path.posix.join('images', 'main-rooms', slug, file)}`;
}

async function readImagesForSlug(slug: string) {
  const folder = path.join(process.cwd(), 'public', 'images', 'rooms', slug);
  try {
    const entries = await fs.readdir(folder, { withFileTypes: true });
    const files = entries
      .filter((e) => e.isFile() && IMAGE_EXT_RE.test(e.name))
      .map((e) => e.name)
      .sort();
    return files.map(publicImagesPathForSlug(slug));
  } catch {
    return [];
  }
}

async function readMainImageForSlug(slug: string) {
  const folder = path.join(
    process.cwd(),
    'public',
    'images',
    'main-rooms',
    slug,
  );
  try {
    const entries = await fs.readdir(folder, { withFileTypes: true });
    const files = entries
      .filter((e) => e.isFile() && IMAGE_EXT_RE.test(e.name))
      .map((e) => e.name)
      .sort();
    // Return the first image as main image, or empty array if no images found
    return files.length > 0 ? [publicMainImagePathForSlug(slug)(files[0])] : [];
  } catch {
    return [];
  }
}

/**
 * Trả về mảng rooms kèm images: string[]
 * Chạy server-side (Server Component). Có cache in-memory TTL.
 */
export async function getRooms(forceRefresh = false) {
  const now = Date.now();
  if (!forceRefresh && _cache && now - _cache.ts < CACHE_TTL_MS) {
    return _cache.data;
  }

  // đọc đồng thời cho tất cả rooms
  const result = await Promise.all(
    baseRooms.map(async (r) => {
      const imgs = await readImagesForSlug(r.slug);
      const mainImgs = await readMainImageForSlug(r.slug);
      return {
        ...r,
        images: imgs,
        mainImage: mainImgs.length > 0 ? mainImgs[0] : undefined,
      };
    }),
  );

  _cache = { ts: now, data: result };
  return result;
}

/**
 * Lấy 1 room theo slug kèm images
 */
export async function getRoomBySlugWithImages(slug: string) {
  const rooms = await getRooms();
  return rooms.find((r) => r.slug === slug) ?? null;
}
