import Hero from "@/components/sections/Hero";
import Differentials from "@/components/sections/Differentials";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTAFinal from "@/components/sections/CTAFinal";
import QuoteForm from "@/components/sections/QuoteForm";

const Index = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Differentials />
      <Services />
      <HowItWorks />
      <Testimonials />
      <section id="cotacao" className="section-pad bg-surface">
        <div className="container-section grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Cotação rápida</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary mt-3 leading-tight">
              Receba seu orçamento em <span className="text-gradient">poucos minutos</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Preencha os dados ao lado e nossa equipe comercial entrará em contato com a melhor solução para o seu transporte.
            </p>
            <ul className="mt-8 space-y-4">
              {["Resposta em até 1 hora útil", "Sem compromisso e sem taxa", "Atendimento humano e dedicado", "Cobertura nacional completa"].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent grid place-items-center text-white text-sm font-bold shrink-0">✓</span>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>
      <CTAFinal />
    </>
  );
};

export default Index;
