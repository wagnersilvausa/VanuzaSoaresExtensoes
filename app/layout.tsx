import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.brand.name,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.brand.description,
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: siteConfig.brand.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: 'var(--cream)' }}>
        {/* Header é fixed, não precisa de padding compensador no layout raiz.
            As páginas internas com hero escuro incluem padding-top na própria section. */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
