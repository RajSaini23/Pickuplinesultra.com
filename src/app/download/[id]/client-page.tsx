
"use client";

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle, DownloadCloud, Loader, Play, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import type { Quote } from '@/data/types';
import * as htmlToImage from 'html-to-image';
import { toBlob } from 'html-to-image';

const AdPlaceholder = () => (
  <div className="w-full h-full bg-black/80 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
    <div className="text-center text-primary">
      <div className="p-4 bg-primary/20 rounded-full inline-block">
        <Play className="w-10 h-10 text-primary" fill="currentColor" />
      </div>
      <p className="mt-4 font-semibold text-lg">Your Ad Here</p>
      <p className="text-sm text-primary/70">Video or Banner Ad</p>
    </div>
  </div>
);

const QuoteCard = ({ quote }: { quote: Quote }) => (
    <div className="hidden">
      <div id="download-card" className="w-[450px] h-[800px] bg-card p-4 flex flex-col" style={{
        // Using a fixed size for consistent downloads, aspect ratio similar to a phone screen
      }}>
        <div className="w-full h-full p-2 bg-accent/80 rounded-2xl">
          <div className="w-full h-full p-2 bg-primary/80 rounded-xl">
            <div className="w-full h-full bg-card p-6 flex flex-col items-center justify-center text-center relative rounded-lg">
                <div className="text-8xl mb-12">{quote.emoji}</div>
                <p className="font-headline text-5xl font-semibold leading-tight text-foreground/90 px-4">
                    {quote.hinglish}
                </p>
                <div className="absolute bottom-8 text-center w-full">
                  <p className="font-headline uppercase tracking-widest text-xl font-bold italic pointer-events-none">
                    Pickup Lines <span className="animate-text-gold">Ultra</span>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);


export function DownloadClientPage({ quote }: { quote: Quote }) {
  const router = useRouter();
  const [progress, setProgress] = React.useState(0);
  const [status, setStatus] = React.useState<'preparing' | 'downloading' | 'complete'>('preparing');
  const [error, setError] = React.useState<string | null>(null);

  const handleDownload = React.useCallback(async () => {
    setStatus('downloading');
    const node = document.getElementById('download-card');

    if (!node) {
      setError('Could not find the quote card element.');
      return;
    }
    
    try {
      const blob = await toBlob(node, {
        quality: 1,
        pixelRatio: 2, 
        width: 1080,
        height: 1920,
      });

      if (blob) {
        const link = document.createElement('a');
        link.download = `quote-${quote.id}.png`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
        setStatus('complete');
      } else {
        throw new Error('Failed to generate image blob.');
      }
    } catch (err: any) {
      console.error('Download failed:', err);
      setError('Sorry, the download failed. Please try again.');
    }
  }, [quote.id]);

  React.useEffect(() => {
    const totalDuration = 18000; // 18 seconds
    const intervalTime = 100;
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);
      if (newProgress >= 100) {
        clearInterval(interval);
        handleDownload();
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [handleDownload]);
  
  if (!quote) {
    return (
        <div className="flex flex-col items-center justify-center h-dvh bg-background text-foreground p-4">
            <h1 className="text-2xl font-bold mb-4">Quote not found</h1>
            <Button onClick={() => router.push('/')}>Go Back Home</Button>
        </div>
    )
  }

  const statusText = {
    preparing: 'Please wait, preparing your file...',
    downloading: 'Downloading...',
    complete: 'Download Complete!',
  }[status];

  return (
    <div className="flex flex-col h-dvh bg-background text-foreground">
      <QuoteCard quote={quote} />
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-transparent text-white">
        <Button variant="ghost" size="icon" className="rounded-full bg-black/30 hover:bg-black/50" onClick={() => router.back()}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="flex-grow flex items-center gap-2 mx-4">
          <Progress value={progress} className="w-full h-2 bg-white/20 border border-white/10" />
          <span className="font-bold text-sm tabular-nums w-12 text-right">{Math.round(progress)}%</span>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full h-[80vh] flex items-center justify-center">
            <AdPlaceholder />
        </div>
      </main>

      <footer className="h-[20vh] flex flex-col items-center justify-center text-center p-4 border-t border-border/20">
        <AnimatePresence mode="wait">
        {status !== 'complete' && !error && (
            <motion.div
                key="loading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center gap-3"
            >
                <Loader />
                <p className="font-semibold text-primary">{statusText}</p>
            </motion.div>
        )}
        {status === 'complete' && (
            <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 text-center"
            >
                <CheckCircle className="w-16 h-16 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Download Complete!</h2>
                <p className="text-muted-foreground max-w-sm">Your image has been saved to your device.</p>
                <Button>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share with friends
                </Button>
            </motion.div>
        )}
        {error && (
             <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-destructive text-center"
            >
                <h2 className="font-bold">Download Failed</h2>
                <p className="text-sm">{error}</p>
             </motion.div>
        )}
        </AnimatePresence>
      </footer>
    </div>
  );
}
