"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, CheckCircle } from "lucide-react";

interface SyllabusModule {
  id: string;
  number: string;
  title: string;
  topics: string[];
}

const modulesData: SyllabusModule[] = [
  {
    id: "mod-1",
    number: "01",
    title: "Fundamentos y Modelos PK/PD",
    topics: [
      "Cinética multicompartimental y vida media sensible al contexto (CSHT)",
      "Biofase y tasa de equilibrio (ke0)",
      "Modelos de Propofol: Marsh, Schnider y Eleveld",
    ],
  },
  {
    id: "mod-2",
    number: "02",
    title: "Infusión Controlada por Objetivo (TCI)",
    topics: [
      "Titulación en sitio efector (Ce) vs. plasmático (Cp)",
      "Minto y modelos de Remifentanilo y Sufentanilo",
      "Interacción hipnótico-opioide y sinergia farmacodinámica",
    ],
  },
  {
    id: "mod-3",
    number: "03",
    title: "Monitoreo Neurofisiológico y EEG",
    topics: [
      "Lectura del electroencefalograma crudo e índice BIS",
      "Espectrograma y Matriz de Densidad Espectral (DSA)",
      "Monitoreo de nocicepción (NOL®, qNOX, ANI)",
    ],
  },
  {
    id: "mod-4",
    number: "04",
    title: "Anestesia Libre de Opioides (OFA) y Adyuvantes",
    topics: [
      "Infusiones continuas de Dexmedetomidina y Lidocaína",
      "Ketamina subanestésica y analgesia multimodal",
      "Estrategias ERAS y recuperación acelerada",
    ],
  },
  {
    id: "mod-5",
    number: "05",
    title: "TIVA en Poblaciones Especiales",
    topics: [
      "Neurocirugía y mapeo cortical con potenciales motores",
      "Cirugía bariátrica y dosificación por masa libre de grasa (FFM)",
      "Población pediátrica y paciente anciano frágil",
    ],
  },
  {
    id: "mod-6",
    number: "06",
    title: "Simulación Dinámica y Casos Clínicos",
    topics: [
      "Talleres prácticos de bombas inteligentes TCI",
      "Manejo de contingencias y fallas de infusión",
      "Discusión y evaluación clínica interactiva",
    ],
  },
];

export const Syllabus: React.FC = () => {
  const [expanded, setExpanded] = useState<string>("mod-1");

  return (
    <section id="programa" className="py-16 sm:py-24 bg-white border-t border-black/[0.05]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Conciso */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-apple-text">
            Programa Académico
          </h2>
          <p className="text-sm sm:text-base text-apple-subtext mt-1">
            Edición Anual Virtual · Hospital Ángeles del Pedregal
          </p>
        </div>

        {/* Acordeón Limpio y Minimalista */}
        <div className="space-y-3">
          {modulesData.map((m) => {
            const isOpen = expanded === m.id;
            return (
              <div
                key={m.id}
                className={`rounded-2xl border transition-all duration-150 ${
                  isOpen
                    ? "border-apple-blue/40 bg-apple-surface shadow-sm"
                    : "border-black/[0.06] bg-white hover:border-black/[0.12]"
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? "" : m.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                        isOpen
                          ? "bg-apple-blue text-white"
                          : "bg-apple-secondarySurface text-apple-subtext"
                      }`}
                    >
                      {m.number}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-apple-text tracking-tight">
                      {m.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-apple-blue" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-apple-tertiary" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-black/[0.04] bg-white/70">
                    <ul className="space-y-2 mt-2">
                      {m.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-apple-subtext"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-apple-blue shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Directo a Inscripciones SMHAP */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-sky-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <h3 className="text-base font-bold text-white">
              Inscripciones Abiertas · Ciclo 2026
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Registro oficial a través de la Sociedad Médica del Hospital Ángeles Pedregal (SMHAP).
            </p>
          </div>

          <a
            href="https://smhap.net/inicio/index.php/curso-tiva/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-md shrink-0"
          >
            <span>Inscribirme en SMHAP</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
