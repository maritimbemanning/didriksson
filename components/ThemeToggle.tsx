'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  // Render placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card transition-colors"
        aria-label="Bytt tema"
      >
        <Moon className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card transition-colors"
      aria-label={resolvedTheme === 'dark' ? 'Bytt til lyst tema' : 'Bytt til mørkt tema'}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
