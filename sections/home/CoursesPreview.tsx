'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const courses = [
  {
    badge: 'Iniciante',
    name: 'Microlink',
    hours: '6h',
    desc: 'A porta de entrada para o mercado do mega hair. Técnica discreta, resultado incrivelmente natural.',
    highlights: ['Equipamentos inclusos', 'Material didático', 'Certificado'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    badge: 'Intermediário',
    name: 'Fita Adesiva',
    hours: '4h',
    desc: 'Aplicação rápida com alto rendimento. Técnica ideal para escalar seu atendimento com qualidade.',
    highlights: ['Prática com modelo', 'Suporte pós-curso', 'Certificado'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    badge: 'Formação Completa',
    name: 'Curso Completo',
    hours: '20h',
    desc: 'Todas as técnicas, atendimento, gestão e marketing para abrir seu negócio com confiança.',
    highlights: ['Todas as técnicas', 'Mentoria inclusa', 'Certificado premium'],
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export function CoursesPreview() {
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #2a1a20 0%, #1a0f14 100%)' }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(152,73,92,0.15) 0%, transparent 60%)',
        }}
      />

      {/* Gold top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,97,0.3), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
                Educação Profissional
              </p>
            </div>
            <h2
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}
            >
              Aprenda com quem faz
            </h2>
          </div>
          <Link
            href="/cursos"
            className="text-sm font-bold whitespace-nowrap pb-0.5 border-b transition-opacity hover:opacity-70"
            style={{ color: 'var(--gold)', borderColor: 'rgba(201,169,97,0.3)' }}
          >
            Ver todos os cursos →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {courses.map((c, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-8 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={
                c.featured
                  ? {
                      background: 'linear-gradient(145deg, #5a2e3e 0%, #98495C 100%)',
                      boxShadow: '0 16px 60px rgba(152,73,92,0.4)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {/* Shine */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
                }}
              />

              {/* Featured tag */}
              {c.featured && (
                <div
                  className="absolute top-0 right-6 px-3 py-1 rounded-b-lg text-[10px] font-extrabold uppercase tracking-widest"
                  style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94)', color: '#1a0f14' }}
                >
                  Mais completo
                </div>
              )}

              {/* Icon + badge */}
              <div className="flex items-center justify-between mb-6 mt-2">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: c.featured ? 'rgba(255,255,255,0.15)' : 'rgba(152,73,92,0.2)',
                    color: c.featured ? '#fff' : 'var(--gold)',
                  }}
                >
                  {c.icon}
                </div>
                <span
                  className="text-[10px] font-bold px-3 py-1.5 rounded-full"
                  style={{
                    background: c.featured ? 'rgba(255,255,255,0.15)' : 'rgba(201,169,97,0.1)',
                    color: c.featured ? 'rgba(255,255,255,0.9)' : 'var(--gold)',
                  }}
                >
                  {c.badge}
                </span>
              </div>

              {/* Name + hours */}
              <div className="flex items-baseline gap-2 mb-3">
                <h3 className="text-2xl font-extrabold text-white">{c.name}</h3>
                <span
                  className="text-sm font-bold"
                  style={{ color: c.featured ? 'rgba(255,255,255,0.6)' : 'var(--gold)' }}
                >
                  {c.hours}
                </span>
              </div>

              <p
                className="text-sm leading-relaxed mb-6 flex-grow"
                style={{ color: c.featured ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.5)' }}
              >
                {c.desc}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-8">
                {c.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-xs font-semibold"
                    style={{ color: c.featured ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)' }}
                  >
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      style={{ color: c.featured ? 'rgba(201,169,97,0.9)' : 'var(--gold)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={siteConfig.brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
                style={
                  c.featured
                    ? { background: 'linear-gradient(135deg, #c9a961, #e4cc94)', color: '#1a0f14' }
                    : { background: 'rgba(255,255,255,0.07)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }
                }
              >
                Saber Mais
              </a>

              {/* Bottom accent */}
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
            href="/cursos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94)', color: '#1a0f14' }}
          >
            Explorar Todos os Cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
