'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '4792328850';
  const message = encodeURIComponent('Hei! Jeg er interessert i å høre mer om nettsider.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
      aria-label="Kontakt oss på WhatsApp"
    >
      <MessageCircle className="w-6 h-6" fill="white" strokeWidth={0} />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat med oss!
      </span>

      {/* Ping animation */}
      <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full" />
    </a>
  );
}
