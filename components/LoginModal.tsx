"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  LogIn,
  Mail,
  KeyRound,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Loader2,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PLATFORM_SIGNIN_URL = "https://tiva.prol.prosuite.pro/sign-in";

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevenir scroll en body al abrir modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setError(null);
      setSuccess(false);
      setShowHelp(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !matricula.trim()) {
      setError("Por favor completa tu correo y matrícula institucional.");
      return;
    }

    if (!email.includes("@")) {
      setError("Ingresa un correo electrónico con formato válido.");
      return;
    }

    setLoading(true);

    // Conexión y redirección directa al Aula Virtual
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Redirección inmediata a la plataforma educativa
      window.location.href = PLATFORM_SIGNIN_URL;
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop con blur tenue */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-apple-modal border border-black/[0.08] overflow-hidden z-10 transition-all transform scale-100">
        {/* Cabecera del Modal */}
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

        {/* Contenido / Formulario */}
        <div className="p-6 sm:p-7 pt-5">
          {success ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-apple-text">
                Acceso Concedido
              </h4>
              <p className="text-xs sm:text-sm text-apple-subtext max-w-xs mx-auto leading-relaxed">
                Conectando de forma segura con la plataforma educativa de TIVA México...
              </p>
              <div className="pt-2 flex flex-col items-center gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-apple-blue">
                  <Loader2 className="w-4 h-4 animate-spin" /> Redirigiendo a la plataforma...
                </span>
                <a
                  href={PLATFORM_SIGNIN_URL}
                  className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-apple-blue hover:bg-apple-blueHover active:scale-95 transition-all shadow-[0_2px_10px_rgba(0,113,227,0.25)] flex items-center justify-center gap-2"
                >
                  <span>Entrar al Aula Virtual</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Campo Correo */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-apple-text mb-1.5"
                >
                  Correo Electrónico Registrado
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-apple-tertiary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="doctor@hospitalangeles.org"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-black/[0.12] text-sm text-apple-text placeholder-apple-tertiary focus:outline-none focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue transition-all bg-apple-surface/50"
                    required
                  />
                </div>
              </div>

              {/* Campo Matrícula */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="matricula"
                    className="block text-xs font-semibold text-apple-text"
                  >
                    Matrícula / Código de Acceso
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowHelp(!showHelp)}
                    className="text-[11px] text-apple-blue hover:underline flex items-center gap-1"
                  >
                    <HelpCircle className="w-3 h-3" />
                    <span>¿Dónde encontrarlo?</span>
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-apple-tertiary">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <input
                    id="matricula"
                    type="text"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                    placeholder="Ej. TIVA-2026-XXXX"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-black/[0.12] text-sm text-apple-text placeholder-apple-tertiary focus:outline-none focus:ring-2 focus:ring-apple-blue/50 focus:border-apple-blue transition-all bg-apple-surface/50 font-mono"
                    required
                  />
                </div>
              </div>

              {/* Caja de ayuda contextual sobre la matrícula */}
              {showHelp && (
                <div className="p-3 rounded-xl bg-apple-surface border border-black/[0.06] text-xs text-apple-subtext space-y-1">
                  <p className="font-semibold text-apple-text">
                    Información sobre tu clave de acceso:
                  </p>
                  <p>
                    Tu código de matrícula fue generado por TIVA México y la Coordinación de Enseñanza del
                    Hospital Ángeles del Pedregal al registrarte en el curso.
                  </p>
                </div>
              )}

              {/* Botón Acceder */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-apple-blue hover:bg-apple-blueHover active:scale-95 transition-all shadow-[0_2px_10px_rgba(0,113,227,0.25)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Verificando Credenciales...</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4" />
                      <span>Acceder al Aula Virtual</span>
                    </>
                  )}
                </button>
              </div>

              {/* Enlace directo a sign-in */}
              <div className="pt-1 text-center">
                <a
                  href={PLATFORM_SIGNIN_URL}
                  className="text-xs font-medium text-apple-blue hover:underline inline-flex items-center gap-1"
                >
                  <span>O ingresa directamente a la plataforma</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Sección de soporte y recuperación */}
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
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
