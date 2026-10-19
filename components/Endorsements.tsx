"use client";

import React from "react";
import Image from "next/image";
import {
  Activity,
  Pill,
  Sparkles,
  HeartPulse,
  Cross,
  Stethoscope,
  BookOpen,
  Shirt,
  Building2,
} from "lucide-react";

interface SponsorItem {
  name: string;
  logoSrc?: string;
  renderLogo?: () => React.ReactNode;
}

const sponsors: SponsorItem[] = [
  {
    name: "ASPEN",
    logoSrc: "/images/sponsor-aspen.svg",
  },
  {
    name: "LIOMONT",
    logoSrc: "/images/sponsor-liomont.svg",
  },
  {
    name: "MEDASENSE",
    logoSrc: "/images/sponsor-medasense.png",
  },
  {
    name: "ALVARTIS PHARMA",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Pill className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-sm tracking-tight text-slate-800 leading-tight">
            ALVARTIS
          </span>
          <span className="text-[10px] tracking-widest text-emerald-700 font-semibold uppercase">
            PHARMA
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "ALTERNATIVA EN ANESTESIA",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Activity className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-xs tracking-tight text-slate-800 leading-tight">
            ALTERNATIVA
          </span>
          <span className="text-[9px] tracking-wider text-sky-700 font-medium uppercase">
            EN ANESTESIA
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "ANESTESIA PREMIER",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-xs tracking-tight text-slate-800 leading-tight">
            ANESTESIA
          </span>
          <span className="text-[9px] tracking-widest text-amber-700 font-semibold uppercase">
            PREMIER
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "ATSA (ABASTECEDOR TERAPÉUTICO)",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#001489] flex items-center justify-center text-white shrink-0 shadow-sm">
          <Cross className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-black text-sm tracking-tight text-[#001489] leading-none">
            ATSA
          </span>
          <span className="text-[9px] tracking-wider text-slate-500 font-medium">
            Abastecedor Terapéutico
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "DOGMA PHARMA",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-purple-700 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Pill className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-xs tracking-tight text-slate-800 leading-tight">
            DOGMA
          </span>
          <span className="text-[9px] tracking-widest text-purple-700 font-semibold uppercase">
            PHARMA
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "EQUIPOS MÉDICOS",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Stethoscope className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-xs tracking-tight text-slate-800 leading-tight">
            EQUIPOS
          </span>
          <span className="text-[9px] tracking-wider text-slate-500 font-semibold uppercase">
            MÉDICOS
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "ONFOCUS",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm">
          <HeartPulse className="w-4 h-4" />
        </div>
        <span className="font-extrabold text-sm tracking-tight text-slate-800 uppercase">
          ONFOCUS
        </span>
      </div>
    ),
  },
  {
    name: "PROVECTUS",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Activity className="w-4 h-4" />
        </div>
        <span className="font-extrabold text-sm tracking-tight text-slate-800 uppercase">
          PROVECTUS
        </span>
      </div>
    ),
  },
  {
    name: "ZARPRA",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-red-700 flex items-center justify-center text-white shrink-0 shadow-sm">
          <BookOpen className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-black text-sm tracking-wider text-red-700 leading-none">
            ZARPRA
          </span>
          <span className="text-[8px] tracking-widest text-slate-500 uppercase">
            Ediciones Médicas
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "PIJAMEDIC",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Shirt className="w-4 h-4" />
        </div>
        <span className="font-black text-xs sm:text-sm tracking-tight text-slate-800 uppercase">
          PIJAMEDIC
        </span>
      </div>
    ),
  },
  {
    name: "DOMIK",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-700 flex items-center justify-center text-white shrink-0 shadow-sm">
          <Building2 className="w-4 h-4" />
        </div>
        <span className="font-black text-sm tracking-wider text-slate-800 uppercase">
          DOMIK
        </span>
      </div>
    ),
  },
];

export const Endorsements: React.FC = () => {
  return (
    <section id="patrocinadores" className="py-16 sm:py-24 bg-[#fbfbfd] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Conciso */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-apple-text">
            Patrocinadores
          </h2>
        </div>

        {/* Grid de Logos Limpios sin Explicación */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5">
          {sponsors.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl h-24 sm:h-28 p-3 sm:p-4 border border-black/[0.06] hover:border-black/[0.15] hover:shadow-apple-card transition-all duration-200 flex items-center justify-center group"
            >
              {item.logoSrc ? (
                <div className="relative w-full h-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <Image
                    src={item.logoSrc}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ) : item.renderLogo ? (
                <div className="transition-transform duration-200 group-hover:scale-105">
                  {item.renderLogo()}
                </div>
              ) : (
                <span className="font-bold text-xs tracking-tight text-apple-text uppercase">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
