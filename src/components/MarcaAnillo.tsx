/**
 * Marca RED ECO en vectores, reconstruida desde referencias/logo-entregado.jpg.
 *
 * Frente al original (un JPEG con fondo sólido) esta versión es transparente,
 * escala sin perder nitidez y mantiene los degradados lima→pino de las flechas.
 *
 * simple: quita el libro y deja dos hojas. Es la versión para 16–40 px, donde
 *         las páginas y las cinco hojas se convierten en una mancha.
 * mono:   una sola tinta, tomada del color del contenedor.
 *
 * La animación de dibujado no vive acá: la dispara el contenedor .sello cuando
 * entra en pantalla (ver globals.css).
 */

import type { CSSProperties } from "react";
import {
  FLECHA_CUERPO,
  FLECHA_PUNTA,
  GIROS,
  HOJA_ALTA_DERECHA,
  HOJA_ALTA_IZQUIERDA,
  HOJA_BAJA_DERECHA,
  HOJA_BAJA_IZQUIERDA,
  HOJA_CENTRAL,
  HOJA_SIMPLE_DERECHA,
  HOJA_SIMPLE_IZQUIERDA,
  LIBRO_DERECHA,
  LIBRO_IZQUIERDA,
  LIBRO_LOMO,
  TALLO,
  TALLO_SIMPLE,
  TRAZO_ANILLO,
} from "@/lib/marca";

type Props = {
  className?: string;
  simple?: boolean;
  mono?: boolean;
  titulo?: string;
  /** Sufijo para los id de degradado: obligatorio si hay más de una marca en la página. */
  id?: string;
};

export default function MarcaAnillo({
  className,
  simple = false,
  mono = false,
  titulo = "Marca RED ECO",
  id = "marca",
}: Props) {
  const gradAnillo = `${id}-anillo`;
  const gradHoja = `${id}-hoja`;
  const gradLibro = `${id}-libro`;

  const anillo = mono ? "currentColor" : `url(#${gradAnillo})`;
  const hoja = mono ? "currentColor" : `url(#${gradHoja})`;
  const libro = mono ? "currentColor" : `url(#${gradLibro})`;
  const tallo = mono ? "currentColor" : "var(--bosque, #0a6034)";

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      role={titulo ? "img" : "presentation"}
      aria-label={titulo || undefined}
      aria-hidden={titulo ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      {mono ? null : (
        <defs>
          {/* Los degradados van en diagonal, como en el logo entregado. */}
          <linearGradient id={gradAnillo} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8cc63f" />
            <stop offset="45%" stopColor="#4c9c34" />
            <stop offset="100%" stopColor="#00402a" />
          </linearGradient>
          <linearGradient id={gradHoja} x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#7cbe38" />
            <stop offset="100%" stopColor="#0a6034" />
          </linearGradient>
          <linearGradient id={gradLibro} x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0%" stopColor="#0a4f63" />
            <stop offset="100%" stopColor="#0d7f9c" />
          </linearGradient>
        </defs>
      )}

      {/* Anillo: una flecha definida una vez y repetida a 120°. */}
      <g className="marca__anillo" fill={anillo} stroke={anillo}>
        {GIROS.map((giro, indice) => (
          <g
            key={giro}
            transform={`rotate(${giro} 100 100)`}
            style={{ "--indice": indice } as CSSProperties}
          >
            <path
              className="marca__flecha-cuerpo"
              d={FLECHA_CUERPO}
              fill="none"
              strokeWidth={TRAZO_ANILLO}
              strokeLinecap="round"
              pathLength="100"
            />
            <path className="marca__flecha-punta" d={FLECHA_PUNTA} stroke="none" />
          </g>
        ))}
      </g>

      {simple ? (
        <g className="marca__brote">
          <path
            className="marca__tallo"
            d={TALLO_SIMPLE}
            fill="none"
            stroke={mono ? "currentColor" : hoja}
            strokeWidth="10"
            strokeLinecap="round"
            pathLength="100"
          />
          <path
            className="marca__hoja"
            d={HOJA_SIMPLE_IZQUIERDA}
            fill={hoja}
            stroke="none"
            style={{ "--indice": 0 } as CSSProperties}
          />
          <path
            className="marca__hoja"
            d={HOJA_SIMPLE_DERECHA}
            fill={hoja}
            stroke="none"
            style={{ "--indice": 1 } as CSSProperties}
          />
        </g>
      ) : (
        <>
          {/* Libro abierto: las páginas son la base desde donde crece el brote. */}
          <g className="marca__libro" fill={libro} stroke="none">
            <path d={LIBRO_IZQUIERDA} />
            <path d={LIBRO_DERECHA} />
            <path d={LIBRO_LOMO} opacity={mono ? 1 : 0.55} />
          </g>

          <g className="marca__brote" stroke="none">
            <path
              className="marca__tallo"
              d={TALLO}
              fill="none"
              stroke={tallo}
              strokeWidth="6"
              strokeLinecap="round"
              pathLength="100"
            />
            {[
              HOJA_BAJA_IZQUIERDA,
              HOJA_BAJA_DERECHA,
              HOJA_ALTA_IZQUIERDA,
              HOJA_ALTA_DERECHA,
              HOJA_CENTRAL,
            ].map((trazado, indice) => (
              <path
                key={trazado}
                className="marca__hoja"
                d={trazado}
                fill={hoja}
                style={{ "--indice": indice } as CSSProperties}
              />
            ))}
          </g>
        </>
      )}
    </svg>
  );
}
