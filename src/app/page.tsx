
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Settings, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { CategoryIcon } from '@/lib/categories';
import { categories } from '@/data';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SplitText from '@/components/ui/split-text';
import { useNetwork } from '@/context/network-context';
import { useRatingPrompt } from '@/hooks/use-rating-prompt';
import { ScrollIndicator } from '@/components/ui/scroll-indicator';

const AppLogo = ({ className }: { className?: string }) => (
  <motion.div
    className={cn("relative w-9 h-9 flex items-center justify-center", className)}
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    style={{ borderRadius: '22%' }}
  >
    <div className="absolute inset-0 bg-black/50 blur-sm" style={{ borderRadius: 'inherit' }}></div>
     <div className="absolute inset-0 border border-primary/30" style={{ borderRadius: 'inherit' }}></div>
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 z-10"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--foreground))' }} />
        </linearGradient>
        <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
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
      <g filter="url(#logo-glow)">
        <path
          d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 44.4 88.9 39.1 86.9 34.3C84.3 28.1 79.5 22.8 73.5 19.3L73.4 19.2C65.5 14.6 56.1 14.8 48.4 18.5C45.3 20 42.4 21.9 39.8 24.3C34.3 29.5 31.1 36.9 31.2 44.8C31.2 45.1 31.2 45.4 31.2 45.7C31.3 49.3 32.5 52.8 34.6 55.7C36.9 58.8 40.2 61.1 43.9 62.1C47.1 63 50.4 62.8 53.4 61.7C55.6 60.9 57.6 59.6 59.3 57.9L61.7 64.8C59 67.5 55.6 69.1 52 69.6C46.8 70.3 41.6 69.1 37.4 66.4C32.3 63.1 28.6 58.1 27.2 52.3C25.5 45.6 27.1 38.6 31.5 33.3C34.3 29.9 37.9 27.3 41.9 25.5C50.2 21.6 60.1 21.9 68.1 26.5L68.3 26.6C75.2 30.6 80.5 37.2 82.8 44.9C85.5 52.8 84.7 61.6 80.5 68.7L73.6 64.4C76.9 59.1 77.5 52.7 75.3 47.1C73.1 41.5 68.5 37.1 63 35.1C58.4 33.5 53.5 34.3 49.5 37.1C45.2_40.2 42.5 44.5 43 50C43.1 55.4 47.6 60 53 60C58.4 60 63 55.4 63 50C63 49.3 62.9 48.7 62.8 48.1L70.2 45.2C70.7 46.7 71 48.3 71 50C71 61.6 61.6 71 50 71C38.4 71 29 61.6 29 50C29 38.4 38.4 29 50 29C55.8 29 61.1 31.4 64.9 35.4L68.7 31.5C64.1 26.9 57.5 24 50 24C35.6 24 24 35.6 24 50C24 64.4 35.6 76 50 76C64.4 76 76 64.4 76 50C76 40.1 70.4 31.6 62.4 27.1L62.2 27L50 20L50 10Z"
          fill="url(#logo-gradient)"
        />
      </g>
    </svg>
  </motion.div>
);


