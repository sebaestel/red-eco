/**
 * Marca RED ECO reconstruida en vectores.
 * Tres flechas de trazo uniforme (el original tenía doble trazo dibujado a mano,
 * que se ensucia bajo 32 px) + libro y brote fundidos en una sola forma.
 *
 * simple: quita el libro y una hoja. Es la versión para 16–40 px.
 *
 * La animación de dibujado no vive acá: la dispara el contenedor .sello
 * cuando entra en pantalla (ver globals.css).
 */

import type { CSSProperties } from "react";
import {
  FLECHA_CUERPO,
  FLECHA_PUNTA,
  GIROS,
  HOJA_CENTRAL,
  HOJA_DERECHA,
  HOJA_IZQUIERDA,
  HOJA_SIMPLE_DERECHA,
  HOJA_SIMPLE_IZQUIERDA,
  LIBRO_DERECHA,
  LIBRO_IZQUIERDA,
  TALLO,
  TALLO_SIMPLE,
} from "@/lib/marca";

type Props = {
  className?: string;
  simple?: boolean;
  /** Versión de una sola tinta, para fondos oscuros o marcas de agua. */
  mono?: boolean;
  titulo?: string;
};

export default function MarcaAnillo({
  className,
  simple = false,
  mono = false,
  titulo = "Marca RED ECO",
}: Props) {
  const verde = mono ? "currentColor" : "var(--bosque, #1f6b45)";
  const azul = mono ? "currentColor" : "var(--tinta, #23407e)";
  const hoja = mono ? "currentColor" : "var(--brote, #7fb53f)";
  const hojaAlt = mono ? "currentColor" : "var(--bosque, #1f6b45)";

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      role={titulo ? "img" : "presentation"}
      aria-label={titulo || undefined}
      aria-hidden={titulo ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Anillo: una flecha definida una vez y repetida a 120°. */}
      <g className="marca__anillo" fill={verde} stroke={verde}>
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
              strokeWidth="13"
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
            stroke={hojaAlt}
            strokeWidth="9"
            strokeLinecap="round"
            pathLength="100"
          />
          <path
            className="marca__hoja"
            d={HOJA_SIMPLE_IZQUIERDA}
            fill={hojaAlt}
            style={{ "--indice": 0 } as CSSProperties}
          />
          <path
            className="marca__hoja"
            d={HOJA_SIMPLE_DERECHA}
            fill={hoja}
            style={{ "--indice": 1 } as CSSProperties}
          />
        </g>
      ) : (
        <>
          {/* Libro abierto: las páginas son la base desde donde crece el brote. */}
          <g className="marca__libro" fill={azul}>
            <path d={LIBRO_IZQUIERDA} />
            <path d={LIBRO_DERECHA} />
          </g>

          <g className="marca__brote">
            <path
              className="marca__tallo"
              d={TALLO}
              fill="none"
              stroke={hojaAlt}
              strokeWidth="5.5"
              strokeLinecap="round"
              pathLength="100"
            />
            <path
              className="marca__hoja"
              d={HOJA_IZQUIERDA}
              fill={hojaAlt}
              style={{ "--indice": 0 } as CSSProperties}
            />
            <path
              className="marca__hoja"
              d={HOJA_DERECHA}
              fill={hoja}
              style={{ "--indice": 1 } as CSSProperties}
            />
            <path
              className="marca__hoja"
              d={HOJA_CENTRAL}
              fill={hoja}
              style={{ "--indice": 2 } as CSSProperties}
            />
          </g>
        </>
      )}
    </svg>
  );
}
