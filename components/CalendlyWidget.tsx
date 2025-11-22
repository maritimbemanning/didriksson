'use client';

import { useEffect, useState } from 'react';
import { trackCalendlyClick } from '../lib/tracking';

interface CalendlyWidgetProps {
  variant?: 'popup' | 'inline';
  buttonText?: string;
  buttonClassName?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: { url: string; parentElement: HTMLElement; prefill?: object }) => void;
    };
  }
}

export default function CalendlyWidget({
  variant = 'popup',
  buttonText = 'Book gratis strategimøte',
  buttonClassName = ''
}: CalendlyWidgetProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/didriksson/30min';

  useEffect(() => {
    // Load Calendly script
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsScriptLoaded(true);
      document.head.appendChild(script);

      // Also add the CSS
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  const openCalendlyPopup = () => {
    trackCalendlyClick();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      // Fallback to opening in new tab
      window.open(calendlyUrl, '_blank');
    }
  };

  if (variant === 'inline') {
    return (
      <div
        className="calendly-inline-widget w-full rounded-2xl overflow-hidden shadow-xl border border-ocean/20"
        data-url={calendlyUrl}
        style={{ minWidth: '320px', height: '700px' }}
      />
    );
  }

  return (
    <button
      onClick={openCalendlyPopup}
      disabled={!isScriptLoaded}
      className={buttonClassName || `group inline-flex items-center gap-3 bg-gradient-to-r from-ocean to-cyan-600 text-white hover:from-ocean-dark hover:to-cyan-700 transition-all rounded-xl px-8 py-4 font-semibold text-lg shadow-xl shadow-ocean/30 hover:shadow-2xl hover:shadow-ocean/40 hover:-translate-y-1 disabled:opacity-50`}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {buttonText}
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
  );
}
