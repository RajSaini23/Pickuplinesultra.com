
"use client";

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, Bookmark, Copy, Share2, BookmarkCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Category, Quote } from '@/data/types';
import { CategoryIcon } from '@/lib/categories';
import { useBookmarks } from '@/context/bookmark-context';
import { useToast } from '@/hooks/use-toast';
import * as htmlToImage from 'html-to-image';
import { Loader } from '@/components/ui/loader';

const AdCard = () => (
    <Card className="flex h-[74vh] min-h-[500px] w-full max-w-xl mx-auto items-center justify-center bg-muted/50 border-dashed rounded-2xl">
      <CardContent className="p-6 text-center">
        <span className="text-lg font-semibold text-muted-foreground">Advertisement</span>
      </CardContent>
    </Card>
);

const ActionButton = ({ icon: Icon, label, onClick, children }: { icon?: React.ElementType, label: string, onClick?: () => void, children?: React.ReactNode }) => (
    <Button 
      variant="ghost" 
      className="h-16 w-20 flex flex-col items-center justify-center gap-1 transform transition-transform duration-200 active:scale-95 rounded-2xl hover:bg-transparent focus:bg-transparent hover:opacity-80 active:opacity-70" 
      onClick={onClick}
    >
        {children || (Icon && <Icon className="h-6 w-6 text-muted-foreground" />)}
       <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </Button>
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
  onShare: (cardRef: React.RefObject<HTMLDivElement>) => void;
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  return (
    <Card className="shadow-lg h-[74vh] min-h-[500px] flex flex-col border-border/40 hover:border-primary/30 transition-colors duration-300 rounded-2xl overflow-hidden bg-card w-full max-w-xl">
      <div className="flex-grow flex flex-col">
        <div ref={cardRef} className="bg-card">
          <div className="flex-grow flex flex-col items-center justify-center text-center gap-6 p-6 min-h-[calc(74vh-100px)]">
              <div className="text-6xl">{quote.emoji}</div>
              <p className="font-headline text-2xl md:text-3xl font-semibold leading-snug text-foreground/90">
                  {quote.hinglish}
              </p>
          </div>
          <div className="relative px-6 pb-2 text-end">
             <a 
                href={typeof window !== 'undefined' ? window.location.origin : ''} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => e.preventDefault()}
                className="font-headline uppercase tracking-widest text-lg font-bold italic animate-shimmer pointer-events-none"
              >
               Pickup Lines
              </a>
          </div>
        </div>
      </div>


      <div className="mt-auto bg-card">
        <Separator />
        <div className="flex items-center justify-around p-2">
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
                    <Heart className="h-6 w-6 text-accent fill-accent" />
                  </motion.div>
                ) : (
                  <Heart className="h-6 w-6 text-muted-foreground" />
                )}
              </motion.div>
            </ActionButton>
            <ActionButton label={isBookmarked ? 'Saved' : 'Save'} onClick={onBookmarkToggle}>
              <motion.div
                key={isBookmarked ? 'bookmarked' : 'unbookmarked'}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
                exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
              >
                {isBookmarked ? (
                   <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <BookmarkCheck className="h-6 w-6 text-primary" />
                  </motion.div>
                ) : (
                  <Bookmark className="h-6 w-6 text-muted-foreground" />
                )}
              </motion.div>
            </ActionButton>
            <ActionButton icon={Copy} label="Copy" onClick={onCopy} />
            <ActionButton icon={Share2} label="Share" onClick={() => onShare(cardRef)} />
        </div>
      </div>
    </Card>
  );
};


