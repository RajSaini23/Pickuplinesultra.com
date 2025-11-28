
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <motion.section variants={itemVariants} className="mb-8">
      <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-primary/20">{title}</h2>
      <div className="space-y-4 text-foreground/80 leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </motion.section>
  );

const CheckListItem = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-start gap-3">
        <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
        <p>{children}</p>
    </div>
);

export default function PrivacyPolicyPage() {
  const router = useRouter();
  const policyStartDate = "August 1, 2024";

  return (
    <div className="flex flex-col min-h-dvh bg-background">
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
        <h1 className="text-2xl font-bold font-headline ml-4">Privacy Policy</h1>
      </motion.header>

      <main className="flex-grow p-4 md:p-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-muted-foreground"><strong>Policy effective from:</strong> {policyStartDate}</p>
            <p className="mt-4 text-lg">We made this policy simple so you know exactly what happens with your information when you use Pickup Lines Ultra.</p>
          </motion.div>

           <Section title="Our Core Promise: Your Privacy First">
                <Card className="bg-muted/30 border-primary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <Shield className="h-8 w-8 text-primary"/>
                            <span>We Collect Almost Nothing About You</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <CheckListItem>We do not ask for your name email or phone number because you do not need an account to use our app.</CheckListItem>
                        <CheckListItem>We never track your location because where you are is your business not ours.</CheckListItem>
                        <CheckListItem>We never sell your data because we do not have any personal data to sell.</CheckListItem>
                    </CardContent>
                </Card>
           </Section>

          <Section title="What Data We See And Why">
            <p>We only look at two types of simple data to make the app work and to improve it for everyone.</p>
            <h3 className="font-semibold text-foreground mt-4 mb-2">1. Data That Stays On Your Device</h3>
            <p>When you use the app some information is saved directly on your phone or computer and we never see it.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Your Bookmarks:</strong> The quotes you save stay in your device's local storage so you can see them anytime.</li>
              <li><strong>Your Settings:</strong> Your choices like theme or language preference are saved on your device so the app remembers what you like.</li>
            </ul>
             <h3 className="font-semibold text-foreground mt-4 mb-2">2. Anonymous Data We Use To Improve</h3>
             <p>We use standard analytics tools like Google Analytics to understand how people use our app so we can make it better.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
               <li><strong>Usage Patterns:</strong> We see which features are popular and which are not so we can focus on what matters.</li>
               <li><strong>Crash Reports:</strong> If the app crashes we get an anonymous report that helps us find and fix the bug. This report never includes your personal information.</li>
               <li><strong>Device Type:</strong> We see general device information like "Android" or "iPhone" to make sure the app works well on all screen sizes.</li>
             </ul>
             <p>This data is always anonymous and we can never link it back to you personally.</p>
          </Section>

          <Section title="How We Protect Information">
            <p>Your locally saved data is protected by your device's own security features and any anonymous analytics data we collect is encrypted and stored on secure servers managed by our analytics partners.</p>
          </Section>

          <Section title="Your Rights Over Your Data">
            <p>You have full control over the data stored on your device.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>To Access Your Data:</strong> You can see all your bookmarked quotes in the "Bookmarks" section of the app.</li>
              <li><strong>To Delete Your Data:</strong> You can delete all your app data by clearing the app's cache and data in your device settings or simply by uninstalling the app. This action permanently removes everything.</li>
            </ul>
          </Section>
          
          <Section title="How To Contact Us">
            <p>If you have any questions about this policy or anything else you can email us directly.</p>
            <p><strong>Email:</strong> <a href="mailto:indgrowsivestudio@gmail.com" className="text-primary hover:underline">indgrowsivestudio@gmail.com</a></p>
          </Section>

          <motion.div variants={itemVariants} className="mt-12 pt-6 border-t border-border/20 text-center">
            <p className="text-muted-foreground">By using Pickup Lines Ultra you agree to this policy.</p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

    