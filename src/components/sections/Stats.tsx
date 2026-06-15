import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Entregas realizadas" },
  { value: 2000, suffix: "+", label: "Clientes atendidos" },
  { value: 98, suffix: "%", label: "Índice de satisfação" },
  { value: 27, suffix: "", label: "Estados atendidos" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString("pt-BR")}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-2 bg-card border-y border-border">
      <div className="container-section grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gradient">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm md:text-base text-muted-foreground font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
