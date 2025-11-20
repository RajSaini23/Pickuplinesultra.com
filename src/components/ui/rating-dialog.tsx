
"use client";

import React, { useState, createContext, useContext, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, CheckCircle, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader } from './loader';
import { useNetwork } from '@/context/network-context';
import dynamic from 'next/dynamic';

const RatingDialogComponent = dynamic(() => import('./rating-dialog-component').then(mod => mod.RatingDialogComponent), { ssr: false });

interface RatingDialogContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const RatingDialogContext = createContext<RatingDialogContextType | undefined>(undefined);

export const RatingDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <RatingDialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      <AnimatePresence>
        {isOpen && <RatingDialogComponent />}
      </AnimatePresence>
    </RatingDialogContext.Provider>
  );
};

export const useRatingDialog = () => {
  const context = useContext(RatingDialogContext);
  if (!context) {
    throw new Error('useRatingDialog must be used within a RatingDialogProvider');
  }
  return context;
};
