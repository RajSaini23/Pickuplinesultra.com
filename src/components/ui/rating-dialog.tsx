
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
import { submitFeedback } from '@/ai/flows/feedback-flow';
import { Loader } from './loader';


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

const feedbackSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).optional().or(z.literal('')),
  review: z.string().min(10, { message: "Review must be at least 10 characters." }).max(500),
});


const RatingDialog = () => {
  const { setIsOpen, showThankYou, setShowThankYou } = useRatingDialog();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [view, setView] = useState<'rating' | 'feedback' | 'thank_you'>('rating');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      email: '',
      review: '',
    }
  });

  const handleClose = () => {
    localStorage.setItem('ratingPromptLastDismissed', new Date().toISOString());
    setIsOpen(false);
    // Reset state on close
    setTimeout(() => {
        setRating(0);
        setView('rating');
        setShowThankYou(false);
        form.reset();
    }, 300);
  };
  
  const handleRate = () => {
    localStorage.setItem('hasRated', 'true');
    if (rating > 3) {
        setView('thank_you');
        setTimeout(handleClose, 2500);
    } else {
        setView('feedback');
    }
  };

  const onFeedbackSubmit = async (data: z.infer<typeof feedbackSchema>) => {
    setIsSubmitting(true);
    try {
        await submitFeedback({
            rating,
            review: data.review,
            email: data.email || '',
        });
        toast({
            title: "Feedback Sent!",
            description: "Thank you for helping us improve.",
        });
        setView('thank_you');
        setTimeout(handleClose, 2500);
    } catch(e) {
        toast({
            variant: "destructive",
            title: "Submission Failed",
            description: "Could not send your feedback. Please try again later.",
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  const ratingView = (
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
            <h2 className="text-2xl font-bold font-headline mb-2 text-foreground">Enjoying the App?</h2>
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
  );

  const feedbackView = (
    <motion.div
        key="feedback-view"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="p-8"
    >
      <div className="text-center mb-6">
        <MessageSquare className="mx-auto w-12 h-12 text-icon mb-3" />
        <h2 className="text-2xl font-bold font-headline text-foreground">Help Us Improve</h2>
        <p className="text-muted-foreground mt-1">We're sorry you didn't have a great experience. Please let us know what we can do better.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onFeedbackSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can improve..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="So we can follow up" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" className="w-full h-11" onClick={() => setView('rating')}>Back</Button>
                <Button type="submit" className="w-full h-11" disabled={isSubmitting}>
                  {isSubmitting ? <Loader /> : <Send className="mr-2 h-4 w-4" />}
                  Submit Feedback
                </Button>
            </div>
        </form>
      </Form>
    </motion.div>
  );
  
  const thankYouView = (
    <motion.div
        key="thank-you"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.3 } }}
        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
        className="flex flex-col items-center justify-center p-8 text-center h-80"
    >
        <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold font-headline mb-2">Thank You!</h2>
        <p className="text-muted-foreground">
            {rating > 3 ? "Your rating helps others discover our app." : "Your feedback helps us improve."}
        </p>
    </motion.div>
  );


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
            {view === 'rating' && ratingView}
            {view === 'feedback' && feedbackView}
            {view === 'thank_you' && thankYouView}
        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
};
