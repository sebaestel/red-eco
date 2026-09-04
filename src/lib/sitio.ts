/**
 * Configuración única del sitio.
 * Cambiá estos datos y se actualizan metadatos, JSON-LD, sitemap y pie de página.
 */

export const sitio = {
  nombre: "RED ECO",
  nombreLargo: "RED ECO — Educación ambiental y economía circular",
  lema: "Educación ambiental que transforma comunidades",
  url: (process.env.NEXT_PUBLIC_SITIO_URL || "https://redeco.cl").replace(/\/$/, ""),
  idioma: "es-CL",
  pais: "Chile",
  ciudad: "Santiago",
  fundacion: "2024", // TODO: confirmar año real de inicio.
  descripcion:
    "RED ECO transforma comunidades educativas mediante educación ambiental y economía circular. El Programa EcoEscuela integra formación, reciclaje, compostaje, infraestructura y medición de impacto en establecimientos de Chile.",
  // Datos de contacto: reemplazá por los reales antes de publicar.
  email: "contacto@redeco.cl",
  telefono: "+56 9 8830 9848",
  telefonoLink: "+56988309848",
  instagram: "https://www.instagram.com/redeco.cl",
  linkedin: "https://www.linkedin.com/company/redeco",
} as const;

export const navegacion = [
  { id: "programa", etiqueta: "Programa" },
  { id: "concurso", etiqueta: "Concurso" },
  { id: "metodo", etiqueta: "Método" },
  { id: "empresas", etiqueta: "Empresas" },
  { id: "preguntas", etiqueta: "Preguntas" },
] as const;
