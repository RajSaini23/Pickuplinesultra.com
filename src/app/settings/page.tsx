
"use client";

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Palette, FileText, LifeBuoy, Share2, Sun, Moon, Laptop, ChevronRight, Star, AppWindow, Bell, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useRatingDialog } from '@/components/ui/rating-dialog';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { LoadingOverlay } from '@/components/ui/loading-overlay';
import { useRouter } from 'next/navigation';


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

const GlowIcon = ({ icon: Icon, ...props }: { icon: React.ElementType, [key: string]: any }) => {
  return <Icon {...props} className={cn("text-foreground", props.className)} />;
};


export default function SettingsPage() {
  const router = useRouter();
  const { setTheme: setNextTheme } = useTheme();
  const { toast } = useToast();
  const { setIsOpen: openRatingDialog } = useRatingDialog();

  const [preferredTheme, setPreferredTheme] = React.useState('auto');
  const [openSection, setOpenSection] = React.useState<string | null>(null);
  
  const [scheduledDigest, setScheduledDigest] = React.useState(true);
  const [newQuotes, setNewQuotes] = React.useState(true);
  const [appUpdates, setAppUpdates] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);


  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme-preference') || 'auto';
    setPreferredTheme(savedTheme);
  }, []);
  
  const handleToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsLoading(true);
    setter(prev => !prev);
    setTimeout(() => setIsLoading(false), 300);
  };
  
  const changeTheme = (t: 'light' | 'dark' | 'auto') => {
    setIsLoading(true);
    localStorage.setItem('theme-preference', t);
    setPreferredTheme(t);
    if (t === 'auto') {
      const hour = new Date().getHours();
      setNextTheme(hour >= 6 && hour < 18 ? 'light' : 'dark');
    } else {
      setNextTheme(t);
    }
    toast({ title: "Theme Updated", description: `Theme set to ${t.charAt(0).toUpperCase() + t.slice(1)}` });
    setTimeout(() => setIsLoading(false), 300);
  };
  
  const handleShare = async () => {
    setIsLoading(true);
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
    } finally {
        setIsLoading(false);
    }
  };

  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
        router.push(href);
    }, 300);
  };

  const Section = ({ title, icon, children, isLink, href, onClick }: { title: string, icon: React.ElementType, children?: React.ReactNode, isLink?: boolean, href?: string, onClick?: () => void }) => {
    const isOpen = openSection === title;
    
    const content = (
      <>
        <div className="flex items-center gap-4">
          <GlowIcon icon={icon} className="text-foreground" />
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
       <Link href={href} onClick={(e) => handleLinkClick(href, e)} className="w-full flex items-center justify-between p-5 text-left">
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
    
    const handleLocalLinkClick = (e: React.MouseEvent<HTMLElement>) => {
        if (href) {
            e.preventDefault();
            setIsLoading(true);
            setTimeout(() => {
                window.open(href, '_blank', 'noopener,noreferrer');
                setIsLoading(false);
            }, 300);
        }
    };

    const content = (
       <div className="flex items-center justify-between py-3.5 group cursor-pointer w-full">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-foreground/80 group-hover:text-primary transition-colors">{title}</p>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          {children}
       </div>
    );

    if (isLink && href) {
        return (
            <a href={href} onClick={handleLocalLinkClick} className="w-full">
                {content}
            </a>
        );
    }
    
    return (
       <div onClick={onClick} className="w-full">
         {content}
       </div>
    );
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <LoadingOverlay isLoading={isLoading} />
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
                    onCheckedChange={() => handleToggle(setNewQuotes)}
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
                    onCheckedChange={() => handleToggle(setScheduledDigest)}
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
                  onCheckedChange={() => handleToggle(setAppUpdates)}
                />
              </SettingsRow>
            </div>
          </Section>
          
           <MotionCard variants={itemVariants} className="overflow-hidden rounded-2xl shadow-lg border-border/20">
                <Link href="/privacy-policy" onClick={(e) => handleLinkClick('/privacy-policy', e)} className="w-full flex items-center justify-between p-5 text-left group">
                    <div className="flex items-center gap-4">
                        <GlowIcon icon={Shield} />
                        <span className="text-lg font-semibold group-hover:text-primary transition-colors">Privacy Policy</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
            </MotionCard>
            
            <MotionCard variants={itemVariants} className="overflow-hidden rounded-2xl shadow-lg border-border/20">
                <Link href="/terms-of-service" onClick={(e) => handleLinkClick('/terms-of-service', e)} className="w-full flex items-center justify-between p-5 text-left group">
                    <div className="flex items-center gap-4">
                        <GlowIcon icon={FileText} />
                        <span className="text-lg font-semibold group-hover:text-primary transition-colors">Terms of Service</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
            </MotionCard>

          <Section title="Rate Us" icon={Star} onClick={() => openRatingDialog(true)} />
          
          <Section title="Help & Support" icon={LifeBuoy}>
             <div className="flex flex-col gap-2 -mt-2 pb-4">
              <SettingsRow 
                title="Contact Email"
                description="For any queries, please reach out to us"
                isLink={true}
                href="mailto:indgrowsivestudio@gmail.com"
              >
                  <span className="text-sm font-medium text-primary hover:underline">indgrowsivestudio@gmail.com</span>
              </SettingsRow>
            </div>
          </Section>


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
