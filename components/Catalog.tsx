 "use client";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { motorcycles } from "@/data/motorcycles";
import { MotorcycleCard } from "./MotorcycleCard";

const filters = ["Todas","Street","Scooter","Adventure","Sport","Touring","Off Road"];

export function Catalog() {
  const [filter,setFilter] = useState("Todas");
  const [query,setQuery] = useState("");
  const list = useMemo(() => motorcycles.filter(m => (filter==="Todas" || m.category===filter) && m.name.toLowerCase().includes(query.toLowerCase())),[filter,query]);
  return <section id="motos" className="mx-auto max-w-7xl px-5 py-24">
    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-honda">Catálogo</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">Escolha sua próxima <span className="text-gradient">Honda.</span></h2></div>
      <div className="flex w-full max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3"><Search size={18} className="text-zinc-500"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Qual Honda você está procurando?" className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-600"/></div>
    </div>
    <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${filter===f?"border-honda bg-honda text-white":"border-white/10 bg-white/[.03] text-zinc-400 hover:text-white"}`}><SlidersHorizontal size={14} className="mr-2 inline"/>{f}</button>)}</div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map(m=><MotorcycleCard key={m.id} moto={m}/>)}</div>
  </section>;
}