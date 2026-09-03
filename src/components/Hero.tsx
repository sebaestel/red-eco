import Image from "next/image";
import foto from "@/imagenes/mesa-clasificacion-patio.jpg";
import { hero } from "@/lib/contenido";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <Image
        className="hero__foto"
        src={foto}
        alt="Estudiantes con guantes clasifican botellas PET, cartón, vidrio y metales en una mesa de acopio del patio, mientras un docente registra los materiales en una planilla"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
      />
      {/* El velo es diagonal, no una banda inferior: carga el lado izquierdo,
          donde va el texto, y deja legible la mesa de acopio de la derecha. */}
      <div className="hero__velo" aria-hidden="true" />

      <div className="envoltura hero__contenido">
        <p className="rotulo rotulo--inv">{hero.eyebrow}</p>
        <h1 className="hero__titulo">
          {hero.titulo.map((linea) => (
            <span className="hero__titulo-linea" key={linea}>
              {linea}
            </span>
          ))}
        </h1>
        <p className="hero__bajada">{hero.bajada}</p>
        <div className="hero__acciones">
          <a className="boton boton--claro" href={hero.ctaPrimario.href}>
            {hero.ctaPrimario.etiqueta}
            <span className="boton__flecha" aria-hidden="true">
              →
            </span>
          </a>
          <a className="boton boton--fantasma" href={hero.ctaSecundario.href}>
            {hero.ctaSecundario.etiqueta}
          </a>
        </div>
      </div>
    </section>
  );
}
