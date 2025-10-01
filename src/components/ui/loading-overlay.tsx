
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from './loader';

interface LoadingOverlayProps {
  isLoading: boolean;
}

export const LoadingOverlay = ({ isLoading }: LoadingOverlayProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
            className="flex flex-col items-center gap-4 rounded-2xl bg-background/90 p-8 shadow-2xl"
          >
            <Loader large />
            <p className="text-lg font-semibold text-foreground tracking-wider">Loading...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
