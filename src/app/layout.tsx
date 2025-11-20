
import type { Metadata, Viewport } from 'next';
import { Urbanist, Noto_Sans_Devanagari } from 'next/font/google';
import { ClientLayout } from './client-layout';
import { cn } from '@/lib/utils';
import './globals.css';

const APP_NAME = "Pickup Lines Ultra";
const APP_DESCRIPTION = "World's largest library of 7,800+ original pickup lines in Hinglish & 78+ languages. Works offline, 100% free. Find witty, romantic, and bold quotes for any mood.";
const APP_URL = "https://pickuplinesultra.com";

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
  title: {
    default: "Pickup Lines Ultra - Hinglish & Multilingual Quotes",
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.webmanifest',
  metadataBase: new URL(APP_URL),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: "Pickup Lines Ultra - Hinglish & Multilingual Quotes",
      template: `%s | ${APP_NAME}`,
    },
    description: APP_DESCRIPTION,
    url: APP_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pickup Lines Ultra - 7800+ quotes in 78+ languages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Pickup Lines Ultra - Hinglish & Multilingual Quotes",
      template: `%s | ${APP_NAME}`,
    },
    description: APP_DESCRIPTION,
    creator: "@INDGROWSIVE",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "google-site-verification": "5xY1j_y-h_Z5l9n_j-O5K-5kY3pG3aP5xY3pG3aP5xY",
    "msvalidate.01": "5xY1j_y-h_Z5l9n_j-O5K-5kY3pG3aP5xY3pG3aP5xY",
    'link[rel=preconnect][href="https://fonts.googleapis.com"]': '',
    'link[rel=preconnect][href="https://fonts.gstatic.com"]': '{"crossOrigin": "anonymous"}'
  }
};

export const viewport: Viewport = {
  themeColor: '#2A2A3A',
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
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
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
      </body>
    </html>
  );
}
