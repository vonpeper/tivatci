import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso Anual de TIVA | Hospital Ángeles del Pedregal",
  description:
    "Curso Anual de Anestesia Total Intravenosa (TIVA). Excelencia académica, modelado farmacocinético PK/PD, infusión controlada por objetivo (TCI) y simulación clínica avanzada en formato digital. Organizado por TIVA México y Hospital Ángeles del Pedregal.",
  keywords: [
    "TIVA",
    "Anestesia Total Intravenosa",
    "Hospital Ángeles Pedregal",
    "TCI",
    "Modelos PK PD",
    "Marsh",
    "Schnider",
    "Minto",
    "Eleveld",
    "Monitoreo EEG",
    "BIS",
    "Anestesiología",
  ],
  authors: [{ name: "Hospital Ángeles del Pedregal - Departamento de Anestesiología" }],
  openGraph: {
    title: "Curso Anual de TIVA · Hospital Ángeles del Pedregal",
    description:
      "Precisión clínica en formato digital. Accede al programa anual de Anestesia Total Intravenosa y aula virtual interactiva.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-white text-apple-text antialiased selection:bg-blue-100 selection:text-apple-blue min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
