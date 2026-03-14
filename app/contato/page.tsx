import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, metadata as siteMetadata } from '@/lib/site';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: siteMetadata.contact.title,
  description: siteMetadata.contact.description,
};

export default function Contato() {
  return (
    <main className="min-h-screen" style={{ background: '#1a0f14' }}>

      {/* Hero */}
      <section
        className="relative py-24 sm:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0f14 0%, #2a1a20 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(152,73,92,0.25) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
              Fale Conosco
            </p>
            <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
          </div>
          <h1
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.03em' }}
          >
            Vamos conversar
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="text-lg max-w-lg mx-auto">
            Entre em contato para agendar seu atendimento, tirar dúvidas ou saber mais sobre os cursos. Será um prazer te atender.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #2a1a20 0%, #1a0f14 100%)' }}
      >
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
                Mensagem Rápida
              </p>
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
            </div>
            <h2
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}
            >
              Envie uma mensagem
            </h2>
            <p className="text-sm mt-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Preencha abaixo e enviamos direto pelo WhatsApp, rápido e sem complicação.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Contact cards */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #1a0f14 0%, #2a1a20 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-extrabold text-white"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}
            >
              Outros canais
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* WhatsApp */}
            <div
              className="rounded-2xl p-8 sm:p-10 flex flex-col items-start relative overflow-hidden"
              style={{ background: 'linear-gradient(145deg, #5a2e3e, #98495C)' }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)' }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.906.773 5.63 2.123 7.984L0 32l8.29-2.09A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.066 22.468c-.336.94-1.652 1.72-2.72 1.946-.726.155-1.673.278-4.862-1.046-4.084-1.666-6.715-5.814-6.916-6.08-.193-.267-1.618-2.155-1.618-4.11 0-1.954 1.017-2.912 1.383-3.303.336-.368.73-.46 1.017-.46.193 0 .385.002.553.01.193.01.46-.073.723.55.27.64 1.018 2.45 1.106 2.63.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.378.47-.54.63-.18.18-.367.374-.158.734.21.36.934 1.54 2.003 2.493 1.376 1.225 2.537 1.604 2.897 1.784.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1 1.024 2.46 1.21.36.18.6.27.69.42.09.15.09.84-.246 1.78z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">WhatsApp</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8 flex-grow">
                O caminho mais rápido. Respondemos no mesmo dia com atenção e carinho.
                Agende, tire dúvidas ou só diga oi!
              </p>
              <a
                href={siteConfig.brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94)', color: '#1a0f14' }}
              >
                Chamar no WhatsApp
              </a>
            </div>

            {/* Instagram */}
            <div
              className="rounded-2xl p-8 sm:p-10 flex flex-col items-start"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Instagram</h3>
              <p className="text-sm leading-relaxed mb-8 flex-grow" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Acompanhe resultados, novidades e conteúdos no Instagram oficial.
              </p>
              <a
                href={siteConfig.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
              >
                Seguir {siteConfig.brand.instagram}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info section */}
      <section
        className="py-20 sm:py-28"
        style={{ background: 'linear-gradient(180deg, #2a1a20, #1a0f14)' }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-extrabold text-white"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              Informações úteis
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">

            {/* Localização */}
            <div
              className="rounded-2xl p-7 flex flex-col items-center text-center"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span className="text-4xl block mb-4">📍</span>
              <h3 className="text-white font-extrabold text-base mb-2">Localização</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Av. José Faria da Rocha, 2122<br />
                Eldorado, Contagem - MG<br />
                CEP 32315-040
              </p>

              {/* Mini mapa */}
              <div className="w-full rounded-xl overflow-hidden mb-4" style={{ height: '160px' }}>
                <iframe
                  src="https://maps.google.com/maps?q=Av+Jos%C3%A9+Faria+da+Rocha+2122+Eldorado+Contagem+MG+Brazil&output=embed"
                  width="100%"
                  height="160"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Vanuza Soares"
                />
              </div>

              <a
                href="https://maps.google.com/?q=Av.+José+Faria+da+Rocha,+2122,+Eldorado,+Contagem,+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition-all hover:scale-105"
                style={{ background: 'rgba(201,169,97,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,169,97,0.25)' }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Abrir no Google Maps
              </a>
            </div>

            {/* Horários */}
            <div
              className="rounded-2xl p-7 flex flex-col items-center text-center"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span className="text-4xl block mb-4">⏰</span>
              <h3 className="text-white font-extrabold text-base mb-2">Horários</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Atendimento em horários flexíveis. Consulte disponibilidade pelo WhatsApp.
              </p>
            </div>

            {/* Agendamento */}
            <div
              className="rounded-2xl p-7 flex flex-col items-center text-center"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span className="text-4xl block mb-4">📅</span>
              <h3 className="text-white font-extrabold text-base mb-2">Agendamento</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Agenda com antecedência recomendada. Reserve sua vaga pelo WhatsApp.
              </p>
            </div>

          </div>

          {/* Quick nav */}
          <div>
            <h3 className="text-white font-extrabold text-xl mb-6 text-center">
              Explore o site
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {siteConfig.pages.filter(p => p.path !== '/contato').map((p) => (
                <Link
                  key={p.path}
                  href={p.path}
                  className="flex items-center justify-between rounded-xl px-5 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {p.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-extrabold text-white text-3xl sm:text-4xl mb-4">
            Pronta para transformar seu visual?
          </h2>
          <p className="text-white/80 mb-8">
            Fale agora pelo WhatsApp. Respondemos com atenção e cuidado.
          </p>
          <a
            href={siteConfig.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94)', color: '#1a0f14' }}
          >
            Enviar mensagem no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
