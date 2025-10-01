
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bookmark, Settings, AppWindow } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/bookmarks', label: 'Saved', icon: Bookmark },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/more-apps', label: 'More Apps', icon: AppWindow },
];

export const BottomNav = () => {
  const pathname = usePathname();

  return (
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
      </div>
    </nav>
  );
};
