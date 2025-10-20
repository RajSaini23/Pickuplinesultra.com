
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
  isPwa: boolean;
  canShowInstallPrompt: boolean;
  triggerInstall: () => void;
}

const InstallPromptContext = createContext<InstallPromptContextType | undefined>(undefined);

export const InstallPromptProvider = ({ children }: { children: ReactNode }) => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isPwa, setIsPwa] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);
  
  useEffect(() => {
    // These functions use `navigator` and should only run on the client
    const isIos = () => /iPhone|iPad|iPod/.test(navigator.userAgent);
    const isSafari = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const canBeInstalledOnIos = isIos() && isSafari();

    // Detect if the app is running in standalone mode (as a PWA)
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsPwa(true);
      setIsInstallable(false); // Already installed
    } else {
        setIsInstallable(!!promptEvent || canBeInstalledOnIos);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setPromptEvent(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [promptEvent]);

  const triggerInstall = () => {
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
        setIsInstallable(false);
      });
    }
  };
  
  // Logic to determine if install prompt can be shown
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
