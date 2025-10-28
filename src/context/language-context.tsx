
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { languages } from '@/lib/languages';
import type { Quote } from '@/data/types';
import { useNetwork } from './network-context';
import { useToast } from '@/hooks/use-toast';

interface LanguageContextType {
  language: string | null;
  setLanguage: (langCode: string) => void;
  isLanguageLoading: boolean;
  getTranslation: (quote: Quote) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'pickup-lines-ultra-language';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, _setLanguage] = useState<string | null>(null);
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
  
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLang && languages.some(l => l.code === savedLang)) {
        _setLanguage(savedLang);
      }
    } catch (error) {
      console.error("Failed to load language from localStorage", error);
    } finally {
      setIsLanguageLoading(false);
    }
  }, []);

  const setLanguage = (langCode: string) => {
    try {
      if (languages.some(l => l.code === langCode)) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, langCode);
        _setLanguage(langCode);
      }
    } catch (error) {
      console.error("Failed to save language to localStorage", error);
    }
  };

  const getTranslation = useCallback(async (quote: Quote): Promise<string> => {
    if (!language) return quote.hinglish; // Default case

    const quoteWithAllLanguages = quote as Quote & { [key: string]: string };

    if (quoteWithAllLanguages[language]) {
        return quoteWithAllLanguages[language];
    }
    
    // Fallback to English if a specific language translation doesn't exist for some reason
    return quote.english;
  }, [language]);


  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLanguageLoading, getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
