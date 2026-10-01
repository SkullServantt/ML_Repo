import { MessageCircle } from "lucide-react";
import { messages, whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return <a href={whatsappUrl(messages.general)} className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-honda px-5 py-3 font-bold shadow-2xl shadow-red-950/40 transition hover:-translate-y-1">
    <MessageCircle size={19}/> Falar com Miguel
  </a>;
}