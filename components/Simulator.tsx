 "use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motorcycles } from "@/data/motorcycles";
import { whatsappUrl } from "@/lib/whatsapp";

export function Simulator() {
  const [sent,setSent] = useState(false);
  const [form,setForm] = useState({moto:"",method:"Ainda não sei",budget:"",entry:"",name:"",phone:""});
  function submit(e:React.FormEvent){ e.preventDefault(); const msg=`Olá Miguel! Quero falar sobre uma Honda.%0A%0AMoto: ${form.moto}%0AForma de compra: ${form.method}%0AInvestimento mensal: ${form.budget}%0AEntrada/lance: ${form.entry || "Não informado"}%0ANome: ${form.name}%0AWhatsApp: ${form.phone}`; setSent(true); window.open(whatsappUrl(msg),"_blank"); }
  if(sent) return <div className="rounded-3xl border border-white/10 bg-white/[.04] p-10 text-center"><CheckCircle2 className="mx-auto mb-4 text-honda" size={44}/><h3 className="text-2xl font-black">Tudo certo.</h3><p className="mt-2 text-zinc-400">Sua solicitação foi preparada para conversar com Miguel. As condições finais dependem de consulta e análise.</p></div>;
  return <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
    <select required value={form.moto} onChange={e=>setForm({...form,moto:e.target.value})} className="field"><option value="">Qual moto chamou sua atenção?</option>{motorcycles.map(m=><option key={m.id}>{m.name}</option>)}</select>
    <select value={form.method} onChange={e=>setForm({...form,method:e.target.value})} className="field"><option>Consórcio</option><option>Financiamento</option><option>Ainda não sei</option></select>
    <input required value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})} className="field" placeholder="Quanto pretende investir por mês?"/>
    <input value={form.entry} onChange={e=>setForm({...form,entry:e.target.value})} className="field" placeholder="Entrada ou lance (opcional)"/>
    <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="field" placeholder="Seu nome"/>
    <input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="field" placeholder="Seu WhatsApp"/>
    <button className="md:col-span-2 flex items-center justify-center gap-2 rounded-2xl bg-honda px-5 py-4 font-black transition hover:brightness-110">Quero falar com Miguel <ArrowRight size={18}/></button>
    <p className="md:col-span-2 text-center text-xs text-zinc-500">Este formulário não calcula aprovação, contemplação ou parcela. As condições devem ser confirmadas com Miguel.</p>
  </form>;
}