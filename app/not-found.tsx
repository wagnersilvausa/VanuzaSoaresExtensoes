import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-5"
      style={{ background: 'linear-gradient(135deg, #1a0f14 0%, #2a1a20 100%)' }}
    >
      <div className="text-center">
        <p
          className="text-8xl font-extrabold leading-none mb-4"
          style={{ color: 'var(--gold)' }}
        >
          404
        </p>
        <h1 className="text-white text-2xl font-extrabold mb-3">
          Página não encontrada
        </h1>
        <p className="text-white/50 text-sm mb-10 max-w-sm mx-auto">
          A página que você procura não existe ou foi movida. Volte ao início e explore nosso site.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #c9a961, #e4cc94)', color: '#1a0f14' }}
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
