'use client';

import { useEffect } from 'react';

// Crisp er gratis for 1 bruker - registrer deg på crisp.chat
// Bytt ut CRISP_WEBSITE_ID med din egen ID
const CRISP_WEBSITE_ID = 'YOUR_CRISP_WEBSITE_ID';

export default function CrispChat() {
  useEffect(() => {
    // Ikke last hvis ID ikke er satt
    if (CRISP_WEBSITE_ID === 'YOUR_CRISP_WEBSITE_ID') {
      console.log('Crisp: Sett CRISP_WEBSITE_ID i CrispChat.tsx');
      return;
    }

    // @ts-expect-error Crisp global
    window.$crisp = [];
    // @ts-expect-error Crisp global
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const crispElements = document.querySelectorAll('[class*="crisp"]');
      crispElements.forEach(el => el.remove());
    };
  }, []);

  return null;
}
