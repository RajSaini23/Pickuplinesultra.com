
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { Language } from "@/lib/languages";

interface LanguageConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  currentLanguage: Language;
  newLanguage: Language;
}

export function LanguageConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  currentLanguage,
  newLanguage,
}: LanguageConfirmationDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Change Language to {newLanguage.name}?
          </AlertDialogTitle>
          <AlertDialogDescription className="pt-2">
            This will change the app's display language from {currentLanguage.name} to {newLanguage.name}. You can always change it back from the settings.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Apply Language</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

    