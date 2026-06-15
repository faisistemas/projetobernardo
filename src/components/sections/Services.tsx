import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Package, Boxes, Building2, MapPinned, Rocket, ArrowRight } from "lucide-react";

const services = [
  { icon: Truck, title: "Transporte Rodoviário", desc: "Operações rodoviárias com frota moderna e motoristas qualificados." },
  { icon: Package, title: "Carga Fracionada", desc: "Ideal para volumes menores com excelente custo-benefício." },
  { icon: Boxes, title: "Carga Fechada", desc: "Veículo dedicado exclusivamente à sua carga, com máxima agilidade." },
  { icon: Building2, title: "Logística Empresarial", desc: "Soluções sob medida para indústria, varejo e e-commerce." },
  { icon: MapPinned, title: "Distribuição Urbana", desc: "Entregas eficientes em grandes centros, com rotas otimizadas." },
  { icon: Rocket, title: "Coletas e Entregas Expressas", desc: "Atendimento prioritário para demandas urgentes." },
];

export default function Services() {
  return (
    <section className="section-pad">
      <div className="container-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Nossos serviços</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary mt-3 leading-tight">
              Soluções logísticas completas para o seu negócio
            </h2>
          </div>
          <Button asChild variant="cta" size="lg">
            <Link to="/cotacao">Solicitar Cotação <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-elegant transition-all duration-500">
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-accent opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
              <Icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold text-primary mb-2">{title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{desc}</p>
              <Link to="/cotacao" className="inline-flex items-center gap-1 text-secondary font-semibold text-sm group-hover:gap-2 transition-all">
                Saiba mais <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
