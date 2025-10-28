
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle } from "lucide-react";

const LegacyDeviceWarning = () => {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
            Unsupported Device or Browser
          </AlertDialogTitle>
          <AlertDialogDescription className="pt-2">
            Aapka device ya browser shayad sabhi latest app features ko support nahi karta. Behtar anubhav ke liye, kripya Google Chrome, Firefox jaise modern browser ka upyog karein ya apne device ko update karein.
            <br /><br />
            (Your device or browser may not support all the latest app features. For the best experience, please use a modern browser like Google Chrome, Firefox, or update your device.)
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => (window.location.href = 'https://www.google.com/chrome/')}>
            Download Chrome
          </AlertDialogAction>
          <AlertDialogAction onClick={() => {
            // This is a dummy action as we can't force close the dialog.
            // The dialog is controlled by the parent's state.
            // For a simple warning, we could just let the user continue.
          }}>
            Continue Anyway
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LegacyDeviceWarning;
