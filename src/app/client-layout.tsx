
'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SplashScreen as CustomSplashScreen } from '@/components/splash-screen';
import { BookmarkProvider } from '@/context/bookmark-context';
import { LanguageProvider, useLanguage } from '@/context/language-context';
import { NetworkProvider, useNetwork } from '@/context/network-context';
import { Wifi } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RatingDialogProvider } from '@/components/ui/rating-dialog';
import { BottomNav } from '@/components/ui/bottom-nav';
import { InstallPromptProvider } from '@/context/install-prompt-context';
import { messaging } from '@/lib/firebase';
import { getToken } from 'firebase/messaging';
import LegacyDeviceWarning from '@/components/ui/legacy-device-warning';
import dynamic from 'next/dynamic';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const CapacitorSetup = dynamic(() => import('@/components/ui/capacitor-setup'), { ssr: false });
const OfflinePage = dynamic(() => import('@/app/_offline/page').then(mod => mod.default), { ssr: false });


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
      
      {!isOnline && <OfflinePage />}
      <div style={{ display: isOnline ? 'block' : 'none' }}>
        {children}
      </div>
    </div>
  );
}

function LanguageGate({ children }: { children: React.ReactNode }) {
  const { language, isLanguageLoading } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLanguageLoading) {
      if (!language && pathname !== '/select-language') {
        router.replace('/select-language');
      }
    }
  }, [language, isLanguageLoading, router, pathname]);

  if (isLanguageLoading || (!language && pathname !== '/select-language')) {
    // You can show a global loader here if you want
    return null;
  }

  return <>{children}</>;
}


export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLegacyDevice, setIsLegacyDevice] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const isLegacy =
      !('serviceWorker' in navigator) ||
      !window.Promise ||
      !window.fetch ||
      !Object.assign ||
      !Array.prototype.includes;

    if (isLegacy) {
      setIsLegacyDevice(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const wb = (window as any).workbox;
      if (wb) {
        const promptForUpdate = () => {
          toast({
            title: 'Update Available!',
            description: 'A new version is available. Click to reload and update.',
            action: (
              <Button onClick={() => wb.messageSW({ type: 'SKIP_WAITING' })} className="text-white font-bold">
                Reload
              </Button>
            ),
            duration: Infinity,
          });
        };

        wb.addEventListener('waiting', promptForUpdate);
        wb.addEventListener('controlling', () => {
          window.location.reload();
        });

        // A fallback registration that works for next-pwa.
        // It's safe to call this even if the service worker is already registered.
        wb.register();
      }
    }
  }, [toast]);


  useEffect(() => {
    const requestPermission = async () => {
      if (messaging && typeof Notification !== 'undefined' && 'serviceWorker' in navigator) {
        try {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            console.log('Notification permission granted.');
            const swRegistration = await navigator.serviceWorker.ready;
            const currentToken = await getToken(messaging, { vapidKey: 'BM0G3ZqfP8d_0g5q3H_1rJ_tL4iRjQ4P6QG-8mJ_n5YF_wO-j_1nF_pZqC_kH_mZ_z_y_Y_k', serviceWorkerRegistration: swRegistration });
            if (currentToken) {
              console.log('FCM Token:', currentToken);
            } else {
              console.log('No registration token available. Request permission to generate one.');
            }
          } else {
            console.log('Unable to get permission to notify.');
          }
        } catch (err) {
          console.error('An error occurred while retrieving token. ', err);
        }
      }
    };

    const timer = setTimeout(() => {
      requestPermission();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const registerPeriodicSync = async () => {
      if ('serviceWorker' in navigator && 'PeriodicSyncManager' in window) {
        try {
          const swRegistration = await navigator.serviceWorker.ready;
          // @ts-ignore
          const status = await navigator.permissions.query({ name: 'periodic-background-sync' });

          if (status.state === 'granted') {
            // @ts-ignore
            await swRegistration.periodicSync.register('content-sync', {
              minInterval: 24 * 60 * 60 * 1000,
            });
            console.log('Periodic Sync registered');
          } else {
            console.log('Periodic Sync permission not granted.');
          }
        } catch (error) {
          console.error('Periodic Sync registration failed:', error);
        }
      } else {
        console.log('Periodic Background Sync not supported.');
      }
    };

    registerPeriodicSync();
  }, []);

  return (
    <ThemeProvider>
      <NetworkProvider>
        <BookmarkProvider>
          <RatingDialogProvider>
             <InstallPromptProvider>
                <LanguageProvider>
                  <AnimatePresence>
                    {isLegacyDevice && <LegacyDeviceWarning />}
                  </AnimatePresence>
                  <CustomSplashScreen>
                    <LanguageGate>
                      <AppContent>
                        <div className="relative flex flex-col min-h-dvh">
                          <main className="flex-1 pb-24">{children}</main>
                          <BottomNav />
                        </div>
                      </AppContent>
                    </LanguageGate>
                    <Toaster />
                  </CustomSplashScreen>
                  <CapacitorSetup />
                </LanguageProvider>
             </InstallPromptProvider>
          </RatingDialogProvider>
        </BookmarkProvider>
      </NetworkProvider>
    </ThemeProvider>
  );
}
