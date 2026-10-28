"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { NeuronCanvas } from "@/components/NeuronCanvas";
import { PLATFORM_SIGNIN_URL } from "@/lib/platform";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#030a16] text-slate-300 text-xs border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Fondo interactivo animado de neuronas */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto opacity-40">
        <NeuronCanvas />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(3, 10, 22, 0.6) 0%, rgba(3, 10, 22, 0.95) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 shrink-0 bg-white rounded-full p-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.35)] flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/images/logo-tiva-mexico.png"
                  alt="TIVA México"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-base block">
                TIVA México
              </span>
              <span className="text-xs text-slate-400">
                Hospital Ángeles del Pedregal · SMHAP
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a
              href={PLATFORM_SIGNIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              Acceso a la Plataforma
            </a>
            <a href="#programa" className="text-slate-300 hover:text-white transition-colors">
              Programa
            </a>
            <a href="#patrocinadores" className="text-slate-300 hover:text-white transition-colors">
              Patrocinadores
            </a>
            <a
              href="https://smhap.net/inicio/index.php/curso-tiva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>Inscripciones con la SMHAP</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Contacto */}
          <div className="text-xs text-slate-400 space-y-1">
            <p>Camino a Santa Teresa 1055, Héroes de Padierna, CDMX</p>
            <p>Torre de Especialidades Quirúrgicas · Ext. 4501</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} TIVA México · Hospital Ángeles del Pedregal. Todos los derechos reservados.
          </p>
          <a
            href="https://smhap.net/inicio/index.php/curso-tiva/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-slate-400 hover:text-white transition-colors"
          >
            Portal de Inscripción Oficial SMHAP
          </a>
        </div>
      </div>
    </footer>
  );
};
