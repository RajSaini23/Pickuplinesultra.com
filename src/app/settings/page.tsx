
"use client";

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Palette, FileText, LifeBuoy, Share2, Sun, Moon, Laptop, ChevronRight, Star, AppWindow, Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useRatingDialog } from '@/components/ui/rating-dialog';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';


const MotionCard = motion(Card);
const MotionButton = motion(Button);

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

const PrivacyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="privacy-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    <path d="M14 2.33331C18.235 2.33331 22.47 4.66665 24.5 7.81665V7.81665C25.13 8.79665 25.43 9.94498 25.3633 11.0966L24.5 20.9999C24.32 23.3333 22.47 25.6666 19.8333 25.6666H8.16667C5.53 25.6666 3.68 23.3333 3.5 20.9999L2.63667 11.0966C2.57 9.94498 2.87 8.79665 3.5 7.81665V7.81665C5.53 4.66665 9.765 2.33331 14 2.33331Z" fill="url(#privacy-gradient)"/>
    <path d="M14 14.5833L11.6667 12.25L9.33333 14.5833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 19.25V13.4167" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TermsIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="terms-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
        </defs>
        <path d="M16.3333 2.33331H8.16667C7.575 2.33331 6.98333 2.56665 6.55667 2.99331C6.13 3.41998 5.83333 4.01165 5.83333 4.66665V23.3333C5.83333 23.9883 6.13 24.58 6.55667 25.0066C6.98333 25.4333 7.575 25.6666 8.16667 25.6666H19.8333C20.425 25.6666 21.0167 25.4333 21.4433 25.0066C21.87 24.58 22.1667 23.9883 22.1667 23.3333V9.33331L16.3333 2.33331Z" fill="url(#terms-gradient)"/>
        <path d="M16.3333 2.33331V9.33331H22.1667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 15.1667H17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 19.8333H17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const GlowIcon = ({ icon: Icon, ...props }: { icon: React.ElementType, [key: string]: any }) => {
  return <Icon {...props} className={cn("text-icon", props.className)} />;
};


