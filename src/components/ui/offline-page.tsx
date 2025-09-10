
"use client";

import { WifiOff, RotateCw } from 'lucide-react';
import { useNetwork } from '@/context/network-context';
import { Button } from '@/components/ui/button';
import NetworkStatusLoader from './network-status-loader';
import { motion } from 'framer-motion';

export const OfflinePage = () => {
  const { checkConnection, isChecking } = useNetwork();

  return (
    <div className="flex flex-col items-center justify-center h-dvh bg-background text-foreground p-8 text-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        {isChecking ? (
          <>
            <NetworkStatusLoader />
            <p className="text-2xl font-semibold mt-20 text-primary animate-pulse">Checking Connection...</p>
            <p className="text-muted-foreground mt-2">Please wait a moment.</p>
          </>
        ) : (
          <>
            <WifiOff className="h-24 w-24 text-destructive/80 mb-6" />
            <h1 className="text-4xl font-bold font-headline mb-2">No Internet</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
              Please connect to the internet to continue using the app.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" onClick={checkConnection}>
                <RotateCw className="mr-2 h-5 w-5" />
                Try Again
              </Button>
            </motion.div>
          </>
        )}
      </div>
      <footer className="text-center text-xs text-muted-foreground/70">
          <p>© {new Date().getFullYear()} QUTO. All rights reserved.</p>
        </footer>
    </div>
  );
};
