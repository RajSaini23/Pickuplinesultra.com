
import type { Metadata, Viewport } from 'next';
import { Urbanist, Noto_Sans_Devanagari } from 'next/font/google';
import { ClientLayout } from './client-layout';
import { cn } from '@/lib/utils';
import './globals.css';

const APP_NAME = "Pickup Lines Ultra";

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
  title: "Pickup Lines Ultra - 1000+ Romantic, Cute & Flirty Lines in Hinglish, Hindi, English",
  description: "1000+ best pickup lines in Hinglish, Hindi, English & Mandarin. Romantic, cute, crush, proposal, festival lines for WhatsApp, Instagram, Tinder. Free forever with daily updates.",
  keywords: "pickup lines, hinglish pickup lines, romantic lines, cute lines, flirty messages, crush lines, proposal quotes, festival greetings, hindi pickup lines, english pickup lines, whatsapp lines, tinder pickup lines, dating app lines",
  authors: [{ name: "INDGROWSIVE", url: "https://linkedin.com/in/indgrowsive-1b87262a0" }],
  creator: "INDGROWSIVE",
  publisher: "Pickup Lines Ultra",
  applicationName: APP_NAME,
  manifest: '/manifest.json',

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pickuplinesultra.com",
    siteName: "Pickup Lines Ultra",
    title: "Pickup Lines Ultra - Your Hinglish Pickup Line Library",
    description: "1000+ romantic, cute & flirty pickup lines in 4 languages",
    images: [
      {
        url: "https://pickuplinesultra.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pickup Lines Ultra - Your Ultimate Collection"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Pickup Lines Ultra",
    description: "1000+ pickup lines in Hinglish & 3 more languages",
    images: ["https://pickuplinesultra.com/twitter-card.png"],
  },

  alternates: {
    canonical: "https://pickuplinesultra.com",
    languages: {
      "en": "https://pickuplinesultra.com",
      "hi": "https://pickuplinesultra.com/hi",
    }
  },

  verification: {
    google: "your-google-verification-code",
  },
  
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_NAME,
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
  url: 'https://pickuplinesultra.com',
  logo: 'https://pickuplinesultra.com/icons/icon-512x512.png',
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
    priceCurrency: 'USD',
  },
  description: "1000+ pickup lines in Hinglish, Hindi, English & Mandarin.",
  author: {
    '@type': 'Person',
    name: 'INDGROWSIVE',
    url: 'https://pickuplinesultra.com'
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
