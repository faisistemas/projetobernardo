import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-bt.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/servicos", label: "Serviços" },
  { to: "/cotacao", label: "Cotação" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container-section flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Bernardo Transportes">
          <img src={logo} alt="Bernardo Transportes" className="h-12 w-12 object-contain" width={48} height={48} />
          <div className="leading-tight">
            <div className="font-display font-extrabold text-primary text-lg">Bernardo</div>
            <div className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase -mt-0.5">Transportes</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-secondary ${
                  isActive || pathname === l.to ? "text-secondary" : "text-foreground/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+5511966391649" className="flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" /> (11) 96639-1649
          </a>
          <Button asChild variant="cta" size="lg">
            <Link to="/cotacao">Solicitar Orçamento</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-section py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 rounded-md hover:bg-muted text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="cta" className="mt-2">
              <Link to="/cotacao" onClick={() => setOpen(false)}>Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
