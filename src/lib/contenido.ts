/**
 * Todo el texto del sitio vive acá.
 * Los comentarios TODO marcan los datos que RED ECO debe confirmar antes de publicar.
 */

export const hero = {
  eyebrow: "Educación ambiental · Economía circular · ESG",
  titulo: ["Los residuos no son basura.", "Son material de aprendizaje."],
  // La bajada describe lo que se ve en la foto: clasificar, registrar, medir.
  bajada:
    "Primero se clasifica, después se pesa, y recién entonces se puede demostrar el cambio. RED ECO instala ese sistema completo en establecimientos educacionales de Chile.",
  ctaPrimario: { etiqueta: "Conocer EcoEscuela", href: "#programa" },
  ctaSecundario: { etiqueta: "Hablar con el equipo", href: "#contacto" },
};

/**
 * Elemento firma: la mesa de clasificación.
 * Cada tarjeta se da vuelta para mostrar en qué se convierte el material.
 */
export const materiales = [
  {
    id: "pet",
    nombre: "PET",
    residuo: "Botellas plásticas",
    recurso: "Fibra textil y envases nuevos",
    aprendizaje: "Volumen, densidad y compactación",
  },
  {
    id: "carton",
    nombre: "Cartón",
    residuo: "Cajas y papel",
    recurso: "Papel y cartón reciclado",
    aprendizaje: "Cadena de valor y trazabilidad",
  },
  {
    id: "organico",
    nombre: "Orgánico",
    residuo: "Restos de alimentos",
    recurso: "Compost para el huerto escolar",
    aprendizaje: "Ciclo del carbono y suelo vivo",
  },
  {
    id: "aluminio",
    nombre: "Aluminio",
    residuo: "Latas de bebida",
    recurso: "Aluminio nuevo, sin pérdida de calidad",
    aprendizaje: "Energía evitada por reciclar",
  },
  {
    id: "tapitas",
    nombre: "Tapitas",
    residuo: "Tapas plásticas",
    recurso: "Campañas solidarias de acopio",
    aprendizaje: "Acción colectiva y metas comunes",
  },
  {
    id: "pilas",
    nombre: "Pilas",
    residuo: "Residuo peligroso",
    recurso: "Acopio y disposición autorizada",
    aprendizaje: "Riesgo, responsabilidad y normativa",
  },
] as const;

export const programa = {
  eyebrow: "Producto principal",
  titulo: "Programa EcoEscuela",
  kicker: "Transformamos escuelas. Formamos agentes de cambio.",
  parrafos: [
    "EcoEscuela es un programa integral de educación ambiental y economía circular que convierte establecimientos educacionales en comunidades comprometidas con el cuidado del medio ambiente.",
    "Combinamos educación, experiencias, reciclaje, compostaje, infraestructura y acompañamiento, para que la sostenibilidad no sea una actividad puntual sino una cultura que permanece en el tiempo.",
    "A diferencia de una charla o de un punto limpio instalado y entregado, acompañamos al establecimiento durante todo el proceso: formamos brigadas estudiantiles y docentes como líderes ambientales, y entregamos indicadores de residuos valorizados en vez de fotos del día de la actividad.",
  ],
  componentes: [
    {
      nombre: "Educación ambiental",
      detalle:
        "Talleres experienciales por nivel, alineados al currículum y al calendario escolar.",
    },
    {
      nombre: "Reciclaje",
      detalle:
        "Separación en origen con flujos definidos por material y responsables claros.",
    },
    {
      nombre: "Compostaje",
      detalle:
        "Manejo de residuos orgánicos conectado al huerto y a las asignaturas de ciencias.",
    },
    {
      nombre: "Infraestructura",
      detalle:
        "Puntos de acopio, señalética y equipamiento dimensionados según el diagnóstico.",
    },
    {
      nombre: "Capacitación",
      detalle:
        "Formación a docentes, asistentes y auxiliares para que el sistema no dependa de nosotros.",
    },
    {
      nombre: "Medición",
      detalle:
        "Registro de kilos valorizados e indicadores de participación, reportables y auditables.",
    },
  ],
};

