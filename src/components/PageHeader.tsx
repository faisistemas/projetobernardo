export default function PageHeader({ title, subtitle, eyebrow }: { title: string; subtitle?: string; eyebrow?: string }) {
  return (
    <section className="bg-gradient-hero text-white pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container-section relative max-w-3xl">
        {eyebrow && <span className="text-accent font-bold uppercase tracking-widest text-sm">{eyebrow}</span>}
        <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
