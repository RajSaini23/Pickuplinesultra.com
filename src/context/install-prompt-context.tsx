
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

// Define the type for the BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface InstallPromptContextType {
  isInstallable: boolean;
  triggerInstall: () => void;
  isPwa: boolean;
  canShowInstallPrompt: boolean;
}

const InstallPromptContext = createContext<InstallPromptContextType | undefined>(undefined);

export const InstallPromptProvider = ({ children }: { children: ReactNode }) => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isPwa, setIsPwa] = useState(false);

  useEffect(() => {
    // This effect should run only once on the client to set up listeners and initial state
    if (typeof window !== 'undefined') {
        // Check if the app is already running in standalone mode (as a PWA)
        if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
            setIsPwa(true);
        }

        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setPromptEvent(e as BeforeInstallPromptEvent);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // This listener handles the case where the user installs the app
        // and the prompt is no longer available.
        window.addEventListener('appinstalled', () => {
            setPromptEvent(null);
            setIsPwa(true);
        });

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            window.removeEventListener('appinstalled', () => {
                setPromptEvent(null);
                setIsPwa(true);
            });
        };
    }
  }, []);
  
  const triggerInstall = useCallback(() => {
    if (promptEvent) {
      promptEvent.prompt();
      promptEvent.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // The prompt can only be used once, so we clear it.
        setPromptEvent(null);
      });
    }
  }, [promptEvent]);

  // Logic to determine if the install button should be shown at all.
  // It's installable if it's not already a PWA AND
  // (we have the native prompt OR it's a manual-install case like iOS Safari).
  const isIos = () => typeof window !== 'undefined' && /iPhone|iPad|iPod/.test(navigator.userAgent);
  const isSafari = () => typeof window !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const canBeManuallyInstalled = isIos() && isSafari();

  const isInstallable = !isPwa && (!!promptEvent || canBeManuallyInstalled);
  const canShowInstallPrompt = !!promptEvent;

  return (
    <InstallPromptContext.Provider value={{ isInstallable, isPwa, canShowInstallPrompt, triggerInstall }}>
      {children}
    </InstallPromptContext.Provider>
  );
};

export const useInstallPrompt = (): InstallPromptContextType => {
  const context = useContext(InstallPromptContext);
  if (context === undefined) {
    throw new Error('useInstallPrompt must be used within an InstallPromptProvider');
  }
  return context;
};
