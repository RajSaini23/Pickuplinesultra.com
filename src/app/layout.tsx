
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SplashScreen } from '@/components/splash-screen';
import { BookmarkProvider } from '@/context/bookmark-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ecstatic',
  description: 'Your Emotion. Our Expression.',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#2A2A3A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-body antialiased">
        <ThemeProvider>
          <BookmarkProvider>
            <SplashScreen>
              {children}
              <Toaster />
            </SplashScreen>
          </BookmarkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
