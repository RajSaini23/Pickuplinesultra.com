
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { languages } from '@/lib/languages';
import type { Quote } from '@/data/types';
import { translateText, TranslationInput } from '@/ai/flows/translate-flow';
import { useToast } from '@/hooks/use-toast';
import { useNetwork } from './network-context';

interface LanguageContextType {
  language: string | null;
  setLanguage: (langCode: string) => void;
  isLanguageLoading: boolean;
  getTranslation: (quote: Quote) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'pickup-lines-ultra-language';
const TRANSLATION_CACHE_KEY = 'pickup-lines-translation-cache';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, _setLanguage] = useState<string | null>(null);
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
  const [translationCache, setTranslationCache] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const { isOnline } = useNetwork();

  // Load saved language and translation cache from localStorage on initial load
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLang && languages.some(l => l.code === savedLang)) {
        _setLanguage(savedLang);
      }

      const savedCache = localStorage.getItem(TRANSLATION_CACHE_KEY);
      if (savedCache) {
        setTranslationCache(JSON.parse(savedCache));
      }

    } catch (error) {
      console.error("Failed to load data from localStorage", error);
    } finally {
      setIsLanguageLoading(false);
    }
  }, []);

  // Persist translation cache to localStorage whenever it changes
  useEffect(() => {
    try {
        localStorage.setItem(TRANSLATION_CACHE_KEY, JSON.stringify(translationCache));
    } catch (error) {
        console.error("Failed to save translation cache to localStorage", error);
    }
  }, [translationCache]);

  const setLanguage = (langCode: string) => {
    try {
      if (languages.some(l => l.code === langCode)) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, langCode);
        _setLanguage(langCode);
        // We don't clear the cache anymore, as it's useful across language switches.
      }
    } catch (error) {
      console.error("Failed to save language to localStorage", error);
    }
  };

  const getTranslation = useCallback(async (quote: Quote): Promise<string> => {
    if (!language) return quote.hinglish; // Default case

    // --- NATIVE & CACHED LOGIC ---
    if (language === 'hin-eng') return quote.hinglish;
    if (language === 'en') return quote.english;

    const cacheKey = `${quote.id}-${language}`;
    if (translationCache[cacheKey]) {
      return translationCache[cacheKey];
    }

    // --- OFFLINE/AI LOGIC ---
    if (!isOnline) {
        toast({
            variant: 'destructive',
            title: "You are offline",
            description: "Translation not available. Please connect to the internet.",
        });
        return quote.english; // Fallback to English when offline and not cached
    }

    try {
      const targetLanguageInfo = languages.find(l => l.code === language);
      if (!targetLanguageInfo) return quote.english;

      const translationInput: TranslationInput = {
        text: quote.english,
        targetLanguage: targetLanguageInfo.name,
      };

      const result = await translateText(translationInput);
      const translatedText = result.translatedText;

      // Save the new translation to our cache state
      setTranslationCache(prev => ({ ...prev, [cacheKey]: translatedText }));

      return translatedText;

    } catch (error) {
      console.error("Translation failed:", error);
      toast({
        variant: 'destructive',
        title: "Translation Failed",
        description: "Could not translate the quote. Please check your connection.",
      });
      // Fallback to English if translation API fails
      return quote.english;
    }
  }, [language, translationCache, toast, isOnline]);


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
