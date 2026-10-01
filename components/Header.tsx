import { MessageCircle } from "lucide-react";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "5527988493278";
const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent("Olá Miguel! Vim pelo seu site e quero conhecer as condições das motos Honda.")}`;

export function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand">
          <span className="brand-mark">M</span>
          <span><strong>MIGUEL LOBO</strong><small>Honda Motovix Serra</small></span>
        </a>
        <nav><a href="#motos">Motos</a><a href="#como-funciona">Como funciona</a><a href="#miguel">Sobre Miguel</a><a href="#contato">Contato</a></nav>
        <a className="nav-cta" href={whatsappUrl}><MessageCircle size={17}/> Falar com Miguel</a>
      </div>
    </header>
  );
}
