"use client";

import React from "react";
import Image from "next/image";
import { Quote, Sparkles, Stethoscope, HeartPulse } from "lucide-react";

export interface QuoteSectionProps {
  authorName?: string;
  authorTitle?: string;
  institution?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  authorName = "Dr. Jesús Alarcón",
  authorTitle = "Especialista en Anestesiología",
  institution = "Curso-Taller TIVA · Hospital Ángeles del Pedregal",
}) => {
  return (
    <section
      id="agradecimientos"
      aria-label="Agradecimientos y Filosofía Clínica"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#030914] text-white border-y border-white/10"
    >
      {/* 1. Fondo Oficial de Red Neuronal / Sinapsis */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/hero-neurons-bg.jpg"
          alt="Fondo Sinapsis y Conectividad Neuronal"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-screen scale-105"
        />

        {/* Gradiente radial de contraste para garantizar legibilidad impecable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(3, 9, 20, 0.72) 0%, rgba(3, 9, 20, 0.92) 65%, rgba(2, 6, 15, 0.99) 100%)",
          }}
        />

        {/* Halo bioluminiscente cian (sinapsis izquierda) */}
        <div
          className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full opacity-25 blur-[100px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 180, 255, 0.45) 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />

        {/* Halo bioluminiscente ámbar (sinapsis derecha) */}
        <div
          className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] rounded-full opacity-20 blur-[110px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Píldora superior / Badge de Agradecimientos */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/15 via-cyan-500/15 to-blue-500/15 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-8 backdrop-blur-md shadow-[0_0_25px_rgba(56,189,248,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-300" />
          </span>
          <span>AGRADECIMIENTOS · FILOSOFÍA TIVA</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Comillas flotantes ornamentales */}
        <div className="relative inline-flex justify-center items-center mb-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-center justify-center text-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
            <Quote className="w-7 h-7 sm:w-8 sm:h-8 fill-sky-400/20 text-sky-400" />
          </div>
        </div>

        {/* Cita Insignia Principal */}
        <blockquote className="max-w-4xl mx-auto my-4 sm:my-6">
          <p className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-100 leading-snug sm:leading-tight italic">
            “Cada infusión tiene un{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-400 font-semibold drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              propósito
            </span>
            , cada dosis una{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200 font-semibold drop-shadow-[0_0_20px_rgba(251,191,36,0.35)]">
              razón
            </span>{" "}
            y cada decisión{" "}
            <span className="text-white font-bold underline decoration-sky-400/60 decoration-2 sm:decoration-4 underline-offset-8">
              un paciente detrás
            </span>
            .”
          </p>
        </blockquote>

        {/* Tarjeta de Reconocimiento y Autoría Clínica */}
        <div className="mt-8 sm:mt-10 inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.45)] hover:border-sky-400/40 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/30 border border-sky-400/30 flex items-center justify-center text-sky-300 shadow-inner shrink-0">
            <Stethoscope className="w-6 h-6" />
          </div>

          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {authorName}
              </h3>
              <HeartPulse className="w-4 h-4 text-rose-400 shrink-0 opacity-80" />
            </div>
            <p className="text-xs sm:text-sm text-sky-200/90 font-medium">
              {authorTitle}
            </p>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
              {institution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default QuoteSection;
