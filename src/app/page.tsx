
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
import { motion, AnimatePresence } from 'framer-motion';

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

    const currentTerm = searchTerms[termIndex];
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayedTerm(currentTerm.substring(0, i + 1));
      i++;
      if (i >= currentTerm.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          let j = currentTerm.length;
          const deletingInterval = setInterval(() => {
            setDisplayedTerm(currentTerm.substring(0, j - 1));
            j--;
            if (j <= 0) {
              clearInterval(deletingInterval);
              setTermIndex((prev) => (prev + 1) % searchTerms.length);
            }
          }, 100);
        }, 1500);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [termIndex, isFocused, value, searchTerms]);

  return (
    <div className="relative w-full">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 z-10">
         <AppLogo className="h-full w-full" />
      </div>
      <Input
        type="search"
        placeholder={isFocused || value ? "" : displayedTerm}
        className="w-full pl-12 pr-10 h-12 bg-background text-foreground rounded-full border-none shadow-md focus-visible:ring-2 focus-visible:ring-primary/50"
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <AnimatePresence>
        {!isFocused && !value && !displayedTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 pointer-events-none"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="h-1.5 w-1.5 bg-muted-foreground rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground">
        <Search />
      </div>
    </div>
  );
};


export default function Dashboard() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isNavigating, setIsNavigating] = React.useState(false);
  const [navigatingTo, setNavigatingTo] = React.useState<string | null>(null);
  const router = useRouter();

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
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
      </div>

      <main className="flex-grow p-4 md:px-6 md:py-8 -mt-8">
        <div className="flex flex-col gap-y-4">
          {filteredCategories.map((category) => (
            <Link 
              href={`/category/${category.slug}`} 
              key={category.slug} 
              className="group relative transition-transform duration-300 ease-in-out active:scale-[0.98]"
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
          ))}
        </div>
      </main>
    </div>
  );
}
