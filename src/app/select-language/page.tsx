
'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { languages } from '@/lib/languages';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
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

export default function SelectLanguagePage() {
  const router = useRouter();
  const { setLanguage } = useLanguage();
  const [selectedCode, setSelectedCode] = React.useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedCode) {
      setLanguage(selectedCode);
      router.push('/');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col items-center justify-center min-h-dvh bg-background p-4"
    >
      <Card className="w-full max-w-md rounded-2xl shadow-2xl border-border/20 overflow-hidden">
        <div className="p-6 md:p-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold font-headline text-foreground mb-3"
          >
            Select Your Language
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground mb-8"
          >
            Choose your preferred language to get started.
          </motion.p>
        </div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-h-[50vh] overflow-y-auto px-4 md:px-6 custom-scrollbar"
        >
          {languages.map((lang) => (
            <motion.li
              key={lang.code}
              variants={itemVariants}
            >
              <button
                onClick={() => setSelectedCode(lang.code)}
                className={cn(
                  'w-full flex items-center justify-between text-left p-4 mb-3 rounded-xl transition-all duration-300 border-2',
                  selectedCode === lang.code
                    ? 'bg-primary/10 border-primary shadow-lg'
                    : 'bg-muted/50 border-transparent hover:bg-muted'
                )}
              >
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-background/50">
                        <lang.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-lg text-foreground">{lang.name}</span>
                        <span className="text-sm text-muted-foreground">{lang.nativeName}</span>
                    </div>
                </div>
                {selectedCode === lang.code && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    layoutId="check-icon"
                  >
                    <Check className="h-6 w-6 text-primary" />
                  </motion.div>
                )}
              </button>
            </motion.li>
          ))}
        </motion.ul>

        <div className="p-6 md:p-8 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              onClick={handleConfirm}
              disabled={!selectedCode}
              className="w-full h-14 text-lg rounded-xl"
            >
              Confirm & Continue
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