export function CategoryClientPage({ category, quotes }: { category: Omit<Category, 'icon'>, quotes: Quote[] }) {
  const { toast } = useToast();
  const { bookmarkedIds, addBookmark, removeBookmark } = useBookmarks();
  const [likedQuotes, setLikedQuotes] = React.useState<Set<number>>(new Set());
  const [sharingQuoteId, setSharingQuoteId] = React.useState<number | null>(null);

  const allItems = React.useMemo(() => {
    const items: (Quote | { ad: boolean })[] = [];
    for (let i = 0; i < quotes.length; i++) {
      items.push(quotes[i]);
      if ((i + 1) % 3 === 0) {
        items.push({ ad: true });
      }
    }
    return items;
  }, [quotes]);

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleBookmarkToggle = (quote: Quote) => {
    const isBookmarked = bookmarkedIds.includes(quote.id);
    if (isBookmarked) {
      removeBookmark(quote.id);
    } else {
      addBookmark(quote.id);
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

  const handleShare = async (quote: Quote, cardRef: React.RefObject<HTMLDivElement>) => {
    if (!cardRef.current) {
        toast({ variant: 'destructive', title: "Error", description: "Could not share the quote card." });
        return;
    }
    
    setSharingQuoteId(quote.id);

    try {
        const blob = await htmlToImage.toBlob(cardRef.current, {
            quality: 1,
            pixelRatio: 2,
        });

        if (!blob) {
            throw new Error('Image blob could not be created.');
        }

        const files = [new File([blob], 'pickup-lines-quote.png', { type: 'image/png' })];
        
        if (navigator.canShare && navigator.canShare({ files })) {
            await navigator.share({
                files,
                title: 'Pickup Lines Quote',
                text: `${quote.hinglish}\n\n- Shared from Pickup Lines`,
            });
        } else {
            // This error is thrown when navigator.share doesn't support files.
            throw new Error('Web Share API does not support sharing files in this browser.');
        }
    } catch (err: any) {
        // This is a special case for the "AbortError" which happens when the user cancels the share dialog.
        // We do not want to show any error message in this case.
        if (err.name === 'AbortError') {
            return;
        }

        // Fallback to sharing a link if sharing files is not supported or fails
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Pickup Lines Quote',
                    text: `${quote.hinglish}\n\n- Shared from Pickup Lines`,
                    url: window.location.origin,
                });
            } else {
                // Final fallback to clipboard if even basic sharing is not supported
                const blob = await htmlToImage.toBlob(cardRef.current, { quality: 1, pixelRatio: 2 });
                if (blob && navigator.clipboard && navigator.clipboard.write) {
                    const item = new ClipboardItem({ 'image/png': blob });
                    await navigator.clipboard.write([item]);
                    toast({ title: "Image Copied!", description: "Quote card image copied to clipboard." });
                } else {
                    await navigator.clipboard.writeText(`${quote.hinglish}\n\n- Shared from Pickup Lines`);
                    toast({ title: "Text Copied!", description: "Sharing not supported, quote text copied." });
                }
            }
        } catch (fallbackError: any) {
             if (fallbackError.name === 'AbortError') {
                return;
            }
            console.error("Fallback share failed:", fallbackError);
            toast({
                variant: 'destructive',
                title: "Sharing Failed",
                description: "Could not share the quote. Please try again.",
            });
        }
    } finally {
        setSharingQuoteId(null);
    }
  };


  return (
    <div className="flex flex-col h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 h-20 border-b bg-card/80 backdrop-blur-sm">
        <div className="flex-1 flex justify-start">
          <Link href="/" passHref>
            <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted">
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </Button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center gap-3 text-center min-w-0">
            <CategoryIcon slug={category.slug} className="h-7 w-7 flex-shrink-0" />
            <h1 className="text-2xl font-bold font-headline truncate">{category.name}</h1>
        </div>
        <div className="flex-1 flex justify-end">
          
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
                    <div key={`ad-${index}`} className="w-full max-w-xl">
                        <AdCard />
                    </div>
                );
            }
            
            const quote = item as Quote;
            const isSharing = sharingQuoteId === quote.id;

            return (
              <div key={quote.id} className="relative w-full max-w-xl">
                {isSharing && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-[2px] rounded-2xl">
                    <Loader />
                  </div>
                )}
                <QuoteCard
                  quote={quote}
                  isLiked={likedQuotes.has(quote.id)}
                  isBookmarked={bookmarkedIds.includes(quote.id)}
                  onLikeToggle={() => handleLikeToggle(quote.id)}
                  onBookmarkToggle={() => handleBookmarkToggle(quote)}
                  onCopy={() => handleCopy(quote.hinglish)}
                  onShare={(cardRef) => handleShare(quote, cardRef)}
                />
              </div>
            );
        })}
      </main>
    </div>
  );
}
