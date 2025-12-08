'use client';

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const THEME_STORAGE_KEY = 'theme';
const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const isTheme = (value: string | null): value is Theme =>
  value === 'light' || value === 'dark' || value === 'system';

const getStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(stored) ? stored : null;
};

const getSystemPreference = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }
  return window.matchMedia(DARK_MEDIA_QUERY).matches ? 'dark' : 'light';
};

const subscribeToSystemPreference = (callback: () => void) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);
  const listener = () => callback();
  mediaQuery.addEventListener('change', listener);

  return () => {
    mediaQuery.removeEventListener('change', listener);
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemTheme = useSyncExternalStore(
    subscribeToSystemPreference,
    getSystemPreference,
    () => 'light'
  );

  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme() ?? 'light');
  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  // Return default values during SSR/static generation
  if (context === undefined) {
    return {
      theme: 'system' as const,
      setTheme: () => {},
      resolvedTheme: 'light' as const,
    };
  }
  return context;
}
