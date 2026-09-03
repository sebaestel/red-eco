import Aparece from "./Aparece";
import { metodo } from "@/lib/contenido";

export default function Metodo() {
  return (
    <section className="seccion metodo" id="metodo">
      <div className="envoltura">
        <div className="encabezado-seccion">
          <p className="rotulo rotulo--inv">{metodo.eyebrow}</p>
          <h2 className="titulo-seccion metodo__titulo">{metodo.titulo}</h2>
          <p className="bajada-seccion metodo__bajada">{metodo.bajada}</p>
        </div>

        <ol className="metodo__etapas">
          {metodo.etapas.map((etapa, indice) => (
            <Aparece
              etiqueta="li"
              className="metodo__etapa"
              key={etapa.numero}
              retraso={indice * 110}
            >
              <p className="metodo__numero">{etapa.numero}</p>
              <h3 className="metodo__nombre">{etapa.nombre}</h3>
              <p className="metodo__detalle">{etapa.detalle}</p>
            </Aparece>
          ))}
        </ol>

        {/* Hilo de tiza que se dibuja bajo las cuatro etapas al entrar en pantalla. */}
        <Aparece className="metodo__hilo" base={false} />
      </div>
    </section>
  );
}
