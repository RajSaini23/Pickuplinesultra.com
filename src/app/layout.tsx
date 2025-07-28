
'use client';
import { useEffect } from 'react';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SplashScreen as CustomSplashScreen } from '@/components/splash-screen';
import { BookmarkProvider } from '@/context/bookmark-context';
import './globals.css';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { isPlatform } from '@capacitor/core';


export const metadata: Metadata = {
  title: 'Ecstatic',
  description: 'Your Emotion. Our Expression.',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#2079F2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    if (isPlatform('hybrid')) {
      SplashScreen.hide();
      const setStatusBarStyle = async () => {
        const theme = document.body.classList.contains('dark') ? Style.Dark : Style.Light;
        await StatusBar.setStyle({ style: theme });
        await StatusBar.setBackgroundColor({ color: '#2079F2' });
      };
      setStatusBarStyle();

      // Listen for theme changes to update status bar
      const observer = new MutationObserver(setStatusBarStyle);
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          <title>Ecstatic</title>
          <meta name="description" content="Your Emotion. Our Expression." />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#2079F2" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <BookmarkProvider>
            <CustomSplashScreen>
              {children}
              <Toaster />
            </CustomSplashScreen>
          </BookmarkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
