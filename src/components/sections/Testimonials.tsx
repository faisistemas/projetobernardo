import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Carla Mendes", role: "Diretora Logística — TechVarejo", text: "A Bernardo Transportes mudou nossa operação. Prazos cumpridos, comunicação clara e cargas sempre íntegras. Parceria sólida." },
  { name: "Roberto Lima", role: "CEO — Indústria Lima", text: "Reduzimos custos e aumentamos a satisfação dos clientes com a logística da Bernardo. Atendimento humanizado faz toda a diferença." },
  { name: "Patrícia Souza", role: "Gerente de Compras — MegaShop", text: "Rastreamento em tempo real, motoristas educados e equipe sempre disponível. Recomendo sem hesitar." },
  { name: "Eduardo Costa", role: "Sócio — Distribuidora EC", text: "Profissionalismo do início ao fim. A Bernardo entende de logística como ninguém. Cobertura nacional impecável." },
  { name: "Fernanda Alves", role: "E-commerce — Fashion Hub", text: "Nossas entregas expressas nunca foram tão eficientes. Cliente final feliz, NPS subiu 30%." },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary text-sm font-bold uppercase tracking-widest">Prova social</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary mt-3 leading-tight">
            Quem confia na Bernardo, recomenda.
          </h2>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="max-w-6xl mx-auto">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-8 bg-card border border-border rounded-2xl shadow-card-soft relative">
                  <Quote className="h-10 w-10 text-secondary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                  </div>
                  <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
                  <div>
                    <div className="font-display font-bold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
