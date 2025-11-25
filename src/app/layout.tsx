
import type { Metadata, Viewport } from 'next';
import { Urbanist, Noto_Sans_Devanagari } from 'next/font/google';
import { ClientLayout } from './client-layout';
import { cn } from '@/lib/utils';
import './globals.css';
import InstallPrompt from '@/components/InstallPrompt';

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
  title: "90000+ Best Pickup Lines & Quotes 2025 | PickupLinesUltra - Hindi, English, Korean",
  description: "Discover 90000+ pickup lines, flirty texts, love & motivational quotes in 12+ languages (Hindi, English, Korean, French, Spanish, Tamil, Telugu, Gujarati). Find smooth, funny, romantic lines for girls, boys, crush & Tinder. Daily updated 2025.",
  keywords: "best pick up lines, pickup lines for girls, pickup lines for boys, pickup lines for crush, pickup lines for flirting, smooth pick up lines, pick up lines with rizz, romantic quotes, motivational quotes, funny quotes, life quotes, friendship quotes, positive quotes, attitude quotes, love messages, flirty texts, inspirational quotes, daily quotes, cute quotes, vibe quotes, short quotes, deep quotes, 2025 quotes, hindi pickup lines, english pickup lines, korean pickup lines, french pickup lines, spanish quotes, telugu quotes, gujarati quotes, tamil quotes, punjabi quotes, marathi quotes, bengali quotes, russian quotes, japanese pickup lines",
  authors: [{ name: "INDGROWSIVE Studio", url: "https://www.linkedin.com/in/indgrowsive-1b87262a0" }],
  creator: "INDGROWSIVE Studio",
  publisher: "PickupLinesUltra",
  applicationName: APP_NAME,
  manifest: '/manifest.json',

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["hi_IN", "ko_KR", "fr_FR", "es_ES"],
    url: "https://pickuplinesultra.com/",
    siteName: "PickupLinesUltra",
    title: "90000+ Best Pickup Lines & Quotes in 12+ Languages",
    description: "Your ultimate source for pickup lines, flirty texts & quotes. Hindi, English, Korean & more. Perfect for crush, Tinder, dating.",
    images: [
      {
        url: "https://pickuplinesultra.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PickupLinesUltra - Best Pickup Lines & Quotes"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "90000+ Best Pickup Lines & Quotes 2025",
    description: "Smooth, funny, romantic pickup lines in 12+ languages. Perfect for flirting!",
    images: ["https://pickuplinesultra.com/twitter-card.jpg"],
    creator: "@PickupLinesUltra"
  },

  alternates: {
    canonical: "https://pickuplinesultra.com/",
    languages: {
      "en": "https://pickuplinesultra.com/en",
      "hi": "https://pickuplinesultra.com/hi",
      "ko": "https://pickuplinesultra.com/ko",
      "fr": "https://pickuplinesultra.com/fr",
      "es": "https://pickuplinesultra.com/es"
    }
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-code",
    other: {
      pinterest: "your-pinterest-verification"
    }
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PickupLines",
  },
  
  appLinks: {
    web: {
      url: "https://pickuplinesultra.com/",
      should_fallback: true
    }
  }
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
    priceCurrency: 'INR',
  },
  description: "90000+ pickup lines, flirty texts, love quotes & motivation in 12+ languages.",
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
        <meta name="language" content="Hinglish, English, Hindi, Korean, French, Spanish, Tamil, Telugu, Gujarati, Marathi, Bengali, Punjabi, German, Russian, Portuguese, Vietnamese" />
        <meta httpEquiv="content-language" content="en-US, hi-IN, ko-KR, fr-FR, es-ES" />
        <meta name="copyright" content="© 2025 PickupLinesUltra" />
        <link rel="alternate" hreflang="x-default" href="https://pickuplinesultra.com/" />
        
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
