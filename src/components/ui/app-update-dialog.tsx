
"use client";

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppWindow, Download, CheckCircle, X, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader } from './loader';
import { Progress } from './progress';

type UpdateStatus = 'checking' | 'updated' | 'available' | 'downloading' | 'complete';

const AppUpdateDialog = ({
    onClose,
    onRelaunch,
    latestVersion,
    isCheckingForUpdate,
    updateStatus,
    setUpdateStatus
}: {
    onClose: () => void;
    onRelaunch: () => void;
    latestVersion: string;
    isCheckingForUpdate: boolean;
    updateStatus: UpdateStatus;
    setUpdateStatus: React.Dispatch<React.SetStateAction<UpdateStatus>>;
}) => {
    
    const [progress, setProgress] = React.useState(0);

    const handleDownload = () => {
        setUpdateStatus('downloading');
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUpdateStatus('complete');
                    return 100;
                }
                return prev + 10;
            });
        }, 300);
    };

    const handleRelaunch = () => {
        onRelaunch();
        onClose();
    }

    const DialogContent = () => {
        switch (updateStatus) {
            case 'checking':
                return (
                    <motion.div key="checking" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} className="flex flex-col items-center gap-4 text-center">
                       <Loader large />
                       <h2 className="text-xl font-bold font-headline text-primary animate-pulse">Checking for updates...</h2>
                       <p className="text-sm text-muted-foreground">Please wait a moment.</p>
                    </motion.div>
                );
            case 'updated':
                 return (
                     <motion.div key="updated" initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.8}} className="flex flex-col items-center gap-3 text-center">
                        <CheckCircle className="w-16 h-16 text-green-500" />
                        <h2 className="text-2xl font-bold font-headline text-foreground">You are up to date!</h2>
                        <p className="text-muted-foreground max-w-sm">You have the latest version of Pickup Lines Ultra installed.</p>
                    </motion.div>
                );
            case 'available':
                 return (
                     <motion.div key="available" initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.8}} className="flex flex-col items-center gap-4 text-center">
                        <AppWindow className="w-16 h-16 text-primary" />
                        <h2 className="text-2xl font-bold font-headline text-foreground">New version available!</h2>
                        <p className="text-muted-foreground max-w-sm">Update to version {latestVersion} to get the latest features and bug fixes.</p>
                        <Button className="w-full h-12 mt-2" onClick={handleDownload}>
                            <Download className="mr-2 h-5 w-5"/>
                            Download Now
                        </Button>
                    </motion.div>
                );
            case 'downloading':
                return (
                     <motion.div key="downloading" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} className="w-full flex flex-col items-center gap-4 text-center">
                       <Loader large />
                       <h2 className="text-xl font-bold font-headline text-primary">Downloading update...</h2>
                       <Progress value={progress} className="w-full h-2" />
                       <p className="text-sm text-muted-foreground">{progress}% complete</p>
                    </motion.div>
                )
             case 'complete':
                return (
                    <motion.div key="complete" initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.8}} className="flex flex-col items-center gap-4 text-center">
                        <CheckCircle className="w-16 h-16 text-green-500" />
                        <h2 className="text-2xl font-bold font-headline text-foreground">Update Downloaded</h2>
                        <p className="text-muted-foreground max-w-sm">The app will now use the new version.</p>
                        <Button className="w-full h-12 mt-2" onClick={handleRelaunch}>
                            <RotateCw className="mr-2 h-5 w-5"/>
                            Relaunch Now
                        </Button>
                    </motion.div>
                );
            default:
                return null;
        }
    }

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
                className="relative w-full max-w-md rounded-2xl bg-card text-card-foreground shadow-2xl border border-border/20 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative p-8 min-h-[280px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                       <DialogContent />
                    </AnimatePresence>
                </div>

                <div className="p-4 bg-muted/50 border-t border-border/20 text-center">
                    <Button variant="ghost" onClick={onClose} className="w-full h-11">Close</Button>
                </div>

                 <Button variant="ghost" size="icon" className="absolute top-3 right-3 rounded-full" onClick={onClose}>
                    <X className="h-5 w-5 text-muted-foreground" />
                </Button>
            </motion.div>
        </motion.div>
    )
}

export default AppUpdateDialog;
