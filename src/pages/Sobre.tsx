import PageHeader from "@/components/PageHeader";
import CTAFinal from "@/components/sections/CTAFinal";
import Stats from "@/components/sections/Stats";
import warehouse from "@/assets/warehouse.jpg";
import delivery from "@/assets/delivery.jpg";
import { Target, Eye, Heart } from "lucide-react";

export default function Sobre() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nós"
        title="Quem somos é como entregamos."
        subtitle="A Bernardo Transportes nasceu com uma missão clara: tornar a logística mais simples, segura e humana para empresas e pessoas em todo o Brasil."
      />
      <section className="section-pad">
        <div className="container-section grid md:grid-cols-2 gap-12 items-center">
          <img src={warehouse} alt="Centro logístico Bernardo" className="rounded-2xl shadow-elegant w-full" width={1280} height={800} loading="lazy" />
          <div>
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Nossa história</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mt-3 leading-tight">
              Mais de uma década entregando confiança
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Começamos pequenos, com um caminhão e muita vontade de fazer diferente. Hoje somos referência em soluções logísticas para indústrias, varejistas e e-commerces, sempre com o mesmo compromisso: tratar cada carga como se fosse nossa.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nossa frota moderna, equipe especializada e processos certificados garantem o que mais importa: sua tranquilidade.
            </p>
          </div>
        </div>
      </section>
      <Stats />
      <section className="section-pad bg-surface">
        <div className="container-section grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Missão", text: "Entregar soluções logísticas com excelência, agilidade e segurança, gerando valor para nossos clientes." },
            { icon: Eye, title: "Visão", text: "Ser a transportadora mais admirada do Brasil pela qualidade do atendimento e inovação operacional." },
            { icon: Heart, title: "Valores", text: "Ética, compromisso, segurança, transparência e foco no cliente em cada etapa da jornada." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-8">
              <Icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold text-primary mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-pad">
        <div className="container-section grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Equipe</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mt-3 leading-tight">
              Pessoas no centro de tudo
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Investimos continuamente em capacitação, segurança e tecnologia para que cada motorista, operador e atendente entregue o melhor da Bernardo: profissionalismo com calor humano.
            </p>
          </div>
          <img src={delivery} alt="Equipe Bernardo Transportes" className="rounded-2xl shadow-elegant w-full order-1 lg:order-2" width={1280} height={800} loading="lazy" />
        </div>
      </section>
      <CTAFinal />
    </>
  );
}
