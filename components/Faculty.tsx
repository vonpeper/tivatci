"use client";

import React from "react";
import { GraduationCap, Award, Stethoscope, Building2 } from "lucide-react";

interface Professor {
  name: string;
  role: string;
  department: string;
  bio: string;
  badge: string;
}

const professors: Professor[] = [
  {
    name: "Dra. Mariana Morales Valenzuela",
    role: "Coordinadora Académica General",
    department: "Servicio de Anestesiología · Hospital Ángeles del Pedregal",
    bio: "Especialista en Neuroanestesia y Farmacología Clínica. Miembro de la Sociedad Mexicana de Neuroanestesiología con más de 18 años de experiencia en protocolos TCI complejos.",
    badge: "Coordinación Pedregal",
  },
  {
    name: "Dr. Carlos Eduardo Benítez R.",
    role: "Profesor Titular de Modelado PK/PD",
    department: "Hospital Ángeles del Pedregal / FMCA",
    bio: "Pionero en la implementación de modelos Eleveld y algoritmos de infusión en sitio efector. Consultor internacional en simulación farmacocinética aplicada.",
    badge: "Modelos Farmacocinéticos",
  },
  {
    name: "Dr. Roberto Silva Zambrano",
    role: "Profesor Titular de Monitoreo Neurofisiológico",
    department: "Servicio de Cirugía de Alta Especialidad · Hospital Ángeles",
    bio: "Líder en electroencefalografía intraoperatoria y espectrografía DSA para la erradicación del despertar intraoperatorio y delirio postquirúrgico.",
    badge: "Monitoreo EEG / BIS",
  },
  {
    name: "Dra. Sofía Mendoza Alcocer",
    role: "Profesora Adjunta · TIVA en Pediatría y Obesidad",
    department: "Unidad Quirúrgica Pediátrica · Hospital Ángeles del Pedregal",
    bio: "Especialista en dosificación precisa por masa libre de grasa (FFM) y modelos cinéticos neonatales y bariátricos de rápida titulación.",
    badge: "Poblaciones Especiales",
  },
];

export const Faculty: React.FC = () => {
  return (
    <section id="profesores" className="py-20 sm:py-28 bg-[#fbfbfd] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-blue/10 text-apple-blue text-xs font-semibold tracking-wide uppercase mb-3">
            Liderazgo Académico
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text">
            Cuerpo Docente y Coordinación
          </h2>
          <p className="mt-4 text-lg text-apple-subtext leading-relaxed">
            Médicos especialistas en activo en los quirófanos del Hospital Ángeles del Pedregal,
            con amplia trayectoria clínica, de investigación y docencia en anestesiología moderna.
          </p>
        </div>

        {/* Grid de Profesores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {professors.map((prof) => (
            <div
              key={prof.name}
              className="bg-white rounded-3xl p-6 border border-black/[0.06] shadow-apple-card hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar / Iniciales estilo Apple */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-apple-surface to-apple-secondarySurface border border-black/[0.06] flex items-center justify-center text-apple-text font-semibold text-lg shadow-sm">
                    {prof.name
                      .split(" ")
                      .slice(1, 3)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-apple-blue/10 text-apple-blue">
                    {prof.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-apple-text tracking-tight mb-1">
                  {prof.name}
                </h3>
                <span className="text-xs font-medium text-apple-blue block mb-2">
                  {prof.role}
                </span>
                <span className="text-[11px] text-apple-tertiary block mb-4 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{prof.department}</span>
                </span>
                <p className="text-xs text-apple-subtext leading-relaxed">
                  {prof.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center gap-2 text-xs text-apple-tertiary">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Profesor Certificado TIVA Pedregal</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
