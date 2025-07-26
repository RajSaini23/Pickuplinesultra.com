"use client";
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Smile } from 'lucide-react';

export const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // This effect runs once on mount
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        // Speed up progress towards the end for a better feel
        return prev + (prev > 80 ? 3 : 1);
      });
    }, 30);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background transition-opacity duration-500">
        <div className="flex items-center space-x-4 mb-4 animate-pulse">
           <Smile className="h-16 w-16 text-primary" />
          <h1 className="text-5xl font-headline font-bold text-primary tracking-wider">Ecstatic</h1>
        </div>
        <div className="w-4/5 max-w-xs mt-4">
          <Progress value={progress} className="w-full h-2" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
