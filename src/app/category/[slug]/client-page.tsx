
"use client";

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, Bookmark, Copy, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Category, Quote } from '@/data/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const AdCard = () => (
    <Card className="flex h-full items-center justify-center bg-muted/50">
      <CardContent className="p-6">
        <span className="text-sm font-semibold text-muted-foreground">Ad</span>
      </CardContent>
    </Card>
);

export function CategoryClientPage({ category, quotes }: { category: Category, quotes: Quote[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const quotesWithAds = React.useMemo(() => {
    const items = [];
    for (let i = 0; i < quotes.length; i++) {
      items.push(quotes[i]);
      if ((i + 1) % 3 === 0) {
        items.push({ ad: true });
      }
    }
    return items;
  }, [quotes]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const totalItems = api.scrollSnapList().length;
    setCount(totalItems);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);


  const ActionButton = ({ icon: Icon, label }: { icon: React.ElementType, label: string }) => (
    <div className="flex flex-col items-center gap-1.5">
       <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-muted active:scale-95">
          <Icon className="h-6 w-6 text-muted-foreground" />
       </Button>
       <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 grid grid-cols-3 items-center p-4 border-b bg-card">
        <div className="flex justify-start">
          <Link href="/" passHref>
            <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted">
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </Button>
          </Link>
        </div>
        <div className="text-center">
            <h1 className="text-2xl font-bold font-headline truncate">{category.name}</h1>
        </div>
        <div className="flex justify-end text-sm font-medium text-muted-foreground">
           {current > 0 && count > 0 ? `${current} / ${count}`: ''}
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-6">
        <Carousel setApi={setApi} className="w-full max-w-sm h-[80vh] flex items-center justify-center">
            <CarouselContent className="h-[90%]">
                 {quotesWithAds.map((item, index) => (
                    <CarouselItem key={index}>
                         <div className="h-full p-1">
                            { 'ad' in item ? (
                                <AdCard />
                            ) : (
                            <Card className="shadow-lg h-full flex flex-col">
                                <CardContent className="p-6 flex-grow flex flex-col items-center justify-center text-center gap-6">
                                    <div className="text-6xl">{(item as Quote).emoji}</div>
                                    <p className="font-headline text-3xl font-semibold leading-snug">
                                        {(item as Quote).hinglish}
                                    </p>
                                </CardContent>
                                <div className="relative p-6 pt-2">
                                    <p className="text-end text-sm text-muted-foreground/50 italic">Love Logic</p>
                                    <Separator className="my-4" />
                                    <div className="flex items-center justify-around">
                                        <ActionButton icon={Heart} label="Like" />
                                        <ActionButton icon={Bookmark} label="Save" />
                                        <ActionButton icon={Copy} label="Copy" />
                                        <ActionButton icon={Share2} label="Share" />
                                    </div>
                                </div>
                            </Card>
                            )}
                         </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-20px]" />
            <CarouselNext className="right-[-20px]" />
        </Carousel>
      </main>
    </div>
  );
}
