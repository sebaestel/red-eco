"use client";

import { useEffect, useState } from "react";
import MarcaAnillo from "./MarcaAnillo";
import { navegacion } from "@/lib/sitio";

export default function Nav() {
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState<string>("");
  // Arranca invertida: la portada es una foto oscura a pantalla completa.
  const [sobreFoto, setSobreFoto] = useState(true);

  // La barra se invierte mientras la foto del hero siga detrás de ella.
  useEffect(() => {
    const portada = document.getElementById("inicio");

    const alDesplazar = () => {
      const limite = portada ? portada.offsetHeight - 72 : 0;
      setSobreFoto(window.scrollY < limite);
    };

    alDesplazar();
    window.addEventListener("scroll", alDesplazar, { passive: true });
    window.addEventListener("resize", alDesplazar);
    return () => {
      window.removeEventListener("scroll", alDesplazar);
      window.removeEventListener("resize", alDesplazar);
    };
  }, []);

  // Marca en el menú la sección que se está leyendo.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const secciones = navegacion
      .map(({ id }) => document.getElementById(id))
      .filter((nodo): nodo is HTMLElement => nodo !== null);

    if (secciones.length === 0) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visibles = entradas
          .filter((entrada) => entrada.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visibles[0]) setActivo(visibles[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    secciones.forEach((seccion) => observador.observe(seccion));
    return () => observador.disconnect();
  }, []);

  // Cerrar el panel móvil con Escape.
  useEffect(() => {
    if (!abierto) return;
    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", alPresionar);
    return () => window.removeEventListener("keydown", alPresionar);
  }, [abierto]);

  // Con el panel móvil abierto la barra vuelve a papel: el panel es opaco
  // y una barra transparente encima se vería partida.
  const invertida = sobreFoto && !abierto;

  return (
    <header className="nav" data-invertida={invertida ? "true" : "false"}>
      <div className="envoltura">
        <div className="nav__fila">
          <a className="nav__marca" href="#inicio" aria-label="RED ECO, ir al inicio">
            <MarcaAnillo className="nav__marca-anillo" simple mono titulo="" id="nav" />
            <span className="nav__marca-texto">
              <span className="nav__marca-red">RED</span>{" "}
              <span className="nav__marca-eco">ECO</span>
            </span>
          </a>

          <nav className="nav__enlaces" aria-label="Secciones del sitio">
            {navegacion.map(({ id, etiqueta }) => (
              <a
                key={id}
                className="nav__enlace"
                href={`#${id}`}
                data-activo={activo === id ? "true" : "false"}
              >
                {etiqueta}
              </a>
            ))}
          </nav>

          <div className="nav__acciones">
            <a className="boton nav__cta" href="#contacto">
              Conversemos
              <span className="boton__flecha" aria-hidden="true">
                →
              </span>
            </a>
            <button
              type="button"
              className="nav__disparador"
              aria-expanded={abierto}
              aria-controls="menu-movil"
              aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setAbierto((valor) => !valor)}
            >
              <span className="nav__disparador-linea" aria-hidden="true" />
              <span className="nav__disparador-linea" aria-hidden="true" />
              <span className="nav__disparador-linea" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {abierto ? (
        <div className="nav__panel" id="menu-movil">
          <div className="envoltura">
            <nav className="nav__panel-lista" aria-label="Secciones del sitio">
              {navegacion.map(({ id, etiqueta }, indice) => (
                <a
                  key={id}
                  className="nav__panel-enlace"
                  href={`#${id}`}
                  onClick={() => setAbierto(false)}
                >
                  <span className="nav__panel-indice" aria-hidden="true">
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                  {etiqueta}
                </a>
              ))}
              <a
                className="boton nav__panel-cta"
                href="#contacto"
                onClick={() => setAbierto(false)}
              >
                Conversemos
                <span className="boton__flecha" aria-hidden="true">
                  →
                </span>
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
