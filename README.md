# Miguel Lobo — Honda Motovix Serra

Site em Next.js 15 + React 19, componentizado.

## Estrutura

- `app/` — entrada da aplicação e estilos globais.
- `components/` — Header, Hero, catálogo, simulador, sobre, CTA, footer etc.
- `data/motorcycles.ts` — catálogo de motos.
- `public/miguel/` — fotos fornecidas para o site.
- `.env.local` — WhatsApp e Instagram.

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Observação

As imagens das motos do catálogo são carregadas das páginas/servidores oficiais da Honda. As fotos do Miguel estão locais em `public/miguel`, então não dependem de URL externa.
