'use client';

import { useState } from 'react';
import Image from 'next/image';
import BeforeAfterSlider from './BeforeAfterSlider';

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
        <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
          Fra 1% til 3× flere henvendelser
        </h2>
        <p className='text-lg text-muted mt-3 max-w-2xl mx-auto'>
          Se hvordan Bluecrew gikk fra en treg, utdatert nettside til et komplett system som sparer dem timer hver uke.
        </p>
      </div>

      {/* Before/After Comparison */}
      <div className='space-y-3'>
        <h3 className='text-center text-sm font-semibold text-muted uppercase tracking-wider'>
          Se forskjellen selv
        </h3>
        <BeforeAfterSlider
          beforeImage='/images/bluecrew-before.jpg'
          afterImage='/images/bluecrew-after.jpg'
          beforeLabel='Gammel side'
          afterLabel='Ny side'
        />
        <p className='text-center text-sm text-muted'>
          Dra slideren for å se transformasjonen
        </p>
      </div>

      {/* Main case study */}
      <div className='bg-card rounded-3xl p-6 md:p-10'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          {/* Screenshots carousel */}
          <div className='space-y-4'>
            <div className='relative aspect-video bg-background rounded-2xl shadow-2xl overflow-hidden border border-border'>
              <Image
                src={screenshots[activeImage].src}
                alt={screenshots[activeImage].alt}
                fill
                quality={85}
                className='object-cover object-top transition-opacity duration-300'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
            <div className='flex gap-2 justify-center'>
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`h-3 rounded-full transition-all hover-scale ${
                    activeImage === idx
                      ? 'bg-ocean w-8'
                      : 'bg-muted/50 hover:bg-muted w-3'
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
              <h3 className='text-2xl font-bold text-foreground'>Bluecrew AS</h3>
              <p className='text-muted mt-2'>
                Bemanningsselskap for maritim næring som trengte en komplett digital løsning.
              </p>
            </div>

            {/* Problem */}
            <div className='bg-red-500/10 border border-red-500/30 rounded-xl p-4'>
              <h4 className='font-semibold text-red-600 dark:text-red-400 mb-2'>Utfordringen</h4>
              <ul className='space-y-1 text-sm text-foreground'>
                <li>• Gammel nettside med 4+ sekunder lastetid</li>
                <li>• Kun 1% av besøkende tok kontakt</li>
                <li>• Manuelle prosesser tok 10+ timer i uken</li>
              </ul>
            </div>

            {/* Solution */}
            <div className='bg-green-500/10 border border-green-500/30 rounded-xl p-4'>
              <h4 className='font-semibold text-green-600 dark:text-green-400 mb-2'>Løsningen</h4>
              <ul className='space-y-1 text-sm text-foreground'>
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
                <div className='text-xs text-muted'>Flere leads</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-ocean'>85%</div>
                <div className='text-xs text-muted'>Mindre admin</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-ocean'>&lt;1s</div>
                <div className='text-xs text-muted'>Lastetid</div>
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

      {/* Testimonial */}
      <div className='bg-gradient-to-br from-ocean/5 to-cyan-500/5 border border-ocean/20 rounded-2xl p-8 md:p-10 text-center'>
        <svg className='w-12 h-12 text-ocean/30 mx-auto mb-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
        </svg>
        <blockquote className='text-xl md:text-2xl text-foreground italic max-w-2xl mx-auto leading-relaxed'>
          &quot;Isak leverte langt over forventning. Vi fikk ikke bare en nettside, men et komplett system som har transformert måten vi jobber på.&quot;
        </blockquote>
        <p className='text-muted mt-6 font-semibold'>— Daglig leder, Bluecrew AS</p>
      </div>
    </section>
  );
}
