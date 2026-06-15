export const WHATSAPP_NUMBER = "5511913390366"; // placeholder
export const EMAIL = "contato@bernardotransportes.com.br";
export const PHONE_DISPLAY = "(11) 91339-0366";
export const ADDRESS = "Avenida José Lourenço Neves, 44 JD. Bom Clima  Guarulhos/SP CEP 07122-070";

export function waLink(message = "Olá! Gostaria de solicitar um orçamento.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
