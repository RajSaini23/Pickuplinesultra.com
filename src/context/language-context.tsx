
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { languages, Language } from '@/lib/languages';
import type { Quote } from '@/data/types';

interface LanguageContextType {
  language: string | null;
  setLanguage: (langCode: string) => void;
  isLanguageLoading: boolean;
  toggleLanguage: () => void;
  getTranslation: (quote: Quote) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'pickup-lines-language';
const SECONDARY_LANGUAGE_KEY = 'pickup-lines-secondary-language';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, _setLanguage] = useState<string | null>(null);
  const [secondaryLanguage, setSecondaryLanguage] = useState<string>('en');
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLang && languages.some(l => l.code === savedLang)) {
        _setLanguage(savedLang);
      }
      const savedSecondaryLang = localStorage.getItem(SECONDARY_LANGUAGE_KEY);
      if (savedSecondaryLang) {
        setSecondaryLanguage(savedSecondaryLang);
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
        // Logic to set a sensible secondary language
        if (langCode === 'en') {
          setSecondaryLanguage('hin-eng');
          localStorage.setItem(SECONDARY_LANGUAGE_KEY, 'hin-eng');
        } else {
          setSecondaryLanguage('en');
           localStorage.setItem(SECONDARY_LANGUAGE_KEY, 'en');
        }
      }
    } catch (error) {
      console.error("Failed to save language to localStorage", error);
    }
  };
  
  const toggleLanguage = useCallback(() => {
    if (!language) return;
    const currentMain = language;
    const currentSecondary = secondaryLanguage;
    
    _setLanguage(currentSecondary);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, currentSecondary);
    
    setSecondaryLanguage(currentMain);
    localStorage.setItem(SECONDARY_LANGUAGE_KEY, currentMain);

  }, [language, secondaryLanguage]);

  const getTranslation = useCallback((quote: Quote): string => {
    if (language === 'en') {
      return quote.english;
    }
    // Default to Hinglish for all other selections as primary
    return quote.hinglish;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLanguageLoading, toggleLanguage, getTranslation }}>
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
