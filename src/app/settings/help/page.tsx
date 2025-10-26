
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { HelpForm } from '@/components/ui/help-form';

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 z-50 flex items-center p-4 border-b bg-card/80 backdrop-blur-sm"
      >
        <Link href="/settings" passHref>
          <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Settings</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold font-headline ml-4">Help & Support</h1>
      </motion.header>

      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-headline text-primary">How can we help?</h2>
                <p className="text-muted-foreground mt-2">Fill out the form below and our team will get back to you as soon as possible.</p>
            </div>
            <HelpForm />
        </div>
      </main>
    </div>
  );
}
