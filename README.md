# Vanuza Soares Extensões Mega Hair — Site Oficial

Site profissional desenvolvido para Vanuza Soares Extensões Mega Hair, especialista em mega hair com 8 anos de experiência, 11k seguidores e mais de 5.000 clientes atendidos.

## Desenvolvido por

**Wagner Soares**

Site criado para a Vanuza Soares Extensões Mega Hair. Utilizei Next.js com TypeScript, Tailwind CSS para a estilização e deploy na Vercel.

---

## Stack utilizada

- **Next.js 14** com App Router
- **TypeScript**
- **Tailwind CSS** com tema customizado
- **Fontes**: Montserrat (corpo), Angler e Barcelony (decorativas)
- **Deploy recomendado**: Vercel

---

## Páginas

| Página         | Rota              |
| -------------- | ----------------- |
| Início         | `/`               |
| Nossa História | `/nossa-historia` |
| Técnicas       | `/tecnicas`       |
| Resultados     | `/resultados`     |
| Cursos         | `/cursos`         |
| Contato        | `/contato`        |

---

## Estrutura de pastas

```
vanuza-soares-site/
├── app/                  # Páginas (Next.js App Router)
├── sections/home/        # Seções da página inicial
├── components/
│   ├── layout/           # Header e Footer
│   ├── ui/               # Botões, cards, badges
│   └── shared/           # Componentes reutilizáveis
├── lib/
│   └── site.ts           # Configurações centrais (nome, links, redes sociais)
└── public/               # Imagens e fontes
```

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

---

## Como fazer o deploy

### Vercel (recomendado)

```bash
npm install -g vercel
vercel
```

Ou conecte o repositório diretamente em [vercel.com](https://vercel.com).

### Build manual

```bash
npm run build
npm run start
```

---

## Configurações importantes

Todas as informações da marca ficam em `lib/site.ts`: nome, WhatsApp, Instagram, YouTube, Facebook e redes sociais. Altere lá para atualizar em todo o site de uma vez.

---

Propriedade de Vanuza Soares Extensões Mega Hair.
