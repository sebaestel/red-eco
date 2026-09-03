import { NextResponse } from "next/server";
import { sitio } from "@/lib/sitio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LIMITE_POR_VENTANA = 5;
const VENTANA_MS = 10 * 60 * 1000;

/**
 * Límite simple en memoria. Suficiente para un formulario de contacto;
 * en serverless se reinicia con cada instancia, así que es una barrera
 * contra ráfagas, no una defensa dura.
 */
const registro = new Map<string, { conteo: number; desde: number }>();

function excedeLimite(ip: string): boolean {
  const ahora = Date.now();
  const previo = registro.get(ip);

  if (!previo || ahora - previo.desde > VENTANA_MS) {
    registro.set(ip, { conteo: 1, desde: ahora });
    return false;
  }

  previo.conteo += 1;
  return previo.conteo > LIMITE_POR_VENTANA;
}

/** Quita caracteres de control y recorta, para que nada raro llegue al correo. */
function limpiar(valor: unknown, maximo = 2000): string {
  return String(valor ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maximo);
}

export async function POST(peticion: Request) {
  const ip =
    peticion.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "desconocida";

  if (excedeLimite(ip)) {
    return NextResponse.json(
      { ok: false, error: "Demasiados envíos. Intenta de nuevo en unos minutos." },
      { status: 429 },
    );
  }

  let cuerpo: Record<string, unknown>;
  try {
    cuerpo = (await peticion.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Cuerpo inválido." }, { status: 400 });
  }

  // Trampa para bots: si viene llena, respondemos ok y descartamos.
  if (limpiar(cuerpo.sitioWeb).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const nombre = limpiar(cuerpo.nombre, 120);
  const email = limpiar(cuerpo.email, 160);
  const mensaje = limpiar(cuerpo.mensaje, 4000);
  const organizacion = limpiar(cuerpo.organizacion, 160);
  const tipo = limpiar(cuerpo.tipo, 80);
  const telefono = limpiar(cuerpo.telefono, 40);

  if (nombre.length < 2 || !EMAIL.test(email) || mensaje.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Faltan datos obligatorios." },
      { status: 422 },
    );
  }

  const destino = process.env.CONTACTO_EMAIL_DESTINO || sitio.email;
  const texto = [
    `Nombre: ${nombre}`,
    `Correo: ${email}`,
    `Teléfono: ${telefono || "—"}`,
    `Organización: ${organizacion || "—"}`,
    `Tipo: ${tipo || "—"}`,
    "",
    mensaje,
  ].join("\n");

  const clave = process.env.RESEND_API_KEY;

  // Sin clave configurada el formulario sigue funcionando: queda en los logs
  // de Vercel para no perder mensajes mientras se conecta el correo.
  if (!clave) {
    console.info("[contacto] mensaje recibido (sin proveedor de correo)\n", texto);
    return NextResponse.json({ ok: true, entregado: false });
  }

  try {
    const envio = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${clave}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || `RED ECO <web@${new URL(sitio.url).hostname}>`,
        to: [destino],
        reply_to: email,
        subject: `Web RED ECO — ${nombre}${organizacion ? ` (${organizacion})` : ""}`,
        text: texto,
      }),
    });

    if (!envio.ok) {
      const detalle = await envio.text();
      console.error("[contacto] Resend respondió", envio.status, detalle);
      console.info("[contacto] mensaje no entregado, se registra acá\n", texto);
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el correo." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, entregado: true });
  } catch (error) {
    console.error("[contacto] error de red al enviar", error);
    console.info("[contacto] mensaje no entregado, se registra acá\n", texto);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el correo." },
      { status: 502 },
    );
  }
}
