import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function maskEmailPretty(email: string): string {
  const [username, domain] = email.split('@');

  if (username.length <= 4) {
    return username[0] + '***@' + domain;
  }

  const start = username.slice(0, 2); // giữ 2 ký tự đầu
  const end = username.slice(-2); // giữ 2 ký tự cuối
  const hidden = '*'.repeat(username.length - 4);

  return `${start}${hidden}${end}@${domain}`;
}
