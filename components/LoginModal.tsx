"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, LogIn, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { PLATFORM_SIGNIN_URL } from "@/lib/platform";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-apple-modal border border-black/[0.08] overflow-hidden z-10 transition-all transform scale-100">
        <div className="p-6 sm:p-7 pb-4 flex items-start justify-between border-b border-black/[0.05]">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full border border-black/[0.08] p-1 bg-white shrink-0 shadow-sm">
              <Image
                src="/images/logo-tiva-mexico.png"
                alt="TIVA México"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-apple-blue/10 text-apple-blue text-[10px] font-semibold tracking-wide uppercase mb-1">
                <ShieldCheck className="w-3 h-3" />
                <span>Portal Alumnos · TIVA México</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-apple-text">
                Ingreso al Aula Virtual
              </h3>
              <p className="text-[11px] text-apple-subtext">
                Hospital Ángeles Pedregal · SMHAP
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-apple-tertiary hover:text-apple-text hover:bg-black/[0.05] transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-7 pt-5 space-y-4">
          <p className="text-sm text-apple-subtext leading-relaxed">
            El inicio de sesión está en el portal del curso. Esta página solo te lleva ahí.
          </p>

          <a
            href={PLATFORM_SIGNIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-apple-blue hover:bg-apple-blueHover active:scale-95 transition-all shadow-[0_2px_10px_rgba(0,113,227,0.25)] flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Acceso a la Plataforma</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="pt-4 border-t border-black/[0.05] text-center space-y-2">
            <p className="text-xs text-apple-subtext">
              ¿Problemas para ingresar o extraviaste tu clave?
            </p>
            <div className="flex items-center justify-center gap-4 text-xs font-medium text-apple-blue">
              <a
                href="mailto:coordinacion.tiva@angelespedregal.mx?subject=Soporte%20Acceso%20TIVA%20Pedregal"
                className="hover:underline"
              >
                Mesa de Ayuda Médica
              </a>
              <span className="text-apple-tertiary">·</span>
              <a
                href="https://wa.me/525500000000?text=Hola,%20requiero%20asistencia%20con%20mi%20matrícula%20del%20Curso%20TIVA%20México"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1"
              >
                <span>WhatsApp Académico</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
