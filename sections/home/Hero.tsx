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
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94, #c9a961)' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.361.214-3.741-.982.998 3.648-.235.374a9.86 9.86 0 00-1.51 5.26c.001 5.45 4.436 9.884 9.888 9.884 2.64 0 5.122-1.03 6.988-2.898a9.825 9.825 0 002.893-6.994c-.003-5.45-4.437-9.884-9.885-9.884m.084 17.804c-1.63 0-3.217-.438-4.608-1.265l-.331-.196-3.428.899.917-3.348-.215-.344a8.233 8.233 0 01-1.262-4.381c0-4.558 3.712-8.268 8.276-8.268 2.209 0 4.282.861 5.843 2.423a8.22 8.22 0 012.416 5.849c-.002 4.56-3.713 8.271-8.275 8.271z"/>
              </svg>
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
