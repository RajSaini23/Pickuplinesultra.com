
"use client";

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { languages, Language } from '@/lib/languages';
import { useLanguage } from '@/context/language-context';
import { cn } from '@/lib/utils';
import { LanguageConfirmationDialog } from '@/components/ui/language-confirmation-dialog';
import { LoadingOverlay } from '@/components/ui/loading-overlay';
import { Separator } from '@/components/ui/separator';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function PersonalizationPage() {
    const { language: currentLanguageCode, setLanguage } = useLanguage();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isLangConfirmOpen, setLangConfirmOpen] = React.useState(false);
    const [selectedLang, setSelectedLang] = React.useState<Language | null>(null);

    const handleLanguageSelect = (lang: Language) => {
        if (lang.code !== currentLanguageCode) {
            setSelectedLang(lang);
            setLangConfirmOpen(true);
        }
    };

    const applyLanguageChange = () => {
        if (selectedLang) {
            setIsLoading(true);
            setLanguage(selectedLang.code);
            setTimeout(() => {
                setIsLoading(false);
                setLangConfirmOpen(false);
                setSelectedLang(null);
            }, 500);
        } else {
            setLangConfirmOpen(false);
        }
    };

    const currentLanguage = languages.find(l => l.code === currentLanguageCode);
    
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <LoadingOverlay isLoading={isLoading} />
            {isLangConfirmOpen && selectedLang && currentLanguage && (
            <LanguageConfirmationDialog
                isOpen={isLangConfirmOpen}
                onClose={() => setLangConfirmOpen(false)}
                onConfirm={applyLanguageChange}
                currentLanguage={currentLanguage}
                newLanguage={selectedLang}
            />
            )}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="sticky top-0 z-50 flex items-center p-4 border-b bg-card/80 backdrop-blur-sm"
            >
                <Link href="/settings" passHref>
                    <Button variant="outline" className="gap-2 rounded-full pl-2 pr-4 active:scale-95 transition-transform bg-muted/50 hover:bg-muted">
                        <ArrowLeft className="h-5 w-5" />
                        <span>Back to Settings</span>
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold font-headline ml-4">Language</h1>
            </motion.header>

            <main className="flex-grow p-4 md:p-6">
                 <motion.div
                    className="max-w-2xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Card className="p-4 md:p-6 rounded-2xl shadow-lg border-border/20">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold">Select a Language</h2>
                            <p className="text-muted-foreground text-sm">Choose your preferred display language for the app.</p>
                        </div>
                        <ul className="space-y-1">
                            {languages.map((lang, index) => (
                                <React.Fragment key={lang.code}>
                                    <motion.li variants={itemVariants}>
                                        <button
                                            onClick={() => handleLanguageSelect(lang)}
                                            className={cn(
                                                "w-full flex items-center justify-between text-left p-4 rounded-xl transition-all duration-200 relative overflow-hidden",
                                                currentLanguageCode === lang.code
                                                ? "bg-primary/10"
                                                : "bg-transparent hover:bg-muted/50"
                                            )}
                                        >
                                            {currentLanguageCode === lang.code && (
                                                <motion.div 
                                                    layoutId="accent-border"
                                                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-xl"
                                                />
                                            )}
                                            <div className="flex flex-col pl-3">
                                                <span className="font-semibold text-lg text-foreground">{lang.name}</span>
                                                <span className="text-sm text-muted-foreground">{lang.nativeName}</span>
                                            </div>
                                            {currentLanguageCode === lang.code && (
                                                <motion.div
                                                    initial={{ scale: 0.5, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                >
                                                    <Check className="h-6 w-6 text-primary" />
                                                </motion.div>
                                            )}
                                        </button>
                                    </motion.li>
                                    {index < languages.length - 1 && <Separator className="bg-border/20" />}
                                </React.Fragment>
                            ))}
                        </ul>
                    </Card>
                </motion.div>
            </main>
        </div>
    )
}
