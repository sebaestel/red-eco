import { preguntas } from "@/lib/contenido";
import { sitio } from "@/lib/sitio";

/**
 * Un solo bloque JSON-LD con @graph.
 * Los nodos se referencian entre sí por @id, que es lo que permite a Google
 * y a los asistentes de IA entender que la organización, el servicio y las
 * preguntas son la misma entidad.
 */
export default function DatosEstructurados() {
  const grafo = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${sitio.url}/#organizacion`,
        name: sitio.nombre,
        alternateName: "Red Eco",
        url: sitio.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${sitio.url}/#logo`,
          url: `${sitio.url}/logo-red-eco.svg`,
          caption: sitio.nombre,
        },
        image: { "@id": `${sitio.url}/#logo` },
        description: sitio.descripcion,
        slogan: sitio.lema,
        foundingDate: sitio.fundacion,
        email: sitio.email,
        telephone: sitio.telefono,
        areaServed: { "@type": "Country", name: "Chile" },
        address: {
          "@type": "PostalAddress",
          addressLocality: sitio.ciudad,
          addressCountry: "CL",
        },
        knowsAbout: [
          "Educación ambiental",
          "Economía circular",
          "Valorización de residuos",
          "Compostaje escolar",
          "Reciclaje en establecimientos educacionales",
          "Sostenibilidad y ESG",
        ],
        sameAs: [sitio.instagram, sitio.linkedin],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Consultas y propuestas",
          email: sitio.email,
          telephone: sitio.telefono,
          availableLanguage: ["es"],
          areaServed: "CL",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${sitio.url}/#sitio`,
        url: sitio.url,
        name: sitio.nombreLargo,
        description: sitio.descripcion,
        publisher: { "@id": `${sitio.url}/#organizacion` },
        inLanguage: sitio.idioma,
      },
      {
        "@type": "WebPage",
        "@id": `${sitio.url}/#pagina`,
        url: sitio.url,
        name: `${sitio.nombre} — ${sitio.lema}`,
        isPartOf: { "@id": `${sitio.url}/#sitio` },
        about: { "@id": `${sitio.url}/#organizacion` },
        inLanguage: sitio.idioma,
        primaryImageOfPage: { "@id": `${sitio.url}/#logo` },
      },
      {
        "@type": "Service",
        "@id": `${sitio.url}/#ecoescuela`,
        name: "Programa EcoEscuela",
        serviceType: "Programa de educación ambiental y economía circular",
        provider: { "@id": `${sitio.url}/#organizacion` },
        areaServed: { "@type": "Country", name: "Chile" },
        audience: [
          { "@type": "Audience", audienceType: "Establecimientos educacionales" },
          { "@type": "Audience", audienceType: "Empresas e instituciones" },
        ],
        description:
          "Programa integral que transforma establecimientos educacionales mediante educación ambiental, reciclaje, compostaje, infraestructura de acopio, capacitación docente y medición de resultados.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Componentes del Programa EcoEscuela",
          itemListElement: [
            "Educación ambiental",
            "Reciclaje",
            "Compostaje",
            "Infraestructura",
            "Capacitación",
            "Medición de resultados",
          ].map((nombre) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: nombre },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${sitio.url}/#preguntas`,
        isPartOf: { "@id": `${sitio.url}/#sitio` },
        inLanguage: sitio.idioma,
        mainEntity: preguntas.map((item) => ({
          "@type": "Question",
          name: item.pregunta,
          acceptedAnswer: { "@type": "Answer", text: item.respuesta },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // El contenido es nuestro y estático: no hay entrada de usuario acá.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }}
    />
  );
}
