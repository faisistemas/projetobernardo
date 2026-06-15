import PageHeader from "@/components/PageHeader";
import QuoteForm from "@/components/sections/QuoteForm";
import { Clock, ShieldCheck, Headphones } from "lucide-react";

export default function Cotacao() {
  return (
    <>
      <PageHeader
        eyebrow="Cotação"
        title="Solicite seu orçamento agora."
        subtitle="Resposta rápida, sem compromisso. Preencha o formulário e nossa equipe entrará em contato com a melhor proposta."
      />
      <section className="section-pad">
        <div className="container-section grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Clock, title: "Resposta rápida", text: "Retornamos em até 1 hora útil com sua cotação." },
              { icon: ShieldCheck, title: "Sem compromisso", text: "Receba o orçamento e decida com calma." },
              { icon: Headphones, title: "Atendimento humano", text: "Falamos diretamente com você, sem robôs." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-gradient-blue grid place-items-center shrink-0">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
