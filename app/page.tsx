import { ArrowRight, Check, ChevronDown, CircleDollarSign, MapPin, ShieldCheck, Sparkles, UserRound, WalletCards } from "lucide-react";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Catalog } from "@/components/Catalog";
import { Simulator } from "@/components/Simulator";
import { seller } from "@/config/seller";
import { messages, whatsappUrl } from "@/lib/whatsapp";

const faqs = [
  ["Quais motos Honda estão disponíveis?","O catálogo apresenta uma seleção de modelos Honda. Disponibilidade, versões e condições devem ser confirmadas diretamente com Miguel."],
  ["Como funciona o consórcio?","Miguel pode apresentar as opções disponíveis e explicar como funcionam as condições do plano. Contemplação e prazos dependem das regras do grupo e não são garantidos."],
  ["Posso fazer uma simulação?","Sim. Use o formulário de planejamento e envie seus dados para Miguel analisar as opções disponíveis."],
  ["Como funciona o financiamento?","As condições dependem do perfil e da análise da instituição financeira. Consulte Miguel para conhecer as opções disponíveis."],
  ["Posso escolher uma moto específica?","Sim. Você pode demonstrar interesse em qualquer modelo apresentado e conversar com Miguel sobre versões e disponibilidade."],
  ["Como falar com Miguel?","O WhatsApp é o principal canal. Os botões do site já podem abrir uma conversa contextualizada."],
  ["Onde fica a Motovix Serra?","Miguel atua na Honda Motovix Serra, em Serra, Espírito Santo. Confirme endereço e horário de atendimento diretamente com a concessionária."],
  ["Posso tirar dúvidas pelo WhatsApp?","Sim. Você pode iniciar a conversa pelo botão de WhatsApp em qualquer etapa da navegação."]
];

