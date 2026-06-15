import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, ADDRESS, waLink } from "@/lib/contact";
import logo from "@/assets/logo-bt.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Bernardo Transportes" className="h-12 w-12 bg-white rounded-md p-1" width={48} height={48} loading="lazy" />
            <div>
              <div className="font-display font-extrabold text-lg">Bernardo</div>
              <div className="text-[11px] tracking-[0.2em] opacity-80 uppercase -mt-0.5">Transportes</div>
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Sua carga no destino certo, com rapidez e segurança. Soluções logísticas para todo o Brasil.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Rede social" className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-base">Links Rápidos</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/sobre" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
            <li><Link to="/servicos" className="hover:text-accent transition-colors">Serviços</Link></li>
            <li><Link to="/cotacao" className="hover:text-accent transition-colors">Cotação</Link></li>
            <li><Link to="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-base">Serviços</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Transporte Rodoviário</li>
            <li>Carga Fracionada</li>
            <li>Carga Fechada</li>
            <li>Logística Empresarial</li>
            <li>Distribuição Urbana</li>
            <li>Coletas Expressas</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-base">Contato</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-3 items-start"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />{ADDRESS}</li>
            <li className="flex gap-3 items-center"><Phone className="h-4 w-4 text-accent" /><a href={`tel:+55${PHONE_DISPLAY.replace(/\D/g, '')}`}>{PHONE_DISPLAY}</a></li>
            <li className="flex gap-3 items-center"><Mail className="h-4 w-4 text-accent" /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex mt-2 items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-section py-6 text-xs opacity-70 flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Bernardo Transportes. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  );
}
