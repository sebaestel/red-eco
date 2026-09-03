"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children?: ReactNode;
  /** Etiqueta HTML a renderizar. Por defecto div. */
  etiqueta?: "div" | "section" | "article" | "li" | "header" | "ul" | "figure";
  className?: string;
  /** Retraso en milisegundos, para escalonar hermanos. */
  retraso?: number;
  id?: string;
  /**
   * Aplica la animación por defecto (fundido + subida).
   * Ponelo en false cuando el elemento define su propia animación
   * y solo necesita saber que ya entró en pantalla.
   */
  base?: boolean;
};

/**
 * Revela su contenido la primera vez que entra en pantalla.
 * El observador se desconecta al disparar: la animación no se repite.
 */
export default function Aparece({
  children,
  etiqueta = "div",
  className = "",
  retraso = 0,
  id,
  base = true,
}: Props) {
  const referencia = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const nodo = referencia.current;
    if (!nodo) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            setVisible(true);
            observador.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observador.observe(nodo);
    return () => observador.disconnect();
  }, []);

  // Un solo cast: permite cualquier etiqueta manteniendo el ref tipado.
  const Etiqueta = etiqueta as "div";

  return (
    <Etiqueta
      id={id}
      ref={referencia}
      className={[base ? "aparece" : "", className].filter(Boolean).join(" ")}
      data-visible={visible ? "true" : "false"}
      style={{ "--retraso": `${retraso}ms` } as CSSProperties}
    >
      {children}
    </Etiqueta>
  );
}
