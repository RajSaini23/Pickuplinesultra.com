
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bookmark, Settings, AppWindow, Download, Share } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInstallPrompt } from '@/context/install-prompt-context';
import AppInstallDialog from '@/components/ui/app-install-dialog';
import * as React from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/bookmarks', label: 'Saved', icon: Bookmark },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/more-apps', label: 'Apps', icon: AppWindow },
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

  return (
    <>
      <AnimatePresence>
        {isInstallDialogOpen && <AppInstallDialog onClose={() => setInstallDialogOpen(false)} />}
      </AnimatePresence>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40">
        <div className="flex justify-around items-center max-w-lg mx-auto h-16 bg-background/90 backdrop-blur-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <button onClick={handleInstallClick} className="relative flex flex-col items-center justify-center w-24 h-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
                  {canShowInstallPrompt ? <Download className="h-7 w-7 text-icon" /> : <Share className="h-7 w-7 text-icon" />}
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
