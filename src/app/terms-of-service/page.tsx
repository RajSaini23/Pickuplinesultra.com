
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
      <div className="space-y-4 text-foreground/80 leading-relaxed">
        {children}
      </div>
    </motion.section>
  );

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
            <p className="text-muted-foreground"><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="mt-4 text-lg">Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Pickup Lines Ultra mobile application (the "Service") operated by INDGROWSIVE ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
          </motion.div>

          <Section title="1. Acceptance of Terms">
            <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. This is a legally binding agreement between you and INDGROWSIVE.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>The Pickup Lines Ultra App provides users with a curated collection of Hinglish quotes across various categories. Features include viewing, liking, bookmarking (saving locally), copying, and sharing quotes, including generating an image of the quote card for social media.</p>
          </Section>
          
          <Section title="3. User Eligibility and Age Restriction">
            <p>The Service is intended for users who are at least 18 years old. By using the App, you represent and warrant that you are 18 years of age or older. If you are under the age of 18, you are not permitted to use this App. We do not knowingly collect information from individuals under this age limit.</p>
          </Section>
          
          <Section title="4. Intellectual Property Rights">
            <p>All content provided on the Service, including but not limited to the text, graphics, logos, icons, images, quote compilations, and the software itself, is the property of INDGROWSIVE or its content suppliers and is protected by Indian and international copyright laws. The "Pickup Lines Ultra" name and logo are trademarks of INDGROWSIVE, and may not be used in connection with any product or service without our prior written consent.</p>
            <p>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the App for your personal, non-commercial use only.</p>
          </Section>

          <Section title="5. User Conduct and Responsibilities">
            <p>You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Service. Prohibited activities include, but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Attempting to reverse engineer, decompile, or disassemble any part of the App's software.</li>
              <li>Using any automated system, such as "bots" or "spiders," to access the Service in a manner that sends more request messages to our servers than a human can reasonably produce in the same period.</li>
              <li>Using the sharing feature to create and distribute content that is defamatory, obscene, harassing, or otherwise illegal.</li>
            </ul>
          </Section>
          
           <Section title="6. Third-Party Services and Advertisements">
            <p>The App may contain links to third-party websites or services, and may display advertisements that are not owned or controlled by INDGROWSIVE. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that INDGROWSIVE shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.</p>
          </Section>

          <Section title="7. Disclaimer of Warranties">
            <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Your use of the Service is at your sole risk. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. INDGROWSIVE does not warrant that the app will function uninterrupted, secure, or available at any particular time or location.</p>
          </Section>
          
          <Section title="8. Limitation of Liability">
            <p>In no event shall INDGROWSIVE, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
          </Section>
          
          <Section title="9. Indemnification">
             <p>You agree to defend, indemnify, and hold harmless INDGROWSIVE and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the Service.</p>
          </Section>

          <Section title="10. Governing Law and Jurisdiction">
            <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be subject to the exclusive jurisdiction of the courts of India.</p>
          </Section>
          
          <Section title="11. Termination">
             <p>We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.</p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page and updating the "Last Updated" date. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
          </Section>
          
        </motion.div>
      </main>
    </div>
  );
}
