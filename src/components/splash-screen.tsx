
"use client";
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const AppLogo = () => (
  <svg
    width="140"
    height="140"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="neon-glow-large" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0"
          result="glow"
        />
        <feComposite in="SourceGraphic" in2="glow" operator="over" />
      </filter>
    </defs>
    <g filter="url(#neon-glow-large)">
      <rect width="100" height="100" rx="20" fill="#2A2A3A" />
      <path d="M50 15L85 50L50 85L15 50L50 15Z" fill="#00BFFF" stroke="#00BFFF" strokeWidth="4" />
      <path d="M50 15L85 50L50 85L15 50L50 15Z" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
    </g>
  </svg>
);



export const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground transition-opacity duration-500 p-8">
        <div className="flex flex-col items-center justify-center flex-grow text-center">
          <AppLogo />
          <h1 className="text-5xl font-headline font-bold tracking-wider mt-6 text-primary">QUTO</h1>
          <p className="mt-2 text-lg text-muted-foreground">Your Emotion. Our Expression.</p>
        
          <div className="w-full max-w-xs mt-12">
            <Progress value={progress} className="w-full h-2" />
            <p className="mt-3 text-sm text-muted-foreground/90">Initializing... {Math.round(progress)}%</p>
          </div>
        </div>
        <footer className="text-center text-xs text-muted-foreground/70">
          <p>© {new Date().getFullYear()} QUTO. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return <>{children}</>;
};
