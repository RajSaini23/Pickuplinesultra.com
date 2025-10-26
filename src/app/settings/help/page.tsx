"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Copy, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function HelpPage() {
  const { toast } = useToast();
  const supportEmail = "indgrowsivestudio@gmail.com";
  const emailSubject = "Help & Support: Pickup Lines Ultra";

  const handleCopy = () => {
    navigator.clipboard.writeText(supportEmail);
    toast({
      title: "Email Copied!",
      description: "Support email address copied to clipboard.",
    });
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(emailSubject)}`;
  };

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
              <span>Back to Settings</span>
            </Button>
        </Link>
        <h1 className="text-2xl font-bold font-headline ml-4">Help & Support</h1>
      </motion.header>

      <main className="flex-grow p-4 md:p-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="max-w-md w-full"
        >
          <Card className="text-center shadow-lg border-border/20 rounded-2xl">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 border border-primary/20">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold font-headline text-primary">Contact Us</CardTitle>
              <CardDescription className="text-muted-foreground pt-2">
                For any questions, bug reports, or feedback, please reach out to us. We're here to help!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <div className="text-lg font-semibold text-foreground bg-muted p-3 rounded-lg border w-full break-words">
                {supportEmail}
              </div>
              <div className="grid grid-cols-2 gap-3 w-full">
                <Button onClick={handleCopy} variant="outline" className="w-full h-12">
                  <Copy className="mr-2 h-5 w-5" />
                  Copy Email
                </Button>
                <Button onClick={handleSendEmail} className="w-full h-12">
                    <Send className="mr-2 h-5 w-5" />
                    Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
