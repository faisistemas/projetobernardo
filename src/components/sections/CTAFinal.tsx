import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export default function CTAFinal() {
  return (
    <section className="section-pad">
      <div className="container-section">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-white shadow-elegant">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
              Precisa transportar sua carga com <span className="text-accent">segurança</span>?
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Receba uma cotação personalizada em minutos. Atendimento humano, preços justos e cobertura em todo o Brasil.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="cta" size="xl">
                <Link to="/cotacao">Solicitar Orçamento Agora <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <a href={waLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-5 w-5" /> Falar agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
