import Aparece from "./Aparece";
import { iconosPrograma } from "./Iconos";
import { programa } from "@/lib/contenido";

export default function Programa() {
  return (
    <section className="seccion seccion--linea" id="programa">
      <div className="envoltura">
        <div className="programa__reticula">
          <div className="programa__encabezado">
            <p className="rotulo">{programa.eyebrow}</p>
            <h2 className="titulo-seccion">{programa.titulo}</h2>
            <p className="programa__kicker">{programa.kicker}</p>
            <div className="programa__texto">
              {programa.parrafos.map((parrafo) => (
                <p key={parrafo}>{parrafo}</p>
              ))}
            </div>
          </div>

          <ul className="programa__lista">
            {programa.componentes.map((componente, indice) => {
              const Icono = iconosPrograma[indice];
              return (
                <Aparece
                  etiqueta="li"
                  className="programa__item"
                  key={componente.nombre}
                  retraso={indice * 70}
                >
                  <Icono className="programa__icono" />
                  <h3 className="programa__nombre">{componente.nombre}</h3>
                  <p className="programa__detalle">{componente.detalle}</p>
                </Aparece>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
