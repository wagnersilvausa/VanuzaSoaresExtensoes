import { Metadata } from 'next';
import { siteConfig, metadata as siteMetadata } from '@/lib/site';

export const metadata: Metadata = {
  title: siteMetadata.history.title,
  description: siteMetadata.history.description,
};

const timeline = [
  { year: '2017', title: 'O Começo', desc: 'Uma ideia de renda extra que nasceu com paixão. Os primeiros clientes, o primeiro aprendizado, a descoberta do propósito.' },
  { year: '2018', title: 'Especialização', desc: 'Investimento em cursos, técnicas avançadas e aperfeiçoamento constante. Mega hair virou vocação.' },
  { year: '2019', title: 'Consolidação', desc: 'A clientela cresce, os resultados falam por si. A marca começa a ganhar identidade própria.' },
  { year: '2020', title: 'Superação', desc: 'A pandemia trouxe desafios. Mas a constância e a fé mantiveram o negócio e o propósito de pé.' },
  { year: '2021/22', title: 'Renascimento', desc: 'De volta ao ritmo pleno. Novos clientes, novas técnicas, crescimento orgânico nas redes sociais.' },
  { year: '2024-25', title: 'Expansão', desc: 'Novas turmas de cursos, mais clientes atendidas e reconhecimento crescente da marca nas redes sociais.' },
  { year: '2026', title: 'Hoje', desc: '9 anos, 11 mil seguidoras, 5 mil clientes transformadas. Uma marca sólida com história real.' },
];

export default function NossaHistoria() {
  return (
    <main className="min-h-screen" style={{ background: '#1a0f14' }}>

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0f14 0%, #2a1a20 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(152,73,92,0.3) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
                Nossa Trajetória
              </p>
            </div>
            <h1
              className="font-extrabold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.03em' }}
            >
              9 anos construindo com propósito
            </h1>
            <p className="text-white/60 text-lg max-w-lg">
              Uma história real de esforço, transformação e a descoberta de que trabalhar com mega hair
              era muito mais que um negócio, era uma missão.
            </p>
          </div>
        </div>
      </section>

      {/* Intro story */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #2a1a20 0%, #1a0f14 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-extrabold text-white mb-8 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
              >
                De renda extra a profissão com propósito
              </h2>
              <div className="space-y-5 leading-relaxed text-base sm:text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <p>
                  Tudo começou de uma forma simples: a necessidade de complementar a renda. Mas o que parecia
                  uma solução temporária revelou um talento genuíno e uma vocação real.
                </p>
                <p>
                  Ao entrar no universo do mega hair, Vanuza descobriu que transformar cabelos era, na verdade,
                  transformar autoestima. Cada cliente que saía com o resultado no espelho era uma confirmação:
                  esse era o caminho.
                </p>
                <p>
                  Com esforço, persistência e constância, o que era renda extra virou profissão principal.
                  A marca foi crescendo, os clientes voltando, e os resultados falando por si só.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '9', u: 'anos', desc: 'De experiência profissional e aperfeiçoamento constante' },
                { v: '11K', u: 'seguidoras', desc: 'Comunidade que cresce organicamente com confiança' },
                { v: '5K+', u: 'clientes', desc: 'Transformações reais ao longo de toda a trajetória' },
                { v: '3', u: 'técnicas', desc: 'Dominadas com maestria: Microlink, Fita e Ponto' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p className="text-3xl font-extrabold leading-none mb-1" style={{ color: 'var(--gold)' }}>
                    {s.v}
                  </p>
                  <p className="text-sm font-bold mb-2" style={{ color: 'var(--secondary)' }}>
                    {s.u}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #1a0f14, #2a1a20)' }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>Trajetória</p>
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            </div>
            <h2
              className="font-extrabold text-white"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              A linha do tempo
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,169,97,0.4), transparent)' }}
            />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-8">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10"
                    style={{ background: 'linear-gradient(135deg, var(--primary-deep), var(--primary))' }}
                  />
                  <div
                    className="flex-grow rounded-2xl p-6"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-extrabold" style={{ color: 'var(--gold)' }}>{item.year}</span>
                      <span className="text-white font-bold">{item.title}</span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #2a1a20 0%, #1a0f14 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>Valores</p>
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            </div>
            <h2
              className="font-extrabold text-white"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              O que nos guia
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Esforço & Persistência', desc: 'Cada desafio foi uma oportunidade de crescer. A constância é a base de tudo que construímos.' },
              { title: 'Qualidade Inegociável', desc: 'Técnicas avançadas, materiais premium e atenção total a cada detalhe em cada atendimento.' },
              { title: 'Transformação Real', desc: 'Não é só cabelo. É autoestima, confiança e mulheres se sentindo do jeito que merecem.' },
              { title: 'Propósito & Cuidado', desc: 'Cada cliente é importante. Cada atendimento é um compromisso real com excelência e carinho.' },
            ].map((v, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)' }}
                />
                <h3 className="font-extrabold text-xl text-white mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{v.desc}</p>
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
          <h2
            className="font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            Faça parte dessa história
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Agende sua consulta e junte-se às milhares de mulheres que já confiaram em Vanuza Soares.
          </p>
          <a
            href={siteConfig.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94)', color: '#1a0f14' }}
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
