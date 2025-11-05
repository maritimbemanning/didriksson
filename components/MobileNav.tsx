"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1 p-2"
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-5 bg-black transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`block h-0.5 w-5 bg-black transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-5 bg-black transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {open && (
        <nav className="absolute top-16 left-0 right-0 bg-white border-b border-neutral-200 shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-3">
            <a href="/tjenester" className="text-neutral-700 hover:text-ocean py-2" onClick={() => setOpen(false)}>Tjenester</a>
            <a href="/case" className="text-neutral-700 hover:text-ocean py-2" onClick={() => setOpen(false)}>Case</a>
            <a href="/kontakt" className="text-neutral-700 hover:text-ocean py-2" onClick={() => setOpen(false)}>Kontakt</a>
          </div>
        </nav>
      )}
    </div>
  );
}