/**
 * Punto 8: espacio para el video del concurso.
 * Mientras `video` sea null la sección muestra un marcador con la proporción
 * final, así el diseño no se mueve cuando llegue el video.
 *
 * Para publicarlo, pegá el ID del video (no la URL completa):
 *   YouTube  https://www.youtube.com/watch?v=ABC123  →  { plataforma: "youtube", id: "ABC123" }
 *   Vimeo    https://vimeo.com/123456789             →  { plataforma: "vimeo", id: "123456789" }
 */
export const concurso = {
  eyebrow: "Próximamente",
  titulo: "Concurso EcoEscuela",
  bajada:
    "Estamos preparando un concurso para establecimientos educacionales de todo Chile. Acá vas a poder ver el video con las bases, los premios y cómo postular.",
  // TODO: reemplazar por los datos reales del concurso.
  datos: [
    { rotulo: "Convocatoria", valor: "Por confirmar" },
    { rotulo: "Dirigido a", valor: "Establecimientos educacionales de Chile" },
    { rotulo: "Postulación", valor: "Se abrirá desde este sitio" },
  ],
  video: null as { plataforma: "youtube" | "vimeo"; id: string } | null,
  marcador: "El video del concurso se publica acá",
  cta: { etiqueta: "Quiero que me avisen", href: "#contacto" },
};

/** El método sí es una secuencia: por eso va numerado. */
export const metodo = {
  eyebrow: "Metodología",
  titulo: "Cuatro etapas, un cambio que se sostiene",
  bajada:
    "Empezamos por las personas y terminamos en los datos. Ese orden es deliberado: sin motivación no hay hábito, y sin medición no hay evidencia.",
  etapas: [
    {
      numero: "01",
      nombre: "Conciencia",
      detalle:
        "Diagnóstico del establecimiento y activación de la comunidad. Levantamos línea base, identificamos flujos de residuos y generamos motivación en estudiantes, docentes y equipos de apoyo.",
    },
    {
      numero: "02",
      nombre: "Acción",
      detalle:
        "Instalamos el sistema: puntos de acopio, señalética, rutinas de separación y compostaje. La comunidad practica el hábito en su propio espacio, no en una charla.",
    },
    {
      numero: "03",
      nombre: "Capacidades",
      detalle:
        "Formamos brigadas ambientales estudiantiles y capacitamos al personal. El objetivo es que el programa siga funcionando cuando termina nuestro acompañamiento.",
    },
    {
      numero: "04",
      nombre: "Medición",
      detalle:
        "Registramos kilos valorizados, participación y avance de hábitos. Entregamos indicadores que permiten demostrar el impacto y decidir el paso siguiente.",
    },
  ],
};

export const empresas = {
  eyebrow: "Empresas e instituciones",
  titulo: "Compromisos ESG convertidos en impacto verificable",
  bajada:
    "Conectamos la transformación de las comunidades educativas con organizaciones que necesitan que su inversión ambiental sea concreta, medible y territorial.",
  beneficios: [
    {
      nombre: "Impacto medible",
      detalle:
        "Kilos valorizados, personas participantes y avance por etapa, documentados desde la línea base.",
    },
    {
      nombre: "Vínculo territorial",
      detalle:
        "Presencia real en la comunidad donde opera su organización, con actores identificables.",
    },
    {
      nombre: "Insumos para reportar",
      detalle:
        "Información ordenada para memorias de sostenibilidad y reportes de valor compartido.",
    },
    {
      nombre: "Continuidad",
      detalle:
        "Programas diseñados para seguir operando después de la inversión inicial.",
    },
  ],
  cta: { etiqueta: "Solicitar una propuesta", href: "#contacto" },
};

export const proposito = {
  eyebrow: "Propósito",
  frase:
    "Transformar residuos en oportunidades de aprendizaje, innovación y desarrollo sostenible.",
  cierre: [
    "Porque cuando educamos a una comunidad, no solo cambiamos la forma en que recicla.",
    "Cambiamos la forma en que entiende el futuro.",
  ],
};

