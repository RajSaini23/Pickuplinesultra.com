
"use client";

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Palette, Bell, FileText, LifeBuoy, Share2, Sun, Moon, Laptop, ChevronRight, Bookmark
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CyberToggle } from '@/components/ui/cyber-toggle';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

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
  return <Icon {...props} style={{ filter: 'drop-shadow(0 0 5px hsl(var(--primary)))' }} />;
};

export default function SettingsPage() {
  const { setTheme: setNextTheme } = useTheme();
  const { toast } = useToast();
  const [preferredTheme, setPreferredTheme] = React.useState('auto');
  const [openSection, setOpenSection] = React.useState<string | null>(null);
  const [notifications, setNotifications] = React.useState({
    newQuotes: true,
    appUpdates: true,
    promotions: false,
  });

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
      title: 'Ecstatic',
      text: 'Check out Ecstatic - Your Emotion. Our Expression.',
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


  const Section = ({ title, icon, children, isLink, href }: { title: string, icon: React.ElementType, children?: React.ReactNode, isLink?: boolean, href?: string }) => {
    const isOpen = openSection === title;
    
    const content = (
      <>
        <div className="flex items-center gap-4">
          <GlowIcon icon={icon} className="h-7 w-7 text-primary" />
          <span className="text-lg font-semibold">{title}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
          <ChevronRight className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </>
    );

    const buttonOrLink = isLink && href ? (
       <Link href={href} className="w-full flex items-center justify-between p-5 text-left">
        {content}
      </Link>
    ) : (
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={() => setOpenSection(isOpen ? null : title)}
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
  
  const SettingsRow = ({ title, children, isLink, href, onClick }: { title: string, children: React.ReactNode, isLink?: boolean, href?: string, onClick?: () => void }) => {
    const content = (
       <div className="flex items-center justify-between py-3.5 group cursor-pointer">
          <p className="font-medium text-foreground/80 group-hover:text-primary transition-colors">{title}</p>
          {children}
       </div>
    );
    
    if (isLink && href) {
        return (
          <Link href={href} className="flex items-center justify-between py-3.5 group cursor-pointer" onClick={onClick}>
            <p className="font-medium text-foreground/80 group-hover:text-primary transition-colors">{title}</p>
            {children}
          </Link>
        );
    }
    
    if (onClick) {
        return (
            <div onClick={onClick} className="flex items-center justify-between py-3.5 group cursor-pointer">
                <p className="font-medium text-foreground/80 group-hover:text-primary transition-colors">{title}</p>
                {children}
            </div>
        )
    }

    return content;
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
            <SettingsRow title="Theme">
              <div className="flex items-center gap-2">
                {([['light', Sun], ['dark', Moon], ['auto', Laptop]] as const).map(([theme, Icon]) => (
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
                ))}
              </div>
            </SettingsRow>
          </Section>
          
          <MotionCard variants={itemVariants} className="overflow-hidden rounded-2xl shadow-lg border-border/20 cursor-pointer">
            <Link href="/bookmarks" className="w-full flex items-center justify-between p-5 text-left">
              <div className="flex items-center gap-4">
                <GlowIcon icon={Bookmark} className="h-7 w-7 text-primary" />
                <span className="text-lg font-semibold">Bookmarks</span>
              </div>
              <ChevronRight className="h-6 w-6 text-muted-foreground" />
            </Link>
          </MotionCard>

          <Section title="Notifications" icon={Bell}>
            <div className="flex flex-col gap-2 -mt-2 pb-4">
              {Object.entries(notifications).map(([key, value]) => (
                <SettingsRow key={key} title={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}>
                  <CyberToggle
                    id={`toggle-${key}`}
                    checked={value}
                    onCheckedChange={(checked) =>
                      setNotifications(prev => ({ ...prev, [key]: checked }))
                    }
                  />
                </SettingsRow>
              ))}
            </div>
          </Section>

          <Section title="Legal" icon={FileText}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
                <div key={item} className="flex items-center justify-between py-3.5 group cursor-pointer">
                    <p className="font-medium text-foreground/80 group-hover:text-primary transition-colors">{item}</p>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
            ))}
          </Section>

          <MotionCard variants={itemVariants} className="overflow-hidden rounded-2xl shadow-lg border-border/20">
              <div className="p-5">
                <div className="flex items-center gap-4">
                  <GlowIcon icon={LifeBuoy} className="h-7 w-7 text-primary" />
                  <span className="text-lg font-semibold">Help</span>
                </div>
                <Separator className="my-4 bg-border/40"/>
                <div className="flex flex-col">
                   {['Contact Support', 'Report a Bug'].map(item => (
                      <div key={item} className="flex items-center justify-between py-3.5 group cursor-pointer">
                          <p className="font-medium text-foreground/80 group-hover:text-primary transition-colors">{item}</p>
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                      </div>
                  ))}
                </div>
              </div>
          </MotionCard>


          <Section title="Share the App" icon={Share2}>
            <div className="flex flex-col items-center text-center py-4">
                <p className="text-muted-foreground mb-4 mt-2 px-4">Enjoying Ecstatic? Share the love with your friends!</p>
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
