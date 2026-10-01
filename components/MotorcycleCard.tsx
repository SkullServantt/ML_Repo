import { ExternalLink, MessageCircle } from "lucide-react";
import type { Motorcycle } from "@/data/motorcycles";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "5527988493278";
export function MotorcycleCard({ moto }: { moto: Motorcycle }) {
  const contact = `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Olá Miguel! Tenho interesse na ${moto.name}. Pode me passar as condições?`)}`;
  return <article className="moto-card">
    <div className="moto-image"><span className="category">{moto.category}</span><img src={moto.image} alt={moto.name} loading="lazy" referrerPolicy="no-referrer" /></div>
    <div className="moto-body"><h3>{moto.name}</h3><p>{moto.description}</p><div className="moto-bottom"><div><small>Condição</small><strong>Sob consulta</strong></div><div className="moto-actions"><a href={moto.officialUrl} target="_blank" rel="noreferrer" aria-label={`Ver ${moto.name} no site Honda`}><ExternalLink size={16}/></a><a className="wa-mini" href={contact} aria-label={`Tenho interesse na ${moto.name}`}><MessageCircle size={18}/></a></div></div></div>
  </article>;
}
