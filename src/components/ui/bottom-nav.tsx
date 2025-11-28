
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bookmark, Settings, AppWindow, Download, Share, PlusSquare, ArrowDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInstallPrompt } from '@/context/install-prompt-context';
import * as React from 'react';
import { Button } from '@/components/ui/button';

// --- Embedded AppInstallDialog ---
const AppInstallDialog = ({ onClose }: { onClose: () => void }) => {
    const isIos = typeof window !== 'undefined' && /iPhone|iPad|iPod/.test(navigator.userAgent);

    const instructions = isIos 
        ? "To install, tap the Share button below, then scroll down and tap 'Add to Home Screen'."
        : "To install, open your browser's menu and look for the 'Install app' or 'Add to Home Screen' option.";

    const Icon = isIos ? Share : ArrowDown;
    const ActionText = isIos ? "Add to Home Screen" : "Install";

    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative w-full max-w-sm rounded-2xl bg-card text-card-foreground shadow-2xl border border-border/20 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 text-center">
                    <h2 className="text-2xl font-bold font-headline text-foreground mb-3">Install App</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {instructions}
                    </p>

                    <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-muted/50 border border-border/20">
                        <Icon className="h-6 w-6 text-primary" />
                        <ArrowDown className="h-5 w-5 text-muted-foreground" />
                        <div className="flex items-center gap-2">
                           <PlusSquare className="h-6 w-6 text-primary" />
                           <span className="font-semibold text-primary">{ActionText}</span>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-muted/50 border-t border-border/20 text-center">
                    <Button variant="ghost" onClick={onClose} className="w-full h-11">Got it!</Button>
                </div>
                 <Button variant="ghost" size="icon" className="absolute top-3 right-3 rounded-full" onClick={onClose}>
                    <X className="h-5 w-5 text-muted-foreground" />
                </Button>
            </motion.div>
        </motion.div>
    );
};
// --- End of Embedded Component ---


const navItems = [
  { href: '/app', label: 'Home', icon: Home },
  { href: '/bookmarks', label: 'Saved', icon: Bookmark },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export const BottomNav = () => {
  const pathname = usePathname();
  const { isInstallable, canShowInstallPrompt, triggerInstall } = useInstallPrompt();
  const [isInstallDialogOpen, setInstallDialogOpen] = React.useState(false);

  const handleInstallClick = () => {
    if (canShowInstallPrompt) {
      triggerInstall();
    } else {
      setInstallDialogOpen(true);
    }
  };

  // Do not render bottom nav on the landing page
  if (pathname === '/') {
    return null;
  }
  
  const allNavItems = [
    ...navItems.slice(0, 3), // Items before "Apps"
    { href: '/more-apps', label: 'Apps', icon: AppWindow },
  ];

  return (
    <>
      <AnimatePresence>
        {isInstallDialogOpen && <AppInstallDialog onClose={() => setInstallDialogOpen(false)} />}
      </AnimatePresence>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40">
        <div className="flex justify-around items-center max-w-lg mx-auto h-16 bg-background/90 backdrop-blur-lg">
          {allNavItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link href={item.href} key={item.href} className="relative flex flex-col items-center justify-center w-24 h-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
                <item.icon className={cn("h-7 w-7 transition-all", isActive ? "text-icon" : "")} />
                <span className={cn("transition-all mt-1", isActive ? "text-foreground font-bold" : "")}>{item.label}</span>
              </Link>
            );
          })}
          
          <AnimatePresence>
            {isInstallable && (
               <motion.div
                key="install-button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                <button onClick={handleInstallClick} className="relative flex flex-col items-center justify-center w-24 h-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Download className="h-7 w-7 text-icon" />
                  <span className="text-foreground font-bold mt-1">Install</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};
