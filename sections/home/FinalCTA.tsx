'use client';

import { siteConfig } from '@/lib/site';

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16"
      style={{ background: 'linear-gradient(135deg, #1a0f14 0%, #2a1a20 60%, #3d1e2d 100%)' }}
    >
      {/* Brand glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(152,73,92,0.35) 0%, transparent 65%)',
        }}
      />

      {/* Gold accent lines top / bottom */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,97,0.5), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,97,0.5), transparent)' }}
      />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
          <p
            className="text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: 'var(--gold)' }}
          >
            Comece sua transformação
          </p>
          <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
        </div>

        <h2
          className="font-extrabold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
        >
          Você merece se sentir{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #c9a961, #e4cc94, #c9a961)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            poderosa.
          </span>
        </h2>

        <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Agende uma consulta e descubra qual técnica de mega hair é ideal para o seu cabelo,
          seu estilo e sua autoestima.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-white transition-all hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg, #715B4B 0%, #CFA07A 50%, #E5C4A1 100%)' }}
          >
            Agendar pelo WhatsApp
          </a>
          <a
            href={siteConfig.brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white border border-white/20 hover:border-white/50 transition-all"
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
