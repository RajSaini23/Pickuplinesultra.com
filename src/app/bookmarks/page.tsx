
// src/app/bookmarks/page.tsx
"use client";

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookmarkX, Heart, Share2, Copy } from 'lucide-react';
import { useBookmarks } from '@/context/bookmark-context';
import { quotes as allQuotes } from '@/data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

export default function BookmarksPage() {
  const { bookmarkedIds, removeBookmark } = useBookmarks();
  const [bookmarkedQuotes, setBookmarkedQuotes] = React.useState<any[]>([]);
  const { toast } = useToast();

  React.useEffect(() => {
    const savedQuotes = allQuotes.filter(quote => bookmarkedIds.includes(quote.id));
    setBookmarkedQuotes(savedQuotes);
  }, [bookmarkedIds]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied!", description: "Quote copied to clipboard." });
  };

  const handleLike = () => {
    toast({ title: "Liked!", description: "You liked this quote." });
  };
  
  const handleShare = async () => {
    const shareData = {
      title: 'Ecstatic',
      text: 'Check out Ecstatic - Your Emotion. Our Expression.',
      url: window.location.origin,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: "Link Copied!",
          description: "The app URL has been copied to your clipboard.",
        });
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error("Share/Copy failed:", err);
      }
    }
  };


  const ActionButton = ({ icon: Icon, label, onClick }: { icon: React.ElementType, label: string, onClick?: () => void }) => (
    <div className="flex flex-col items-center justify-center gap-1.5 transform transition-transform duration-200 active:scale-90 flex-1">
       <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-transparent hover:bg-muted" onClick={onClick}>
          <Icon className="h-6 w-6 text-muted-foreground" />
       </Button>
       <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 flex items-center p-4 border-b bg-card/80 backdrop-blur-sm">
        <Link href="/settings" passHref>
          <Button variant="ghost" size="icon" aria-label="Back">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold font-headline ml-4">Bookmarked Pages</h1>
      </header>

      <main className="flex-grow p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-8">Access your saved pages for quick reference.</p>
          
          {bookmarkedQuotes.length === 0 ? (
            <div className="text-center py-16">
              <BookmarkX className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No bookmarked pages yet.</h2>
              <p className="text-muted-foreground">Save pages from the level or dialogue details screen!</p>
              <Link href="/" passHref>
                 <Button className="mt-6">Explore Quotes</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedQuotes.map((quote) => (
                <Card key={quote.id} className="shadow-lg flex flex-col border-border/40 rounded-2xl overflow-hidden">
                  <div className="flex-grow flex flex-col items-center justify-center text-center gap-6 p-6 min-h-[250px]">
                      <div className="text-6xl">{quote.emoji}</div>
                      <p className="font-headline text-2xl font-semibold leading-snug text-foreground/90">
                          {quote.hinglish}
                      </p>
                  </div>
                  <div className="relative px-6 pb-2 text-end text-sm text-muted-foreground/50 italic">
                      - Ecstatic
                  </div>
                  <div className="mt-auto">
                    <Separator />
                    <div className="flex items-center justify-around py-2">
                        <ActionButton icon={Heart} label="Like" onClick={handleLike} />
                        <ActionButton icon={BookmarkX} label="Remove" onClick={() => removeBookmark(quote.id)} />
                        <ActionButton icon={Copy} label="Copy" onClick={() => handleCopy(quote.hinglish)} />
                        <ActionButton icon={Share2} label="Share" onClick={handleShare} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
