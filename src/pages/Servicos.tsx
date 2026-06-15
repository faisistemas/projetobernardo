import PageHeader from "@/components/PageHeader";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import CTAFinal from "@/components/sections/CTAFinal";
import Differentials from "@/components/sections/Differentials";

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Logística sob medida para o seu negócio."
        subtitle="Da carga fracionada à operação dedicada, oferecemos a solução certa para cada desafio logístico."
      />
      <Services />
      <Differentials />
      <HowItWorks />
      <CTAFinal />
    </>
  );
}
