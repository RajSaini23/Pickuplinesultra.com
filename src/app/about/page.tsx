
"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 z-50 flex items-center p-4 border-b bg-card/80 backdrop-blur-sm"
      >
        <Link href="/settings" passHref>
          <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted">
            <ArrowLeft className="h-5 w-5" />
            <span>Settings</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold font-headline ml-4">About Ecstatic</h1>
      </motion.header>

      <main className="p-4 md:p-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
              Your Emotion. Our Expression.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Welcome to Ecstatic, the world’s largest and most diverse library of Hinglish quotes and conversation starters, designed for every mood, moment, and culture.
            </p>
          </motion.section>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <FeatureCard title="78+ Categories" description="From Romantic to Dark Humor, Bollywood to K-pop, we have a line for every context." />
            <FeatureCard title="7,800+ Lines" description="A massive, hand-curated collection of original quotes that is constantly growing." />
            <FeatureCard title="100% Offline" description="The entire app works without an internet connection, making it your perfect companion anywhere." />
          </motion.div>
          
          <motion.section variants={itemVariants} className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">Our Mission</h3>
            <p className="text-center text-lg text-muted-foreground">
              Our mission is simple: to make romantic, witty, and culturally relevant conversation starters accessible to everyone worldwide. We believe that the right words at the right time can bridge gaps, create smiles, and spark connections. Ecstatic is more than just a quote app—it's a tool for expression.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">Meet the Developer</h3>
             <Card className="max-w-lg mx-auto bg-muted/50 border-border/20">
              <CardContent className="p-6 text-center">
                <p className="text-lg">
                  Ecstatic is passionately built and maintained by a solo independent developer, <strong>INDGROWSIVE</strong>. Driven by a love for multilingual content and inclusive digital experiences, this app is a personal project aimed at bringing a little more joy and connection to the world.
                </p>
              </CardContent>
            </Card>
          </motion.section>

           <motion.section variants={itemVariants} className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">Transparency & Trust</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard title="How We Operate" description="Ecstatic is a 100% free-to-use application, supported by non-intrusive advertisements to cover development and server costs. Our goal is to keep the core experience free forever." />
                <InfoCard title="Your Privacy Matters" description="We respect your privacy. The app requires no account, login, or personal data collection. Your bookmarks and preferences are stored locally on your device." />
            </div>
           </motion.section>

            <motion.section variants={itemVariants} className="text-center">
                <h3 className="text-3xl font-bold mb-4">The Future is Bright</h3>
                <p className="text-lg text-muted-foreground mb-6">We're just getting started! Our future plans include expanding to 100+ languages, adding voice playback for quotes, community contributions, and much more.</p>
                <Link href="/" passHref>
                    <Button size="lg" className="h-14 text-lg rounded-xl">Explore All Categories</Button>
                </Link>
            </motion.section>

        </motion.div>
      </main>
    </div>
  );
}

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <Card className="text-center border-border/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const InfoCard = ({ title, description }: { title: string, description: string }) => (
     <Card className="bg-card border-border/20">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);
