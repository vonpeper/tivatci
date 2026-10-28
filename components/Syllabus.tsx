"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
  Globe,
  Building2,
  CheckCircle2,
  Brain,
  Activity,
  Users,
  DoorOpen,
  ShieldAlert,
  GraduationCap,
} from "lucide-react";

interface ThematicLecture {
  title: string;
  speaker: string;
  affiliation?: string;
  isInternational?: boolean;
  isKeynote?: boolean;
}

interface ThematicModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badge: string;
  lectures: ThematicLecture[];
  hospitalWorkshops?: {
    hospital: string;
    instructors: string;
  }[];
}

const thematicData: ThematicModule[] = [
  {
    id: "tem-1",
    number: "01",
    title: "Monitoreo Neurofisiológico, EEG y Espectrografía",
    subtitle:
      "Profundidad anestésica, análisis de espectrograma y prevención del despertar intraoperatorio.",
    icon: Brain,
    badge: "Neurofisiología Clínica",
    lectures: [
      {
        title:
          "La modulación de la amplitud de las oscilaciones alfa y la modulación de la frecuencia de las ondas lentas. Marcadores fiables de la inconciencia",
        speaker: "M.D. Emery N. Brown",
        affiliation: "Harvard Medical School / MIT · USA (Conferencia Magistral Virtual)",
        isInternational: true,
        isKeynote: true,
      },
      {
        title: "ABC del electroencefalograma transoperatorio",
        speaker: "Dra. Estefanía López Morales",
      },
      {
        title: "Aprendiendo a interpretar el espectrograma y la matriz de densidad espectral (DSA)",
        speaker: "Dra. Mercedes Lizzete Reyes Mercado",
      },
      {
        title: "Importancia del ritmo alfa en anestesia",
        speaker: "Dra. Adriana Izet Barraza Zetina",
      },
      {
        title: "Fundamentos del EEG, mitos y realidades",
        speaker: "Ing. Diego León Patlis Sturla",
        affiliation: "Especialista en Tecnología Anestésica · España",
        isInternational: true,
      },
      {
        title: "¿Límites del monitoreo cerebral?",
        speaker: "Dra. Areli Osorio Santiago",
      },
      {
        title: "El cerebro enfermo y la anestesia",
        speaker: "Dr. Jesús Cuevas García",
      },
      {
        title: "Trastornos cognitivos del perioperatorio: ¿Qué hacer en el pre, trans y postoperatorio?",
        speaker: "Dr. César Alejandro Martínez De los Santos",
      },
      {
        title: "Cerebro frágil y su impacto en la titulación",
        speaker: "Dra. Hilda Judith De la Serna Soto",
      },
      {
        title: "Taller especializado de Monitoreo Cerebral",
        speaker: "Dra. Hilda Judith De la Serna Soto",
        affiliation: "Sesión Práctica en Auditorio",
      },
    ],
  },
  {
    id: "tem-2",
    number: "02",
    title: "Modelado PK/PD, Farmacodinamia y Sistemas TCI",
    subtitle:
      "Modelos multicompartimentales, infusión en sitio efector y sistemas de circuito cerrado.",
    icon: Activity,
    badge: "Farmacocinética & TCI",
    lectures: [
      {
        title:
          "Uso de los sistemas de administración de anestesia de circuito cerrado: Pasado, presente y futuro",
        speaker: "M.D. Emery N. Brown",
        affiliation: "Harvard Medical School / MIT · USA (Conferencia Magistral Virtual)",
        isInternational: true,
        isKeynote: true,
      },
      {
        title: "Farmacodinamia o neuromonitoreo",
        speaker: "Dr. José de Jesús Jaramillo Magaña",
      },
      {
        title: "Cuando la hemodinamia mienta: desacople hipnosis / presión arterial",
        speaker: "Dr. Ernesto Terán Martínez",
      },
      {
        title: "TIVA NO lineal: Cuando las perfusiones dejan de comportarse como esperamos",
        speaker: "Dr. Yael Nepomuceno Severiano",
      },
      {
        title: "TIVA sin bolos: rediseñando la inducción en pacientes vulnerables",
        speaker: "Dr. Arnulfo Calixto Flores",
      },
      {
        title: "¿Qué hay de nuevo en simulación farmacológica?",
        speaker: "Dra. Blanca Olga Aquino Tamayo",
      },
      {
        title: "Taller práctico: Manejo Anestésico con aplicaciones iTIVA",
        speaker: "Dra. Blanca Olga Aquino Tamayo y Dra. Sandra Raudales Ruiz",
        affiliation: "Cupo Limitado · Práctica Interactiva",
      },
      {
        title: "TIBASIC: Entrenamiento técnico en infusión",
        speaker: "Dr. Carlos Ulisés Orozco Orduña",
        affiliation: "Salón Camino Real",
      },
    ],
  },
  {
    id: "tem-3",
    number: "03",
    title: "Poblaciones Especiales: Pediatría, Paciente Geriátrico y Obesidad",
    subtitle:
      "Estrategias cinéticas para neonatos, pacientes vulnerables y dosificación en masa libre de grasa.",
    icon: Users,
    badge: "Poblaciones Críticas",
    lectures: [
      {
        title: "Impacto de los anestésicos y monitoreo neurofisiológico en el niño",
        speaker: "Dra. Erika León Álvarez",
      },
      {
        title: "Controversias en el neonato y lactante al usar TIVA",
        speaker: "Dra. Nancy Elizabeth Rodríguez Delgado",
      },
      {
        title: "Fentanilo / sufentanilo / remifentanilo en anestesia pediátrica: ¿Bolos ó perfusión?",
        speaker: "Dr. Israel Castillo Morales",
      },
      {
        title: "Prevención, implicaciones y manejo del delirio y ansiedad en el paciente pediátrico",
        speaker: "Dra. Erika León Álvarez",
      },
      {
        title: "Perlas y Tips para TIVA y anestesia regional ecoguiada en el niño",
        speaker: "Dr. Israel Castillo Morales",
      },
      {
        title: "TIVA in the elderly: aging, brain, anesthesia, and long-term outcomes",
        speaker: "Dra. Carolina Frederico Avendaño",
        affiliation: "Hospital QuirónSalud Barcelona · España",
        isInternational: true,
      },
      {
        title: "Fragilidad: el «nuevo órgano» que no monitorizamos",
        speaker: "Dr. Erick Díaz Hernández",
      },
      {
        title: "TIVAge: anestesia adaptativa en un sistema envejecido",
        speaker: "Dr. Omar García Nájera",
      },
      {
        title: "TIVA in the obese patient: one size fits all?",
        speaker: "Dra. Carolina Frederico Avendaño",
        affiliation: "Hospital QuirónSalud Barcelona · España",
        isInternational: true,
      },
    ],
  },
  {
    id: "tem-4",
    number: "04",
    title: "Sedación y Procedimientos Fuera de Quirófano (NORA)",
    subtitle:
      "Técnicas en consultorio, salas de hemodinamia, endoscopía y cirugía ambulatoria.",
    icon: DoorOpen,
    badge: "Escenarios NORA",
    lectures: [
      {
        title: "Sedación fuera de quirófano: ¿Qué es mejor, TCI plasma / TCI efecto?",
        speaker: "Dra. Sandra Raudales Ruiz",
      },
      {
        title: "Utilidad de la sedación en consultorio: ¿Cómo optimizarlo en condiciones especiales?",
        speaker: "Dra. Nancy Elizabeth Rodríguez Delgado",
      },
      {
        title: "TIVA en escenarios fuera de quirófano: Sala de hemodinamia ¿La cardiopatía lo permite?",
        speaker: "Dra. Carmen Yandira Vianna Da Silva Rodríguez",
      },
      {
        title: "Sedación en cirugía urológica ambulatoria: ¿Dosificación o titulación?",
        speaker: "Dr. Miguel Ángel Sosa Fragoso",
      },
      {
        title: "Manejo del paciente tolerante a opioides en procedimientos ambulatorios",
        speaker: "Dra. Angélica Ibarra Malagón",
      },
      {
        title: "Complicaciones en sala de endoscopía",
        speaker: "Dra. Rocío Delgado Cortés",
      },
      {
        title: "Sedación intravenosa en gastro-endoscopía",
        speaker: "Dra. Rocío Delgado Cortés",
      },
      {
        title: "TIPS en sedación del paciente grave",
        speaker: "Dr. Ricardo Olivares Reséndiz",
      },
    ],
  },
  {
    id: "tem-5",
    number: "05",
    title: "Anestesia Multimodal, Cirugía Compleja y Seguridad Clínica",
    subtitle:
      "Bloqueos ecoguiados, interacción farmacológica, laparoscopía y manejo del riesgo.",
    icon: ShieldAlert,
    badge: "Multimodal & Seguridad",
    lectures: [
      {
        title: "¿Cómo hacer anestesia total intravenosa en neurocirugía?",
        speaker: "Dr. Omar García Nájera",
      },
      {
        title: "Bloqueos interfasciales: ¿Son útiles en anestesia multimodal?",
        speaker: "Dr. Abraham Francisco Cuéllar López",
      },
      {
        title: "Anestesia multimodal en cirugía de alta complejidad: ¿Se puede extubar en sala?",
        speaker: "Dra. Verónica Guadarrama Bustamante",
      },
      {
        title: "Cirugía laparoscópica: diferentes escenarios en TIVA y anestesia multimodal",
        speaker: "Dra. Nancy Fabiola Escobar Escobar",
      },
      {
        title: "Sinergia con analgesia multimodal",
        speaker: "Dr. Jonathan Mendoza Reyes",
      },
      {
        title: "Bloqueadores neuromusculares: ¿El actor olvidado?",
        speaker: "Dra. Teresa Cortés Hernández",
      },
      {
        title: "Más allá del broncodilatador: Optimizando el manejo anestésico del paciente asmático con TIVA",
        speaker: "Dr. Teodoro Escudero Ortíz",
      },
      {
        title: "Casos Clínicos: TIVA guiada por nocicepción en pacientes con anestesia regional",
        speaker: "Dr. Héctor Santillán Paredes",
      },
      {
        title: "Anafilaxia perioperatoria desde la perspectiva del anestesiólogo",
        speaker: "Dra. Norma Cuéllar Garduño",
      },
      {
        title: "TIVA y consideraciones en el sistema inmunológico",
        speaker: "Dr. José Abraham Fabela Barragán",
      },
      {
        title: "Seguridad en la práctica de la TIVA",
        speaker: "Dr. Carlos Ulisés Orozco Orduña",
      },
      {
        title: "Escenarios Clínicos TIVA: «Cirujanos y Anestesiólogos»",
        speaker: "Dr. Ricardo Olivares Reséndiz",
      },
    ],
  },
  {
    id: "tem-6",
    number: "06",
    title: "Talleres Prácticos en Quirófano y Simulación Clínica",
    subtitle:
      "Práctica en quirófanos reales de 6 sedes hospitalarias, talleres ecoguiados y foro de investigación.",
    icon: GraduationCap,
    badge: "Práctica en Quirófano",
    hospitalWorkshops: [
      {
        hospital: "CMN Cardiología Siglo XXI IMSS",
        instructors: "Dra. Carmen Yandira Vianna Da Silva Rodríguez",
      },
      {
        hospital: "Hospital de Especialidades CMN Siglo XXI",
        instructors: "Dr. Arnulfo Calixto Flores",
      },
      {
        hospital: "Hospital de Ortopedia Dr. Germán Díaz Lombardo",
        instructors: "Dr. José Jesús Alarcón Rodríguez · Dr. E. Fco. Javier Yáñez Cortés · Dra. Ivette Alejandra Porras Simon",
      },
      {
        hospital: "Instituto Nacional de Cancerología (INCAN)",
        instructors: "Dr. José Abraham Fabela Barragán",
      },
      {
        hospital: "Hospital Central Pemex Norte",
        instructors: "Dra. Nancy Fabiola Escobar Escobar · Dr. Ramón Tomás Martínez Segura",
      },
      {
        hospital: "Centro de Simulación Médica Centro Médico ABC",
        instructors: "Dra. Sandra Raudales · Dr. Juan Heberto Muñoz Cuevas (Simulación TIVA: Precisión-Seguridad-Control)",
      },
    ],
    lectures: [
      {
        title: "Taller Estado del Arte: TIVA-Ultrasonido",
        speaker: "Dr. Abraham Francisco Cuéllar López",
        affiliation: "Salón Camino Real · Cupo Limitado 40 personas",
      },
      {
        title: "Sesiones y Convocatoria de Trabajos Libres e Investigación",
        speaker: "Dra. Rocío Delgado Cortés",
        affiliation: "Salón de Usos Múltiples · Premiación en Clausura",
      },
    ],
  },
];

