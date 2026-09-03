import Aparece from "./Aparece";
import { diferencia } from "@/lib/contenido";

export default function Diferencia() {
  return (
    <section className="seccion seccion--linea" id="diferencia">
      <div className="envoltura">
        <div className="encabezado-seccion">
          <p className="rotulo">{diferencia.eyebrow}</p>
          <h2 className="titulo-seccion">{diferencia.titulo}</h2>
          <p className="bajada-seccion">{diferencia.bajada}</p>
        </div>

        <div className="diferencia__tabla">
          <div className="diferencia__cabecera" aria-hidden="true">
            <p className="diferencia__cabecera-celda">Dimensión</p>
            <p className="diferencia__cabecera-celda">Intervención habitual</p>
            <p className="diferencia__cabecera-celda diferencia__cabecera-celda--nuestra">
              Programa EcoEscuela
            </p>
          </div>

          {diferencia.filas.map((fila, indice) => (
            <Aparece className="diferencia__fila" key={fila.tema} retraso={indice * 80}>
              <p className="diferencia__tema">{fila.tema}</p>
              <p className="diferencia__celda diferencia__celda--tradicional">
                {fila.tradicional}
              </p>
              <p className="diferencia__celda diferencia__celda--nuestra">
                {fila.redeco}
              </p>
            </Aparece>
          ))}
        </div>
      </div>
    </section>
  );
}
