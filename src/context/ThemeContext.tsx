'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'midnight-crimson' | 'obsidian-gold' | 'tatami-emerald' | 'federal-ivory';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  availableThemes: { id: ThemeMode; label: string; dotColor: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>('midnight-crimson');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tnska_theme') as ThemeMode;
      if (saved && ['midnight-crimson', 'obsidian-gold', 'tatami-emerald', 'federal-ivory'].includes(saved)) {
        setThemeState(saved);
        document.documentElement.setAttribute('data-theme', saved);
      } else {
        document.documentElement.setAttribute('data-theme', 'midnight-crimson');
      }
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'midnight-crimson');
    }
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('tnska_theme', newTheme);
    } catch (e) {}
  };

  const availableThemes: { id: ThemeMode; label: string; dotColor: string }[] = [
    { id: 'midnight-crimson', label: 'Midnight Crimson', dotColor: '#e11d48' },
    { id: 'obsidian-gold', label: 'Obsidian Gold', dotColor: '#d4af37' },
    { id: 'tatami-emerald', label: 'Tatami Emerald', dotColor: '#10b981' },
    { id: 'federal-ivory', label: 'Federal Ivory', dotColor: '#be123c' },
  ];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