export default function SettingsPage() {
  const { setTheme: setNextTheme } = useTheme();
  const { toast } = useToast();
  const { setIsOpen: openRatingDialog } = useRatingDialog();
  const [preferredTheme, setPreferredTheme] = React.useState('auto');
  const [openSection, setOpenSection] = React.useState<string | null>(null);
  
  const [scheduledDigest, setScheduledDigest] = React.useState(true);
  const [newQuotes, setNewQuotes] = React.useState(true);
  const [appUpdates, setAppUpdates] = React.useState(true);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme-preference') || 'auto';
    setPreferredTheme(savedTheme);
  }, []);
  
  const changeTheme = (t: 'light' | 'dark' | 'auto') => {
    localStorage.setItem('theme-preference', t);
    setPreferredTheme(t);
    if (t === 'auto') {
      const hour = new Date().getHours();
      setNextTheme(hour >= 6 && hour < 18 ? 'light' : 'dark');
    } else {
      setNextTheme(t);
    }
    toast({ title: "Theme Updated", description: `Theme set to ${t.charAt(0).toUpperCase() + t.slice(1)}` });
  };
  
  const handleShare = async () => {
    const shareData = {
      title: 'Pickup Lines Ultra',
      text: 'Check out Pickup Lines Ultra - Your Emotion. Our Expression.',
      url: window.location.origin,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: "Link Copied!",
          description: "The app URL has been copied to your clipboard.",
        });
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error("Share/Copy failed:", err);
      }
    }
  };

  const Section = ({ title, icon, children, isLink, href, onClick }: { title: string, icon: React.ElementType, children?: React.ReactNode, isLink?: boolean, href?: string, onClick?: () => void }) => {
    const isOpen = openSection === title;
    
    const content = (
      <>
        <div className="flex items-center gap-4">
          <GlowIcon icon={icon} className={cn("h-7 w-7", title === "Notification Center" && "text-primary")} />
          <span className="text-lg font-semibold">{title}</span>
        </div>
        {children && (
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
             <ChevronRight className="h-6 w-6 text-muted-foreground" />
            </motion.div>
        )}
         {!children && !isLink && (
            <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        )}
      </>
    );

    const handleSectionClick = () => {
        if (onClick) {
            onClick();
        } else if (children) {
            setOpenSection(isOpen ? null : title)
        }
    };

    const buttonOrLink = isLink && href ? (
       <Link href={href} className="w-full flex items-center justify-between p-5 text-left">
        {content}
      </Link>
    ) : (
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={handleSectionClick}
      >
       {content}
      </button>
    );


    return (
      <MotionCard variants={itemVariants} className="overflow-hidden rounded-2xl shadow-lg border-border/20">
        {buttonOrLink}
        {children && (
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="px-5"
              >
                <Separator className="mb-4 bg-border/40"/>
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </MotionCard>
    );
  };
  
  const SettingsRow = ({ title, description, children, onClick, isLink = false, href }: { title: string, description?: string, children: React.ReactNode, onClick?: () => void, isLink?: boolean, href?: string }) => {
    const content = (
       <div className="flex items-center justify-between py-3.5 group cursor-pointer w-full">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-foreground/80 group-hover:text-primary transition-colors">{title}</p>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          {children}
       </div>
    )

    if (isLink && href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="w-full">
                {content}
            </a>
        );
    }
    
    return (
       <div onClick={onClick} className="w-full">
         {content}
       </div>
    );
  }

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
        <h1 className="text-2xl font-bold font-headline ml-4">Settings</h1>
      </motion.header>

      <main className="flex-grow p-4 md:p-6">
        <motion.div
          className="max-w-2xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Section title="Personalization" icon={Palette}>
            <div className="flex flex-col gap-2 -mt-2 pb-4">
              <SettingsRow title="Theme">
                <div className="flex items-center gap-2">
                  {(['light', 'dark', 'auto'] as const).map((theme) => {
                    const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Laptop;
                    return (
                      <MotionButton
                        key={theme}
                        variant={preferredTheme === theme ? 'default' : 'outline'}
                        size="icon"
                        onClick={() => changeTheme(theme)}
                        aria-label={`${theme} theme`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full"
                      >
                        <Icon className="h-5 w-5" />
                      </MotionButton>
                    );
                  })}
                </div>
              </SettingsRow>
            </div>
          </Section>

          <Section title="Notification Center" icon={Bell}>
             <div className="flex flex-col gap-2 -mt-2 pb-4">
                <SettingsRow 
                  title="New Quotes"
                  description="Notify me when I receive a new Quote"
                >
                  <Switch
                    id="toggle-new-quotes"
                    checked={newQuotes}
                    onCheckedChange={setNewQuotes}
                  />
                </SettingsRow>
                <Separator />
                <SettingsRow 
                  title="Scheduled digest"
                  description="Get all your notifications as a daily digest at 7:00 PM. Tap to customize delivery time"
                >
                  <Switch
                    id="toggle-scheduled-digest"
                    checked={scheduledDigest}
                    onCheckedChange={setScheduledDigest}
                  />
                </SettingsRow>
            </div>
          </Section>

          <Section title="App Updates" icon={AppWindow}>
             <div className="flex flex-col gap-2 -mt-2 pb-4">
              <SettingsRow title="App Updates">
                <Switch
                  id="toggle-app-updates"
                  checked={appUpdates}
                  onCheckedChange={setAppUpdates}
                />
              </SettingsRow>
            </div>
          </Section>
          
           <MotionCard variants={itemVariants} className="overflow-hidden rounded-2xl shadow-lg border-border/20">
                <Link href="/privacy-policy" className="w-full flex items-center justify-between p-5 text-left group">
                    <div className="flex items-center gap-4">
                        <PrivacyIcon />
                        <span className="text-lg font-semibold group-hover:text-primary transition-colors">Privacy Policy</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
            </MotionCard>
            
            <MotionCard variants={itemVariants} className="overflow-hidden rounded-2xl shadow-lg border-border/20">
                <Link href="/terms-of-service" className="w-full flex items-center justify-between p-5 text-left group">
                    <div className="flex items-center gap-4">
                        <TermsIcon />
                        <span className="text-lg font-semibold group-hover:text-primary transition-colors">Terms of Service</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
            </MotionCard>

          <Section title="Rate Us" icon={Star} onClick={() => openRatingDialog(true)} />
          
          <Section title="Help &amp; Support" icon={LifeBuoy} />


          <Section title="Share the App" icon={Share2}>
            <div className="flex flex-col items-center text-center py-4">
                <p className="text-muted-foreground mb-4 mt-2 px-4">Enjoying Pickup Lines Ultra? Share the love with your friends!</p>
                <MotionButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleShare}>
                    <Share2 className="mr-2 h-4 w-4" /> Share Now
                </MotionButton>
            </div>
          </Section>
        </motion.div>
      </main>
    </div>
  );
}