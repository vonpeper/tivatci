"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, BookOpen, LogIn } from "lucide-react";
import { PLATFORM_SIGNIN_URL } from "@/lib/platform";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[#030a16] text-white">
      {/* 1. Imagen de Fondo Oficial Aprobada (Identidad del Evento - Muy tenue para máxima legibilidad) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/hero-neurons-bg.jpg"
          alt="Identidad Visual del Evento"
          fill
          priority
          className="object-cover object-center opacity-30 sm:opacity-35 scale-105"
        />

        {/* Viñeta oscura radial para asegurar contraste perfecto de textos y logos */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(3, 10, 22, 0.45) 0%, rgba(3, 10, 22, 0.8) 60%, rgba(3, 10, 22, 0.98) 100%)",
          }}
        />

        {/* Suave halo bioluminiscente central */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] rounded-full opacity-35 blur-[120px] -z-1"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 180, 255, 0.3) 0%, rgba(245, 158, 11, 0.15) 45%, rgba(0, 0, 0, 0) 70%)",
          }}
        />

        {/* Degradado inferior hacia el fondo blanco de la siguiente sección */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#ffffff]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* LOGO PRINCIPAL TIVA MÉXICO (En círculo blanco de alto contraste) */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-cyan-400/35 via-apple-blue/25 to-amber-300/25 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>

          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full bg-white p-3.5 sm:p-5 shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_50px_rgba(0,180,255,0.25)] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/logo-tiva-mexico.png"
                alt="TIVA México"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* BADGE OFICIAL DEL CURSO (Grande, transparente, sin recuadros) */}
        <div className="relative w-full max-w-[340px] sm:max-w-[520px] md:max-w-[620px] h-14 sm:h-20 mb-8 drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
          <Image
            src="/images/badge-curso-taller.png"
            alt="XXXIII Curso-Taller Farmacología y Perfusión · XIV Curso TIVA / TCI HAP"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* LOGOS SECUNDARIOS: HOSPITAL ÁNGELES Y SMHAP */}
        <div className="flex items-center justify-center gap-8 sm:gap-14 mb-8">
          <div className="relative w-36 sm:w-48 h-10 sm:h-12 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
            <Image
              src="/images/logo-hospital-angeles.png"
              alt="Hospital Ángeles Pedregal"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-20 sm:w-28 h-12 sm:h-14 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
            <Image
              src="/images/logo-smhap.png"
              alt="SMHAP - Sociedad Médica Hospital Ángeles Pedregal"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* TEXTO ULTRA MINIMALISTA */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
          Anestesia Total Intravenosa
        </h1>
        <p className="text-sm sm:text-lg text-slate-300 font-light mb-10 tracking-wide">
          Edición Anual Virtual · Hospital Ángeles del Pedregal
        </p>

        {/* BOTONES DE ACCIÓN PRINCIPALES */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* ACCESO A LA PLATAFORMA */}
          <a
            href={PLATFORM_SIGNIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-apple-blue hover:bg-apple-blueHover active:scale-95 transition-all duration-150 shadow-[0_4px_24px_rgba(0,113,227,0.5)] hover:shadow-[0_6px_32px_rgba(0,113,227,0.65)]"
          >
            <LogIn className="w-4 h-4" />
            <span>Acceso a la Plataforma</span>
          </a>

          {/* INSCRIPCIONES CON LA SMHAP */}
          <a
            href="https://smhap.net/inicio/index.php/curso-tiva/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 active:scale-95 transition-all duration-150 border border-emerald-500/30 backdrop-blur-md shadow-[0_4px_20px_rgba(16,185,129,0.2)]"
          >
            <span>Inscripciones con la SMHAP</span>
            <ExternalLink className="w-4 h-4 text-emerald-400" />
          </a>

          {/* VER PROGRAMA */}
          <a
            href="#programa"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/15 active:scale-95 transition-all duration-150 border border-white/20 backdrop-blur-md"
          >
            <BookOpen className="w-4 h-4 text-cyan-300" />
            <span>Programa</span>
          </a>
        </div>
      </div>
    </section>
  );
};
