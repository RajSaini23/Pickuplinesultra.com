
"use client";

import { WifiOff } from 'lucide-react';
import { useNetwork } from '@/context/network-context';
import { Button } from '@/components/ui/button';
import NetworkStatusLoader from './network-status-loader';

export const OfflinePage = () => {
  const { checkConnection, isChecking } = useNetwork();

  return (
    <div className="flex flex-col items-center justify-center h-dvh bg-background text-foreground p-8 text-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        {isChecking ? (
          <>
            <NetworkStatusLoader />
            <p className="text-2xl font-semibold mt-20 text-primary">Checking Connection...</p>
            <p className="text-muted-foreground mt-2">Please wait a moment.</p>
          </>
        ) : (
          <>
            <WifiOff className="h-24 w-24 text-destructive/80 mb-6" />
            <h1 className="text-4xl font-bold font-headline mb-2">No Internet Connection</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
              It seems you're offline. Please check your internet connection and try again.
            </p>
            <Button size="lg" onClick={checkConnection}>
              Try Again
            </Button>
          </>
        )}
      </div>
      <footer className="text-center text-xs text-muted-foreground/70">
          <p>© {new Date().getFullYear()} ECSTATIC. All rights reserved.</p>
        </footer>
    </div>
  );
};
