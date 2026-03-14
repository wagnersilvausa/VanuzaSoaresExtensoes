'use client';

import { siteConfig } from '@/lib/site';

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
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
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-white transition-all hover:scale-105 hover:shadow-gold"
            style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94, #c9a961)' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.361.214-3.741-.982.998 3.648-.235.374a9.86 9.86 0 00-1.51 5.26c.001 5.45 4.436 9.884 9.888 9.884 2.64 0 5.122-1.03 6.988-2.898a9.825 9.825 0 002.893-6.994c-.003-5.45-4.437-9.884-9.885-9.884m.084 17.804c-1.63 0-3.217-.438-4.608-1.265l-.331-.196-3.428.899.917-3.348-.215-.344a8.233 8.233 0 01-1.262-4.381c0-4.558 3.712-8.268 8.276-8.268 2.209 0 4.282.861 5.843 2.423a8.22 8.22 0 012.416 5.849c-.002 4.56-3.713 8.271-8.275 8.271z"/>
            </svg>
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

        <p className="text-white/30 text-xs mt-10 tracking-wide">
          {siteConfig.brand.name} · {siteConfig.brand.instagram}
        </p>
      </div>
    </section>
  );
}
