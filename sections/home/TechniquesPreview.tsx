'use client';

import Link from 'next/link';

const techniques = [
  {
    num: '01',
    name: 'Microlink',
    desc: 'Anilhas discretas que proporcionam resultado extremamente natural, sem necessidade de cola ou calor.',
    detail: 'Duração 6 a 8 semanas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Fita Adesiva',
    desc: 'Aplicação rápida e confortável. Ideal para cabelos finos que buscam volume e comprimento com leveza.',
    detail: 'Duração 4 a 6 semanas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Ponto Americano',
    desc: 'Técnica clássica com fixação forte e alta durabilidade. Perfeita para quem quer resultado de impacto.',
    detail: 'Duração 8 a 10 semanas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Manutenção',
    desc: 'Reposicionamento profissional para prolongar a vida das extensões mantendo o aspecto impecável.',
    detail: 'Garantia do investimento',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export function TechniquesPreview() {
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1a0f14 0%, #2a1a20 100%)' }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(152,73,92,0.18) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
                Especialização
              </p>
            </div>
            <h2
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}
            >
              Técnicas Profissionais
            </h2>
          </div>
          <Link
            href="/tecnicas"
            className="text-sm font-bold whitespace-nowrap pb-0.5 border-b transition-opacity hover:opacity-70"
            style={{ color: 'var(--gold)', borderColor: 'rgba(201,169,97,0.3)' }}
          >
            Ver todas as técnicas →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {techniques.map((t, i) => (
            <div
              key={t.num}
              className="group relative rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              }}
            >
              {/* Shine on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
                }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(152,73,92,0.2)', color: 'var(--gold)' }}
                >
                  {t.icon}
                </div>

                {/* Badge duração */}
                <span
                  className="text-[10px] font-bold px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(201,169,97,0.12)', color: 'var(--gold)' }}
                >
                  {t.detail}
                </span>
              </div>

              {/* Number */}
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
                style={{ color: 'rgba(201,169,97,0.5)' }}
              >
                {t.num}
              </p>

              <h3 className="text-2xl font-extrabold mb-3 text-white">
                {t.name}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {t.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/tecnicas"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94)', color: '#1a0f14' }}
          >
            Conhecer Todas as Técnicas
          </Link>
        </div>
      </div>
    </section>
  );
}
