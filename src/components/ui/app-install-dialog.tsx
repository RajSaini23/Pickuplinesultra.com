
"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Share, ArrowDown, PlusSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AppInstallDialog = ({ onClose }: { onClose: () => void }) => {
    const isIos = /iPhone|iPad|iPod/.test(navigator.userAgent);

    const instructions = isIos 
        ? "To install the app, tap the Share button and then 'Add to Home Screen'."
        : "To install, open your browser's menu and look for the 'Install app' or 'Add to Home Screen' option.";

    const Icon = isIos ? Share : ArrowDown;
    const ActionText = isIos ? "Add to Home Screen" : "Install";

    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
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

                    <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-muted/50">
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
    )
}

export default AppInstallDialog;
