
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Hourglass } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// --- Components ---

const AppSkeletonCard = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
    >
        <Card className="overflow-hidden transition-all duration-300 ease-in-out rounded-2xl border-none shadow-md h-24 p-0 relative bg-muted/50">
            <div className="flex items-center p-4 h-full w-full">
                <Skeleton className="w-16 h-16 rounded-xl flex-shrink-0 bg-muted-foreground/20" />
                <div className="ml-5 flex-grow">
                    <Skeleton className="h-5 w-3/4 rounded-md bg-muted-foreground/20" />
                    <Skeleton className="h-4 w-1/2 mt-2 rounded-md bg-muted-foreground/20" />
                </div>
            </div>
        </Card>
    </motion.div>
);

const AdPlaceholder = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="flex h-24 w-full items-center justify-center bg-muted/50 border-2 border-dashed border-border/50 rounded-2xl">
        <CardContent className="p-4 text-center">
          <span className="font-semibold text-muted-foreground">Advertisement</span>
        </CardContent>
      </Card>
    </motion.div>
);

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
                <div className="max-w-2xl mx-auto flex flex-col gap-y-6">
                    {/* Upcoming Apps Skeletons */}
                    <div className="space-y-4">
                        <AppSkeletonCard delay={0.1} />
                        <AppSkeletonCard delay={0.2} />
                    </div>

                    {/* Coming Soon Banner */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center my-6"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30">
                            <motion.div
                                animate={{ rotate: [0, -15, 15, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Hourglass className="h-6 w-6 text-green-400" />
                            </motion.div>
                            <h2 className="text-xl font-semibold text-green-400">More apps coming soon...</h2>
                        </div>
                    </motion.div>

                    {/* Sponsored Section */}
                    <div className="mt-8">
                        <motion.h2 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-2xl font-bold font-headline mb-4 text-center text-muted-foreground"
                        >
                            Sponsored
                        </motion.h2>
                        <div className="grid grid-cols-1 gap-y-6">
                            {[...Array(3)].map((_, index) => (
                                <AdPlaceholder key={index} delay={0.5 + index * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

