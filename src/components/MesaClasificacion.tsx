"use client";

import { useState } from "react";
import { materiales } from "@/lib/contenido";

/**
 * Elemento firma del sitio: una mesa de clasificación.
 * Cada ficha pasa de "residuo" a "recurso" al pasar el cursor o al tocarla.
 * Los dos estados están siempre en el DOM, así los buscadores leen el contenido
 * completo sin depender de la interacción.
 */
export default function MesaClasificacion() {
  const [abierta, setAbierta] = useState<string | null>(null);

  return (
    <section className="mesa" aria-label="Mesa de clasificación de materiales">
      <div className="envoltura">
        <div className="mesa__encabezado">
          <p className="mesa__titulo">Mesa de clasificación</p>
          <p className="mesa__instruccion">
            Pasa el cursor o toca un material para ver en qué se convierte.
          </p>
        </div>

        <ul className="mesa__pista">
        {materiales.map((material) => {
          const estaAbierta = abierta === material.id;
          return (
            <li className="mesa__casilla" key={material.id}>
              <button
                type="button"
                className="mesa__ficha"
                data-abierta={estaAbierta ? "true" : "false"}
                aria-expanded={estaAbierta}
                onClick={() => setAbierta(estaAbierta ? null : material.id)}
              >
                <span className="mesa__estado">
                  <span className="mesa__punto" aria-hidden="true" />
                  <span className="mesa__estado-textos">
                    <span className="mesa__estado-antes">Residuo</span>
                    <span className="mesa__estado-despues" aria-hidden="true">
                      Recurso
                    </span>
                  </span>
                </span>
                <span className="mesa__material">{material.nombre}</span>
                <span className="mesa__par">
                  <span className="mesa__residuo">{material.residuo}</span>
                  <span className="mesa__revelado">
                    <span className="mesa__convierte">{material.recurso}</span>
                    <span className="mesa__aprendizaje">{material.aprendizaje}</span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
        </ul>

        <p className="mesa__nota">
          Cada flujo de residuos que entra a una escuela es también una unidad de
          aprendizaje. Ese es el punto de partida del Programa EcoEscuela.
        </p>
      </div>
    </section>
  );
}
