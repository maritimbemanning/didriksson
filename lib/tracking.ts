'use client';

import { useEffect } from 'react';

// Tracking events for conversions
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  // Google Analytics event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }

  // Meta Pixel event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params);
  }
};

// Specific conversion events
export const trackPhoneClick = () => {
  trackEvent('Contact', { method: 'phone' });
  // Meta standard event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Contact');
  }
};

export const trackCalendlyClick = () => {
  trackEvent('Lead', { method: 'calendly' });
  // Meta standard event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Schedule');
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
  // Meta standard event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'AddToCart', {
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
