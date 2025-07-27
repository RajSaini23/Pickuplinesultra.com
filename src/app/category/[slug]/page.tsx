
"use client";

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, Bookmark, Copy, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getCategory, getQuotesForCategory } from '@/data';
import SplitText from '@/components/ui/split-text';

export default function CategoryPage({ params: paramsProp }: { params: { slug: string } }) {
  const params = React.use(paramsProp);
  const category = getCategory(params.slug);
  const categoryQuotes = getQuotesForCategory(params.slug);

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h2 className="text-2xl font-bold">Category Not Found</h2>
        <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-center p-4 border-b bg-card">
        <div className="absolute left-4">
          <Link href="/" passHref>
            <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted">
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </Button>
          </Link>
        </div>
        <h1 className="text-2xl font-bold font-headline">{category.name}</h1>
      </header>

      <main className="flex-grow p-4 md:p-6">
        <div className="space-y-6 max-w-2xl mx-auto">
          {categoryQuotes.map((quote) => (
            <Card key={quote.id} className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl active:scale-[0.98] active:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-grow">
                     <SplitText 
                       text={quote.hinglish} 
                       className="font-headline text-2xl mb-2 font-semibold" 
                       splitType="words"
                     />
                    <p className="text-muted-foreground italic">"{quote.english}"</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-end space-x-1 text-muted-foreground">
                  <Button variant="ghost" size="icon" className="hover:text-rose-500 hover:bg-rose-500/10 rounded-full active:scale-95">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-amber-500 hover:bg-amber-500/10 rounded-full active:scale-95">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-sky-500 hover:bg-sky-500/10 rounded-full active:scale-95">
                    <Copy className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-emerald-500 hover:bg-emerald-500/10 rounded-full active:scale-95">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
