
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Smartphone, Laptop, Share, PlusSquare, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const InstructionCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <MotionCard variants={itemVariants} className="overflow-hidden shadow-lg border-border/20">
    <CardHeader className="flex flex-row items-center gap-4 bg-muted/30 p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="p-6 text-base text-muted-foreground leading-relaxed">
      {children}
    </CardContent>
  </MotionCard>
);

export default function InstallPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 z-50 flex items-center p-4 border-b bg-card/80 backdrop-blur-sm"
      >
        <Link href="/settings">
          <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted">
            <ArrowLeft className="h-5 w-5" />
            <span>Settings</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold font-headline ml-4">Install App</h1>
      </motion.header>

      <main className="flex-grow p-4 md:p-8">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-10 text-center">
            <h2 className="text-3xl font-bold font-headline mb-2">Get the Best Experience</h2>
            <p className="text-lg text-muted-foreground">
              Install Pickup Lines Ultra on your device for quick access, offline features, and a native app feel.
            </p>
          </motion.div>

          <div className="space-y-8">
            <InstructionCard icon={Laptop} title="Chrome Desktop / Edge">
              <p>
                Search for the <PlusSquare className="inline-block h-5 w-5 mx-1" /> <strong>install symbol</strong> in the URL bar in the right corner, or use the install option in the browser menu <MoreVertical className="inline-block h-5 w-5 mx-1" />.
              </p>
            </InstructionCard>

            <InstructionCard icon={Smartphone} title="Chrome Mobile (Android)">
              <p>
                On Android devices, a reminder should pop up to add the app to your home screen. Otherwise, use the <strong>"Install app"</strong> or <strong>"Add to Home Screen"</strong> option in the browser menu <MoreVertical className="inline-block h-5 w-5 mx-1" />.
              </p>
            </InstructionCard>

            <InstructionCard icon={Smartphone} title="Safari (iOS)">
              <p>
                First, tap the <Share className="inline-block h-5 w-5 mx-1" /> <strong>Share button</strong>. Then, scroll down and press <strong>"Add to Home Screen"</strong> <PlusSquare className="inline-block h-5 w-5 mx-1" />.
              </p>
            </InstructionCard>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
