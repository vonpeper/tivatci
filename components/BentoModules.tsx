"use client";

import React, { useState } from "react";
import {
  Activity,
  Cpu,
  Brain,
  Stethoscope,
  ChevronRight,
  TrendingUp,
  Sliders,
  PlayCircle,
  FileCheck,
  CheckCircle,
} from "lucide-react";

export const BentoModules: React.FC = () => {
  // Estado para la simulación interactiva de la Card 1 (Modelos TCI)
  const [activeModel, setActiveModel] = useState<"schnider" | "marsh" | "eleveld">("schnider");
  // Estado para la simulación interactiva de la Card 3 (Casos clínicos)
  const [activeCase, setActiveCase] = useState<"neuro" | "bariatric" | "pediatric">("neuro");

  return (
    <section id="modulos" className="py-20 sm:py-28 bg-[#fbfbfd] border-y border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de Sección */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-semibold tracking-wide uppercase mb-3">
            Módulos de Formación Avanzada
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text">
            Diseñado para la excelencia en el quirófano moderno.
          </h2>
          <p className="mt-4 text-lg text-apple-subtext leading-relaxed">
            Una currícula estructurada meticulosamente por expertos del Hospital Ángeles del Pedregal
            que integra fundamentos matemáticos, tecnología de infusión y juicio clínico en tiempo real.
          </p>
        </div>

        {/* Bento Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* CARD 1: Modelado PK/PD y TCI (Colspan 7 en desktop) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-apple-card hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-apple-blue/10 text-apple-blue flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/[0.04] text-apple-subtext">
                  Módulo 01
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-apple-text mb-3">
                Modelado Farmacocinético y Farmacodinámico (PK/PD)
              </h3>
              <p className="text-apple-subtext text-sm sm:text-base leading-relaxed mb-6">
                Comprensión matemática intuitiva de los modelos multicompartimentales. Infusión
                Controlada por Objetivo (TCI) en sitio efector (\(C_e\)) y sitio plasmático (\(C_p\)).
              </p>

              {/* Selector de Modelos Interactivo */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <button
                  onClick={() => setActiveModel("schnider")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeModel === "schnider"
                      ? "bg-apple-blue text-white shadow-sm"
                      : "bg-apple-secondarySurface text-apple-subtext hover:text-apple-text"
                  }`}
                >
                  Schnider (Propofol Ce)
                </button>
                <button
                  onClick={() => setActiveModel("marsh")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeModel === "marsh"
                      ? "bg-apple-blue text-white shadow-sm"
                      : "bg-apple-secondarySurface text-apple-subtext hover:text-apple-text"
                  }`}
                >
                  Marsh (Propofol Cp)
                </button>
                <button
                  onClick={() => setActiveModel("eleveld")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeModel === "eleveld"
                      ? "bg-apple-blue text-white shadow-sm"
                      : "bg-apple-secondarySurface text-apple-subtext hover:text-apple-text"
                  }`}
                >
                  Eleveld (Universal Pk/Pd)
                </button>
              </div>

              {/* Display de Simulación TCI */}
              <div className="p-4 sm:p-5 rounded-2xl bg-apple-surface border border-black/[0.04] space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-apple-blue animate-pulse"></span>
                    <span className="font-semibold text-apple-text">
                      {activeModel === "schnider" && "Modelo Schnider · Adulto 70kg / 175cm / 45 años"}
                      {activeModel === "marsh" && "Modelo Marsh Modificado · V1 ajustado por masa corporal"}
                      {activeModel === "eleveld" && "Modelo Eleveld · Optimizado desde neonatos hasta senectud"}
                    </span>
                  </div>
                  <span className="text-apple-subtext font-mono text-xs hidden sm:inline">
                    k_e0: {activeModel === "schnider" ? "0.456 min⁻¹" : activeModel === "marsh" ? "0.26 min⁻¹" : "Dinámico"}
                  </span>
                </div>

                {/* Gráfica conceptual Ce vs Cp estilo Apple */}
                <div className="h-28 sm:h-32 w-full bg-white rounded-xl p-3 border border-black/[0.04] relative flex flex-col justify-end overflow-hidden">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-15 pointer-events-none">
                    <div className="border-b border-dashed border-gray-400 w-full"></div>
                    <div className="border-b border-dashed border-gray-400 w-full"></div>
                    <div className="border-b border-dashed border-gray-400 w-full"></div>
                  </div>

                  {/* SVG de Curvas de Infusión */}
                  <svg className="w-full h-20 overflow-visible" viewBox="0 0 300 70" preserveAspectRatio="none">
                    {/* Cp curve (curva plasmática) */}
                    <path
                      d="M 0,65 Q 25,10 60,35 T 150,38 T 300,42"
                      fill="none"
                      stroke="#86868b"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                    {/* Ce curve (curva sitio efector con delay) */}
                    <path
                      d="M 0,68 C 30,68 50,40 90,38 C 150,37 220,39 300,41"
                      fill="none"
                      stroke="#0071e3"
                      strokeWidth="3.2"
                      className="transition-all duration-500"
                    />
                  </svg>

                  <div className="flex items-center justify-between mt-2 pt-1 text-[11px] font-medium text-apple-subtext">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-1 bg-apple-blue rounded-full"></span>
                      Concentración en Sitio Efector (\(C_e\)):{" "}
                      <strong className="text-apple-text font-semibold">3.2 µg/mL</strong>
                    </span>
                    <span className="flex items-center gap-1.5 hidden sm:flex">
                      <span className="w-2.5 h-1 bg-gray-400 rounded-full border border-dashed"></span>
                      Concentración Plasmática (\(C_p\)):{" "}
                      <strong className="text-apple-text font-semibold">3.5 µg/mL</strong>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs">
                  <div className="bg-white p-2 rounded-lg border border-black/[0.04]">
                    <span className="text-[11px] text-apple-subtext block">Tiempo a Diana</span>
                    <span className="font-semibold text-apple-text font-mono">1.8 min</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-black/[0.04]">
                    <span className="text-[11px] text-apple-subtext block">Tasa Infusión</span>
                    <span className="font-semibold text-apple-text font-mono">132 mL/h</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-black/[0.04]">
                    <span className="text-[11px] text-apple-subtext block">T. Decremento 50%</span>
                    <span className="font-semibold text-apple-text font-mono">9.4 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-apple-subtext">
              <span>Incluye algoritmos de Minto para Remifentanilo</span>
              <span className="font-medium text-apple-blue flex items-center gap-1">
                Farmacocinética Aplicada <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* CARD 2: Monitoreo y Profundidad Anestésica (Colspan 5 en desktop) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-apple-card hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/[0.04] text-apple-subtext">
                  Módulo 02
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-apple-text mb-3">
                Monitoreo Neurofisiológico y EEG
              </h3>
              <p className="text-apple-subtext text-sm sm:text-base leading-relaxed mb-6">
                Interpretación en vivo del electroencefalograma crudo, matriz de densidad espectral
                (DSA) e índices procesados (BIS, qCON, SedLine).
              </p>

              {/* Panel de Simulación Neurofisiológica */}
              <div className="p-4 sm:p-5 rounded-2xl bg-apple-surface border border-black/[0.04] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-600 animate-pulse" />
                    <span className="text-xs font-semibold text-apple-text uppercase tracking-wider">
                      Ventana Quirúrgica Óptima
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-700">
                    BIS 46 · Adecuado
                  </span>
                </div>

                {/* Simulación Gráfica de Onda EEG */}
                <div className="h-20 bg-white rounded-xl p-3 border border-black/[0.04] flex flex-col justify-center relative overflow-hidden">
                  <div className="text-[10px] text-apple-subtext absolute top-1.5 left-3 font-mono">
                    Canal Frontal (Fp1-F7) · Oscilación Delta/Alfa frontalizada
                  </div>
                  <svg className="w-full h-10" viewBox="0 0 400 40">
                    <path
                      d="M 0,20 Q 10,5 20,20 T 40,20 T 60,35 T 80,10 T 100,25 T 120,15 T 140,28 T 160,10 T 180,22 T 200,8 T 220,30 T 240,18 T 260,24 T 280,12 T 300,28 T 320,18 T 340,22 T 360,14 T 380,26 T 400,20"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-black/[0.04]">
                    <span className="text-apple-subtext block text-[11px]">BSR (Burst Suppression)</span>
                    <span className="text-base font-bold text-apple-text font-mono">0%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-black/[0.04]">
                    <span className="text-apple-subtext block text-[11px]">SEF 95% (Spectral Edge)</span>
                    <span className="text-base font-bold text-apple-text font-mono">11.8 Hz</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-apple-subtext">
              <span>Prevención activa de despertar intraoperatorio</span>
              <span className="font-medium text-emerald-600 flex items-center gap-1">
                Protocolo NeuroÁngeles <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* CARD 3: Casos Clínicos y Simulación Dinámica (Colspan 12 en desktop) */}
          <div className="lg:col-span-12 bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-apple-card hover:shadow-apple-hover transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                    <Stethoscope className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/[0.04] text-apple-subtext">
                    Módulo 03 · Simulación Avanzada
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-apple-text mb-3">
                  Casos Clínicos Complejos y Escenarios de Alta Fidelidad
                </h3>
                <p className="text-apple-subtext text-sm sm:text-base leading-relaxed mb-6">
                  Toma de decisiones guiada paso a paso en cirugías críticas. Aprende cómo ajustar las
                  dianas farmacológicas en escenarios donde el margen de error es mínimo.
                </p>

                {/* Selector de Casos */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => setActiveCase("neuro")}
                    className={`flex items-center justify-between sm:justify-start gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all border text-left ${
                      activeCase === "neuro"
                        ? "border-apple-blue bg-apple-blue/5 text-apple-blue shadow-sm"
                        : "border-black/[0.06] bg-apple-surface text-apple-subtext hover:text-apple-text hover:bg-black/[0.02]"
                    }`}
                  >
                    <span>1. Neurocirugía y Craneotomía</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>

                  <button
                    onClick={() => setActiveCase("bariatric")}
                    className={`flex items-center justify-between sm:justify-start gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all border text-left ${
                      activeCase === "bariatric"
                        ? "border-apple-blue bg-apple-blue/5 text-apple-blue shadow-sm"
                        : "border-black/[0.06] bg-apple-surface text-apple-subtext hover:text-apple-text hover:bg-black/[0.02]"
                    }`}
                  >
                    <span>2. Paciente Obeso Mórbido</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>

                  <button
                    onClick={() => setActiveCase("pediatric")}
                    className={`flex items-center justify-between sm:justify-start gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all border text-left ${
                      activeCase === "pediatric"
                        ? "border-apple-blue bg-apple-blue/5 text-apple-blue shadow-sm"
                        : "border-black/[0.06] bg-apple-surface text-apple-subtext hover:text-apple-text hover:bg-black/[0.02]"
                    }`}
                  >
                    <span>3. Población Pediátrica</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>
                </div>
              </div>

              {/* Visualizador del Caso Seleccionado */}
              <div className="lg:col-span-6 bg-apple-surface rounded-2xl p-5 sm:p-6 border border-black/[0.05]">
                {activeCase === "neuro" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-apple-blue">
                        Caso 01 · Resección Tumoral Frontotemporal
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium">
                        Monitoreo Potenciales Evocados
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-apple-text leading-relaxed">
                      Paciente de 54 años programado para resección cortical. Requiere mapeo motor intraoperatorio sin relajantes neuromusculares.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                        <span className="text-[11px] text-apple-subtext block">Propofol TCI (Schnider Ce)</span>
                        <span className="text-sm font-semibold text-apple-text">2.8 - 3.2 µg/mL</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                        <span className="text-[11px] text-apple-subtext block">Remifentanilo (Minto Ce)</span>
                        <span className="text-sm font-semibold text-apple-text">4.0 - 5.5 ng/mL</span>
                      </div>
                    </div>
                    <div className="text-xs text-emerald-600 bg-emerald-50 rounded-xl p-2.5 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      <span>Preserva amplitud de potenciales motores (MEP) y estabilidad de autorregulación cerebral.</span>
                    </div>
                  </div>
                )}

                {activeCase === "bariatric" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-apple-blue">
                        Caso 02 · Bypass Gástrico en IMC 48 kg/m²
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">
                        Ajuste por Peso Ideal y Magro
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-apple-text leading-relaxed">
                      Manejo de sobredosificación farmacológica por sobredimensionamiento lipídico. Empleo de ecuaciones de Janmahasatian para Masa Libre de Grasa (FFM).
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                        <span className="text-[11px] text-apple-subtext block">Modelo Recomendado</span>
                        <span className="text-sm font-semibold text-apple-text">Eleveld o Marsh c/IBW</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                        <span className="text-[11px] text-apple-subtext block">Despertar Estimado</span>
                        <span className="text-sm font-semibold text-apple-text">6.5 min post-corte</span>
                      </div>
                    </div>
                    <div className="text-xs text-apple-blue bg-blue-50 rounded-xl p-2.5 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      <span>Eliminación rápida sin acumulación tisular gracias a la cinética de infusión calculada.</span>
                    </div>
                  </div>
                )}

                {activeCase === "pediatric" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-apple-blue">
                        Caso 03 · Cirugía Urológica Pediátrica (4 años)
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 font-medium">
                        Modelo Kataria / Absalom / Eleveld
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-apple-text leading-relaxed">
                      Volúmenes de distribución centrales mayores y aclaramiento acelerado. Transición suave de inducción inhalatoria a TIVA total libre de dolor.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                        <span className="text-[11px] text-apple-subtext block">Diana Propofol Ce</span>
                        <span className="text-sm font-semibold text-apple-text">4.0 - 5.0 µg/mL</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                        <span className="text-[11px] text-apple-subtext block">Recuperación Cognitiva</span>
                        <span className="text-sm font-semibold text-apple-text">Rápida sin delirio</span>
                      </div>
                    </div>
                    <div className="text-xs text-purple-600 bg-purple-50 rounded-xl p-2.5 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      <span>Minimiza riesgo de agitación postoperatoria y náuseas/vómito postoperatorio (NVPO &lt; 2%).</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
