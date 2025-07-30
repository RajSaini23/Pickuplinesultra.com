
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface NetworkContextType {
  isOnline: boolean;
  isChecking: boolean;
  checkConnection: () => Promise<void>;
  justReconnected: boolean;
}

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

export const NetworkProvider = ({ children }: { children: ReactNode }) => {
  const [isOnline, setIsOnline] = useState(true);
  const [isChecking, setIsChecking] = useState(false);
  const [justReconnected, setJustReconnected] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      setIsOnline(window.navigator.onLine);
    }
    
    const handleOnline = () => {
      setIsOnline(true);
      setJustReconnected(true);
      setTimeout(() => setJustReconnected(false), 3000); 
    };

    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const checkConnection = useCallback(async () => {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') return;

    setIsChecking(true);

    // Simulate a network check delay for the loader to be visible
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
        const response = await fetch('/favicon.ico?_=' + new Date().getTime(), {
            method: 'HEAD',
            cache: 'no-cache',
        });
      
        if(response.ok) {
          setIsOnline(true);
          setJustReconnected(true);
          setTimeout(() => setJustReconnected(false), 3000);
        } else {
          setIsOnline(false);
        }

    } catch (error) {
        setIsOnline(false);
    } finally {
      setIsChecking(false);
    }
  }, []);

  return (
    <NetworkContext.Provider value={{ isOnline, isChecking, checkConnection, justReconnected }}>
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
