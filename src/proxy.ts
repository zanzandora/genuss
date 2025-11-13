import { NextResponse, NextRequest } from 'next/server';

export const defaultLocale = 'en';
export const locales = ['en', 'vi'] as const;
export type Locale = (typeof locales)[number];

export default function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathSegments = url.pathname.split('/').filter(Boolean);

  const maybeLocale = pathSegments[0] as Locale | undefined;
  if (!maybeLocale || !locales.includes(maybeLocale)) {
    // Nếu URL không có locale hợp lệ, redirect sang defaultLocale
    url.pathname = `/${defaultLocale}${url.pathname}`;
    return NextResponse.redirect(url);
  }

  // Nếu đã có locale hợp lệ, tiếp tục
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
