import { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig, metadata as siteMetadata } from '@/lib/site';

export const metadata: Metadata = {
  title: siteMetadata.results.title,
  description: siteMetadata.results.description,
};

const gallery = [
  { src: '/images/resultados/resultado-1.jpg', label: 'Transformação' },
  { src: '/images/resultados/resultado-2.jpg', label: 'Volume' },
  { src: '/images/resultados/resultado-3.jpg', label: 'Comprimento' },
  { src: '/images/resultados/resultado-4.jpg', label: 'Natural' },
  { src: '/images/resultados/resultado-5.jpg', label: 'Sofisticado' },
  { src: '/images/resultados/resultado-6.jpg', label: 'Elegante' },
  { src: '/images/resultados/resultado-7.jpg', label: 'Premium' },
  { src: '/images/resultados/resultado-8.jpg', label: 'Resultado' },
];

export default function Resultados() {
  return (
    <main className="min-h-screen" style={{ background: '#1a0f14' }}>

      {/* Hero */}
      <section
        className="relative py-12 sm:py-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0f14 0%, #2a1a20 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(152,73,92,0.25) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
              Prova Real
            </p>
            <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
          </div>
          <h1
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.03em' }}
          >
            Galeria de Transformações
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="text-lg max-w-xl mx-auto">
            Resultados reais que valorizam cada detalhe. Uma galeria de transformações feitas com técnica, cuidado e acabamento natural.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'var(--primary)' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-6 grid grid-cols-3 divide-x divide-white/20">
          {[
            { value: 'Diversas', label: 'Clientes transformadas' },
            { value: '9', label: 'Anos de experiência' },
            { value: 'Alta', label: 'Taxa de satisfação' },
          ].map((s) => (
            <div key={s.label} className="text-center px-2 sm:px-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">{s.value}</p>
              <p className="text-white/70 text-[10px] sm:text-xs font-medium mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #2a1a20 0%, #1a0f14 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>Galeria</p>
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            </div>
            <h2
              className="font-extrabold text-white"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              Resultados Reais
            </h2>
            <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Galeria completa de trabalhos realizados por Vanuza Soares Extensões Mega Hair.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group"
                style={{ aspectRatio: '1/1' }}
              >
                <Image
                  src={img.src}
                  alt={`Transformação mega hair ${img.label}`}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(26,15,20,0.85) 0%, transparent 55%)' }}
                >
                  <span className="text-white text-xs font-bold tracking-wide">{img.label}</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>@vanuzasoaresextensoes</span>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram nudge */}
          <div
            className="mt-12 rounded-2xl p-8 sm:p-10 text-center"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="font-extrabold text-white text-xl mb-2">
              Transformações reais no Instagram
            </p>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Acompanhe os trabalhos diários, novidades e resultados em primeira mão em {siteConfig.brand.instagram}
            </p>
            <a
              href={siteConfig.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, var(--primary-deep), var(--primary))' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Seguir {siteConfig.brand.instagram}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #1a0f14, #2a1a20)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>Depoimentos</p>
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            </div>
            <h2
              className="font-extrabold text-white"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              O que as clientes dizem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'Meu cabelo ficou incrível. O resultado é muito natural, parece que sempre foi assim. Super indico!', stars: 5 },
              { quote: 'Terceira vez com a Vanuza. O cuidado com cada detalhe faz toda a diferença. Sempre saio satisfeita.', stars: 5 },
              { quote: 'Cabelo fino e com o mega hair ficou com um volume lindo. Atendimento atencioso do início ao fim.', stars: 5 },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <svg key={s} className="w-4 h-4" fill="#c9a961" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic flex-grow" style={{ color: 'rgba(255,255,255,0.7)' }}>"{t.quote}"</p>
                <p className="text-xs font-semibold mt-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Cliente satisfeita</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-extrabold text-white text-3xl sm:text-4xl mb-4">
            Você é a próxima
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Agende sua avaliação gratuita e descubra qual técnica vai transformar o seu visual.
          </p>
          <a
            href={siteConfig.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg, #715B4B 0%, #CFA07A 50%, #E5C4A1 100%)' }}
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
