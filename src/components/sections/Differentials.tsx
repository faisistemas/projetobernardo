import { Zap, MapPin, ShieldCheck, Headphones, Globe2, CalendarClock } from "lucide-react";

const items = [
  { icon: Zap, title: "Entrega Rápida", desc: "Rotas otimizadas para reduzir prazos sem abrir mão da segurança." },
  { icon: MapPin, title: "Rastreamento de Cargas", desc: "Acompanhe sua entrega em tempo real, do embarque ao destino." },
  { icon: ShieldCheck, title: "Segurança Garantida", desc: "Frota monitorada 24h, seguro de carga e protocolos rigorosos." },
  { icon: Headphones, title: "Atendimento Especializado", desc: "Consultor dedicado para acompanhar cada etapa da operação." },
  { icon: Globe2, title: "Cobertura Nacional", desc: "Atendemos todas as regiões do Brasil com agilidade e eficiência." },
  { icon: CalendarClock, title: "Coleta Programada", desc: "Agende a coleta no dia e horário ideais para sua operação." },
];

export default function Differentials() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-section">
        <div className="max-w-2xl mb-14">
          <span className="text-secondary text-sm font-bold uppercase tracking-widest">Por que a Bernardo</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary mt-3 leading-tight">
            Diferenciais que transformam <span className="text-gradient">cada entrega</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Combinamos tecnologia, processos rigorosos e atendimento próximo para garantir a melhor experiência logística.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-secondary/40 hover:shadow-card-soft transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-blue grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
