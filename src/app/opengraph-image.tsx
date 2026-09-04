import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import {
  FLECHA_CUERPO,
  FLECHA_PUNTA,
  GIROS,
  HOJA_ALTA_DERECHA,
  HOJA_ALTA_IZQUIERDA,
  HOJA_BAJA_DERECHA,
  HOJA_BAJA_IZQUIERDA,
  HOJA_CENTRAL,
  LIBRO_DERECHA,
  LIBRO_IZQUIERDA,
  LIBRO_LOMO,
  TALLO,
  TRAZO_ANILLO,
} from "@/lib/marca";
import { sitio } from "@/lib/sitio";

export const alt =
  "RED ECO — Los residuos no son basura. Son material de aprendizaje.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Satori no puede usar las fuentes que carga next/font: necesita el archivo.
 * Si existe src/fuentes/Literata-SemiBold.ttf, la tarjeta sale con la
 * tipografía de la marca. Si no existe, sale con la sans por defecto —
 * se ve bien igual, así que no vale la pena romper el build por esto.
 *
 * Para activarla: descargá Literata de https://fonts.google.com/specimen/Literata
 * y dejá el archivo SemiBold (600) en src/fuentes/Literata-SemiBold.ttf
 */
async function cargarFuente() {
  try {
    const datos = await readFile(
      join(process.cwd(), "src/fuentes/Literata-SemiBold.ttf"),
    );
    return [
      { name: "Literata", data: datos, weight: 600 as const, style: "normal" as const },
    ];
  } catch {
    return undefined;
  }
}

export default async function Imagen() {
  const fonts = await cargarFuente();
  // Se esparce, no se asigna: Satori hace .split() sobre fontFamily y falla
  // si la propiedad existe con valor undefined.
  const familia = fonts ? { fontFamily: "Literata" } : {};

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "60px 68px",
          backgroundColor: "#f7f7f7",
          borderBottom: "16px solid #0a6034",
        }}
      >
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="76" height="76" viewBox="0 0 200 200">
            {GIROS.map((giro) => (
              <g key={giro} transform={`rotate(${giro} 100 100)`}>
                <path
                  d={FLECHA_CUERPO}
                  fill="none"
                  stroke="#2f8a38"
                  strokeWidth={TRAZO_ANILLO}
                  strokeLinecap="round"
                />
                <path d={FLECHA_PUNTA} fill="#2f8a38" />
              </g>
            ))}
            <path d={LIBRO_IZQUIERDA} fill="#0a5f79" />
            <path d={LIBRO_DERECHA} fill="#0a5f79" />
            <path d={LIBRO_LOMO} fill="#06465a" />
            <path d={TALLO} fill="none" stroke="#0a6034" strokeWidth="6" />
            <path d={HOJA_BAJA_IZQUIERDA} fill="#0a6034" />
            <path d={HOJA_BAJA_DERECHA} fill="#4c9c34" />
            <path d={HOJA_ALTA_IZQUIERDA} fill="#0a6034" />
            <path d={HOJA_ALTA_DERECHA} fill="#4c9c34" />
            <path d={HOJA_CENTRAL} fill="#6cb42c" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 700,
              gap: 12,
              ...familia,
            }}
          >
            <span style={{ color: "#00402a" }}>RED</span>
            <span style={{ color: "#3d7a1c" }}>ECO</span>
          </div>
        </div>

        {/* Tesis */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#10231a",
            ...familia,
          }}
        >
          <span>Los residuos no son basura.</span>
          <span style={{ color: "#0a6034" }}>Son material de aprendizaje.</span>
        </div>

        {/* Pie */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(4,36,24,0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#48584e",
            }}
          >
            Programa EcoEscuela · Chile
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#05627e" }}>
            {sitio.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    // La clave `fonts` se omite si no hay archivo: pasarla como undefined
    // hace fallar a Satori durante el prerender.
    fonts ? { ...size, fonts } : size,
  );
}
