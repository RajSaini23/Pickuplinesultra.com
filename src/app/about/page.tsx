
"use client";

import { ArrowLeft, CheckCircle, Share2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useRouter } from 'next/navigation';

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

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How many quotes are in Pickup Lines Ultra?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Pickup Lines Ultra has over 7,800+ hand-curated original lines across 78+ categories, and we're constantly adding more."
            }
        },
        {
            '@type': 'Question',
            name: 'Which languages are supported?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Currently, the app supports Hinglish, Hindi, English, and Mandarin Chinese, complete with culturally adapted animations and high-quality typography.'
            }
        },
        {
            '@type': 'Question',
            name: 'Does the app work offline?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the app offers partial offline support. Your saved quotes and bookmarked favorites work perfectly offline. However, downloading new content and categories requires an internet connection.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is it completely free to use?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely. The app is 100% free to use. We are supported by non-intrusive advertisements to cover development and server costs.'
            }
        },
        {
            '@type': 'Question',
            name: 'Do I need to create an account to use the app?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Pickup Lines Ultra has a strict no-account, no-login policy. We do not collect any personal data, ensuring your privacy is always protected.'
            }
        }
    ]
};

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-dvh bg-background text-foreground">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 z-50 flex items-center p-4 border-b bg-card/80 backdrop-blur-sm"
      >
        <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </Button>
        <h1 className="text-2xl font-bold font-headline ml-4">About App</h1>
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
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Welcome to Pickup Lines Ultra, the world’s largest and most diverse library of Hinglish quotes and conversation starters, designed for every mood, moment, and culture.
            </p>
          </motion.section>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FeatureCard title="78+ Categories" description="From Romantic to Dark Humor, Bollywood to K-pop, we have a line for every context." />
            <FeatureCard title="7,800+ Lines" description="A massive, hand-curated collection of original quotes that is constantly growing." />
            <FeatureCard title="Offline Support" description="Saved quotes and favorites work offline. New content requires a connection." />
          </motion.div>

          <motion.section variants={itemVariants} className="mb-12">
             <Card className="bg-muted/30 border-border/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground">
                  Our mission is simple: to make romantic, witty, and culturally relevant conversation starters accessible to everyone worldwide. We believe that the right words at the right time can bridge gaps, create smiles, and spark connections. This is more than just a quote app—it's a tool for human expression.
                </p>
              </CardContent>
            </Card>
          </motion.section>

           <motion.section variants={itemVariants} className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">Transparency & Trust</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard 
                    title="How We Operate" 
                    items={[
                        "100% Free-to-Use Application.",
                        "Supported by non-intrusive ads to cover costs.",
                        "Core experience is free forever, no paywalls."
                    ]} 
                />
                <InfoCard 
                    title="Your Privacy Matters" 
                    items={[
                        "No account or login required.",
                        "No personal data collection.",
                        "Bookmarks and preferences are stored on your device only."
                    ]}
                />
            </div>
           </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions (FAQ)</h3>
             <Accordion type="single" collapsible className="w-full">
                <FAQItem 
                    question="How many quotes are in Pickup Lines Ultra?" 
                    answer="Over 7,800+ hand-curated original lines across 78+ categories, and we're constantly adding more."
                />
                <FAQItem 
                    question="Which languages are supported?" 
                    answer="Currently, we support Hinglish, Hindi, English, and Mandarin Chinese, complete with culturally adapted animations."
                />
                <FAQItem 
                    question="Does the app work offline?" 
                    answer="Yes, but with a small note. Your saved quotes and bookmarked favorites work perfectly offline. However, downloading new content and categories requires an internet connection."
                />
                <FAQItem 
                    question="Is it completely free to use?" 
                    answer="Absolutely. The app is 100% free. We use non-intrusive advertisements to support development and server costs."
                />
                 <FAQItem 
                    question="Do I need to create an account to use the app?" 
                    answer="No. We have a strict no-account, no-login policy. We do not collect any personal data, ensuring your privacy is always protected."
                />
            </Accordion>
          </motion.section>

            <motion.section variants={itemVariants} className="text-center">
                <h3 className="text-3xl font-bold mb-4">The Future is Bright</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">We're just getting started! Our roadmap includes expanding to 100+ languages, adding voice playback for quotes, community contributions, and much more.</p>
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
  <Card className="text-center border-border/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const InfoCard = ({ title, items }: { title: string, items: string[] }) => (
     <Card className="bg-card border-border/20">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                </div>
            ))}
        </CardContent>
    </Card>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
    <AccordionItem value={question} className="border-b-border/20">
        <AccordionTrigger className="text-lg text-left hover:no-underline">
            {question}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-base pt-2">
            {answer}
        </AccordionContent>
    </AccordionItem>
);

    