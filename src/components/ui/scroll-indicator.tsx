
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center justify-center pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground flex items-center justify-center shadow-lg"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
      <span className="mt-2 text-xs font-semibold text-primary/80 bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full">
        Scroll for more
      </span>
    </motion.div>
  );
};
