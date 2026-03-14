import { Metadata } from 'next';
import { siteConfig, metadata as siteMetadata } from '@/lib/site';

export const metadata: Metadata = {
  title: siteMetadata.techniques.title,
  description: siteMetadata.techniques.description,
};

const techniques = [
  {
    num: '01',
    name: 'Microlink',
    slogan: 'Discreta. Natural. Duradoura.',
    duration: '2 a 6h',
    durability: '2 a 3 meses',
    desc: 'Alongamento com aplicação estratégica e acabamento discreto. Anilhas metálicas fixam as mechas fio a fio, sem cola e sem calor, preservando os fios naturais com resultado sofisticado.',
    advantages: [
      'Sem cola ou calor nos cabelos',
      'Resultado natural e indetectável',
      'Ótima para cabelos médios e finos',
      'Alta durabilidade',
      'Fácil de fazer a manutenção',
    ],
    care: [
      'Use shampoo livre de sulfato',
      'Evite água muito quente',
      'Penteie com cuidado da ponta para a raiz',
      'Durma com cabelo preso',
      'Manutenção a cada 2 a 3 meses',
    ],
  },
  {
    num: '02',
    name: 'Fita Adesiva',
    slogan: 'Rápida. Leve. Confortável.',
    duration: '1 a 2h',
    durability: '1 a 2 meses',
    desc: 'Técnica versátil que oferece rapidez na aplicação, conforto no dia a dia e excelente adaptação ao visual natural. Ideal para quem busca praticidade sem abrir mão do resultado.',
    advantages: [
      'Aplicação rápida e sem dor',
      'Confortável no dia a dia',
      'Ideal para cabelos finos',
      'Resultado muito natural',
      'Fácil manutenção e reposicionamento',
    ],
    care: [
      'Produto removedor específico para reposicionar',
      'Evite cremes oleosos na raiz',
      'Seque bem após lavar',
      'Evite sauna e piscina com frequência',
      'Reposicione a cada 1 a 2 meses',
    ],
  },
  {
    num: '03',
    name: 'Ponto Americano',
    slogan: 'Clássica. Forte. Impactante.',
    duration: '1 a 4h',
    durability: '2 a 3 meses',
    desc: 'Método clássico pensado para proporcionar firmeza, segurança e um resultado bonito com boa distribuição dos fios. Indicado para quem busca volume, comprimento e durabilidade.',
    advantages: [
      'Maior durabilidade entre as técnicas',
      'Ótimo para cabelos grossos',
      'Grande volume e comprimento',
      'Versatilidade de penteados',
    ],
    care: [
      'Evite tranças ou rabos apertados',
      'Use produtos sem óleo na raiz',
      'Manutenção a cada 2 a 3 meses',
    ],
  },
];

export default function Tecnicas() {
  return (
    <main className="min-h-screen" style={{ background: '#1a0f14' }}>

      {/* Hero */}
      <section
        className="relative py-12 sm:py-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0f14 0%, #2a1a20 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(152,73,92,0.25) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
              Especialização Técnica
            </p>
            <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
          </div>
          <h1
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.03em' }}
          >
            Técnicas Profissionais
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="text-lg max-w-xl mx-auto">
            Cada atendimento começa com uma avaliação cuidadosa, passa pela escolha da técnica ideal
            e segue com aplicação profissional, foco no acabamento e orientação para manutenção.
          </p>
        </div>
      </section>

      {/* Techniques */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #2a1a20 0%, #1a0f14 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-16 sm:space-y-24">
          {techniques.map((t, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-start"
            >
              {/* Main info */}
              <div className={`lg:col-span-3 ${i % 2 !== 0 ? 'md:order-2 lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-[0.15em]" style={{ color: 'var(--gold)' }}>
                    {t.num}
                  </span>
                  <div className="h-px flex-1" style={{ background: 'rgba(201,169,97,0.3)' }} />
                </div>
                <h2
                  className="font-extrabold text-white mb-1 leading-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
                >
                  {t.name}
                </h2>
                <p className="font-bold text-base mb-6" style={{ color: 'var(--secondary)' }}>
                  {t.slogan}
                </p>
                <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>{t.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-extrabold text-sm text-white uppercase tracking-wide mb-4">
                      Vantagens
                    </h4>
                    <ul className="space-y-2">
                      {t.advantages.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--gold)' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white uppercase tracking-wide mb-4">
                      Cuidados
                    </h4>
                    <ul className="space-y-2">
                      {t.care.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          <span style={{ color: 'var(--gold)' }} className="font-bold flex-shrink-0">→</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Side stats */}
              <div className={`lg:col-span-2 space-y-4 ${i % 2 !== 0 ? 'md:order-1 lg:order-1' : ''}`}>
                <div
                  className="rounded-2xl p-7 text-center"
                  style={{ background: 'linear-gradient(135deg, var(--primary-deep), var(--primary))' }}
                >
                  <p className="text-white/70 text-xs font-bold uppercase tracking-wide mb-2">
                    Tempo de Aplicação
                  </p>
                  <p className="text-4xl font-extrabold text-white">{t.duration}</p>
                </div>
                <div
                  className="rounded-2xl p-7 text-center"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Durabilidade
                  </p>
                  <p className="text-3xl font-extrabold" style={{ color: 'var(--gold)' }}>
                    {t.durability}
                  </p>
                </div>
                <a
                  href={siteConfig.brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-4 rounded-2xl text-sm font-bold text-white transition-all hover:scale-[1.03]"
                  style={{ background: 'linear-gradient(135deg, #715B4B 0%, #CFA07A 50%, #E5C4A1 100%)' }}
                >
                  Agendar {t.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Evaluation section */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #1a0f14, #2a1a20)' }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
                  Processo
                </p>
              </div>
              <h2
                className="font-extrabold text-white mb-6 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
              >
                Avaliação e escolha da técnica ideal
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Antes de qualquer procedimento, fazemos uma avaliação completa do seu cabelo:
                tipo, textura, espessura, condições do couro cabeludo e seu estilo de vida.
              </p>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Só depois recomendamos a técnica ideal. Resultado natural é inegociável.
                Cada atendimento é personalizado para a sua necessidade.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { step: '01', label: 'Avaliação', desc: 'Análise completa do cabelo natural' },
                { step: '02', label: 'Recomendação', desc: 'Técnica ideal para seu perfil' },
                { step: '03', label: 'Aplicação', desc: 'Procedimento com cuidado profissional' },
                { step: '04', label: 'Orientações', desc: 'Cuidados para prolongar os resultados' },
              ].map((s) => (
                <div
                  key={s.step}
                  className="flex items-center gap-5 rounded-2xl p-5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="text-2xl font-extrabold flex-shrink-0" style={{ color: 'var(--gold)' }}>
                    {s.step}
                  </span>
                  <div>
                    <p className="text-white font-bold text-sm">{s.label}</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-extrabold text-white text-3xl sm:text-4xl mb-4">
            Qual técnica é a sua?
          </h2>
          <p className="text-white/80 mb-8">
            Agende uma avaliação gratuita e descubra juntas qual técnica vai transformar o seu visual.
          </p>
          <a
            href={siteConfig.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg, #715B4B 0%, #CFA07A 50%, #E5C4A1 100%)' }}
          >
            Agendar Avaliação Gratuita
          </a>
        </div>
      </section>
    </main>
  );
}
