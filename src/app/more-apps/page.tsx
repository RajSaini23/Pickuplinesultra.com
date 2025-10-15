
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

// --- Data ---
const moreAppsData = [
  {
    icon: 'https://picsum.photos/seed/app1/100/100',
    dataAiHint: 'logo abstract',
    name: 'Shayari Sangrah',
    description: 'A collection of beautiful Hindi shayari.',
    rating: 4.5,
    downloads: '5M+',
  },
  {
    icon: 'https://picsum.photos/seed/app2/100/100',
    dataAiHint: 'logo modern',
    name: 'Recipe Book',
    description: 'Delicious recipes from around the world.',
    rating: 4.8,
    downloads: '10M+',
  },
  {
    icon: 'https://picsum.photos/seed/app3/100/100',
    dataAiHint: 'logo finance',
    name: 'Budget Planner',
    description: 'Manage your finances with ease.',
    rating: 4.2,
    downloads: '1M+',
  },
  {
    icon: 'https://picsum.photos/seed/app4/100/100',
    dataAiHint: 'logo fitness',
    name: 'Fitness Tracker',
    description: 'Your personal fitness companion.',
    rating: 4.6,
    downloads: '2M+',
  },
];

const adCardsData = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/seed/ad1/600/400',
      dataAiHint: 'technology business',
      title: 'Boost Your Productivity',
      description: 'The ultimate tool for managing your tasks and projects seamlessly.',
      callToAction: 'Learn More'
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/seed/ad2/600/400',
      dataAiHint: 'travel adventure',
      title: 'Explore New Horizons',
      description: 'Book your next adventure with exclusive deals and offers.',
      callToAction: 'Book Now'
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/seed/ad3/600/400',
      dataAiHint: 'food delicious',
      title: 'Gourmet Meals at Home',
      description: 'Get fresh ingredients and easy recipes delivered to your door.',
      callToAction: 'Order Today'
    },
]

// --- Components ---

const AppListItem = ({ app, index }: { app: typeof moreAppsData[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Card className="bg-card hover:bg-muted/60 transition-colors duration-300 border-none shadow-md">
            <CardContent className="p-4 flex items-center gap-4">
                <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={64}
                    height={64}
                    data-ai-hint={app.dataAiHint}
                    className="rounded-xl"
                />
                <div className="flex-grow">
                    <h3 className="font-bold text-lg text-foreground">{app.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{app.description}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <span>{app.rating}</span>
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>|</span>
                        <span>{app.downloads} Downloads</span>
                    </div>
                </div>
                <Button size="sm" className="rounded-full shrink-0">
                    <Download className="mr-2 h-4 w-4" />
                    Install
                </Button>
            </CardContent>
        </Card>
    </motion.div>
);

const AdCard = ({ ad, index }: { ad: typeof adCardsData[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
    >
         <Card className="overflow-hidden shadow-lg border-none group">
            <div className="relative h-40">
                <Image
                    src={ad.imageUrl}
                    alt={ad.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={ad.dataAiHint}
                    className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{ad.title}</h3>
            </div>
            <CardContent className="p-4 bg-card">
                <p className="text-muted-foreground text-sm mb-4">{ad.description}</p>
                <Button className="w-full">{ad.callToAction}</Button>
            </CardContent>
        </Card>
    </motion.div>
)

export default function MoreAppsPage() {
  const [showAll, setShowAll] = useState(false);
  const displayedApps = showAll ? moreAppsData : moreAppsData.slice(0, 2);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 z-50 flex items-center p-4 border-b bg-card/80 backdrop-blur-sm"
      >
        <Link href="/" passHref>
          <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted">
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold font-headline ml-4">More Apps</h1>
      </motion.header>

      <main className="flex-grow p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
                <AnimatePresence>
                {displayedApps.map((app, index) => (
                    <AppListItem key={app.name} app={app} index={index} />
                ))}
                </AnimatePresence>
            </div>
            
            {!showAll && moreAppsData.length > 2 && (
                <div className="text-center my-6">
                    <Button variant="secondary" className="rounded-full" onClick={() => setShowAll(true)}>
                        Show All
                    </Button>
                </div>
            )}

            <div className="mt-12">
                <h2 className="text-2xl font-bold font-headline mb-4 text-center text-muted-foreground">Sponsored</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {adCardsData.map((ad, index) => (
                        <AdCard key={ad.id} ad={ad} index={index} />
                    ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

