'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show after 1 second
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slide-up">
      <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-foreground">🍪 Informasjonskapsler</h3>
          <p className="text-sm text-muted">
            Vi bruker Plausible Analytics (uten cookies) for anonym statistikk. Ingen persondata samles inn eller deles med tredjeparter.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-ocean hover:bg-ocean-dark text-white px-4 py-2 rounded-xl font-semibold transition-colors text-sm"
          >
            Forstått
          </button>
          <a
            href="/personvern"
            className="px-4 py-2 text-sm text-muted hover:text-ocean transition-colors"
          >
            Les mer
          </a>
        </div>
      </div>
    </div>
  );
}
