import { seller } from "@/config/seller";

export function whatsappUrl(message: string) {
  if (!seller.whatsapp) return "#contato";
  return `https://wa.me/${seller.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  general: "Olá Miguel! Conheci seu trabalho pelo site e gostaria de saber mais sobre as motos Honda.",
  consorcio: "Olá Miguel! Gostaria de saber mais sobre as opções de consórcio Honda.",
  financiamento: "Olá Miguel! Gostaria de consultar as condições de financiamento."
};