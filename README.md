# Miguel Lobo — Honda Motovix Serra

Landing page premium de vendas para Miguel Lobo, consultor de vendas Honda na Motovix Serra.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Lucide React

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Antes de publicar

1. Configure `config/seller.ts` com o WhatsApp real.
2. Coloque as fotos reais do Miguel em `public/images/miguel/`.
3. Adicione as imagens oficiais/autorizadas das motos em `data/motorcycles.ts`.
4. Confirme preços e disponibilidade com a concessionária antes de publicar.
5. Revise endereço, Instagram e demais dados de contato.
6. Configure domínio, analytics e políticas de privacidade/cookies se houver coleta de leads.

## Dados Honda

O catálogo inicial foi estruturado para funcionar sem API externa. A fonte oficial da Honda possui catálogo público de modelos e preços sugeridos, mas o projeto não depende de endpoints internos da Honda.

Para uma futura integração, crie:
`services/honda/HondaService.ts`

O serviço deve normalizar os dados externos para o tipo `Motorcycle`, com cache e fallback para `data/motorcycles.ts`.

## WhatsApp

O número fica centralizado em `config/seller.ts`. Mensagens contextuais são montadas em `lib/whatsapp.ts`.

## Importante

O simulador não promete parcela, aprovação ou contemplação. Ele apenas coleta contexto e encaminha o lead para Miguel.
