import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miguel Lobo | Consultor de Vendas Honda",
  description: "Encontre sua próxima Honda com atendimento personalizado de Miguel Lobo na Honda Motovix Serra.",
  keywords: ["Miguel Lobo Honda", "Miguel Lobo Motovix", "Honda Motovix Serra", "motos Honda Serra ES", "consórcio Honda Serra ES"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}