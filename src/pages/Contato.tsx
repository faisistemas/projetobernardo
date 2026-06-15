import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, ADDRESS, waLink } from "@/lib/contact";
import QuoteForm from "@/components/sections/QuoteForm";

export default function Contato() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar sobre sua próxima entrega."
        subtitle="Nossa equipe está pronta para atender você por telefone, e-mail ou WhatsApp."
      />
      <section className="section-pad">
        <div className="container-section grid md:grid-cols-2 gap-12">
          <div className="space-y-5">
            {[
              { icon: Phone, title: "Telefone", value: PHONE_DISPLAY, href: `tel:+55${PHONE_DISPLAY.replace(/\D/g, '')}` },
              { icon: Mail, title: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MapPin, title: "Endereço", value: ADDRESS },
              { icon: Clock, title: "Horário", value: "Seg a Sex: 8h às 18h · Sáb: 8h às 12h" },
            ].map(({ icon: Icon, title, value, href }) => (
              <a key={title} href={href || "#"} className="flex gap-5 p-6 bg-card border border-border rounded-2xl hover:shadow-card-soft hover:border-secondary/40 transition-all">
                <div className="h-14 w-14 rounded-xl bg-gradient-blue grid place-items-center shrink-0">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary text-lg">{title}</h3>
                  <p className="text-muted-foreground mt-1">{value}</p>
                </div>
              </a>
            ))}
            <Button asChild variant="whatsapp" size="xl" className="w-full">
              <a href={waLink()} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" /> Falar no WhatsApp agora
              </a>
            </Button>
          </div>
          <div>
            <h3 className="font-display text-2xl font-extrabold text-primary mb-4">Envie uma mensagem</h3>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