export const misionVision = [
  {
    rotulo: "Misión",
    texto:
      "Transformar comunidades educativas mediante la educación ambiental y la economía circular, desarrollando capacidades, hábitos y sistemas permanentes de gestión y valorización de residuos que generen impacto ambiental, social y educativo medible.",
    apoyo:
      "Trabajamos junto a establecimientos educacionales, empresas e instituciones para convertir los desafíos ambientales en oportunidades de aprendizaje, participación y valor compartido.",
  },
  {
    rotulo: "Visión",
    texto:
      "Ser una organización referente en educación ambiental y economía circular en Chile, liderando la transformación de las comunidades educativas hacia una cultura sostenible y convirtiéndolas en agentes activos del cambio ambiental.",
    apoyo:
      "Aspiramos a construir una red de comunidades que comprendan que los residuos no son basura, sino recursos y oportunidades para aprender, innovar y contribuir a un futuro más sostenible.",
  },
];

/**
 * Preguntas frecuentes.
 * Formuladas como pregunta real para que buscadores y asistentes de IA
 * puedan citar la respuesta completa. Se publican también como FAQPage (JSON-LD).
 */
export const preguntas = [
  {
    pregunta: "¿Qué es RED ECO?",
    respuesta:
      "RED ECO es una iniciativa chilena especializada en educación ambiental, economía circular y valorización de residuos. Desarrolla programas integrales que transforman comunidades educativas en espacios donde la sostenibilidad se aprende, se practica y pasa a formar parte de la cultura institucional.",
  },
  {
    pregunta: "¿Qué incluye el Programa EcoEscuela?",
    respuesta:
      "EcoEscuela incluye seis componentes: educación ambiental con talleres por nivel, sistema de reciclaje con separación en origen, compostaje de residuos orgánicos, infraestructura de acopio y señalética, capacitación a docentes y personal del establecimiento, y medición de resultados con indicadores de residuos valorizados y participación.",
  },
  {
    pregunta: "¿En qué se diferencia de una charla o una campaña de reciclaje?",
    respuesta:
      "Una charla entrega información y una campaña instala infraestructura. EcoEscuela acompaña al establecimiento durante todo el proceso de cambio: genera conciencia, instala el sistema operativo de residuos, forma brigadas estudiantiles y docentes con capacidades propias, y mide el impacto alcanzado. El objetivo es que el programa siga funcionando cuando termina el acompañamiento.",
  },
  {
    pregunta: "¿Cómo se mide el impacto del programa?",
    respuesta:
      "Se levanta una línea base al inicio del programa y luego se registran los kilos de residuos valorizados por material, la participación de estudiantes y personal, y el avance de las rutinas de separación. Con esos datos se construyen indicadores ambientales, sociales y educativos que el establecimiento y sus auspiciadores pueden reportar.",
  },
  {
    pregunta: "¿Puede una empresa financiar el programa en un establecimiento?",
    respuesta:
      "Sí. Empresas e instituciones pueden financiar la implementación de EcoEscuela en uno o más establecimientos y recibir la documentación del impacto generado. Es una forma de convertir compromisos de sostenibilidad y ESG en acciones concretas, medibles y con presencia territorial.",
  },
  {
    pregunta: "¿Quiénes participan dentro del establecimiento?",
    respuesta:
      "Participa toda la comunidad educativa: estudiantes organizados en brigadas ambientales, docentes que integran los contenidos a sus asignaturas, y los equipos de asistentes de la educación y auxiliares que sostienen la operación diaria del sistema de residuos.",
  },
  {
    pregunta: "¿Dónde opera RED ECO?",
    respuesta:
      "RED ECO opera en Chile, con establecimientos educacionales, empresas, municipios e instituciones. El alcance geográfico y la cobertura de cada programa se definen en el diagnóstico inicial.",
  },
  {
    pregunta: "¿Cuánto dura la implementación?",
    respuesta:
      "El programa se estructura según el calendario escolar y el punto de partida de cada establecimiento. La duración, las etapas y los entregables se definen en el diagnóstico inicial, antes de comprometer un plan de trabajo.",
  },
];

export const contacto = {
  eyebrow: "Conversemos",
  titulo: "La economía circular comienza educando.",
  bajada:
    "Cuéntanos de tu establecimiento u organización y te propondremos un punto de partida concreto. Respondemos en horario hábil.",
  tiposOrganizacion: [
    "Establecimiento educacional",
    "Empresa",
    "Municipio o institución pública",
    "Fundación u ONG",
    "Otro",
  ],
};
