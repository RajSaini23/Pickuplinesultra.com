
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
    <Card className="flex h-full items-center justify-center bg-muted/50 border-dashed">
      <CardContent className="p-6 text-center">
        <span className="text-lg font-semibold text-muted-foreground">Advertisement</span>
      </CardContent>
    </Card>
);

export function CategoryClientPage({ category, quotes }: { category: Omit<Category, 'icon'>, quotes: Quote[] }) {
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

  const allItems = quotesWithAds;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const totalItems = allItems.length;
    setCount(totalItems);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, allItems.length]);


  const ActionButton = ({ icon: Icon, label }: { icon: React.ElementType, label: string }) => (
    <div className="flex flex-col items-center gap-1.5 transform transition-transform duration-200 active:scale-90">
       <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-muted/50 hover:bg-muted">
          <Icon className="h-6 w-6 text-muted-foreground" />
       </Button>
       <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );

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
        <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold font-headline truncate">{category.name}</h1>
        </div>
        <div className="flex-1 flex justify-end text-sm font-medium text-muted-foreground tabular-nums">
           {current > 0 && count > 0 ? `${current} / ${count}`: ''}
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-0 overflow-hidden">
        <Carousel 
            setApi={setApi} 
            className="w-full h-full"
            opts={{
                loop: false,
                align: "center",
                duration: 25,
            }}
        >
            <CarouselContent className="h-full -ml-4">
                 {allItems.map((item, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                         <div className="h-full p-1 flex items-center justify-center">
                            <div className="w-full max-w-sm h-[95%]">
                                { 'ad' in item ? (
                                    <AdCard />
                                ) : (
                                <Card className="shadow-xl h-full flex flex-col border-border/60 hover:border-primary/50 transition-colors duration-300">
                                    <CardContent className="p-6 flex-grow flex flex-col items-center justify-center text-center gap-6">
                                        <div className="text-7xl">{(item as Quote).emoji}</div>
                                        <p className="font-headline text-3xl md:text-4xl font-semibold leading-snug text-foreground/90">
                                            {(item as Quote).hinglish}
                                        </p>
                                    </CardContent>
                                    <div className="relative p-6 pt-2">
                                        <p className="text-end text-sm text-muted-foreground/50 italic">- Ecstatic</p>
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
                         </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
      </main>
    </div>
  );
}
