'use client';

import { useState, useEffect } from 'react';
import { trackPhoneClick } from '../lib/tracking';

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Vis etter 400px scroll
      const shouldShow = window.scrollY > 400;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.3)] animate-slide-up">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Message */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <p className="text-sm font-medium text-foreground">
              Desembertilbud: <span className="text-emerald-600 dark:text-emerald-400 font-bold">10 000 kr</span> <span className="text-muted text-xs">(spar 5 000 kr)</span>
            </p>
          </div>

          {/* Mobile message */}
          <div className="sm:hidden flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">10 000 kr</span>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/book"
              className="inline-flex items-center gap-2 bg-ocean hover:bg-ocean-dark text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-ocean/20 hover:shadow-ocean/30"
            >
              <CalendarIcon className="w-4 h-4" />
              <span className="hidden xs:inline">Book møte</span>
              <span className="xs:hidden">Book</span>
            </a>
            <a
              href="tel:+4792328850"
              onClick={trackPhoneClick}
              className="inline-flex items-center gap-2 border border-border hover:border-ocean bg-card text-foreground hover:text-ocean px-4 py-2.5 rounded-xl font-semibold text-sm transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">923 28 850</span>
            </a>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="text-muted hover:text-foreground transition-colors p-1.5 hover:bg-card rounded-lg"
            aria-label="Lukk"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
