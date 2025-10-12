
'use client';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SplashScreen as CustomSplashScreen } from '@/components/splash-screen';
import { BookmarkProvider } from '@/context/bookmark-context';
import { NetworkProvider, useNetwork } from '@/context/network-context';
import { OfflinePage } from '@/components/ui/offline-page';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Capacitor } from '@capacitor/core';
import { Wifi } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RatingDialogProvider } from '@/components/ui/rating-dialog';
import { BottomNav } from '@/components/ui/bottom-nav';
import { InstallPromptProvider } from '@/context/install-prompt-context';

function AppContent({ children }: { children: React.ReactNode }) {
  const { isOnline, justReconnected } = useNetwork();
  
  return (
    <div className="relative">
      <AnimatePresence>
        {justReconnected && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-center p-3 bg-blue-500 text-white shadow-lg"
          >
            <Wifi className="mr-2 h-5 w-5" />
            <span className="font-semibold">Back Online</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isOnline ? <OfflinePage /> : <>{children}</>}
    </div>
  );
}


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
      <NetworkProvider>
        <BookmarkProvider>
          <RatingDialogProvider>
             <InstallPromptProvider>
                <CustomSplashScreen>
                  <AppContent>
                    <div className="relative flex flex-col min-h-dvh">
                      <main className="flex-1 pb-24">{children}</main>
                      <BottomNav />
                    </div>
                  </AppContent>
                  <Toaster />
                </CustomSplashScreen>
             </InstallPromptProvider>
          </RatingDialogProvider>
        </BookmarkProvider>
      </NetworkProvider>
    </ThemeProvider>
  );
}
