
"use client";

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, Wifi, WifiOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader } from '@/components/ui/loader';

type Status = 'checking' | 'online' | 'offline' | null;

export default function NetworkCheckPage() {
  const [status, setStatus] = React.useState<Status>(null);

  const handleCheckConnection = () => {
    setStatus('checking');

    // Simulate a realistic network check delay
    setTimeout(() => {
      if (navigator.onLine) {
        setStatus('online');
      } else {
        setStatus('offline');
      }
    }, 1800);
  };

  const getStatusContent = () => {
    switch (status) {
      case 'checking':
        return (
          <motion.div
            key="checking"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center p-8 bg-card rounded-2xl shadow-lg border border-border/20"
          >
            <Loader />
            <p className="mt-4 text-lg font-medium text-muted-foreground">
              Checking Network...
            </p>
          </motion.div>
        );
      case 'online':
        return (
          <motion.div
            key="online"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Wifi className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <p className="text-2xl font-bold text-green-500">✅ Internet Connected</p>
            <p className="text-muted-foreground mt-1">You are online and ready to go!</p>
          </motion.div>
        );
      case 'offline':
        return (
          <motion.div
            key="offline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <WifiOff className="h-16 w-16 text-destructive mx-auto mb-4" />
            <p className="text-2xl font-bold text-destructive">❌ No Internet Connection</p>
            <p className="text-muted-foreground mt-1">Please check your network settings.</p>
          </motion.div>
        );
      default:
        return (
            <div className="text-center">
                 <p className="text-muted-foreground">Click the button to check your connection status.</p>
            </div>
        )
    }
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 flex items-center p-4 border-b bg-card/80 backdrop-blur-sm">
        <Link href="/settings" passHref>
          <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted">
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold font-headline ml-4">Network Check</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center shadow-xl border-border/20">
          <Button 
            onClick={handleCheckConnection} 
            disabled={status === 'checking'}
            size="lg"
            className="rounded-full px-8 h-12 text-lg font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span className="mr-2">🔍</span> Check Internet
          </Button>
          <div className="mt-12 min-h-[150px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {getStatusContent()}
            </AnimatePresence>
          </div>
        </Card>
      </main>
    </div>
  );
}
