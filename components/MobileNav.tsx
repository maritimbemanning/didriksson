"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-neutral-800 transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-0.5 w-6 bg-neutral-800 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-6 bg-neutral-800 transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Menu */}
          <nav className="fixed top-16 left-0 right-0 bg-white border-b border-neutral-200 shadow-xl z-50">
            <div className="flex flex-col p-6 space-y-1">
              <a
                href="/tjenester"
                className="text-neutral-700 hover:text-ocean hover:bg-ocean/5 py-3 px-4 rounded-xl font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                Tjenester & Priser
              </a>
              <a
                href="/eksempler"
                className="text-neutral-700 hover:text-ocean hover:bg-ocean/5 py-3 px-4 rounded-xl font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                Eksempler
              </a>
              <a
                href="/case"
                className="text-neutral-700 hover:text-ocean hover:bg-ocean/5 py-3 px-4 rounded-xl font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                Resultater
              </a>
              <a
                href="/book"
                className="text-neutral-700 hover:text-ocean hover:bg-ocean/5 py-3 px-4 rounded-xl font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                Book gratis møte
              </a>
              <a
                href="/kontakt"
                className="text-neutral-700 hover:text-ocean hover:bg-ocean/5 py-3 px-4 rounded-xl font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                Kontakt
              </a>
              <div className="pt-4 border-t border-neutral-100 mt-2">
                <a
                  href="tel:+4792328850"
                  className="flex items-center justify-center gap-2 bg-ocean text-white py-3 px-4 rounded-xl font-semibold"
                  onClick={() => setOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ring 923 28 850
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
