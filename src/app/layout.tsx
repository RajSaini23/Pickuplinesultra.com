
import type { Metadata, Viewport } from 'next';
import { Urbanist, Noto_Sans_Devanagari } from 'next/font/google';
import { ClientLayout } from './client-layout';
import { cn } from '@/lib/utils';
import './globals.css';
import InstallPrompt from '@/components/InstallPrompt';

const APP_NAME = "Pickup Lines Ultra";
const APP_DESCRIPTION = "90,000+ Best Pickup Lines, Flirty Texts, Love & Motivational Quotes in Hindi, English, Korean & 12 languages. Find cute, funny, smooth, romantic pickup lines for girls, boys, crush & Tinder. Daily quotes, shayari, birthday wishes.";
const APP_URL = "https://www.pickuplinesultra.com";

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-headline',
  display: 'swap',
});

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: "90000+ Best Pickup Lines, Flirty Messages & Quotes | PickupLinesUltra 2025",
  description: APP_DESCRIPTION,
  manifest: '/manifest.webmanifest',
  keywords: "best pickup lines, pickup lines for girls, pickup lines for boys, smooth pickup lines, pickup lines with rizz, romantic quotes, motivational quotes, hindi pickup lines, flirty messages, love quotes, friendship quotes, inspirational quotes, daily quotes 2025",
  authors: [{ name: 'PickupLinesUltra Team', url: 'https://www.pickuplinesultra.com/about' }],
  
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PickupLines",
  },
  
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: '90000+ Best Pickup Lines & Quotes in 12 Languages',
    description: 'Find the perfect pickup line or quote for any moment. Cute, funny, smooth lines for flirting. Daily motivation in Hindi, English, Korean & more.',
    url: APP_URL,
    images: [
      {
        url: "/og-image-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "PickupLinesUltra - 90000+ quotes in 12 languages",
      },
    ],
    locale: 'en_US',
    alternateLocale: ['hi_IN', 'ko_KR'],
  },

  twitter: {
    card: "summary_large_image",
    title: '90000+ Best Pickup Lines & Quotes',
    description: 'Smooth pickup lines, flirty texts, motivational quotes in 12 languages. Perfect for Tinder, Instagram, dating apps.',
    images: ["/twitter-card-1200x600.jpg"],
    creator: "@INDGROWSIVE",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': 160,
      'max-image-preview': 'large',
    },
  },

  alternates: {
    canonical: APP_URL,
  },
};

export const viewport: Viewport = {
  themeColor: '#2A2A3A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'INDGROWSIVE',
  url: APP_URL,
  logo: `${APP_URL}/icons/icon-512x512.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'indgrowsivestudio@gmail.com',
    contactType: 'Customer Support',
  },
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: APP_NAME,
  operatingSystem: 'WEB, Android, iOS',
  applicationCategory: 'LifestyleApplication',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '7800',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  description: APP_DESCRIPTION,
  author: {
    '@type': 'Person',
    name: 'INDGROWSIVE',
    url: APP_URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
       <head>
        <meta name="language" content="en" />
        <meta httpEquiv="content-language" content="en-US, hi-IN, ko-KR" />
        <meta name="publisher" content="PickupLinesUltra.com" />
        <meta name="copyright" content="© 2025 PickupLinesUltra" />
        <link rel="publisher" href="https://www.pickuplinesultra.com/about" />
        <meta name="mobile-web-app-capable" content="yes" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </head>
      <body className={cn(
          "font-body antialiased",
          urbanist.variable,
          notoDevanagari.variable
        )}>
        <ClientLayout>{children}</ClientLayout>
        <InstallPrompt />
      </body>
    </html>
  );
}
