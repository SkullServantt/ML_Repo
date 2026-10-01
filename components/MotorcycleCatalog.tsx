"use client";

import { Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { motorcycles } from "@/data/motorcycles";
import { MotorcycleCard } from "./MotorcycleCard";

const categories = ["Todos", "Street", "Scooter", "Naked", "Adventure", "Sport", "Touring"] as const;
export function MotorcycleCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos");
  const [showAll, setShowAll] = useState(false);
  const filtered = useMemo(() => motorcycles.filter((m) => {
    const text = `${m.name} ${m.category} ${m.description}`.toLowerCase();
    return text.includes(query.toLowerCase()) && (category === "Todos" || m.category === category);
  }), [query, category]);
  const visible = showAll ? filtered : filtered.filter(m => m.featured).slice(0, 9);
  return <section id="motos" className="section"><div className="container">
    <div className="section-heading"><div><div className="eyebrow dark"><span /> LINHA HONDA</div><h2>Escolha sua próxima moto.</h2><p>Veja os modelos e fale diretamente com Miguel para consultar condições, disponibilidade e formas de compra.</p></div><a className="text-link" href="https://www.honda.com.br/motos/modelos" target="_blank" rel="noreferrer">Catálogo oficial <span>→</span></a></div>
    <div className="catalog-tools"><label className="search-box"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar modelo..." aria-label="Buscar modelo" /></label><div className="chips">{categories.map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</div></div>
    <div className="moto-grid">{visible.map(m=><MotorcycleCard key={m.name} moto={m}/>)}</div>
    {filtered.length===0 && <div className="empty">Nenhuma moto encontrada. Tente outro modelo ou categoria.</div>}
    {filtered.length>visible.length && <button className="load-more" onClick={()=>setShowAll(v=>!v)}>{showAll?"Mostrar menos":"Ver mais modelos"}</button>}
    <div className="catalog-note"><Sparkles size={18}/><span><strong>Valores e disponibilidade:</strong> consulte Miguel. As condições podem variar por versão, região, estoque e modalidade de compra.</span></div>
  </div></section>;
}