export default function Home() {
  return <main id="top" className="overflow-hidden">
    <Header/>
    <section className="relative min-h-[92vh] grid-bg">
      <div className="absolute inset-0 hero-vignette"/>
      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-5 pb-20 pt-36 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-zinc-300"><Sparkles size={14} className="text-honda"/> Consultor Honda • Serra ES</div>
          <h1 className="text-6xl font-black leading-[.92] tracking-[-.05em] md:text-8xl">Sua próxima <span className="text-gradient">Honda</span> começa aqui.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">Encontre a moto ideal para sua rotina e conte com o atendimento personalizado de Miguel Lobo, consultor de vendas Honda na Motovix Serra.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#motos" className="rounded-2xl bg-white px-6 py-4 text-center font-black text-black transition hover:bg-zinc-200">Ver motos <ArrowRight className="ml-2 inline" size={18}/></a>
            <a href={whatsappUrl(messages.general)} className="rounded-2xl border border-white/15 bg-white/[.05] px-6 py-4 text-center font-black backdrop-blur transition hover:border-honda hover:bg-honda">Falar com Miguel</a>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-3 text-sm text-zinc-400 sm:grid-cols-4">
            {["Atendimento personalizado","Honda Motovix Serra","Consórcio","Financiamento"].map(x=><div key={x} className="flex items-center gap-2"><Check size={15} className="text-honda"/>{x}</div>)}
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-xl">
          <div className="glow relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_55%_35%,rgba(230,0,18,.25),transparent_35%),linear-gradient(145deg,#1a1a1a,#070707)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <UserRound size={74} className="text-white/10"/>
              <p className="mt-5 font-black text-white/25">FOTO REAL DO MIGUEL</p>
              <p className="mt-2 max-w-xs text-xs text-zinc-600">Coloque aqui a foto fornecida pelo usuário em <code>/public/images/miguel/</code>.</p>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl glass p-4"><p className="text-xs uppercase tracking-[.25em] text-zinc-500">Atendimento</p><p className="mt-1 font-bold">Miguel Lobo • Honda Motovix Serra</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-white/5 bg-white/[.018]">
      <div className="mx-auto max-w-7xl px-5 py-7"><div className="grid gap-6 text-center sm:grid-cols-4 sm:text-left">
        {[[ShieldCheck,"Confiança","Atendimento direto"],[CircleDollarSign,"Planejamento","Consórcio Honda"],[WalletCards,"Compra","Financiamento"],[MapPin,"Serra — ES","Motovix Serra"]].map(([Icon,title,sub])=><div key={String(title)} className="flex items-center justify-center gap-3 sm:justify-start"><Icon size={22} className="text-honda"/><div><p className="font-bold">{String(title)}</p><p className="text-xs text-zinc-500">{String(sub)}</p></div></div>)}
      </div></div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-honda">Encontre seu perfil</p><h2 className="text-4xl font-black md:text-6xl">Qual Honda combina com você?</h2><p className="mt-5 text-zinc-400">Cada pessoa procura uma moto por um motivo. Encontre uma opção que combine com sua rotina.</p></div>
      <div className="mt-10 grid gap-4 md:grid-cols-5">{[
        ["Trabalho","Economia, praticidade e resistência para o dia a dia.","#motos"],
        ["Cidade","Mobilidade e praticidade para sua rotina.","#motos"],
        ["Estrada","Conforto e desempenho para viajar.","#motos"],
        ["Aventura","Para quem gosta de sair do caminho tradicional.","#motos"],
        ["Estilo","Para quem também quer personalidade e presença.","#motos"]
      ].map(([a,b,c])=><a href={c} key={a} className="group rounded-3xl border border-white/10 bg-white/[.03] p-6 transition hover:-translate-y-1 hover:border-honda/40"><span className="text-sm font-bold text-honda">0{["Trabalho","Cidade","Estrada","Aventura","Estilo"].indexOf(a)+1}</span><h3 className="mt-10 text-xl font-black">{a}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{b}</p><ArrowRight className="mt-7 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-white" size={18}/></a>)}</div>
    </section>

    <Catalog/>

    <section id="simulador" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_100%_0%,rgba(230,0,18,.14),transparent_38%),rgba(255,255,255,.025)] p-6 md:p-10 lg:grid-cols-[.75fr_1.25fr]">
        <div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-honda">Planejamento</p><h2 className="text-4xl font-black">Descubra uma Honda que cabe no seu planejamento.</h2><p className="mt-5 leading-7 text-zinc-400">Conte um pouco sobre o que você procura. Miguel recebe o contexto e pode continuar o atendimento pelo WhatsApp.</p></div>
        <Simulator/>
      </div>
    </section>

    <section id="consorcio" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-8 md:p-10"><p className="text-xs font-bold uppercase tracking-[.3em] text-honda">Consórcio Honda</p><h2 className="mt-4 text-4xl font-black">Planeje sua próxima Honda.</h2><p className="mt-5 leading-7 text-zinc-400">Para quem prefere se organizar para conquistar sua moto, Miguel pode apresentar as opções de consórcio disponíveis.</p><div className="mt-8 grid grid-cols-2 gap-3 text-sm text-zinc-300">{["Planejamento","Possibilidade de lance","Diversos modelos","Atendimento personalizado"].map(x=><div key={x} className="rounded-2xl bg-white/[.04] p-4">✓ {x}</div>)}</div><a href={whatsappUrl(messages.consorcio)} className="mt-8 inline-flex rounded-xl bg-honda px-5 py-3 font-bold">Quero saber mais</a><p className="mt-4 text-xs text-zinc-600">Sem promessa de contemplação, prazo ou aprovação.</p></div>
        <div id="financiamento" className="rounded-[2rem] border border-white/10 bg-white/[.035] p-8 md:p-10"><p className="text-xs font-bold uppercase tracking-[.3em] text-honda">Financiamento</p><h2 className="mt-4 text-4xl font-black">Prefere financiar?</h2><p className="mt-5 leading-7 text-zinc-400">Consulte as condições disponíveis para o seu perfil diretamente com Miguel.</p><div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5"><p className="text-sm font-bold">Condições sob consulta</p><p className="mt-2 text-sm leading-6 text-zinc-500">Valores, taxas, entrada, prazo e aprovação dependem da análise e das condições vigentes.</p></div><a href={whatsappUrl(messages.financiamento)} className="mt-8 inline-flex rounded-xl border border-white/10 bg-white/10 px-5 py-3 font-bold hover:bg-honda">Consultar condições</a></div>
      </div>
    </section>

    <section id="sobre" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
      <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">
        <div className="flex h-full flex-col items-center justify-center text-center"><UserRound size={70} className="text-white/10"/><p className="mt-4 text-xs font-bold tracking-[.2em] text-white/20">FOTO REAL DO MIGUEL</p></div>
      </div>
      <div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-honda">Sobre Miguel</p><h2 className="text-4xl font-black md:text-6xl">Muito prazer, eu sou o Miguel.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">Sou consultor de vendas Honda na Motovix Serra e meu objetivo é ajudar você a encontrar uma moto que realmente faça sentido para sua rotina e seu momento.</p><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">{["Atendimento personalizado","Motos Honda","Consórcio","Financiamento","Motovix Serra"].map(x=><div key={x} className="rounded-2xl border border-white/10 bg-white/[.035] p-4 text-sm font-bold">{x}</div>)}</div><a href={whatsappUrl(messages.general)} className="mt-8 inline-flex rounded-xl bg-honda px-5 py-3 font-bold">Falar com Miguel</a></div>
    </section>

    <section className="border-y border-white/5 bg-white/[.018]"><div className="mx-auto max-w-7xl px-5 py-24"><div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-honda">Como funciona</p><h2 className="text-4xl font-black md:text-5xl">Do primeiro clique à negociação.</h2></div><div className="mt-12 grid gap-3 md:grid-cols-5">{["Você escolhe a moto","Miguel entende o que você procura","Vocês analisam as opções","Você escolhe a forma de compra","Negociação e fechamento"].map((x,i)=><div key={x} className="rounded-3xl border border-white/10 bg-black/20 p-6"><span className="text-sm font-black text-honda">0{i+1}</span><p className="mt-12 font-bold">{x}</p></div>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-24"><div className="rounded-[2rem] border border-white/10 bg-white/[.03] p-8 md:p-12"><p className="text-xs font-bold uppercase tracking-[.3em] text-honda">Prova social</p><h2 className="mt-3 text-4xl font-black">Clientes que já fizeram sua escolha.</h2><p className="mt-4 max-w-2xl text-zinc-500">Estrutura preparada para receber depoimentos reais. Nenhuma avaliação fictícia é exibida.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{[1,2,3].map(i=><div key={i} className="min-h-40 rounded-3xl border border-dashed border-white/10 p-6 text-sm text-zinc-600">Depoimento real — adicionar quando disponível.</div>)}</div></div></section>

    <section id="faq" className="mx-auto max-w-4xl px-5 py-24"><p className="text-center text-xs font-bold uppercase tracking-[.3em] text-honda">FAQ</p><h2 className="mt-3 text-center text-4xl font-black md:text-5xl">Dúvidas frequentes</h2><div className="mt-10 space-y-3">{faqs.map(([q,a])=><details key={q} className="group rounded-2xl border border-white/10 bg-white/[.025] p-5"><summary className="flex cursor-pointer list-none items-center justify-between font-bold">{q}<ChevronDown className="transition group-open:rotate-180" size={18}/></summary><p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500">{a}</p></details>)}</div></section>

    <footer className="border-t border-white/10 bg-black"><div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 md:flex-row md:items-end md:justify-between"><div><p className="font-black tracking-[.2em]">MIGUEL <span className="text-honda">LOBO</span></p><p className="mt-2 text-sm text-zinc-500">{seller.role} • {seller.dealership} • {seller.city}</p></div><div className="flex flex-wrap gap-5 text-sm text-zinc-500"><a href="#motos">Motos</a><a href="#consorcio">Consórcio</a><a href="#financiamento">Financiamento</a><a href="#sobre">Sobre</a><a href="#faq">Contato</a></div></div><div className="mx-auto max-w-7xl px-5 pb-8 text-xs leading-6 text-zinc-700">* Preços públicos sugeridos utilizados como referência inicial e sujeitos a confirmação. Frete, versões, disponibilidade e condições comerciais podem variar. Consulte Miguel e a concessionária. Site independente de venda pessoal do consultor; marcas e produtos pertencem aos seus respectivos proprietários.</div></footer>
    <WhatsAppButton/>
  </main>;
}