import { MessageCircle, ArrowUpRight } from "lucide-react";
import type { Motorcycle } from "@/data/motorcycles";
import { whatsappUrl } from "@/lib/whatsapp";

export function MotorcycleCard({ moto }: { moto: Motorcycle }) {
  const message = `Olá Miguel! Vi a ${moto.name} no seu site e gostaria de saber mais sobre ela e as condições de compra.`;
  return <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[.055]">
    <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(230,0,18,.18),transparent_55%),linear-gradient(135deg,#171717,#080808)]">
      {moto.image ? <img src={moto.image} alt={moto.name} className="h-full w-full object-contain p-8 transition duration-700 group-hover:scale-105"/> :
        <div className="flex h-full flex-col items-center justify-center text-center text-zinc-500">
          <span className="text-5xl font-black tracking-tighter text-white/10">HONDA</span>
          <span className="mt-2 text-xs uppercase tracking-[.25em]">Adicionar imagem oficial</span>
        </div>}
      <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs backdrop-blur">{moto.category}</span>
    </div>
    <div className="p-6">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div><h3 className="text-xl font-black">{moto.name}</h3><p className="mt-1 text-sm text-zinc-400">{moto.description}</p></div>
        <ArrowUpRight size={18} className="text-zinc-500"/>
      </div>
      <p className="my-5 text-sm leading-6 text-zinc-300">{moto.benefit}</p>
      <div className="mb-5 flex gap-2 text-xs text-zinc-400">
        {moto.cc && <span className="rounded-full bg-white/5 px-3 py-1">{moto.cc}</span>}
        {moto.fuel && <span className="rounded-full bg-white/5 px-3 py-1">{moto.fuel}</span>}
      </div>
      {moto.price && <p className="mb-4 text-sm text-zinc-400">A partir de <strong className="text-lg text-white">R$ {moto.price.toLocaleString("pt-BR")}</strong>*</p>}
      <a href={whatsappUrl(message)} className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[.06] px-4 py-3 text-sm font-bold transition hover:border-honda hover:bg-honda">
        <MessageCircle size={16}/> Tenho interesse
      </a>
    </div>
  </article>;
}