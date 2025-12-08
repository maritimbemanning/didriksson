'use client';

import { useEffect } from 'react';

type TrackingPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: TrackingPayload) => void;
    fbq?: (command: 'track' | 'trackCustom', eventName: string, params?: TrackingPayload) => void;
  }
}

const hasBrowserContext = () => typeof window !== 'undefined';

// Tracking events for conversions
export const trackEvent = (eventName: string, params?: TrackingPayload) => {
  if (!hasBrowserContext()) {
    return;
  }

  window.gtag?.('event', eventName, params);
  window.fbq?.('track', eventName, params);
};

// Specific conversion events
export const trackPhoneClick = () => {
  trackEvent('Contact', { method: 'phone' });
  if (hasBrowserContext()) {
    window.fbq?.('track', 'Contact');
  }
};

export const trackCalendlyClick = () => {
  trackEvent('Lead', { method: 'calendly' });
  if (hasBrowserContext()) {
    window.fbq?.('track', 'Schedule');
  }
};

export const trackEmailClick = () => {
  trackEvent('Contact', { method: 'email' });
};

export const trackPackageView = (packageName: string, price: number) => {
  trackEvent('ViewContent', {
    content_name: packageName,
    content_category: 'Package',
    value: price,
    currency: 'NOK',
  });
};

export const trackPackageInterest = (packageName: string, price: number) => {
  trackEvent('AddToCart', {
    content_name: packageName,
    content_category: 'Package',
    value: price,
    currency: 'NOK',
  });
  if (hasBrowserContext()) {
    window.fbq?.('track', 'AddToCart', {
      content_name: packageName,
      value: price,
      currency: 'NOK',
    });
  }
};

// Hook for tracking page views in client components
export const usePageView = (pageName: string) => {
  useEffect(() => {
    trackEvent('page_view', { page_title: pageName });
  }, [pageName]);
};
