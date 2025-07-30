
"use client";

import { useEffect } from 'react';
import { useBookmarks } from '@/context/bookmark-context';
import { useRatingDialog } from '@/components/ui/rating-dialog';

const APP_OPEN_COUNT_KEY = 'ecstatic-app-open-count';
const HAS_RATED_KEY = 'hasRated';
const LAST_DISMISSED_KEY = 'ratingPromptLastDismissed';

const MIN_OPENS = 3;
const MIN_BOOKMARKS = 2;
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export const useRatingPrompt = () => {
  const { bookmarkedIds } = useBookmarks();
  const { setIsOpen } = useRatingDialog();

  useEffect(() => {
    const incrementAppOpenCount = () => {
      try {
        const count = parseInt(localStorage.getItem(APP_OPEN_COUNT_KEY) || '0', 10);
        localStorage.setItem(APP_OPEN_COUNT_KEY, (count + 1).toString());
      } catch (error) {
        console.error("Failed to update app open count", error);
      }
    };
    
    incrementAppOpenCount();
  }, []);

  useEffect(() => {
    const checkAndShowPrompt = () => {
      try {
        const openCount = parseInt(localStorage.getItem(APP_OPEN_COUNT_KEY) || '0', 10);
        const hasRated = localStorage.getItem(HAS_RATED_KEY) === 'true';
        const lastDismissed = localStorage.getItem(LAST_DISMISSED_KEY);

        if (hasRated) return;

        if (lastDismissed) {
          const lastDismissedDate = new Date(lastDismissed);
          if (new Date().getTime() - lastDismissedDate.getTime() < DISMISS_DURATION_MS) {
            return;
          }
        }
        
        if (openCount >= MIN_OPENS && bookmarkedIds.length >= MIN_BOOKMARKS) {
          // Use a timeout to not show the prompt immediately on app load
          setTimeout(() => {
            setIsOpen(true);
          }, 3000); // Show after 3 seconds
        }

      } catch (error) {
        console.error("Failed to check for rating prompt", error);
      }
    };

    // We delay the check slightly to allow other parts of the app to initialize
    const timer = setTimeout(checkAndShowPrompt, 1000);

    return () => clearTimeout(timer);
  }, [bookmarkedIds, setIsOpen]);
};
