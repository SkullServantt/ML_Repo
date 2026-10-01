import { ArrowRight, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "5527988493278";
const whatsappUrl = (message: string) => `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

export function Hero() {
  return <section className="hero">
    <div className="hero-bg" />
    <div className="container hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><span /> CONSULTOR HONDA • MOTOVIX SERRA</div>
        <h1>Encontre a Honda que combina com <em>você.</em></h1>
        <p className="hero-text">Catálogo Honda, simulação de compra e atendimento direto com Miguel Lobo. Escolha sua moto e tire suas dúvidas pelo WhatsApp.</p>
        <div className="hero-actions">
          <a className="button button-red" href="#motos">Ver motos <ArrowRight size={18}/></a>
          <a className="button button-glass" href={whatsappUrl("Olá Miguel! Quero fazer uma simulação de uma Honda.")}><MessageCircle size={18}/> Simular pelo WhatsApp</a>
        </div>
        <div className="hero-trust"><span><ShieldCheck size={17}/> Atendimento personalizado</span><span><MapPin size={17}/> Serra • ES</span></div>
      </div>
      <div className="hero-photo">
        <div className="photo-glow" />
        <img src="/miguel/miguel-02.jpeg" alt="Miguel Lobo na Honda Motovix Serra" />
        <div className="photo-card"><span>SEU CONSULTOR HONDA</span><strong>Miguel Lobo</strong><small>Motovix Serra</small></div>
      </div>
    </div>
  </section>;
}
