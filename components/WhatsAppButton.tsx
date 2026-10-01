import { MessageCircle } from "lucide-react";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "5527988493278";
export function WhatsAppButton(){return <a className="floating-wa" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Olá Miguel! Vim pelo seu site.")}`} target="_blank" rel="noreferrer" aria-label="Falar com Miguel no WhatsApp"><MessageCircle size={24}/><span>WhatsApp</span></a>}
