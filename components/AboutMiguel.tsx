import { Instagram, MapPin, MessageCircle } from "lucide-react";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "5527988493278";
const instagram =
  process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/miguellobo1/";
export function AboutMiguel() {
  return (
    <section id="miguel" className="about section">
      <div className="container about-grid">
        <div className="about-collage">
          <img
            className="about-main"
            src="/ML_Repo/miguel/miguel-01.jpeg"
            alt="Miguel Lobo na Motovix Serra"
          />
          <img
            className="about-small"
            src="/ML_Repo/miguel/miguel-03.jpeg"
            alt="Miguel Lobo na concessionária Honda"
          />
        </div>
        <div className="about-copy">
          <div className="eyebrow dark">
            <span /> PRAZER, MIGUEL
          </div>
          <h2>Seu atendimento Honda, de pessoa para pessoa.</h2>
          <p>
            Sou Miguel Lobo, consultor de vendas da Honda Motovix Serra. Aqui
            você fala comigo diretamente para encontrar o modelo, entender as
            opções de compra e avançar com clareza.
          </p>
          <div className="location">
            <MapPin size={19} />
            <div>
              <strong>Honda Motovix Serra</strong>
              <span>Av. Lourival Nunes, 220 • Jardim Limoeiro • Serra/ES</span>
            </div>
          </div>
          <div className="about-actions">
            <a
              className="button button-red"
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Olá Miguel! Quero falar sobre uma Honda.")}`}
            >
              <MessageCircle size={18} /> Falar no WhatsApp
            </a>
            <a
              className="button button-outline"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} /> @miguellobo1
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
