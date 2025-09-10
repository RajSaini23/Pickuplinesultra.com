
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bookmark, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/bookmarks', label: 'Saved', icon: Bookmark },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border/40">
      <div className="flex justify-around items-center max-w-lg mx-auto h-20">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={item.href} className="relative flex flex-col items-center justify-center w-24 h-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
              <item.icon className={cn("h-7 w-7 mb-1 transition-all", isActive ? "text-primary" : "")} />
              <span className={cn("transition-all", isActive ? "text-primary font-bold" : "")}>{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="active-nav-indicator"
                  className="absolute bottom-0 h-1 w-12 bg-primary rounded-t-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
