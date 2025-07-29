
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

const AppLogo = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("floating-logo", className)}
  >
    <style>
      {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(0px); }
        }
        .floating-logo {
          animation: float 3s ease-in-out infinite;
        }
      `}
    </style>
    <rect width="160" height="160" rx="40" fill="#2A2A3A"/>
    <rect x="10" y="10" width="140" height="140" rx="30" stroke="hsl(207 90% 54%)" strokeOpacity="0.4"/>
    <rect x="18" y="18" width="124" height="124" rx="22" stroke="hsl(207 90% 54%)" strokeWidth="4" strokeOpacity="0.8"/>
    <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="100" fill="hsl(207 90% 54%)">
      💠
    </text>
</svg>
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
  
  const headlineCategories = React.useMemo(() => [
    "Romantic Quotes", "Comedy Lines", "Poetic Verses",
    "Bold Dialogues", "Dreamy Thoughts", "Sarcastic Wit"
  ], []);
  const [headlineIndex, setHeadlineIndex] = React.useState(0);

  React.useEffect(() => {
    const headlineInterval = setInterval(() => {
      setHeadlineIndex(prev => (prev + 1) % headlineCategories.length);
    }, 4000); // Change headline every 4 seconds

    return () => clearInterval(headlineInterval);
  }, [headlineCategories.length]);


  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSettingsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsNavigating(true);
    setTimeout(() => {
      router.push('/settings');
    }, 500); 
  };
  
  const handleCategoryClick = (slug: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setNavigatingTo(slug);
    setTimeout(() => {
      router.push(`/category/${slug}`);
    }, 1500);
  };


  return (
    <div className="flex flex-col min-h-screen bg-muted/30 text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <AppLogo className="h-8 w-8" />
        <div className="relative flex-1 mx-4">
          <AnimatedSearchBar 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          aria-label="Settings" 
          className="text-white hover:bg-white/20"
          onClick={handleSettingsClick}
        >
          <Settings className={`h-7 w-7 transition-transform duration-500 ease-in-out ${isNavigating ? 'rotate-180' : ''}`} />
        </Button>
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
        <div className="flex flex-col gap-y-4">
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
    </div>
  );
}
