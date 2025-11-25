
"use client";

import { useEffect } from 'react';

const CapacitorSetup = () => {
  useEffect(() => {
    const initializeCapacitor = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { Capacitor } = await import('@capacitor/core');
          if (Capacitor.isNativePlatform()) {
            const { SplashScreen } = await import('@capacitor/splash-screen');
            await SplashScreen.hide();
            
            const { StatusBar, Style } = await import('@capacitor/status-bar');
            const setStatusBarStyle = async () => {
              try {
                const theme = document.body.classList.contains('dark') ? Style.Dark : Style.Light;
                await StatusBar.setStyle({ style: theme });
              } catch (e) {
                  console.error('Failed to set status bar style', e);
              }
            };
            setStatusBarStyle();

            const observer = new MutationObserver(setStatusBarStyle);
            observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
          }
        } catch (e) {
          console.error('Capacitor initialization failed', e);
        }
      }
    };

    initializeCapacitor();
  }, []);

  return null;
};

export default CapacitorSetup;
