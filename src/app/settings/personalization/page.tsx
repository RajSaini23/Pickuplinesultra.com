
"use client";

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { ArrowLeft, Sun, Moon, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { languages, Language } from '@/lib/languages';
import { useLanguage } from '@/context/language-context';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LanguageConfirmationDialog } from '@/components/ui/language-confirmation-dialog';
import { LoadingOverlay } from '@/components/ui/loading-overlay';


const MotionButton = motion(Button);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const SettingsRow = ({ title, description, children }: { title: string, description?: string, children: React.ReactNode }) => (
    <div className="flex items-center justify-between py-4 group w-full">
        <div className="flex flex-col gap-1">
        <p className="font-semibold text-foreground/90 group-hover:text-primary transition-colors text-lg">{title}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        {children}
    </div>
);


export default function PersonalizationPage() {
    const { setTheme: setNextTheme } = useTheme();
    const { toast } = useToast();
    const { language: currentLanguageCode, setLanguage } = useLanguage();

    const [preferredTheme, setPreferredTheme] = React.useState('auto');
    const [isLoading, setIsLoading] = React.useState(false);
    const [isLangConfirmOpen, setLangConfirmOpen] = React.useState(false);
    const [newLang, setNewLang] = React.useState<Language | null>(null);

    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme-preference') || 'auto';
        setPreferredTheme(savedTheme);
    }, []);

    const changeTheme = (t: 'light' | 'dark' | 'auto') => {
        setIsLoading(true);
        localStorage.setItem('theme-preference', t);
        setPreferredTheme(t);
        if (t === 'auto') {
            const hour = new Date().getHours();
            setNextTheme(hour >= 6 && hour < 18 ? 'light' : 'dark');
        } else {
            setNextTheme(t);
        }
        toast({ title: "Theme Updated", description: `Theme set to ${t.charAt(0).toUpperCase() + t.slice(1)}` });
        setTimeout(() => setIsLoading(false), 300);
    };

    const handleLanguageChange = (langCode: string) => {
        const selected = languages.find(l => l.code === langCode);
        if (selected && selected.code !== currentLanguageCode) {
        setNewLang(selected);
        setLangConfirmOpen(true);
        }
    };

    const applyLanguageChange = () => {
        if (newLang) {
        setLanguage(newLang.code);
        toast({
            title: "Language Updated",
            description: `Language changed to ${newLang.name}.`,
        });
        }
        setLangConfirmOpen(false);
        setNewLang(null);
    };

    const currentLanguage = languages.find(l => l.code === currentLanguageCode);
    
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <LoadingOverlay isLoading={isLoading} />
            {isLangConfirmOpen && newLang && currentLanguage && (
            <LanguageConfirmationDialog
                isOpen={isLangConfirmOpen}
                onClose={() => setLangConfirmOpen(false)}
                onConfirm={applyLanguageChange}
                currentLanguage={currentLanguage}
                newLanguage={newLang}
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
                <h1 className="text-2xl font-bold font-headline ml-4">Personalization</h1>
            </motion.header>

            <main className="flex-grow p-4 md:p-6">
                 <motion.div
                    className="max-w-2xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                       <Card className="p-4 md:p-6 rounded-2xl shadow-lg border-border/20">
                            <SettingsRow title="Theme">
                                <div className="flex items-center gap-2">
                                {(['light', 'dark', 'auto'] as const).map((theme) => {
                                    const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Laptop;
                                    return (
                                    <MotionButton
                                        key={theme}
                                        variant={preferredTheme === theme ? 'default' : 'outline'}
                                        size="icon"
                                        onClick={() => changeTheme(theme)}
                                        aria-label={`${theme} theme`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="rounded-full"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </MotionButton>
                                    );
                                })}
                                </div>
                            </SettingsRow>
                            <Separator className="my-2 bg-border/30"/>
                            <SettingsRow title="Language" description="Change the app's display language.">
                                <Select value={currentLanguageCode ?? ''} onValueChange={handleLanguageChange}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {languages.map(lang => (
                                    <SelectItem key={lang.code} value={lang.code}>
                                        {lang.name}
                                    </SelectItem>
                                    ))}
                                </SelectContent>
                                </Select>
                            </SettingsRow>
                        </Card>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    )
}
