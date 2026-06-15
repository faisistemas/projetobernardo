import { waLink } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      <span className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-cta hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      </span>
    </a>
  );
}
