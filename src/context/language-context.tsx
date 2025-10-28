
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { languages } from '@/lib/languages';
import type { Quote } from '@/data/types';
import { translateText, TranslationInput } from '@/ai/flows/translate-flow';
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
  const [translationCache, setTranslationCache] = useState<Record<string, string>>({});
  const { toast } = useToast();

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
        setTranslationCache({}); // Clear cache on language change
      }
    } catch (error) {
      console.error("Failed to save language to localStorage", error);
    }
  };

  const getTranslation = useCallback(async (quote: Quote): Promise<string> => {
    if (!language) return quote.hinglish; // Default case

    if (language === 'hin-eng') return quote.hinglish;
    if (language === 'en') return quote.english;

    const cacheKey = `${quote.id}-${language}`;
    if (translationCache[cacheKey]) {
      return translationCache[cacheKey];
    }

    try {
      const targetLanguage = languages.find(l => l.code === language)?.name || 'Hindi';
      
      const translationInput: TranslationInput = {
        text: quote.english,
        targetLanguage: targetLanguage,
      };

      const result = await translateText(translationInput);
      const translatedText = result.translatedText;

      setTranslationCache(prev => ({ ...prev, [cacheKey]: translatedText }));
      return translatedText;

    } catch (error) {
      console.error("Translation failed:", error);
      toast({
        variant: 'destructive',
        title: "Translation Failed",
        description: "Could not translate the quote. Please check your connection.",
      });
      // Fallback to English if translation fails
      return quote.english;
    }
  }, [language, translationCache, toast]);


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
