
"use client";

import React, { useState, createContext, useContext, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RatingDialogContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  showThankYou: boolean;
  setShowThankYou: (show: boolean) => void;
}

const RatingDialogContext = createContext<RatingDialogContextType | undefined>(undefined);

export const RatingDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <RatingDialogContext.Provider value={{ isOpen, setIsOpen, showThankYou, setShowThankYou }}>
      {children}
      <AnimatePresence>
        {isOpen && <RatingDialog />}
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


const RatingDialog = () => {
  const { setIsOpen, showThankYou, setShowThankYou } = useRatingDialog();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClose = () => {
    localStorage.setItem('ratingPromptLastDismissed', new Date().toISOString());
    setIsOpen(false);
  };

  const handleRate = () => {
    // In a real app, you would link to the app store here.
    // For now, we'll just show a thank you message.
    localStorage.setItem('hasRated', 'true');
    setShowThankYou(true);
    setTimeout(() => {
        setIsOpen(false);
    }, 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-md rounded-2xl bg-card text-card-foreground shadow-2xl border border-border/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
            {showThankYou ? (
                <motion.div
                    key="thank-you"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.3 } }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center justify-center p-8 text-center h-80"
                >
                    <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                    <h2 className="text-2xl font-bold font-headline mb-2">Thank You!</h2>
                    <p className="text-muted-foreground">Your feedback helps us improve.</p>
                </motion.div>
            ) : (
                 <motion.div
                    key="rating-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="p-8"
                 >
                    <button onClick={handleClose} className="absolute top-3 right-3 p-2 rounded-full text-muted-foreground hover:bg-muted/80 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold font-headline mb-2 text-foreground">Enjoying Pickup Lines?</h2>
                        <p className="text-muted-foreground mb-6">Your feedback helps us make the app better for everyone.</p>
                    
                        <div 
                            className="flex justify-center gap-2 mb-8"
                            onMouseLeave={() => setHoverRating(0)}
                        >
                        {[...Array(5)].map((_, index) => {
                            const starValue = index + 1;
                            return (
                            <motion.div
                                key={starValue}
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 1.1 }}
                                onMouseEnter={() => setHoverRating(starValue)}
                                onClick={() => setRating(starValue)}
                            >
                                <Star 
                                className={cn(
                                    "w-10 h-10 cursor-pointer transition-colors duration-200",
                                    starValue <= (hoverRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/40"
                                )}
                                />
                            </motion.div>
                            );
                        })}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button 
                                variant="outline" 
                                className="w-full h-12 rounded-full"
                                onClick={handleClose}
                            >
                                Maybe Later
                            </Button>
                            <Button 
                                className="w-full h-12 rounded-full"
                                onClick={handleRate}
                                disabled={rating === 0}
                            >
                                Rate Now
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}

        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
};
