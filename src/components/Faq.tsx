import { preguntas } from "@/lib/contenido";

/**
 * details/summary nativo: funciona sin JavaScript, es accesible por defecto
 * y las respuestas quedan en el HTML para buscadores y asistentes de IA.
 */
export default function Faq() {
  return (
    <section className="seccion seccion--linea" id="preguntas">
      <div className="envoltura">
        <div className="encabezado-seccion">
          <p className="rotulo">Preguntas frecuentes</p>
          <h2 className="titulo-seccion">Lo que suelen preguntarnos</h2>
        </div>

        <div className="faq__lista">
          {preguntas.map((item) => (
            <details className="faq__item" key={item.pregunta}>
              <summary className="faq__resumen">
                <h3 className="faq__pregunta">{item.pregunta}</h3>
                <span className="faq__signo" aria-hidden="true" />
              </summary>
              <p className="faq__respuesta">{item.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
