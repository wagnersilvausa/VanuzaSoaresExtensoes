'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/site';

export function Header() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group">
          <span className="text-lg font-extrabold tracking-tight text-white leading-none">
            Vanuza Soares
          </span>
          <span
            className="text-[10px] font-semibold tracking-[0.2em] uppercase leading-none mt-0.5"
            style={{ color: 'var(--gold)' }}
          >
            Extensões Mega Hair
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {siteConfig.pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="text-sm font-semibold tracking-wide text-white/70 hover:text-white transition-colors"
            >
              {page.name}
            </Link>
          ))}
          <a
            href={siteConfig.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5 text-sm font-bold rounded-full text-white transition-all hover:scale-105 hover:shadow-gold"
            style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94, #c9a961)' }}
          >
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          aria-label="Menu"
        >
          {isOpen ? (
            <>
              <span className="w-6 h-0.5 bg-white rotate-45 translate-y-2 transition-all" />
              <span className="w-6 h-0.5 bg-white opacity-0 transition-all" />
              <span className="w-6 h-0.5 bg-white -rotate-45 -translate-y-2 transition-all" />
            </>
          ) : (
            <>
              <span className="w-6 h-0.5 bg-white transition-all" />
              <span className="w-4 h-0.5 bg-white transition-all" />
              <span className="w-6 h-0.5 bg-white transition-all" />
            </>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-brand-dark/98 backdrop-blur-xl border-t border-white/5 px-5 py-6">
          {siteConfig.pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="block py-3 text-base font-semibold text-white/80 hover:text-white border-b border-white/5 last:border-0 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {page.name}
            </Link>
          ))}
          <a
            href={siteConfig.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center px-6 py-3 text-sm font-bold rounded-full text-white"
            style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94, #c9a961)' }}
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
