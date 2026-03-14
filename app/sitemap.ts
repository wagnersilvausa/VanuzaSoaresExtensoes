import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vanuzasoares.com.br';
  const now = new Date();

  return [
    { url: base,                       lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/nossa-historia`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tecnicas`,         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/resultados`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/cursos`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contato`,          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
