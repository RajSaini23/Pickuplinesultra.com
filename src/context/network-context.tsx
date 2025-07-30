
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface NetworkContextType {
  isOnline: boolean;
  isChecking: boolean;
  checkConnection: () => Promise<void>;
}

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

export const NetworkProvider = ({ children }: { children: ReactNode }) => {
  const [isOnline, setIsOnline] = useState(true);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    // Set initial status
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
        setIsOnline(window.navigator.onLine);
    }
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const checkConnection = useCallback(async () => {
    if (typeof window.navigator.onLine !== 'undefined' && !window.navigator.onLine) {
        setIsOnline(false);
        return;
    }

    setIsChecking(true);
    try {
        // We add a random query parameter to prevent caching of the request.
        const response = await fetch('/favicon.ico?_=' + new Date().getTime(), {
            method: 'HEAD',
            cache: 'no-cache',
        });
        setIsOnline(response.ok);
    } catch (error) {
        setIsOnline(false);
    } finally {
      // A small delay to make the loader feel smoother.
      setTimeout(() => {
        setIsChecking(false);
      }, 1500);
    }
  }, []);

  return (
    <NetworkContext.Provider value={{ isOnline, isChecking, checkConnection }}>
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (context === undefined) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
};