export const Syllabus: React.FC = () => {
  const [expanded, setExpanded] = useState<string>("tem-1");

  const toggleModule = (id: string) => {
    setExpanded(expanded === id ? "" : id);
  };

  return (
    <section id="programa" className="py-20 sm:py-28 bg-[#fbfbfd] border-t border-black/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Principal */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apple-blue/10 border border-apple-blue/20 text-apple-blue text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Programa Académico Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text">
            Temáticas del Congreso
          </h2>
          <p className="mt-3 text-base sm:text-lg text-apple-subtext leading-relaxed">
            Estructurado en 6 áreas de alta especialidad con más de 45 ponencias magistrales,
            talleres en quirófanos reales de 6 hospitales y profesores de clase mundial.
          </p>
        </div>

        {/* Acordeón de Temáticas */}
        <div className="space-y-4">
          {thematicData.map((tem) => {
            const isOpen = expanded === tem.id;
            const Icon = tem.icon;
            const totalItems =
              tem.lectures.length + (tem.hospitalWorkshops ? tem.hospitalWorkshops.length : 0);

            return (
              <div
                key={tem.id}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-apple-blue/40 bg-white shadow-apple-card ring-1 ring-apple-blue/20"
                    : "border-black/[0.06] bg-white hover:border-black/[0.14] hover:shadow-sm"
                }`}
              >
                {/* Botón de Cabecera */}
                <button
                  type="button"
                  onClick={() => toggleModule(tem.id)}
                  className="w-full p-5 sm:p-7 flex items-start sm:items-center justify-between gap-4 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-grow">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-apple-blue text-white shadow-md shadow-apple-blue/30"
                          : "bg-apple-secondarySurface text-apple-subtext"
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-apple-blue tracking-wider uppercase">
                          Temática {tem.number}
                        </span>
                        <span className="text-apple-subtext/40">•</span>
                        <span className="text-xs font-medium text-apple-subtext px-2 py-0.5 rounded-full bg-apple-secondarySurface">
                          {tem.badge}
                        </span>
                        <span className="text-xs text-apple-tertiary">
                          ({totalItems} {tem.hospitalWorkshops ? "talleres y conferencias" : "conferencias"})
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-apple-text tracking-tight">
                        {tem.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-apple-subtext mt-0.5 hidden sm:block">
                        {tem.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 pt-1 sm:pt-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-apple-blue/10 text-apple-blue"
                          : "bg-apple-secondarySurface text-apple-tertiary"
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Contenido Desplegable */}
                {isOpen && (
                  <div className="px-5 sm:px-8 pb-7 pt-2 border-t border-black/[0.04] bg-[#fbfbfd]">
                    {/* Talleres en Quirófano si aplica */}
                    {tem.hospitalWorkshops && (
                      <div className="mb-6 mt-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                            Práctica en Quirófanos Reales · 6 Hospitales Sede
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {tem.hospitalWorkshops.map((hosp, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-xl bg-white border border-black/[0.06] flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                            >
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                <div>
                                  <h5 className="text-xs sm:text-sm font-bold text-apple-text leading-tight">
                                    {hosp.hospital}
                                  </h5>
                                  <p className="text-xs text-apple-subtext mt-1">
                                    <span className="font-semibold text-apple-text">Profesor(es):</span>{" "}
                                    {hosp.instructors}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Lista de Conferencias */}
                    <div className="space-y-3 mt-3">
                      {tem.hospitalWorkshops && (
                        <div className="flex items-center gap-2 mb-2 mt-5">
                          <Sparkles className="w-4 h-4 text-apple-blue shrink-0" />
                          <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                            Conferencias y Talleres de Especialidad
                          </h4>
                        </div>
                      )}

                      {tem.lectures.map((lec, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl transition-colors ${
                            lec.isKeynote
                              ? "bg-gradient-to-r from-blue-50/80 via-sky-50/60 to-white border border-apple-blue/30 shadow-sm"
                              : "bg-white border border-black/[0.05] hover:border-black/[0.12]"
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                            <div className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-apple-secondarySurface text-apple-tertiary text-[11px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <div>
                                <h5 className="text-sm sm:text-base font-semibold text-apple-text leading-snug">
                                  {lec.title}
                                </h5>
                                {lec.affiliation && (
                                  <p className="text-xs text-apple-subtext mt-1 flex items-center gap-1.5">
                                    {lec.isInternational && (
                                      <Globe className="w-3.5 h-3.5 text-apple-blue shrink-0" />
                                    )}
                                    <span>{lec.affiliation}</span>
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 shrink-0 pl-8 sm:pl-0">
                              <span className="text-xs sm:text-sm font-bold text-apple-blue">
                                {lec.speaker}
                              </span>
                              {lec.isInternational && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  <Globe className="w-2.5 h-2.5" />
                                  Profesor Internacional
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Directo a Inscripciones SMHAP */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Inscripciones y Aval Oficial SMHAP
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Asegura tu lugar en el Curso Anual TIVA
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Registro gestionado oficialmente a través de la Sociedad Médica del Hospital Ángeles
              Pedregal (SMHAP). Incluye constancia con valor curricular.
            </p>
          </div>

          <a
            href="https://smhap.net/inicio/index.php/curso-tiva/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-md shrink-0"
          >
            <span>Inscribirme en SMHAP</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Syllabus;
