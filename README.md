# Landing Page E-Learning TIVA · Hospital Ángeles del Pedregal

Plataforma oficial y landing page del **Curso Anual de TIVA (Anestesia Total Intravenosa)** organizado por el Departamento de Anestesiología del **Hospital Ángeles del Pedregal**.

Diseñado bajo la **estética oficial de Apple** (minimalista, luminosa con fondo blanco `#ffffff`, tipografía precisa, microinteracciones de cristal esmerilado y acento azul Apple `#0071e3`).

---

## Características Principales

- **Diseño & UI/UX**:
  - Paleta blanca luminosa con sutiles degradados a `#fbfbfd`.
  - Tarjetas con bordes ultra-delgados (`border-black/[0.06]`) y sombras difusas (`shadow-apple-card`).
  - Efectos de microinteracción y cristal esmerilado (`backdrop-blur-md bg-white/80`).
  - Totalmente responsivo (Mobile-first, Tablet y Desktop).

- **Estructura y Secciones**:
  - **Header flotante**: Barra *frosted glass* con logotipo clínico, navegación y CTA directo al modal de alumnos.
  - **Hero Keynote**: Badge dinámico con pulso esmeralda, métricas destacadas (*100% Online*, *Aval Curricular*, *Modelos TCI*, *Hospital Ángeles Pedregal*) y llamadas a la acción duales.
  - **Bento Grid de Aprendizaje**:
    - *Módulo 1*: Modelado PK/PD con selector interactivo de curvas para Schnider, Marsh y Eleveld (\(C_e\) vs \(C_p\)).
    - *Módulo 2*: Monitoreo Neurofisiológico con simulación gráfica de ondas EEG, espectrograma y cálculo de BIS / BSR / SEF95.
    - *Módulo 3*: Casos clínicos de simulación de alta fidelidad (Neurocirugía, Cirugía Bariátrica y Pediatría).
  - **Programa Académico (Syllabus)**: Acordeón interactivo con los 6 módulos (80 horas con valor curricular oficial).
  - **Cuerpo Docente**: Presentación del equipo de especialistas y coordinadores del Hospital Ángeles del Pedregal.
  - **Avales y Patrocinadores**: Alianzas con sociedades de anestesiología y tecnología médica de infusión (B. Braun, Fresenius Kabi, Medtronic, Masimo).
  - **Modal de Acceso de Alumnos**: Ventana modal interactiva con validación de credenciales institucionales, asistencia de matrícula y enlaces directos de soporte.
  - **Footer Institucional**: Datos de la sede en Camino a Santa Teresa, avisos de privacidad y enlaces académicos.

---

## Tecnologías

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide React](https://lucide.dev/)

---

## Ejecución Local

Para levantar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Para compilar para producción:

```bash
npm run build
npm start
```
