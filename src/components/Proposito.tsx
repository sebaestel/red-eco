import Aparece from "./Aparece";
import MarcaAnillo from "./MarcaAnillo";
import { misionVision, proposito } from "@/lib/contenido";

export default function Proposito() {
  return (
    <section className="seccion proposito" id="proposito">
      <div className="envoltura">
        <div className="proposito__reticula">
          <div>
            <p className="rotulo">{proposito.eyebrow}</p>
            <p className="proposito__frase">
              Transformar residuos en{" "}
              <span className="proposito__destaque">
                oportunidades de aprendizaje, innovación y desarrollo sostenible.
              </span>
            </p>

            <p className="proposito__cierre">
              {proposito.cierre[0]}
              <strong className="proposito__cierre-fuerte">
                {proposito.cierre[1]}
              </strong>
            </p>
          </div>

          {/* La marca se dibuja sola al llegar acá: el anillo, después el
              libro, y al final el brote. Es el único momento animado del sitio. */}
          <Aparece className="sello" base={false}>
            <MarcaAnillo
              className="sello__svg"
              id="sello"
              titulo="Anillo de economía circular con un libro abierto y un brote creciendo desde sus páginas"
            />
          </Aparece>
        </div>

        <dl className="pilares">
          {misionVision.map((pilar) => (
            <div className="pilar" key={pilar.rotulo}>
              <dt className="pilar__rotulo">{pilar.rotulo}</dt>
              <dd className="pilar__cuerpo">
                <span className="pilar__texto">{pilar.texto}</span>
                <span className="pilar__apoyo">{pilar.apoyo}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
