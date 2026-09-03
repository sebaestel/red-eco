import Image from "next/image";
import foto from "@/imagenes/patio-huerto-escolar.jpg";
import { hero } from "@/lib/contenido";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <Image
        className="hero__foto"
        src={foto}
        alt="Estudiantes y un docente plantando almácigos en el huerto del patio de su escuela"
        fill
        priority
        sizes="100vw"
        quality={82}
        placeholder="blur"
      />
      {/* El velo garantiza el contraste del texto sin apagar la foto entera:
          carga la esquina inferior izquierda y deja limpio el lado derecho. */}
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

      <p className="hero__pie">{hero.pieFoto}</p>
    </section>
  );
}