const AnimatedSearchBar = ({ value, onChange }: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const searchTerms = React.useMemo(() => [
    "Search romantic quotes...",
    "Find comedy lines...",
    "Look for bold dialogues...",
    "Explore poetic verses...",
  ], []);
  const [termIndex, setTermIndex] = React.useState(0);
  const [displayedTerm, setDisplayedTerm] = React.useState("");

  React.useEffect(() => {
    if (isFocused || value) return;

    let typingTimeout: NodeJS.Timeout;
    const currentTerm = searchTerms[termIndex];
    let i = 0;

    const type = () => {
      if (i < currentTerm.length) {
        setDisplayedTerm(currentTerm.substring(0, i + 1));
        i++;
        typingTimeout = setTimeout(type, 100);
      } else {
        typingTimeout = setTimeout(deleteTerm, 2000);
      }
    };

    const deleteTerm = () => {
      if (i > 0) {
        setDisplayedTerm(currentTerm.substring(0, i - 1));
        i--;
        typingTimeout = setTimeout(deleteTerm, 60);
      } else {
        setTermIndex((prev) => (prev + 1) % searchTerms.length);
      }
    };
    
    typingTimeout = setTimeout(type, 500);

    return () => clearTimeout(typingTimeout);
  }, [termIndex, isFocused, value, searchTerms]);

  return (
    <div className="relative w-full">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/80 z-10">
         <Search />
      </div>
      <Input
        type="search"
        placeholder={isFocused || value ? "" : displayedTerm}
        className="w-full pl-12 pr-4 h-12 bg-background text-foreground rounded-full border-none shadow-md focus-visible:ring-2 focus-visible:ring-primary/50"
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

const AnimatedCategoryCard = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0, y: 30 }}
      animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isNavigating, setIsNavigating] = React.useState(false);
  const [navigatingTo, setNavigatingTo] = React.useState<string | null>(null);
  const router = useRouter();
  const { isOnline } = useNetwork();
  const [showScrollIndicator, setShowScrollIndicator] = React.useState(true);
  
  const headlineCategories = React.useMemo(() => [
    "Romantic Quotes", "Comedy Lines", "Poetic Verses",
    "Bold Dialogues", "Dreamy Thoughts", "Sarcastic Wit"
  ], []);
  const [headlineIndex, setHeadlineIndex] = React.useState(0);
  
  useRatingPrompt();


  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  React.useEffect(() => {
    const headlineInterval = setInterval(() => {
      setHeadlineIndex(prev => (prev + 1) % headlineCategories.length);
    }, 4000); // Change headline every 4 seconds

    return () => clearInterval(headlineInterval);
  }, [headlineCategories.length]);


  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleCategoryClick = (slug: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setNavigatingTo(slug);
    router.push(`/category/${slug}`);
  };


  return (
    <div className="flex flex-col min-h-screen bg-muted/30 text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <div className="flex items-center gap-2">
            <AppLogo className="h-9 w-9" />
             <div 
                className={cn(
                    "w-3 h-3 rounded-full transition-colors duration-500",
                    isOnline ? "bg-green-400" : "bg-red-500"
                )}
                title={isOnline ? "Online" : "Offline"}
            />
        </div>
        <div className="relative flex-1 mx-4">
          <AnimatedSearchBar 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Link href="/settings">
          <Button variant="ghost" size="icon" className="text-white bg-transparent hover:bg-transparent focus:bg-transparent">
            <Settings className="h-7 w-7" />
          </Button>
        </Link>
      </header>

      <div className="bg-primary px-4 md:px-6 pb-8">
        <AnimatePresence mode="wait">
            <motion.div
              key={headlineIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SplitText
                  text={headlineCategories[headlineIndex]}
                  className="text-4xl font-bold text-white text-left"
                  splitType="chars"
                  delay={30}
                  duration={0.4}
                  ease="power2.out"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
              />
            </motion.div>
        </AnimatePresence>
      </div>

      <main className="flex-grow p-4 md:px-6 md:py-8 -mt-8">
        <div className="flex flex-col gap-y-6">
          {filteredCategories.map((category, index) => (
            <AnimatedCategoryCard key={category.slug} delay={index * 0.05}>
              <Link 
                href={`/category/${category.slug}`} 
                className="group relative transition-transform duration-300 ease-in-out active:scale-[0.98] block"
                onClick={(e) => handleCategoryClick(category.slug, e)}
              >
                <Card 
                  className="overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1 rounded-2xl border-none shadow-md h-24 p-0 relative"
                  style={{ backgroundColor: category.color }}
                >
                    {navigatingTo === category.slug && <div className="loading-border" />}
                    <div className="flex items-center p-4 h-full w-full">
                      <div className="flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0 bg-white/20">
                        <CategoryIcon slug={category.slug} className="h-8 w-8 text-white" />
                      </div>
                      <div className="ml-5">
                        <CardTitle className="font-bold text-lg text-white">{category.name}</CardTitle>
                        <CardDescription className="text-sm text-white/80 tracking-wider">Category</CardDescription>
                      </div>
                    </div>
                </Card>
              </Link>
            </AnimatedCategoryCard>
          ))}
        </div>
      </main>
      <AnimatePresence>
        {showScrollIndicator && <ScrollIndicator />}
      </AnimatePresence>
    </div>
  );
}
