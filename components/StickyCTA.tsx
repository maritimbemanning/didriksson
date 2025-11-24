'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Phone } from 'lucide-react';
import { trackPhoneClick } from '../lib/tracking';

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
              <Calendar className="w-4 h-4" />
              Book møte
            </a>
            <a
              href="tel:+4792328850"
              onClick={trackPhoneClick}
              className="inline-flex items-center gap-2 border border-border hover:border-ocean text-muted hover:text-ocean px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
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
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
