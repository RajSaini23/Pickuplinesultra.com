
"use client";
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const AppLogo = () => (
  <svg
    width="140"
    height="140"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="neon-glow-1" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0" result="glow" />
        <feComposite in="SourceGraphic" in2="glow" operator="over" />
      </filter>
    </defs>
    <g style={{ filter: 'url(#neon-glow-1)' }}>
      <path
        d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V17"
        stroke="hsl(var(--primary))"
        strokeOpacity="0.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
