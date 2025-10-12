
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
  promptEvent: BeforeInstallPromptEvent | null;
  triggerInstall: () => void;
}

const InstallPromptContext = createContext<InstallPromptContextType | undefined>(undefined);

export const InstallPromptProvider = ({ children }: { children: ReactNode }) => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setPromptEvent(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

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
      });
    }
  };

  return (
    <InstallPromptContext.Provider value={{ promptEvent, triggerInstall }}>
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
