import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miguel Lobo | Honda Motovix Serra",
  description: "Catálogo Honda e atendimento direto com Miguel Lobo na Motovix Serra.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
