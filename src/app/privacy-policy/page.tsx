
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
            <p className="text-muted-foreground"><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="mt-4 text-lg">Welcome to Pickup Lines ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.</p>
          </motion.div>

          <Section title="1. Information We Collect">
            <p>We collect information that is necessary for the App to function and to improve your experience. The types of information we may collect depend on how you use our App.</p>
            <h3 className="font-semibold text-foreground mt-4 mb-2">A. Personally Identifiable Information (PII)</h3>
            <p>We currently do not require you to create an account or provide any Personally Identifiable Information like your name, email address, or phone number to use the core features of our App.</p>
            <h3 className="font-semibold text-foreground mt-4 mb-2">B. Non-Personally Identifiable Information / Usage Data</h3>
            <p>To enhance functionality and user experience, the App may collect the following types of data which are stored locally on your device and are not transmitted to our servers:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Bookmarks/Favorites:</strong> We store a list of quote IDs that you have bookmarked. This data remains solely on your device to allow you to access your saved quotes.</li>
              <li><strong>Theme Preferences:</strong> Your selected theme (Light, Dark, or Auto) is saved locally on your device to personalize your experience.</li>
              <li><strong>App Settings:</strong> State of notification toggles or other preferences are stored locally.</li>
            </ul>
             <h3 className="font-semibold text-foreground mt-4 mb-2">C. Device and Technical Information</h3>
             <p>When you use our App, we may automatically collect certain information about your device, such as:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
               <li><strong>Device Type and Operating System:</strong> To optimize app performance and compatibility.</li>
               <li><strong>Anonymous Analytics:</strong> We may use third-party services like Google Analytics for Firebase to collect anonymous usage statistics (e.g., feature usage frequency, crash reports, performance data). This data is aggregated and cannot be used to identify you personally. It helps us understand how our App is being used so we can improve it.</li>
             </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>To Provide and Maintain the App:</strong> To operate the app and provide you with its core features, such as displaying quotes and saving your bookmarks locally.</li>
              <li><strong>To Improve and Personalize the App:</strong> To understand user behavior, fix bugs, improve performance, and personalize your experience (like remembering your theme).</li>
              <li><strong>To Communicate with You:</strong> If you contact us for support, we will use your contact information to respond to your inquiries. This is based on your consent when you initiate contact.</li>
            </ul>
          </Section>

          <Section title="3. Data Sharing and Disclosure">
            <p>We do not sell, trade, or rent your personal information to others. We may share information in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>With Service Providers:</strong> We may share aggregated, anonymous data with third-party vendors and service providers that perform services for us (e.g., analytics or crash reporting). These providers are obligated to protect the data and are restricted from using it for any other purpose.</li>
              <li><strong>For Legal Reasons:</strong> We may disclose information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, or in urgent circumstances to protect the personal safety of users of the App or the public.</li>
            </ul>
          </Section>

          <Section title="4. Data Retention and Security">
            <p><strong>Data Retention:</strong> Information stored locally on your device (like bookmarks and settings) is retained until you clear the App's data or uninstall the App. Aggregated anonymous analytics data may be retained indefinitely for statistical purposes.</p>
            <p><strong>Data Security:</strong> We use administrative, technical, and physical security measures to help protect your information. While we have taken reasonable steps to secure the information, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
          </Section>

          <Section title="5. Your Rights and Choices (Data Protection)">
            <p>In compliance with Indian law, you have certain rights regarding your data:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Right to Access and Rectification:</strong> Since we do not store PII on our servers, most of your data is on your device. You can manage your bookmarked quotes and settings directly within the App.</li>
              <li><strong>Right to Erasure:</strong> You can delete all locally stored data by clearing the App's cache and data in your device settings or by uninstalling the App.</li>
              <li><strong>Consent Withdrawal:</strong> For features that require specific consent (like push notifications, if implemented), you will be able to withdraw your consent at any time through the App's settings.</li>
            </ul>
          </Section>

          <Section title="6. Policy for Children">
            <p>We do not knowingly solicit information from or market to children under the age of 18. Our Terms of Service require users to be at least 18 years old. If we learn that we have collected information from a child under age 18 without verification of parental consent, we will delete that information as quickly as possible. If you believe we might have any information from or about a child under 18, please contact us at <a href="mailto:indgrowsivestudio@gmail.com" className="text-primary hover:underline">indgrowsivestudio@gmail.com</a>.</p>
          </Section>

           <Section title="7. App Store Specific Policies (Apple ATT & Google Data Safety)">
             <p><strong>Apple App Tracking Transparency (ATT):</strong> Our App does not track you across other companies' apps and websites. Therefore, we do not show the App Tracking Transparency permission request.</p>
             <p><strong>Google Play Data Safety:</strong> We are committed to providing transparent information for Google Play's Data Safety section. Our data practices align with the disclosures made on our Play Store listing, covering what data is collected, why it's collected, and whether it's shared.</p>
           </Section>

          <Section title="8. Grievance Redressal">
            <p>In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, if you have any grievances or concerns regarding our Privacy Policy or data processing, please contact our Grievance Officer:</p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>Name:</strong> Grievance Officer, Pickup Lines</li>
              <li><strong>Email:</strong> <a href="mailto:indgrowsivestudio@gmail.com" className="text-primary hover:underline">indgrowsivestudio@gmail.com</a></li>
              <li><strong>Address:</strong> [Your Company's Legal Address, India]</li>
            </ul>
            <p>We will address your concerns as soon as possible and within the timeframes stipulated by law (typically within 15 days of receipt).</p>
          </Section>

          <Section title="9. Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
          </Section>

          <Section title="10. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:indgrowsivestudio@gmail.com" className="text-primary hover:underline">indgrowsivestudio@gmail.com</a>.</p>
          </Section>
        </motion.div>
      </main>
    </div>
  );
}
