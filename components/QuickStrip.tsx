import { Bike, Calculator, MessageCircle, WalletCards } from "lucide-react";
export function QuickStrip() { return <section className="quick-strip"><div className="container quick-grid">
  <div><Bike/><span><strong>Catálogo Honda</strong><small>Modelos e categorias</small></span></div>
  <div><Calculator/><span><strong>Simulação</strong><small>Encontre uma condição</small></span></div>
  <div><WalletCards/><span><strong>Consórcio e financiamento</strong><small>Converse com Miguel</small></span></div>
  <div><MessageCircle/><span><strong>Atendimento direto</strong><small>WhatsApp</small></span></div>
</div></section>; }
