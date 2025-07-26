import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SplashScreen } from '@/components/splash-screen';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ecstatic',
  description: 'Mood-based Hinglish quotes for every feeling.',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#4B0082',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Devanagari:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <SplashScreen>
            {children}
            <Toaster />
          </SplashScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}
