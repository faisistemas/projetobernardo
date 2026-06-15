import { ClipboardList, PackageCheck, Truck, BadgeCheck } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Solicite uma cotação", desc: "Preencha o formulário ou fale conosco no WhatsApp." },
  { icon: PackageCheck, title: "Coletamos sua carga", desc: "Equipe especializada faz a coleta no local e horário combinados." },
  { icon: Truck, title: "Transporte monitorado", desc: "Sua carga viaja com segurança e rastreamento em tempo real." },
  { icon: BadgeCheck, title: "Entrega confirmada", desc: "Comprovante digital e notificação ao destinatário." },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="container-section relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Como funciona</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3 leading-tight">Simples, rápido e transparente</h2>
          <p className="mt-4 text-white/80 text-lg">Da cotação à entrega, um processo claro em apenas 4 passos.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-7 h-full hover:bg-white/15 transition-colors">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-14 w-14 rounded-xl bg-accent grid place-items-center">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="font-display text-5xl font-extrabold text-white/15">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
