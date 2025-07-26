"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

function CustomThemeManager({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  
  const applyAutoTheme = React.useCallback(() => {
    const preference = localStorage.getItem('theme-preference');
    if (preference === 'auto' || !preference) {
      const hour = new Date().getHours();
      const newTheme = hour >= 6 && hour < 18 ? 'light' : 'dark';
      setTheme(newTheme);
    }
  }, [setTheme]);

  React.useEffect(() => {
    applyAutoTheme();
    // Check every minute to auto-switch theme if needed without a page reload
    const interval = setInterval(applyAutoTheme, 60000);
    return () => clearInterval(interval);
  }, [applyAutoTheme]);

  return <>{children}</>;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" storageKey="theme">
      <CustomThemeManager>{children}</CustomThemeManager>
    </NextThemesProvider>
  );
}
