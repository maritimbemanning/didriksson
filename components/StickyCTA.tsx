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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-lg transform transition-transform duration-300">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Message */}
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground">
              Klar for ny nettside? <span className="text-muted">Gratis strategimøte, ingen forpliktelser.</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-1 sm:flex-none justify-center sm:justify-end">
            <a
              href="/book"
              className="inline-flex items-center gap-2 bg-ocean hover:bg-ocean-dark text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-ocean/20"
            >
              <CalendarIcon className="w-4 h-4" />
              Book møte
            </a>
            <a
              href="tel:+4792328850"
              onClick={trackPhoneClick}
              className="inline-flex items-center gap-2 border border-border hover:border-ocean text-muted hover:text-ocean px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">923 28 850</span>
              <span className="sm:hidden">Ring</span>
            </a>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="text-muted hover:text-foreground transition-colors p-1"
            aria-label="Lukk"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
