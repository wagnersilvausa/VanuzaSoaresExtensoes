'use client';

import Image from 'next/image';
import Link from 'next/link';

const images = [
  { src: '/images/resultados/resultado-1.jpg', alt: 'Transformação Mega Hair resultado 1' },
  { src: '/images/resultados/resultado-2.jpg', alt: 'Transformação Mega Hair resultado 2' },
  { src: '/images/resultados/resultado-3.jpg', alt: 'Transformação Mega Hair resultado 3' },
  { src: '/images/resultados/resultado-4.jpg', alt: 'Transformação Mega Hair resultado 4' },
  { src: '/images/resultados/resultado-5.jpg', alt: 'Transformação Mega Hair resultado 5' },
  { src: '/images/resultados/resultado-6.jpg', alt: 'Transformação Mega Hair resultado 6' },
];

export function ResultsPreview() {
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1a0f14 0%, #2a1a20 100%)',
      }}
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(152,73,92,0.2) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: 'var(--gold)' }}
            >
              Prova Real
            </p>
            <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
          </div>
          <h2
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}
          >
            Transformações que falam por si só
          </h2>
          <p className="text-white/55 max-w-xl mx-auto text-base leading-relaxed">
            Resultados reais de clientes que confiaram na especialista. Cada foto é uma história de
            autoestima transformada.
          </p>
        </div>

        {/* Gallery Grid - quadrados uniformes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl group"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
                style={{
                  background:
                    'linear-gradient(to top, rgba(26,15,20,0.85) 0%, transparent 50%)',
                }}
              >
                <p className="text-white text-xs font-bold tracking-wide">
                  @vanuzasoaresextensoes
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/resultados"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94, #c9a961)' }}
          >
            Ver Galeria Completa
          </Link>
          <a
            href="https://instagram.com/vanuzasoaresextensoes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white border border-white/20 hover:border-white/50 transition-all"
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
