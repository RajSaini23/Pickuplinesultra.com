// src/app/bookmarks/page.tsx
"use client";

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookmarkX, DownloadCloud, Share2, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBookmarks } from '@/context/bookmark-context';
import { quotes as allQuotes } from '@/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import * as htmlToImage from 'html-to-image';
import { Loader } from '@/components/ui/loader';
import { useLanguage } from '@/context/language-context';

const AdCard = () => (
    <Card className="flex h-full min-h-[420px] w-full items-center justify-center bg-muted/50 border-2 border-dashed border-border/50 rounded-2xl">
      <CardContent className="p-6 text-center">
        <span className="text-lg font-semibold text-muted-foreground">Advertisement</span>
      </CardContent>
    </Card>
);


export default function BookmarksPage() {
  const { bookmarkedIds, removeBookmark } = useBookmarks();
  const [bookmarkedQuotes, setBookmarkedQuotes] = React.useState<any[]>([]);
  const [sharingQuoteId, setSharingQuoteId] = React.useState<number | null>(null);
  const { toast } = useToast();
  const router = useRouter();
  const { getTranslation, language } = useLanguage();

  React.useEffect(() => {
    const savedQuotes = allQuotes.filter(quote => bookmarkedIds.includes(quote.id));
    setBookmarkedQuotes(savedQuotes);
  }, [bookmarkedIds]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied!", description: "Quote copied to clipboard." });
  };

  const handleDownload = (quoteId: number) => {
    router.push(`/download/${quoteId}`);
  };

  const handleShare = async (quote: any, cardRef: React.RefObject<HTMLDivElement>) => {
    if (!cardRef.current) {
        toast({ variant: 'destructive', title: "Error", description: "Could not share the quote card." });
        return;
    }

    setSharingQuoteId(quote.id);
    const textToShare = getTranslation(quote);

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
                text: `${textToShare}\n\n- Shared from Pickup Lines Ultra`,
            });
        } else {
            throw new Error('Web Share API does not support sharing files in this browser.');
        }
    } catch (err: any) {
        if (err.name === 'AbortError') {
            return;
        }

        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Pickup Lines Quote',
                    text: `${textToShare}\n\n- Shared from Pickup Lines Ultra`,
                    url: window.location.origin,
                });
            } else {
                const blob = await htmlToImage.toBlob(cardRef.current, { quality: 1, pixelRatio: 2 });
                if (blob && navigator.clipboard && navigator.clipboard.write) {
                    const item = new ClipboardItem({ 'image/png': blob });
                    await navigator.clipboard.write([item]);
                    toast({ title: "Image Copied!", description: "Quote card image copied to clipboard." });
                } else {
                    await navigator.clipboard.writeText(`${textToShare}\n\n- Shared from Pickup Lines Ultra`);
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

  const allItems = React.useMemo(() => {
    const items: (any | { ad: boolean })[] = [];
    if (bookmarkedQuotes.length === 0) return [];
    
    for (let i = 0; i < bookmarkedQuotes.length; i++) {
      items.push(bookmarkedQuotes[i]);
      if ((i + 1) % 3 === 0) {
        items.push({ ad: true });
      }
    }
    return items;
  }, [bookmarkedQuotes]);


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

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 flex items-center p-4 border-b bg-card/80 backdrop-blur-sm">
        <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted" onClick={() => router.push('/')}>
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
        </Button>
        <h1 className="text-2xl font-bold font-headline ml-4">Bookmarked Pages</h1>
      </header>

      <main className="flex-grow p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          {bookmarkedQuotes.length === 0 ? (
            <div className="text-center py-8">
              <BookmarkX className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No bookmarks yet.</h2>
              <p className="text-muted-foreground mb-6">Yahan aapke pasandida quotes dikhenge! Shuru karne ke liye kuch save karein.</p>
              <Button className="mb-8" onClick={() => router.push('/')}>Explore Quotes</Button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdCard />
                <AdCard />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allItems.map((item, index) => {
                if(item.ad) {
                    return <div key={`ad-${index}`}><AdCard /></div>
                }

                const quote = item;
                const cardRef = React.createRef<HTMLDivElement>();
                const isSharing = sharingQuoteId === quote.id;
                const currentText = getTranslation(quote);

                return (
                  <div key={quote.id} className="relative">
                    {isSharing && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-[2px] rounded-2xl">
                        <Loader />
                      </div>
                    )}
                    <Card className="shadow-lg flex flex-col border-border/40 rounded-2xl overflow-hidden bg-card">
                      <div className="flex-grow flex flex-col">
                        <div ref={cardRef}>
                           <div className="bg-card border-2 border-accent rounded-2xl">
                            <div className="flex-grow flex flex-col items-center justify-center text-center gap-6 p-6 min-h-[250px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={quote.id + language}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col items-center justify-center gap-6 w-full"
                                    >
                                        <div className="text-6xl">{quote.emoji}</div>
                                        <p className="font-headline text-2xl font-semibold leading-snug text-foreground/90">
                                            {currentText}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="relative px-6 pb-2 text-end">
                              <a 
                                  href={typeof window !== 'undefined' ? window.location.origin : ''} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  onClick={(e) => e.preventDefault()}
                                  className="font-headline uppercase tracking-widest text-sm font-bold italic pointer-events-none"
                                >
                                Pickup Lines <span className="animate-text-gold">Ultra</span>
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Separator />
                        <div className="flex items-center justify-around p-2">
                           <ActionButton icon={DownloadCloud} label="Download" onClick={() => handleDownload(quote.id)} />
                            <ActionButton label="Remove" onClick={() => removeBookmark(quote.id)}>
                               <BookmarkX className="h-6 w-6 text-muted-foreground" />
                            </ActionButton>
                            <ActionButton icon={Copy} label="Copy" onClick={() => handleCopy(currentText)} />
                            <ActionButton icon={Share2} label="Share" onClick={() => handleShare(quote, cardRef)} />
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
