// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { ArrowRight, MessageCircle, ShieldCheck, Truck, Clock } from "lucide-react";
// import { waLink } from "@/lib/contact";
// import caminhao from "@/assets/caminhao.png";

// import heroAsset from "@/assets/hero-carreto.png.asset.json";
// const hero = heroAsset.url;

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-hero text-white">
//       <div className="absolute inset-0 opacity-30">
//         <img src={hero} alt="Frota moderna Bernardo Transportes" className="w-full h-full object-cover" width={1920} height={1080} />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
//       </div>

//       <div className="container-section relative z-10 py-10 md:py-10 flex flex-col-reverse lg:flex-row gap-12 items-center">
//         <div className="animate-fade-up">

//           <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
//             Entregamos sua carga com <span className="text-accent">rapidez</span>, segurança e compromisso.
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
//             Soluções logísticas inteligentes para empresas e pessoas em todo o Brasil. Cotação rápida, atendimento humanizado e rastreamento em tempo real.
//           </p>

//           <div className="mt-10 flex flex-col sm:flex-row gap-4">
//             <Button asChild size="xl" variant="cta">
//               <Link to="/cotacao">
//                 Solicitar Orçamento <ArrowRight className="h-5 w-5" />
//               </Link>
//             </Button>
//             <Button asChild size="xl" variant="outlineLight">
//               <a href={waLink()} target="_blank" rel="noreferrer">
//                 <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
//               </a>
//             </Button>
//           </div>

//           <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-lg">
//             {[
//               { icon: Truck, label: "+10.000", sub: "entregas" },
//               { icon: ShieldCheck, label: "100%", sub: "seguras" },
//               { icon: Clock, label: "24h", sub: "atendimento" },
//             ].map(({ icon: Icon, label, sub }) => (
//               <div key={label} className="text-left">
//                 <Icon className="h-6 w-6 text-accent mb-2" />
//                 <div className="font-display font-extrabold text-2xl">{label}</div>
//                 <div className="text-xs uppercase tracking-wider text-white/70">{sub}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex-1 animate-fade-in mb-8 lg:mb-0">
//           <div className="relative">
//             <div className="absolute -inset-8 bg-accent/20 blur-3xl rounded-full" />
//             <img src={caminhao} alt="Caminhão de transporte" className="relative rounded-2xl shadow-elegant border border-white/10" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Clock } from "lucide-react";
import { waLink } from "@/lib/contact";
import caminhao from "@/assets/caminhao.png";

// import heroAsset from "@/assets/hero-carreto.png.asset.json";
// const hero = heroAsset.url;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        {/* <img
          src={hero}
          alt="Frota moderna Bernardo Transportes"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      {/* Conteúdo principal */}
      <div className="container-section relative z-10 py-4 md:py-10 flex flex-col-reverse lg:flex-row gap-8 items-center">

        {/* Texto */}
        <div className="animate-fade-up flex-1">
          <h1 className="mt-1 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Entregamos sua carga com <span className="text-accent">rapidez</span>, segurança e compromisso.
          </h1>
          <p className="mt-4 text-xs md:text-xl text-white/85 max-w-xl leading-relaxed">
            Soluções logísticas inteligentes para empresas e pessoas em todo o Brasil. Cotação rápida, atendimento humanizado e rastreamento em tempo real.
          </p>

          {/* Botões */}
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <Button asChild size="xl" variant="cta">
              <Link to="/cotacao">
                Solicitar Orçamento <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outlineLight">
              <a href={waLink()} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Imagem */}

        <div className="flex-1 animate-fade-in lg:mb-0 lg:-mt-0">
  <div className="relative">
    <div className="absolute -inset-8 bg-accent/20 blur-3xl rounded-full" />
    <img
      src={caminhao}
      alt="Caminhão de transporte"
      className="relative rounded-2xl shadow-elegant border border-white/10 w-full mx-auto h-50 md:h-80 lg:h-[26rem]"
    />
  </div>

        </div>
      </div>

    </section>
  );
}
