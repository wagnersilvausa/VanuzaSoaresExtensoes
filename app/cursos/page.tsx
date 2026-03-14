import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, metadata as siteMetadata } from '@/lib/site';

export const metadata: Metadata = {
  title: siteMetadata.courses.title,
  description: siteMetadata.courses.description,
};

const courses = [
  {
    badge: 'Iniciante',
    name: 'Curso Microlink',
    hours: '6h',
    desc: 'A porta de entrada para o mercado do mega hair. Aprenda do zero a técnica Microlink com resultado natural e profissional.',
    modules: ['Introdução ao mega hair', 'Equipamentos e materiais', 'Aplicação passo a passo', 'Acabamento natural', 'Primeiros atendimentos'],
    featured: false,
  },
  {
    badge: 'Formação',
    name: 'Curso Completo',
    hours: '14h',
    desc: 'Especialização completa em mega hair para quem quer aprender as principais técnicas do mercado e iniciar seu próprio negócio.',
    modules: [
      'Microlink (aplicação, selagem e remoção)',
      'Fita adesiva (aplicação, limpeza e manutenção)',
      'Ponto americano com base de microlink',
      'Tipos de cabelo e divisão correta dos fios',
      'Lista de fornecedores e materiais',
    ],
    bonus: [
      'Acabamento com queratina',
      'Técnica nanolink',
    ],
    structure: [
      'Curso 100% prático',
      '2 dias intensivos',
      'Prática em cabeça de treino',
      'Certificado',
    ],
    featured: true,
  },
  {
    badge: 'Intermediário',
    name: 'Curso Fita Adesiva',
    hours: '4h',
    desc: 'Domine a técnica de maior velocidade do mercado. Ideal para quem quer escalar seus atendimentos com qualidade.',
    modules: ['Tipos de fita e qualidade', 'Aplicação rápida e eficiente', 'Reposicionamento profissional', 'Cuidados e manutenção', 'Atendimento ao cliente'],
    featured: false,
  },
];

export default function Cursos() {
  return (
    <main className="min-h-screen" style={{ background: '#1a0f14' }}>

      {/* Hero */}
      <section
        className="relative py-24 sm:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0f14 0%, #2a1a20 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(152,73,92,0.3) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
              Educação Profissional
            </p>
            <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
          </div>
          <h1
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.03em' }}
          >
            Aprenda com quem vive isso
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="text-lg max-w-xl mx-auto">
            Aprenda técnicas de mega hair com quem construiu experiência real no mercado. Uma formação pensada para quem deseja atender com mais segurança e desenvolver um trabalho profissional.
          </p>
        </div>
      </section>

      {/* Authority bar */}
      <section style={{ background: 'var(--primary)' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-6 grid grid-cols-3 divide-x divide-white/20">
          {[
            { v: '9', label: 'Anos ensinando' },
            { v: 'Diversas', label: 'Alunas formadas' },
            { v: '3', label: 'Técnicas dominadas' },
          ].map((s) => (
            <div key={s.label} className="text-center px-2 sm:px-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">{s.v}</p>
              <p className="text-white/70 text-[10px] sm:text-xs font-medium mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #2a1a20 0%, #1a0f14 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>Cursos</p>
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            </div>
            <h2
              className="font-extrabold text-white"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              Cursos disponíveis
            </h2>
            <p className="mt-3 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Escolha o nível ideal para o seu momento. Do iniciante ao avançado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {courses.map((c, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${c.featured ? 'md:scale-[1.03] md:-my-2' : ''}`}
                style={
                  c.featured
                    ? {
                        background: 'linear-gradient(145deg, #5a2e3e, #98495C)',
                        boxShadow: '0 16px 60px rgba(152,73,92,0.35)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }
                }
              >
                {c.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94)', color: '#1a0f14' }}
                  >
                    Mais completo
                  </div>
                )}

                <span
                  className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-5 w-fit"
                  style={
                    c.featured
                      ? { background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }
                      : { background: 'rgba(201,169,97,0.12)', color: 'var(--gold)' }
                  }
                >
                  {c.badge}
                </span>

                <h3 className="text-2xl font-extrabold text-white mb-1">
                  {c.name}
                </h3>
                <p className="text-sm font-bold mb-4" style={{ color: c.featured ? 'var(--gold-light)' : 'var(--gold)' }}>
                  {c.hours} de curso
                </p>
                <p
                  className="text-sm leading-relaxed mb-6 flex-grow"
                  style={{ color: c.featured ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.6)' }}
                >
                  {c.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {c.modules.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-2 text-xs font-medium"
                      style={{ color: c.featured ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.55)' }}
                    >
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        style={{ color: c.featured ? 'rgba(201,169,97,0.9)' : 'var(--gold)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {m}
                    </li>
                  ))}
                </ul>

                {c.featured && c.bonus && (
                  <div className="mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>🎁 Bônus:</p>
                    <ul className="space-y-2">
                      {c.bonus.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2 text-xs font-medium"
                          style={{ color: 'rgba(255,255,255,0.75)' }}
                        >
                          <span style={{ color: 'var(--gold)' }}>•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {c.featured && c.structure && (
                  <div className="mb-8">
                    <ul className="space-y-2">
                      {c.structure.map((s) => (
                        <li
                          key={s}
                          className="flex items-center gap-2 text-xs font-medium"
                          style={{ color: 'rgba(255,255,255,0.75)' }}
                        >
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            style={{ color: 'rgba(201,169,97,0.9)' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {!c.featured && (
                  <div className="mb-8" />
                )}

                <a
                  href={
                    c.featured
                      ? `${siteConfig.brand.whatsapp}?text=Olá! Gostaria de conhecer mais sobre o Curso Completo de Mega Hair. Qual é o investimento e as próximas datas disponíveis?`
                      : siteConfig.brand.whatsapp
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-[1.03]"
                  style={
                    c.featured
                      ? { background: 'linear-gradient(135deg, #715B4B 0%, #CFA07A 50%, #E5C4A1 100%)' }
                      : { background: 'rgba(201,169,97,0.12)', color: 'var(--gold)', border: '1px solid rgba(201,169,97,0.25)' }
                  }
                >
                  {c.featured ? 'Falar no WhatsApp' : 'Solicitar informações'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why learn */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #1a0f14, #2a1a20)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>Benefícios</p>
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            </div>
            <h2
              className="font-extrabold text-white"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              O que você ganha com os cursos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Conhecimento Real', desc: 'Aprenda com quem pratica diariamente. Sem teoria vaga, só prática que funciona no mercado.' },
              { title: 'Certificação', desc: 'Certificado oficial de formação para apresentar aos seus clientes e validar sua especialização.' },
              { title: 'Renda Real', desc: 'Oportunidade concreta de gerar renda mensal significativa com uma profissão de alta demanda.' },
              { title: 'Suporte Contínuo', desc: 'Você não fica sozinha depois do curso. Nossa comunidade oferece suporte e troca de experiências.' },
              { title: 'Metodologia Prática', desc: 'Cada aula inclui demonstração ao vivo e prática supervisionada com feedback direto.' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)' }}
                />
                <h3 className="text-white font-extrabold text-base mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-extrabold text-white text-3xl sm:text-4xl mb-4">
            Pronta para começar?
          </h2>
          <p className="text-white/80 mb-8">
            Fale pelo WhatsApp para saber sobre datas, turmas e investimento. Respondemos com atenção.
          </p>
          <a
            href={siteConfig.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg, #715B4B 0%, #CFA07A 50%, #E5C4A1 100%)' }}
          >
            Falar sobre cursos no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
