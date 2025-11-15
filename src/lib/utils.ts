import { VND_TO_USD_RATE } from '@/constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * TODO: Merge and optimize CSS class names from Tailwind CSS and clsx
 * Combines multiple class names into a single string, removing duplicates
 * @param inputs - Class names to merge
 * @returns Optimized class names string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * TODO: Mask email for privacy protection, showing only first 2 and last 2 characters
 * Example: nguyenvana@gmail.com -> ng***na@gmail.com
 * @param email - Email to mask
 * @returns Masked email
 */
export function maskEmailPretty(email: string): string {
  const [username, domain] = email.split('@');

  if (username.length <= 4) {
    return username[0] + '***@' + domain;
  }

  const start = username.slice(0, 2);
  const end = username.slice(-2);
  const hidden = '*'.repeat(username.length - 4);

  return `${start}${hidden}${end}@${domain}`;
}

/**
 * TODO: Format currency based on locale (VND or USD)
 * Automatically converts VND to USD when locale is 'en'
 * @param value - Monetary value to format
 * @param locale - Locale for formatting ('vi' for VND, 'en' for USD)
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, locale: string = 'vi'): string {
  if (locale === 'vi') {
    return new Intl.NumberFormat('vi-VN').format(value) + ' VNĐ';
  } else {
    const usdValue = value * VND_TO_USD_RATE;

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(usdValue);
  }
}
