
"use client";
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const AppLogo = () => (
    <div className="relative w-36 h-36 flex items-center justify-center" style={{ borderRadius: '22%' }}>
    <div className="absolute inset-0 bg-black/50 blur-lg" style={{ borderRadius: 'inherit' }}></div>
    <div className="absolute inset-0 border-2 border-primary/30" style={{ borderRadius: 'inherit' }}></div>
    <svg
      width="140"
      height="140"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 z-10"
    >
      <defs>
        <linearGradient id="logo-gradient-splash" x1="0%" y1="0%" x2="100%" y2="100%">
           <stop offset="0%" style={{ stopColor: 'hsl(217, 91%, 60%)' }} />
           <stop offset="100%" style={{ stopColor: 'hsl(220, 15%, 10%)' }} />
        </linearGradient>
        <filter id="logo-glow-splash" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0"
            result="glow"
          />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>
      </defs>
      <g filter="url(#logo-glow-splash)">
        <path
          d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 44.4 88.9 39.1 86.9 34.3C84.3 28.1 79.5 22.8 73.5 19.3L73.4 19.2C65.5 14.6 56.1 14.8 48.4 18.5C45.3 20 42.4 21.9 39.8 24.3C34.3 29.5 31.1 36.9 31.2 44.8C31.2 45.1 31.2 45.4 31.2 45.7C31.3 49.3 32.5 52.8 34.6 55.7C36.9 58.8 40.2 61.1 43.9 62.1C47.1 63 50.4 62.8 53.4 61.7C55.6 60.9 57.6 59.6 59.3 57.9L61.7 64.8C59 67.5 55.6 69.1 52 69.6C46.8 70.3 41.6 69.1 37.4 66.4C32.3 63.1 28.6 58.1 27.2 52.3C25.5 45.6 27.1 38.6 31.5 33.3C34.3 29.9 37.9 27.3 41.9 25.5C50.2 21.6 60.1 21.9 68.1 26.5L68.3 26.6C75.2 30.6 80.5 37.2 82.8 44.9C85.5 52.8 84.7 61.6 80.5 68.7L73.6 64.4C76.9 59.1 77.5 52.7 75.3 47.1C73.1 41.5 68.5 37.1 63 35.1C58.4 33.5 53.5 34.3 49.5 37.1C45.2_40.2 42.5 44.5 43 50C43.1 55.4 47.6 60 53 60C58.4 60 63 55.4 63 50C63 49.3 62.9 48.7 62.8 48.1L70.2 45.2C70.7 46.7 71 48.3 71 50C71 61.6 61.6 71 50 71C38.4 71 29 61.6 29 50C29 38.4 38.4 29 50 29C55.8 29 61.1 31.4 64.9 35.4L68.7 31.5C64.1 26.9 57.5 24 50 24C35.6 24 24 35.6 24 50C24 64.4 35.6 76 50 76C64.4 76 76 64.4 76 50C76 40.1 70.4 31.6 62.4 27.1L62.2 27L50 20L50 10Z"
          fill="url(#logo-gradient-splash)"
        />
      </g>
    </svg>
  </div>
);



export const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const platforms = ['Website', 'iOS App', 'Android App'];
  const [platformIndex, setPlatformIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 70);
    
    const platformTimer = setInterval(() => {
      setPlatformIndex(prev => (prev + 1) % platforms.length);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
      clearInterval(platformTimer);
    };
  }, [platforms.length]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground transition-opacity duration-500 p-8">
        <div className="flex flex-col items-center justify-center flex-grow text-center">
          <AppLogo />
           <h1 className="text-5xl font-headline font-bold tracking-wider mt-6 text-primary">
            Pickup Lines
            <span className="animate-text-gold"> Ultra</span>
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">Your Emotion. Our Expression.</p>
        
          <div className="w-full max-w-xs mt-12">
            <Progress value={progress} className="w-full h-2" />
            <p className="mt-3 text-sm text-muted-foreground/90">Initializing... {Math.round(progress)}%</p>
          </div>
        </div>
        <footer className="text-center text-xs text-muted-foreground/70">
          <p className="font-semibold tracking-wider">Developed By INDGROWSIVE</p>
          <Link 
            href="/about" 
            className="mt-2 inline-flex items-center gap-1.5 text-primary/80 hover:text-primary hover:underline transition-colors text-xs"
          >
            <span>About This</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={platformIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="font-bold"
              >
                {platforms[platformIndex]}
              </motion.span>
            </AnimatePresence>
          </Link>
        </footer>
      </div>
    );
  }

  return <>{children}</>;
};
