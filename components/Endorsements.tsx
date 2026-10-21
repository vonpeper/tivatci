"use client";

import React from "react";
import Image from "next/image";
import { Activity } from "lucide-react";

interface SponsorItem {
  name: string;
  logoSrc?: string;
  renderLogo?: () => React.ReactNode;
}

const sponsors: SponsorItem[] = [
  {
    name: "ASPEN",
    logoSrc: "/images/sponsors/aspen.png",
  },
  {
    name: "ALVARTIS PHARMA",
    logoSrc: "/images/sponsors/alvartis.png",
  },
  {
    name: "LIOMONT",
    logoSrc: "/images/sponsors/liomont.svg",
  },
  {
    name: "MEDASENSE",
    logoSrc: "/images/sponsors/medasense.png",
  },
  {
    name: "ATSA (ABASTECEDOR TERAPÉUTICO)",
    logoSrc: "/images/sponsors/atsa.png",
  },
  {
    name: "ANESTESIA PREMIER",
    logoSrc: "/images/sponsors/anestesia-premier.png",
  },
  {
    name: "DOGMA PHARMA",
    logoSrc: "/images/sponsors/dogma.png",
  },
  {
    name: "DOMIK",
    logoSrc: "/images/sponsors/domik.png",
  },
  {
    name: "EQUIPOS MÉDICOS",
    logoSrc: "/images/sponsors/equipos-medicos.png",
  },
  {
    name: "ONFOCUS",
    logoSrc: "/images/sponsors/onfocus.png",
  },
  {
    name: "PROVECTUS",
    logoSrc: "/images/sponsors/provectus.png",
  },
  {
    name: "ZARPRA",
    logoSrc: "/images/sponsors/zarpra.png",
  },
  {
    name: "PIJAMEDIC",
    logoSrc: "/images/sponsors/pijamedic.png",
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
