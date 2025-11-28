
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
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
      <h2 className="text-2xl font-bold text-primary mb-3 pb-2 border-b-2 border-primary/20">{title}</h2>
      <div className="space-y-4 text-foreground/80 leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </motion.section>
  );

export default function TermsOfServicePage() {
  const router = useRouter();
  const lastUpdated = "August 2, 2024";

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
        <h1 className="text-2xl font-bold font-headline ml-4">Terms of Service</h1>
      </motion.header>

      <main className="flex-grow p-4 md:p-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-muted-foreground"><strong>Last Updated:</strong> {lastUpdated}</p>
            <p className="mt-4 text-lg">These are the rules. Read them. Using our app means you agree.</p>
          </motion.div>

          <Section title="1. Your Agreement">
            <p>You use our app. You follow these rules. This is our agreement. If you don't agree, delete the app.</p>
          </Section>

          <Section title="2. The Service We Provide">
            <p>Pickup Lines Ultra gives you quotes. You can read, save, and share them. The app is free. We show ads to pay our bills. That's it.</p>
          </Section>
          
          <Section title="3. Who Can Use This">
            <p>You must be 18 or older. No exceptions. We don't want data from kids. If you are under 18, you cannot use this app.</p>
          </Section>
          
          <Section title="4. Who Owns What">
            <p>We own the app. This includes the code, the design, the logo, and all the quotes we wrote. It's our property. Don't steal it.</p>
            <p>You can use the app for yourself. You can share the quote cards we help you create. Do not sell our content or copy the app.</p>
          </Section>

          <Section title="5. Your Responsibilities">
            <p>Use the app like a good person. Don't try to hack it. Don't try to break it. Don't use our content to bully, harass, or do anything illegal. Be smart.</p>
          </Section>
          
           <Section title="6. Ads And Other Websites">
            <p>We show ads. We may link to other sites. We don't control them. If you click them, you are on your own. We are not responsible for what happens there.</p>
          </Section>

          <Section title="7. We Offer No Warranties">
            <p>The app is provided "AS IS". We don't promise it will always work. We don't promise it will be perfect. Things can break. You use it at your own risk.</p>
          </Section>
          
          <Section title="8. Our Liability Is Limited">
            <p>If something bad happens because you used our app, we are not responsible. We are not liable for any damages. This includes data loss, profit loss, or any other problem. Your use of this app is your choice.</p>
          </Section>
          
          <Section title="9. You Must Defend Us">
             <p>If you break these rules and it causes a legal problem for us, you must pay for it. This includes our legal fees. Don't put us in that position.</p>
          </Section>

          <Section title="10. Laws and Disputes">
            <p>Any disagreement will be handled by the laws of India. All legal disputes will happen in Indian courts.</p>
          </Section>
          
          <Section title="11. We Can Terminate Your Use">
             <p>We can stop you from using our app. We don't need to give notice. If you break the rules, we will block you. Your right to use the app will end immediately.</p>
          </Section>

          <Section title="12. We Can Change These Terms">
            <p>We can change these rules anytime. We will post the new rules here. If you keep using the app after we change the rules, it means you agree to the new ones.</p>
          </Section>

          <motion.div variants={itemVariants} className="mt-12 pt-6 border-t border-border/20 text-center">
            <p className="text-muted-foreground">Using Pickup Lines Ultra means you accept these terms. Simple.</p>
          </motion.div>
          
        </motion.div>
      </main>
    </div>
  );
}

    