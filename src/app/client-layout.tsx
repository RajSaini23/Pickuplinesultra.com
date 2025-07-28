
'use client';
import { useEffect } from 'react';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SplashScreen as CustomSplashScreen } from '@/components/splash-screen';
import { BookmarkProvider } from '@/context/bookmark-context';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Capacitor } from '@capacitor/core';

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      SplashScreen.hide();
      const setStatusBarStyle = async () => {
        try {
          const theme = document.body.classList.contains('dark') ? Style.Dark : Style.Light;
          await StatusBar.setStyle({ style: theme });
          // The color is set from globals.css which themes the status bar
          // so we don't need to set it here.
        } catch (e) {
            console.error('Failed to set status bar style', e);
        }
      };
      setStatusBarStyle();

      // Listen for theme changes to update status bar
      const observer = new MutationObserver(setStatusBarStyle);
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <ThemeProvider>
      <BookmarkProvider>
        <CustomSplashScreen>
          {children}
          <Toaster />
        </CustomSplashScreen>
      </BookmarkProvider>
    </ThemeProvider>
  );
}
