
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BookmarkContextType {
  bookmarkedIds: number[];
  addBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const BOOKMARKS_STORAGE_KEY = 'ecstatic-bookmarks';

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

  useEffect(() => {
    try {
      const storedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (storedBookmarks) {
        setBookmarkedIds(JSON.parse(storedBookmarks));
      }
    } catch (error) {
      console.error("Failed to load bookmarks from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarkedIds));
    } catch (error) {
      console.error("Failed to save bookmarks to localStorage", error);
    }
  }, [bookmarkedIds]);

  const addBookmark = (id: number) => {
    setBookmarkedIds((prev) => [...new Set([...prev, id])]);
  };

  const removeBookmark = (id: number) => {
    setBookmarkedIds((prev) => prev.filter((bookmarkId) => bookmarkId !== id));
  };

  const isBookmarked = (id: number) => {
    return bookmarkedIds.includes(id);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedIds, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
