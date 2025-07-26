"use client";
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const AppLogo = () => (
  <svg
    width="140"
    height="140"
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="neon-glow-1" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.7 0" result="glow" />
        <feComposite in="SourceGraphic" in2="glow" operator="over" />
      </filter>
       <filter id="neon-glow-2" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" result="glow" />
        <feComposite in="SourceGraphic" in2="glow" operator="over" />
      </filter>
    </defs>
    <rect width="140" height="140" rx="35" fill="#2A2A3A"/>
    <g style={{ filter: 'url(#neon-glow-2)' }}>
      <rect x="5" y="5" width="130" height="130" rx="30" stroke="#00BFFF" strokeWidth="2" strokeOpacity="0.3" />
    </g>
    <g style={{ filter: 'url(#neon-glow-1)' }}>
      <rect x="10" y="10" width="120" height="120" rx="25" stroke="#00BFFF" strokeWidth="2.5" />
    </g>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="70" fill="#00BFFF" style={{ filter: 'url(#neon-glow-1)' }}>
      💠
    </text>
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
          <h1 className="text-5xl font-headline font-bold tracking-wider mt-6 text-primary">ECSTATIC</h1>
          <p className="mt-2 text-lg text-muted-foreground">Your Emotion. Our Expression.</p>
        
          <div className="w-full max-w-xs mt-12">
            <Progress value={progress} className="w-full h-2" />
            <p className="mt-3 text-sm text-muted-foreground/90">Initializing... {Math.round(progress)}%</p>
          </div>
        </div>
        <footer className="text-center text-xs text-muted-foreground/70">
          <p>© {new Date().getFullYear()} ECSTATIC. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return <>{children}</>;
};
