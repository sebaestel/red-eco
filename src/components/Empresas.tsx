import Aparece from "./Aparece";
import { empresas } from "@/lib/contenido";

export default function Empresas() {
  return (
    <section className="seccion empresas" id="empresas">
      <div className="envoltura">
        <div className="empresas__reticula">
          <div>
            <p className="rotulo rotulo--inv">{empresas.eyebrow}</p>
            <h2 className="titulo-seccion empresas__titulo">{empresas.titulo}</h2>
            <p className="bajada-seccion empresas__bajada">{empresas.bajada}</p>
            <div className="empresas__acciones">
              <a className="boton boton--claro" href={empresas.cta.href}>
                {empresas.cta.etiqueta}
                <span className="boton__flecha" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>

          <ul className="empresas__lista">
            {empresas.beneficios.map((beneficio, indice) => (
              <Aparece
                etiqueta="li"
                className="empresas__item"
                key={beneficio.nombre}
                retraso={indice * 80}
              >
                <h3 className="empresas__nombre">
                  <span className="empresas__marca" aria-hidden="true" />
                  {beneficio.nombre}
                </h3>
                <p className="empresas__detalle">{beneficio.detalle}</p>
              </Aparece>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
