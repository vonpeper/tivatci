"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LogIn, Menu, X, ExternalLink } from "lucide-react";

interface NavbarProps {
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          : "bg-[#030a16]/80 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo TIVA México + Sede */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="relative w-12 h-12 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo-tiva-mexico.png"
                alt="TIVA México"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span
                className={`font-bold tracking-tight text-base sm:text-lg transition-colors ${
                  scrolled ? "text-apple-text" : "text-white"
                }`}
              >
                TIVA México
              </span>
              <span
                className={`text-xs transition-colors ${
                  scrolled ? "text-apple-subtext" : "text-slate-300"
                }`}
              >
                Hospital Ángeles Pedregal · SMHAP
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#programa"
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-apple-subtext hover:text-apple-text"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Programa
            </a>
            <a
              href="#patrocinadores"
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-apple-subtext hover:text-apple-text"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Patrocinadores
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://smhap.net/inicio/index.php/curso-tiva/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all active:scale-95"
            >
              <span>Inscripciones SMHAP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-apple-blue hover:bg-apple-blueHover active:scale-95 transition-all shadow-sm"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Acceso a la Plataforma</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              onClick={onOpenLogin}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-apple-blue active:scale-95 transition-all"
            >
              Acceso
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-apple-text" : "text-white"
              }`}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/[0.08] bg-white px-5 pt-3 pb-6 space-y-4">
          <a
            href="#programa"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-apple-text"
          >
            Programa
          </a>
          <a
            href="#patrocinadores"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-apple-text"
          >
            Patrocinadores
          </a>
          <div className="pt-2 border-t border-black/[0.06] space-y-2.5">
            <a
              href="https://smhap.net/inicio/index.php/curso-tiva/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 flex items-center justify-center gap-2 rounded-full text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200"
            >
              <span>Inscripciones con la SMHAP</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-3 flex items-center justify-center gap-2 rounded-full text-sm font-semibold text-white bg-apple-blue"
            >
              <LogIn className="w-4 h-4" />
              <span>Acceso a la Plataforma</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
