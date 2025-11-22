'use client';

import { useState } from 'react';

export default function CaseA() {
  const [activeImage, setActiveImage] = useState(0);

  const screenshots = [
    { src: '/images/bluecrew-admin.jpg', alt: 'Bluecrew Admin Portal - Hovedmeny' },
    { src: '/images/bluecrew-import.jpg', alt: 'Bluecrew Import Management' },
    { src: '/images/bluecrew-iso.jpg', alt: 'Bluecrew ISO 9001 Internstyring' },
  ];

  return (
    <section className='space-y-8'>
      <div className='text-center'>
        <p className='text-ocean font-semibold mb-2'>Kundecase</p>
        <h2 className='text-3xl md:text-4xl font-bold text-neutral-900'>
          Fra 1% til 3× flere henvendelser
        </h2>
        <p className='text-lg text-neutral-600 mt-3 max-w-2xl mx-auto'>
          Se hvordan Bluecrew gikk fra en treg, utdatert nettside til et komplett system som sparer dem timer hver uke.
        </p>
      </div>

      {/* Main case study */}
      <div className='bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 md:p-10'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          {/* Screenshots carousel */}
          <div className='space-y-4'>
            <div className='relative aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200'>
              <img
                src={screenshots[activeImage].src}
                alt={screenshots[activeImage].alt}
                className='w-full h-full object-cover object-top'
              />
            </div>
            <div className='flex gap-2 justify-center'>
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeImage === idx
                      ? 'bg-ocean w-8'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Vis bilde ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Case details */}
          <div className='space-y-6'>
            <div>
              <div className='inline-flex items-center gap-2 bg-ocean/10 text-ocean text-sm font-semibold px-3 py-1 rounded-full mb-4'>
                <span className='w-2 h-2 bg-ocean rounded-full' />
                Maritim bemanning
              </div>
              <h3 className='text-2xl font-bold text-neutral-900'>Bluecrew AS</h3>
              <p className='text-neutral-600 mt-2'>
                Bemanningsselskap for maritim næring som trengte en komplett digital løsning.
              </p>
            </div>

            {/* Problem */}
            <div className='bg-red-50 border border-red-200 rounded-xl p-4'>
              <h4 className='font-semibold text-red-800 mb-2'>Utfordringen</h4>
              <ul className='space-y-1 text-sm text-red-700'>
                <li>• Gammel nettside med 4+ sekunder lastetid</li>
                <li>• Kun 1% av besøkende tok kontakt</li>
                <li>• Manuelle prosesser tok 10+ timer i uken</li>
              </ul>
            </div>

            {/* Solution */}
            <div className='bg-green-50 border border-green-200 rounded-xl p-4'>
              <h4 className='font-semibold text-green-800 mb-2'>Løsningen</h4>
              <ul className='space-y-1 text-sm text-green-700'>
                <li>• Ny nettside i Next.js med &lt;1s lastetid</li>
                <li>• Admin-portal for HMS og kandidathåndtering</li>
                <li>• ISO 9001 kvalitetsstyringssystem</li>
                <li>• Automatisert import og onboarding</li>
              </ul>
            </div>

            {/* Results */}
            <div className='grid grid-cols-3 gap-4'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-ocean'>3×</div>
                <div className='text-xs text-neutral-600'>Flere leads</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-ocean'>85%</div>
                <div className='text-xs text-neutral-600'>Mindre admin</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-ocean'>&lt;1s</div>
                <div className='text-xs text-neutral-600'>Lastetid</div>
              </div>
            </div>

            <a
              href='https://www.bluecrew.no/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-ocean font-semibold hover:gap-3 transition-all'
            >
              Se bluecrew.no
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Testimonial placeholder */}
      <div className='bg-ocean/5 border border-ocean/20 rounded-2xl p-8 text-center'>
        <svg className='w-10 h-10 text-ocean/40 mx-auto mb-4' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
        </svg>
        <p className='text-lg text-neutral-700 italic max-w-2xl mx-auto'>
          &quot;Isak leverte langt over forventning. Vi fikk ikke bare en nettside, men et komplett system som har transformert måten vi jobber på.&quot;
        </p>
        <p className='text-neutral-600 mt-4 font-semibold'>— Daglig leder, Bluecrew AS</p>
      </div>
    </section>
  );
}
