
"use client";

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, Bookmark, Copy, Share2, BookmarkCheck, HeartCrack } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Category, Quote } from '@/data/types';
import { CategoryIcon } from '@/lib/categories';
import { useBookmarks } from '@/context/bookmark-context';
import { useToast } from '@/hooks/use-toast';
import * as htmlToImage from 'html-to-image';

const AdCard = () => (
    <Card className="flex h-[68vh] min-h-[500px] w-full max-w-sm mx-auto items-center justify-center bg-muted/50 border-dashed rounded-2xl">
      <CardContent className="p-6 text-center">
        <span className="text-lg font-semibold text-muted-foreground">Advertisement</span>
      </CardContent>
    </Card>
);

const ActionButton = ({ icon: Icon, label, onClick, children }: { icon?: React.ElementType, label: string, onClick?: () => void, children?: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center gap-1.5 transform transition-transform duration-200 active:scale-90 flex-1">
     <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-transparent hover:bg-muted" onClick={onClick}>
        {children || (Icon && <Icon className="h-6 w-6 text-muted-foreground" />)}
     </Button>
     <span className="text-sm font-medium text-muted-foreground">{label}</span>
  </div>
);


const QuoteCard = ({
  quote,
  isLiked,
  isBookmarked,
  onLikeToggle,
  onBookmarkToggle,
  onCopy,
  onShare,
}: {
  quote: Quote;
  isLiked: boolean;
  isBookmarked: boolean;
  onLikeToggle: () => void;
  onBookmarkToggle: () => void;
  onCopy: () => void;
  onShare: (element: HTMLDivElement) => void;
}) => {
  const cardContentRef = React.useRef<HTMLDivElement>(null);

  return (
    <Card className="shadow-lg h-[68vh] min-h-[500px] flex flex-col border-border/40 hover:border-primary/30 transition-colors duration-300 rounded-2xl overflow-hidden bg-card w-full max-w-sm">
      <div ref={cardContentRef} className="flex-grow flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center text-center gap-6 p-6">
            <div className="text-7xl">{quote.emoji}</div>
            <p className="font-headline text-3xl md:text-4xl font-semibold leading-snug text-foreground/90">
                {quote.hinglish}
            </p>
        </div>
        <div className="relative px-6 pb-2 text-end text-sm text-muted-foreground/50 italic">
            - Ecstatic
        </div>
      </div>

      <div className="mt-auto px-4 pb-1">
        <Separator className="mb-2" />
        <div className="flex items-center justify-around">
            <ActionButton label={isLiked ? "Liked" : "Like"} onClick={onLikeToggle}>
              <motion.div
                key={isLiked ? 'liked' : 'unliked'}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
                exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
              >
                {isLiked ? (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Heart className="h-6 w-6 text-red-500 fill-red-500" />
                  </motion.div>
                ) : (
                  <Heart className="h-6 w-6 text-muted-foreground" />
                )}
              </motion.div>
            </ActionButton>
            <ActionButton label={isBookmarked ? 'Saved' : 'Save'} onClick={onBookmarkToggle}>
              {isBookmarked ? <BookmarkCheck className="h-6 w-6 text-primary" /> : <Bookmark className="h-6 w-6 text-muted-foreground" />}
            </ActionButton>
            <ActionButton icon={Copy} label="Copy" onClick={onCopy} />
            <ActionButton icon={Share2} label="Share" onClick={() => cardContentRef.current && onShare(cardContentRef.current)} />
        </div>
      </div>
    </Card>
  );
};


export function CategoryClientPage({ category, quotes }: { category: Omit<Category, 'icon'>, quotes: Quote[] }) {
  const { toast } = useToast();
  const { bookmarkedIds, addBookmark, removeBookmark } = useBookmarks();
  const [likedQuotes, setLikedQuotes] = React.useState<Set<number>>(new Set());

  const allItems = React.useMemo(() => {
    const items = [];
    for (let i = 0; i < quotes.length; i++) {
      items.push(quotes[i]);
      if ((i + 1) % 3 === 0) {
        items.push({ ad: true });
      }
    }
    return items;
  }, [quotes]);

  const [currentItem, setCurrentItem] = React.useState(1);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight, children } = scrollRef.current;
            if (children.length === 0) return;
            const firstChild = children[0] as HTMLElement;
            const cardHeight = firstChild.offsetHeight;
            const gap = 16; // Corresponds to gap-4
            const index = Math.round(scrollTop / (cardHeight + gap));
            setCurrentItem(Math.min(index + 1, quotes.length));
        }
    };

    const currentRef = scrollRef.current;
    currentRef?.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
        currentRef?.removeEventListener('scroll', handleScroll);
    };
  }, [quotes.length]);

  const handleBookmarkToggle = (quote: Quote) => {
    const isBookmarked = bookmarkedIds.includes(quote.id);
    if (isBookmarked) {
      removeBookmark(quote.id);
      toast({ title: "Bookmark Removed", description: `"${quote.hinglish}" removed from your bookmarks.` });
    } else {
      addBookmark(quote.id);
      toast({ title: "Bookmark Added!", description: `"${quote.hinglish}" saved to your bookmarks.` });
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied!", description: "Quote copied to clipboard." });
  };
  
  const handleLikeToggle = (quoteId: number) => {
    setLikedQuotes(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(quoteId)) {
        newLiked.delete(quoteId);
      } else {
        newLiked.add(quoteId);
      }
      return newLiked;
    });
  };

  const handleShare = async (element: HTMLElement, quoteText: string) => {
    toast({ title: "Preparing Card...", description: "Please wait while we create the image." });
    try {
      const blob = await htmlToImage.toBlob(element, {
        pixelRatio: 2,
        style: {
          boxShadow: 'none',
          margin: '0',
          border: 'none',
        }
      });
      if (!blob) {
          throw new Error('Failed to create image blob.');
      }
      
      const file = new File([blob], 'ecstatic-quote.png', { type: 'image/png' });

      const shareData = {
        title: 'Ecstatic Quote',
        text: `${quoteText}\n\n- Shared from Ecstatic`,
        files: [file],
      };

      if (navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
         throw new Error("Sharing not supported.");
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error("Share failed:", err);
         toast({
          variant: 'destructive',
          title: "Sharing Failed",
          description: "Could not share the quote card. Please try again.",
        });
      }
    }
  };

  return (
    <div className="flex flex-col h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 border-b bg-card/80 backdrop-blur-sm">
        <div className="flex-1 flex justify-start">
          <Link href="/" passHref>
            <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted">
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </Button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center gap-2 text-center">
            <CategoryIcon slug={category.slug} className="h-7 w-7" />
            <h1 className="text-2xl font-bold font-headline truncate">{category.name}</h1>
        </div>
        <div className="flex-1 flex justify-end text-sm font-medium text-muted-foreground tabular-nums">
           {currentItem} / {quotes.length}
        </div>
      </header>

      <main 
        ref={scrollRef} 
        className="flex-grow flex flex-col items-center p-4 pt-6 gap-4 overflow-y-auto"
        style={{ scrollBehavior: 'smooth' }}
      >
        {allItems.map((item, index) => {
            if ('ad' in item) {
                return (
                    <div key={`ad-${index}`} className="w-full max-w-sm">
                        <AdCard />
                    </div>
                );
            }
            
            const quote = item as Quote;
            return (
              <QuoteCard
                key={quote.id}
                quote={quote}
                isLiked={likedQuotes.has(quote.id)}
                isBookmarked={bookmarkedIds.includes(quote.id)}
                onLikeToggle={() => handleLikeToggle(quote.id)}
                onBookmarkToggle={() => handleBookmarkToggle(quote)}
                onCopy={() => handleCopy(quote.hinglish)}
                onShare={(element) => handleShare(element, quote.hinglish)}
              />
            );
        })}
      </main>
    </div>
  );
}
