"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Syllabus } from "@/components/Syllabus";
import { QuoteSection } from "@/components/QuoteSection";
import { Endorsements } from "@/components/Endorsements";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Minimalista */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero con Red Neuronal, Logos Grandes Libres y Botones Principales */}
        <Hero />

        {/* 3. Programa Académico Conciso */}
        <Syllabus />

        {/* 4. Agradecimientos y Filosofía Clínica TIVA */}
        <QuoteSection />

        {/* 5. Sede, Avales y los 14 Patrocinadores Oficiales */}
        <Endorsements />
      </main>

      {/* 5. Footer con Enlace Oficial a Inscripciones SMHAP */}
      <Footer />
    </div>
  );
}
