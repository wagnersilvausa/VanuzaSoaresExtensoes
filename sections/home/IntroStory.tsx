'use client';

import Link from 'next/link';

export function IntroStory() {
  return (
    <section className="bg-brand-dark text-white py-24 sm:py-32 relative overflow-hidden">

      {/* Subtle brand texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 80% 50%, rgba(152,73,92,0.35) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Texto ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: 'var(--gold)' }}
              >
                Nossa Trajetória
              </p>
            </div>

            <h2
              className="font-extrabold text-white mb-8 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}
            >
              De renda extra a propósito de vida
            </h2>

            <div className="space-y-5 text-white/65 font-medium leading-relaxed text-base sm:text-lg">
              <p>
                O que começou como uma forma de complementar a renda se tornou muito mais que um negócio.
                Especializando-se em mega hair, Vanuza encontrou um propósito real: transformar vidas
                através da autoestima.
              </p>
              <p>
                São 9 anos de dedicação, esforço constante e perseverança, atravessando mudanças de espaço,
                desafios, pandemia, sempre com a mesma entrega de qualidade para cada cliente.
              </p>
              <p>
                Hoje, com mais de{' '}
                <span className="text-white font-bold">11 mil seguidoras</span> e{' '}
                <span className="text-white font-bold">5 mil clientes atendidas</span>, a marca é
                sinônimo de confiança e especialização em mega hair.
              </p>
            </div>

            <Link
              href="/nossa-historia"
              className="inline-flex items-center gap-2 mt-10 text-sm font-bold border-b pb-0.5 transition-colors"
              style={{ color: 'var(--gold)', borderColor: 'rgba(201,169,97,0.3)' }}
            >
              Conhecer a história completa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* ── Stats ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              {
                value: '+9',
                suffix: '',
                label: 'anos de mercado',
                sub: 'Dedicação constante e aperfeiçoamento contínuo',
              },
              {
                value: '3',
                suffix: '',
                label: 'técnicas certificadas',
                sub: 'Microlink, Fita Adesiva e Ponto Americano',
              },
              {
                value: '100%',
                suffix: '',
                label: 'atendimento personalizado',
                sub: 'Cada cliente tratada de forma única e exclusiva',
                small: true,
              },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-6 rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex-shrink-0">
                  <span className="stat-number" style={s.small ? { fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' } : {}}>{s.value}</span>
                  <span
                    className="text-lg font-bold"
                    style={{ color: 'var(--gold)' }}
                  >
                    {s.suffix}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{s.label}</p>
                  <p className="text-white/45 text-xs mt-1">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
