import { Playfair_Display, Montserrat } from 'next/font/google';
import '../globals.css';
import 'ldrs/react/Grid.css';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { generateHotelStructuredData } from '@/lib/seo/structured-data';
import { Metadata } from 'next';
import { generateSEOMetadata, FALLBACK_DESCRIPTION } from '@/lib/seo';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '500',
  display: 'swap',
});

const playfair_Display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair_display',
  weight: '400',
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata('home', locale, {
    imagePath: '/favicon.ico',
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${locale === 'vi' ? '' : '/en'}`,
  });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  setRequestLocale(locale as 'en' | 'vi');
  const messages = await getMessages();

  // Generate global structured data (hotel info)
  const hotelStructuredData = generateHotelStructuredData(locale);

  return (
    <html lang={locale}>
      <head>
        {/* Fallback meta description for Lighthouse */}
        <meta
          name='description'
          content={
            FALLBACK_DESCRIPTION[locale as keyof typeof FALLBACK_DESCRIPTION]
          }
        />

        {/* traditional favicon  for browsers */}
        <link rel='icon' href='/favicon.ico' />

        {/* Web Logo and Icons */}
        <link rel='apple-touch-icon' href='/logo/genuss-logo-v2.svg' />
        <meta name='theme-color' content='#000000' />

        {/* Global hotel structured data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hotelStructuredData, null, 2),
          }}
        />
      </head>
      <body
        className={` ${playfair_Display.variable} ${montserrat.variable} antialiased`}
      >
        <NextIntlClientProvider
          locale={locale as 'en' | 'vi'}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
