'use client';

import dynamic from 'next/dynamic';

// Lazy load non-critical client-only components
const WhatsAppButton = dynamic(() => import('./WhatsAppButton'), { ssr: false });
const ChristmasSnow = dynamic(() => import('./ChristmasSnow'), { ssr: false });
const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });

export default function ClientOnlyComponents() {
  return (
    <>
      <WhatsAppButton />
      <ChristmasSnow />
      <CookieConsent />
    </>
  );
}
