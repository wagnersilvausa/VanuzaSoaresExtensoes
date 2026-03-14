'use client';

import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-brand-dark">

      {/* ── Foto mobile: fundo completo ── */}
      <div className="block sm:hidden absolute inset-0 z-0">
        <Image
          src="/images/hero-vanuza.jpg"
          alt="Vanuza Soares Especialista em Mega Hair"
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ objectPosition: 'center top' }}
        />
      </div>

      {/* ── Foto desktop: metade direita ── */}
      <div className="hidden sm:block absolute top-[12%] bottom-0 right-0 w-3/5 z-0">
        <Image
          src="/images/hero-vanuza.jpg"
          alt="Vanuza Soares Especialista em Mega Hair"
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ filter: 'brightness(0.7)', objectPosition: 'center 30%' }}
        />
      </div>

      {/* ── Overlay mobile: escuro sobre a foto ── */}
      <div
        className="block sm:hidden absolute inset-0 z-10"
        style={{ background: 'rgba(26,15,20,0.7)' }}
      />

      {/* ── Overlay desktop: gradiente da esquerda (sólido) para a direita (transparente) ── */}
      <div
        className="hidden sm:block absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(26,15,20,1) 0%, rgba(26,15,20,1) 30%, rgba(26,15,20,0.6) 55%, rgba(26,15,20,0.1) 100%)',
        }}
      />

      {/* ── Linha decorativa esquerda ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #c9a961, transparent)' }}
      />

      {/* ── Conteúdo ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-2xl">

          {/* Eyebrow badge */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div
              className="h-px w-10"
              style={{ background: 'var(--gold)' }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: 'var(--gold)' }}
            >
              Especialista em Mega Hair
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-extrabold leading-none text-white mb-6 animate-fade-up delay-100"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.03em' }}
          >
            Mega hair com{' '}
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #c9a961, #e4cc94, #c9a961)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              transformação real.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/75 font-medium leading-relaxed mb-10 animate-fade-up delay-200"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '520px' }}
          >
            Técnicas avançadas, acabamento natural e atendimento profissional para valorizar sua beleza, sua confiança e sua autoestima.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14 animate-fade-up delay-300">
            <a
              href={siteConfig.brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg, #715B4B 0%, #CFA07A 50%, #E5C4A1 100%)' }}
            >
              Agendar pelo WhatsApp
            </a>
            <Link
              href="/resultados"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm text-white border border-white/25 hover:border-white/60 transition-all hover:bg-white/5"
            >
              Ver Transformações
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Métricas */}
          <div
            className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-up delay-500"
          >
            {[
              { value: '9', label: 'Anos de Experiência' },
              { value: '11K', label: 'Seguidores' },
              { value: 'Alta', label: 'Taxa de Satisfação' },
            ].map((m) => (
              <div key={m.label}>
                <p className="font-extrabold text-3xl leading-none" style={{ color: 'var(--gold)' }}>
                  {m.value}
                </p>
                <p className="text-xs font-semibold text-white/55 mt-1 tracking-wide">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">scroll</span>
        <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
