import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#030a16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tivataller.com"),
  title: "Curso Anual de TIVA 2026 | Hospital Ángeles del Pedregal",
  description:
    "Curso Anual de Anestesia Total Intravenosa (TIVA/TCI). Excelencia académica, modelado farmacocinético PK/PD, infusión controlada por objetivo y simulación clínica avanzada en formato digital. Organizado por TIVA México y Hospital Ángeles del Pedregal.",
  keywords: [
    "TIVA",
    "TIVA México",
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
    "Curso Anual TIVA",
    "SMHAP",
  ],
  authors: [{ name: "Hospital Ángeles del Pedregal - Departamento de Anestesiología" }],
  creator: "TIVA México",
  publisher: "Hospital Ángeles del Pedregal",
  alternates: {
    canonical: "https://tivataller.com",
  },
  openGraph: {
    title: "Curso Anual de TIVA 2026 · Hospital Ángeles del Pedregal",
    description:
      "XXXIII Curso-Taller Farmacología y Perfusión de Agentes Anestésicos · XIV Curso/Taller TIVA/TCI HAP. Precisión clínica y simulación digital.",
    url: "https://tivataller.com",
    siteName: "TIVA México",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Curso Anual de TIVA 2026 - Hospital Ángeles del Pedregal · SMHAP",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso Anual de TIVA 2026 · Hospital Ángeles del Pedregal",
    description:
      "XXXIII Curso-Taller Farmacología y Perfusión de Agentes Anestésicos · XIV Curso/Taller TIVA/TCI HAP.",
    images: ["/images/og-image.jpg"],
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
