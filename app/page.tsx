"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Syllabus } from "@/components/Syllabus";
import { Endorsements } from "@/components/Endorsements";
import { Footer } from "@/components/Footer";
import { LoginModal } from "@/components/LoginModal";

export default function Home() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Minimalista */}
      <Navbar onOpenLogin={() => setLoginModalOpen(true)} />

      <main className="flex-grow">
        {/* 2. Hero con Red Neuronal, Logos Grandes Libres y Botones Principales */}
        <Hero onOpenLogin={() => setLoginModalOpen(true)} />

        {/* 3. Programa Académico Conciso */}
        <Syllabus />

        {/* 4. Sede, Avales y los 14 Patrocinadores Oficiales */}
        <Endorsements />
      </main>

      {/* 5. Footer con Enlace Oficial a Inscripciones SMHAP */}
      <Footer onOpenLogin={() => setLoginModalOpen(true)} />

      {/* Modal de Acceso a la Plataforma */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
}
