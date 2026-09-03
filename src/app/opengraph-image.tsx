import { ImageResponse } from "next/og";
import {
  FLECHA_CUERPO,
  FLECHA_PUNTA,
  GIROS,
  HOJA_CENTRAL,
  HOJA_DERECHA,
  HOJA_IZQUIERDA,
  LIBRO_DERECHA,
  LIBRO_IZQUIERDA,
  TALLO,
} from "@/lib/marca";
import { sitio } from "@/lib/sitio";

export const runtime = "edge";
export const alt =
  "RED ECO — Los residuos no son basura. Son material de aprendizaje.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Imagen() {
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
          backgroundColor: "#f8f7f1",
          borderBottom: "16px solid #1f6b45",
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
                  stroke="#1f6b45"
                  strokeWidth="13"
                />
                <path d={FLECHA_PUNTA} fill="#1f6b45" />
              </g>
            ))}
            <path d={LIBRO_IZQUIERDA} fill="#23407e" />
            <path d={LIBRO_DERECHA} fill="#23407e" />
            <path d={TALLO} fill="none" stroke="#1f6b45" strokeWidth="5.5" />
            <path d={HOJA_IZQUIERDA} fill="#1f6b45" />
            <path d={HOJA_DERECHA} fill="#7fb53f" />
            <path d={HOJA_CENTRAL} fill="#7fb53f" />
          </svg>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, gap: 12 }}>
            <span style={{ color: "#1f6b45" }}>RED</span>
            <span style={{ color: "#23407e" }}>ECO</span>
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
            color: "#172318",
          }}
        >
          <span>Los residuos no son basura.</span>
          <span style={{ color: "#1f6b45" }}>Son material de aprendizaje.</span>
        </div>

        {/* Pie */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(16,35,26,0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#4a5850",
            }}
          >
            Programa EcoEscuela · Chile
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#8a6236" }}>
            {sitio.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
