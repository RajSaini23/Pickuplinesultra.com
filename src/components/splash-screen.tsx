"use client";
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const AppLogo = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    <rect width="120" height="120" rx="30" fill="url(#gradient-bg)" />
    <g filter="url(#inset-shadow)">
      <rect x="5" y="5" width="110" height="110" rx="25" fill="#1A1D2E" />
    </g>
    <rect x="2.5" y="2.5" width="115" height="115" rx="27.5" stroke="url(#border-gradient)" strokeWidth="5" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M60 48.75C56.5 48.75 53.25 51.75 53.25 55.5C53.25 58.5 54.75 61.5 60 66.75C65.25 61.5 66.75 58.5 66.75 55.5C66.75 51.75 63.5 48.75 60 48.75Z"
      fill="url(#center-shape)"
    />
    <path
      d="M81.75 55.5C81.75 45.75 72 38.25 60 38.25C48 38.25 38.25 45.75 38.25 55.5C38.25 61.5 42 69 60 78.75C78 69 81.75 61.5 81.75 55.5Z"
      fill="url(#petal-gradient)"
      opacity="0.7"
    />
    <defs>
      <linearGradient id="gradient-bg" x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2D63ED" />
        <stop offset="1" stopColor="#0D3B9E" />
      </linearGradient>
      <linearGradient id="border-gradient" x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4D8FFF" />
        <stop offset="1" stopColor="#2E66E0" />
      </linearGradient>
      <radialGradient id="center-shape" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 55.5) rotate(90) scale(15)">
        <stop stopColor="white" />
        <stop offset="1" stopColor="#E0EFFF" />
      </radialGradient>
      <radialGradient id="petal-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 55.5) rotate(90) scale(24.75 21.75)">
        <stop stopColor="#29B6F6" />
        <stop offset="1" stopColor="#0D47A1" />
      </radialGradient>
       <filter id="inset-shadow" x="5" y="5" width="110" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feComponentTransfer in="BackgroundImageFix" result="alpha">
            <feFuncA type="linear" slope="0.5"/>
        </feComponentTransfer>
        <feBlend mode="normal" in="SourceGraphic" in2="alpha" result="solid" />
        <feComposite in2="SourceGraphic" operator="in" result="shadow" />
        <feColorMatrix in="shadow" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feComponentTransfer in="shadow" result="inset-shadow">
          <feFuncA type="linear" slope="1.5" intercept="0" />
        </feComponentTransfer>
        <feBlend mode="normal" in="inset-shadow" in2="solid" result="final"/>
      </filter>
    </defs>
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
      <div className="flex flex-col items-center justify-center h-screen bg-primary text-primary-foreground transition-opacity duration-500 p-8">
        <div className="flex flex-col items-center justify-center flex-grow text-center">
          <AppLogo />
          <h1 className="text-5xl font-headline font-bold tracking-wider mt-6">ECSTATIC</h1>
          <p className="mt-2 text-lg text-primary-foreground/80">Discover the logic of love.</p>
        
          <div className="w-full max-w-xs mt-12">
            <Progress value={progress} className="w-full h-2 bg-primary-foreground/20 [&>div]:bg-gradient-to-r [&>div]:from-destructive [&>div]:to-amber-400" />
            <p className="mt-3 text-sm text-primary-foreground/90">Initializing... {Math.round(progress)}%</p>
          </div>
        </div>
        <footer className="text-center text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} ECSTATIC. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Made with <span className="text-destructive">❤️</span> in India <span className="relative -top-px">🇮🇳</span>
          </p>
        </footer>
      </div>
    );
  }

  return <>{children}</>;
};
