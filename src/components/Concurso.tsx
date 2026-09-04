import Aparece from "./Aparece";
import { concurso } from "@/lib/contenido";

/**
 * Espacio destacado para el video del concurso.
 *
 * Mientras no haya video, muestra un marcador con la proporción 16:9 final:
 * así el diseño no se mueve cuando llegue, y la sección ya comunica que viene.
 *
 * El iframe se carga con loading="lazy" y sin cookies (youtube-nocookie), para
 * no arrastrar el peso ni el rastreo de YouTube al resto de la página.
 */
export default function Concurso() {
  const { video } = concurso;

  const fuente =
    video?.plataforma === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${video.id}?rel=0`
      : video?.plataforma === "vimeo"
        ? `https://player.vimeo.com/video/${video.id}?dnt=1`
        : null;

  return (
    <section className="seccion concurso" id="concurso">
      <div className="envoltura">
        <div className="concurso__reticula">
          <div className="concurso__texto">
            <p className="rotulo rotulo--inv">{concurso.eyebrow}</p>
            <h2 className="titulo-seccion concurso__titulo">{concurso.titulo}</h2>
            <p className="bajada-seccion concurso__bajada">{concurso.bajada}</p>

            <dl className="concurso__datos">
              {concurso.datos.map((dato) => (
                <div className="concurso__dato" key={dato.rotulo}>
                  <dt className="concurso__dato-rotulo">{dato.rotulo}</dt>
                  <dd className="concurso__dato-valor">{dato.valor}</dd>
                </div>
              ))}
            </dl>

            <div className="concurso__acciones">
              <a className="boton boton--claro" href={concurso.cta.href}>
                {concurso.cta.etiqueta}
                <span className="boton__flecha" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>

          <Aparece className="concurso__marco">
            {fuente ? (
              <iframe
                className="concurso__video"
                src={fuente}
                title={`Video del ${concurso.titulo}`}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <div className="concurso__marcador">
                <span className="concurso__marcador-icono" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <circle
                      cx="24"
                      cy="24"
                      r="21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20 17.5 32 24l-12 6.5V17.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <p className="concurso__marcador-texto">{concurso.marcador}</p>
              </div>
            )}
          </Aparece>
        </div>
      </div>
    </section>
  );
}
