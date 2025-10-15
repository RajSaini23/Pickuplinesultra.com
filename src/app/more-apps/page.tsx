
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
];


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

const AdPlaceholder = ({ index }: { index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className="bg-muted/50 border-dashed h-48 flex items-center justify-center">
        <CardContent className="p-4 text-center">
          <p className="font-semibold text-muted-foreground">Advertisement</p>
          <p className="text-sm text-muted-foreground/70">Ad banner will be displayed here</p>
        </CardContent>
      </Card>
    </motion.div>
)

export default function MoreAppsPage() {

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
                {moreAppsData.map((app, index) => (
                    <AppListItem key={app.name} app={app} index={index} />
                ))}
                </AnimatePresence>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold font-headline mb-4 text-center text-muted-foreground">Sponsored</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, index) => (
                       <AdPlaceholder key={index} index={index} />
                    ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
