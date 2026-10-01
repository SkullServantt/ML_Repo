import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappUrl, messages } from "@/lib/whatsapp";

export function Header() {
  return <header className="fixed top-0 z-50 w-full px-4 pt-4">
    <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl glass px-5 py-3 shadow-glass">
      <Link href="#top" className="font-black tracking-[.22em]">MIGUEL <span className="text-honda">LOBO</span></Link>
      <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
        <Link href="#motos" className="hover:text-white">Motos</Link>
        <Link href="#consorcio" className="hover:text-white">Consórcio</Link>
        <Link href="#financiamento" className="hover:text-white">Financiamento</Link>
        <Link href="#sobre" className="hover:text-white">Sobre Miguel</Link>
        <Link href="#faq" className="hover:text-white">FAQ</Link>
      </nav>
      <a href={whatsappUrl(messages.general)} className="flex items-center gap-2 rounded-full bg-honda px-4 py-2 text-sm font-bold transition hover:scale-[1.02]">
        <MessageCircle size={16}/> <span className="hidden sm:inline">Falar com Miguel</span>
      </a>
    </div>
  </header>;
}