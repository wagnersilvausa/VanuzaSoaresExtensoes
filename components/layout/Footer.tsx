'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#120a0d', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(152,73,92,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-extrabold text-white tracking-tight">Vanuza Soares</h3>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mt-0.5"
                style={{ color: 'var(--gold)' }}
              >
                Extensões Mega Hair
              </p>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              Especialista em mega hair com 9 anos de experiência. Transformação de autoestima
              através de técnicas profissionais e materiais premium.
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {/* Instagram */}
              <a
                href={siteConfig.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
                  Instagram
                </span>
              </a>

              {/* YouTube */}
              <a
                href={siteConfig.brand.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#FF0000' }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
                  YouTube
                </span>
              </a>

              {/* Facebook */}
              <a
                href={siteConfig.brand.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#1877F2' }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
                  Facebook
                </span>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: 'var(--gold)' }}
            >
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.pages.map((p) => (
                <li key={p.path}>
                  <Link
                    href={p.path}
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: 'var(--gold)' }}
            >
              Contato
            </h4>
            <div className="space-y-4">
              {/* Address */}
              <a
                href="https://maps.google.com/?q=Av.+José+Faria+da+Rocha,+2122,+Eldorado,+Contagem,+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 group"
              >
                <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs text-white/45 group-hover:text-white/70 transition-colors leading-relaxed">
                  Av. José Faria da Rocha, 2122<br />
                  Eldorado, Contagem - MG
                </span>
              </a>

              {/* Phone */}
              <a href="tel:+5531992560137" className="flex items-center gap-2 group">
                <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs text-white/45 group-hover:text-white/70 transition-colors">
                  (31) 99256-0137
                </span>
              </a>

              {/* Instagram */}
              <a href={siteConfig.brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--gold)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="text-xs text-white/45 group-hover:text-white/70 transition-colors">
                  {siteConfig.brand.instagram}
                </span>
              </a>

              <a
                href={siteConfig.brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:scale-105 mt-1"
                style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94, #c9a961)', color: '#1a0f14' }}
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} {siteConfig.brand.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
