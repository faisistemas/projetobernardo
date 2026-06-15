import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(160),
  origem: z.string().trim().min(2, "Informe a origem").max(120),
  destino: z.string().trim().min(2, "Informe o destino").max(120),
  tipoCarga: z.string().trim().min(2, "Informe o tipo de carga").max(120),
  mensagem: z.string().trim().max(800).optional().or(z.literal("")),
});

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const first = res.error.issues[0];
      toast.error(first.message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Cotação enviada! Entraremos em contato em breve.");
      e.currentTarget?.reset();
      const msg = `Olá! Solicito uma cotação:%0A%0ANome: ${res.data.nome}%0AEmpresa: ${res.data.empresa || "-"}%0ATelefone: ${res.data.telefone}%0AE-mail: ${res.data.email}%0AOrigem: ${res.data.origem}%0ADestino: ${res.data.destino}%0ATipo de carga: ${res.data.tipoCarga}%0AMensagem: ${res.data.mensagem || "-"}`;
      window.open(`https://wa.me/5511913390366?text=${msg}`, "_blank");
    }, 800);
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-card border border-border rounded-2xl ${compact ? "p-6" : "p-8 md:p-10"} shadow-elegant`}>
      <div className="grid md:grid-cols-2 gap-5">
        <Field name="nome" label="Nome completo *" placeholder="Seu nome" />
        <Field name="empresa" label="Empresa" placeholder="Nome da empresa (opcional)" />
        <Field name="telefone" label="Telefone *" placeholder="(11) 99999-0000" type="tel" />
        <Field name="email" label="E-mail *" placeholder="voce@email.com" type="email" />
        <Field name="origem" label="Origem *" placeholder="Cidade / UF de coleta" />
        <Field name="destino" label="Destino *" placeholder="Cidade / UF de entrega" />
        <div className="md:col-span-2">
          <Field name="tipoCarga" label="Tipo de carga *" placeholder="Ex: eletrônicos, alimentos, móveis..." />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="mensagem" className="text-sm font-semibold text-primary mb-2 block">Mensagem</Label>
          <Textarea id="mensagem" name="mensagem" placeholder="Detalhes da carga, peso, dimensões, prazos..." rows={4} />
        </div>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <Button type="submit" variant="cta" size="lg" disabled={loading} className="flex-1">
          <Send className="h-4 w-4" /> {loading ? "Enviando..." : "Receber Cotação"}
        </Button>
        <Button asChild variant="whatsapp" size="lg" type="button">
          <a href={waLink()} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Ao enviar você concorda em ser contatado pela nossa equipe comercial.
      </p>
    </form>
  );
}

function Field({ name, label, placeholder, type = "text" }: { name: string; label: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <Label htmlFor={name} className="text-sm font-semibold text-primary mb-2 block">{label}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} className="h-11" />
    </div>
  );
}
