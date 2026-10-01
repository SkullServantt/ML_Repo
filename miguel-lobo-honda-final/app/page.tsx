import { ArrowRight, Instagram, MapPin, MessageCircle, ShieldCheck, Sparkles, WalletCards, Bike, Search, Calculator, ChevronRight } from "lucide-react";
import { motorcycles } from "@/data/motorcycles";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "5527988493278";
const INSTAGRAM = process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/miguellobo1/";

function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const featured = motorcycles.filter((m) => m.featured).slice(0, 6);

  return (
    <main>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="brand">
            <span className="brand-mark">M</span>
            <span>
              <strong>MIGUEL LOBO</strong>
              <small>Honda Motovix Serra</small>
            </span>
          </a>
          <nav>
            <a href="#motos">Motos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#miguel">Sobre Miguel</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="nav-cta" href={whatsappUrl("Olá Miguel! Vim pelo seu site e quero conhecer as condições das motos Honda.")}>
            <MessageCircle size={17} /> Falar com Miguel
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> CONSULTOR HONDA • MOTOVIX SERRA</div>
            <h1>Encontre a Honda que combina com <em>você.</em></h1>
            <p className="hero-text">
              Catálogo Honda, simulação de compra e atendimento direto com Miguel Lobo.
              Escolha sua moto e tire suas dúvidas pelo WhatsApp.
            </p>
            <div className="hero-actions">
              <a className="button button-red" href="#motos">Ver motos <ArrowRight size={18}/></a>
              <a className="button button-glass" href={whatsappUrl("Olá Miguel! Quero fazer uma simulação de uma Honda.")}>
                <MessageCircle size={18}/> Simular pelo WhatsApp
              </a>
            </div>
            <div className="hero-trust">
              <span><ShieldCheck size={17}/> Atendimento personalizado</span>
              <span><MapPin size={17}/> Serra • ES</span>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-glow" />
            <img src="/miguel/miguel-2.jpeg" alt="Miguel Lobo na Honda Motovix Serra" />
            <div className="photo-card">
              <span>SEU CONSULTOR HONDA</span>
              <strong>Miguel Lobo</strong>
              <small>Motovix Serra</small>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-strip">
        <div className="container quick-grid">
          <div><Bike/><span><strong>Catálogo Honda</strong><small>Modelos e categorias</small></span></div>
          <div><Calculator/><span><strong>Simulação</strong><small>Encontre uma condição</small></span></div>
          <div><WalletCards/><span><strong>Consórcio e financiamento</strong><small>Converse com Miguel</small></span></div>
          <div><MessageCircle/><span><strong>Atendimento direto</strong><small>WhatsApp</small></span></div>
        </div>
      </section>

      <section id="motos" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow dark"><span /> LINHA HONDA</div>
              <h2>Escolha sua próxima moto.</h2>
              <p>Veja alguns dos modelos Honda e fale diretamente com Miguel para consultar condições.</p>
            </div>
            <a className="text-link" href="https://www.honda.com.br/motos/modelos" target="_blank" rel="noreferrer">
              Ver catálogo oficial <ChevronRight size={17}/>
            </a>
          </div>

          <div className="catalog-tools">
            <div className="search-box"><Search size={18}/><input placeholder="Buscar modelo..." aria-label="Buscar modelo" onChange={(e) => {
              const q = e.target.value.toLowerCase();
              document.querySelectorAll<HTMLElement>("[data-moto]").forEach((el) => {
                el.style.display = el.dataset.moto?.includes(q) ? "" : "none";
              });
            }}/></div>
            <div className="chips">
              {["Todos", "Street", "Scooter", "Naked", "Adventure", "Sport", "Touring"].map((x) => <button key={x}>{x}</button>)}
            </div>
          </div>

          <div className="moto-grid">
            {featured.map((moto) => (
              <article className="moto-card" data-moto={`${moto.name} ${moto.category}`.toLowerCase()} key={moto.name}>
                <div className="moto-image">
                  <span className="category">{moto.category}</span>
                  <img src={moto.image} alt={moto.name} loading="lazy" />
                </div>
                <div className="moto-body">
                  <h3>{moto.name}</h3>
                  <p>{moto.description}</p>
                  <div className="moto-bottom">
                    <div><small>A partir de</small><strong>{moto.price}</strong></div>
                    <a href={whatsappUrl(`Olá Miguel! Tenho interesse na ${moto.name}. Pode me passar as condições?`)} aria-label={`Tenho interesse na ${moto.name}`}><MessageCircle size={18}/></a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="catalog-note">
            <Sparkles size={18}/>
            <span><strong>Preços de referência:</strong> os valores exibidos são preços públicos sugeridos da Honda e podem variar por versão, frete, região e condições comerciais. Confirme o valor e disponibilidade com Miguel.</span>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="dark-section">
        <div className="container">
          <div className="section-heading light">
            <div>
              <div className="eyebrow"><span /> ATENDIMENTO SEM COMPLICAÇÃO</div>
              <h2>Do interesse à sua Honda.</h2>
              <p>Miguel te ajuda a entender o modelo, a forma de compra e os próximos passos.</p>
            </div>
          </div>
          <div className="steps">
            <div><b>01</b><h3>Escolha o modelo</h3><p>Compare categorias e veja qual moto faz sentido para sua rotina.</p></div>
            <div><b>02</b><h3>Faça uma simulação</h3><p>Converse sobre orçamento, entrada e modalidade de compra.</p></div>
            <div><b>03</b><h3>Negocie direto</h3><p>Miguel apresenta as condições disponíveis na Motovix Serra.</p></div>
          </div>
        </div>
      </section>

      <section id="miguel" className="about section">
        <div className="container about-grid">
          <div className="about-collage">
            <img className="about-main" src="/miguel/miguel-1.jpeg" alt="Miguel Lobo em frente à Honda Motovix Serra" />
            <img className="about-small" src="/miguel/miguel-3.jpeg" alt="Miguel Lobo na concessionária" />
          </div>
          <div className="about-copy">
            <div className="eyebrow dark"><span /> PRAZER, MIGUEL</div>
            <h2>Seu atendimento Honda, de pessoa para pessoa.</h2>
            <p>
              Sou Miguel Lobo, consultor de vendas da Honda Motovix Serra.
              Aqui você fala comigo diretamente para encontrar o modelo, entender as opções de compra e avançar com segurança.
            </p>
            <div className="location"><MapPin size={19}/><div><strong>Honda Motovix Serra</strong><span>Av. Lourival Nunes, 220 • Jardim Limoeiro • Serra/ES</span></div></div>
            <div className="about-actions">
              <a className="button button-red" href={whatsappUrl("Olá Miguel! Quero falar sobre uma Honda.")}><MessageCircle size={18}/> Falar no WhatsApp</a>
              <a className="button button-outline" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={18}/> @miguellobo1</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contato">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow"><span /> MIGUEL LOBO • MOTOVIX SERRA</div>
            <h2>Já sabe qual Honda você quer?</h2>
            <p>Me chama no WhatsApp e vamos conversar sobre as condições.</p>
          </div>
          <a className="button button-white" href={whatsappUrl("Olá Miguel! Quero consultar uma Honda.")}>Chamar Miguel <ArrowRight size={18}/></a>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div><strong>MIGUEL LOBO</strong><span>Consultor Honda • Motovix Serra</span></div>
          <div><span>Av. Lourival Nunes, 220 • Jardim Limoeiro • Serra/ES</span></div>
          <div><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={17}/> Instagram</a></div>
        </div>
        <div className="container footer-bottom">Site comercial de Miguel Lobo. Valores e disponibilidade devem ser confirmados diretamente com o consultor.</div>
      </footer>
    </main>
  );
}
