"use client";

import { useState, type FormEvent } from "react";
import { contacto } from "@/lib/contenido";
import { sitio } from "@/lib/sitio";

type Estado = "reposo" | "enviando" | "listo" | "error";
type Errores = Partial<Record<"nombre" | "email" | "mensaje", string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contacto() {
  const [estado, setEstado] = useState<Estado>("reposo");
  const [errores, setErrores] = useState<Errores>({});
  const [aviso, setAviso] = useState("");

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const datos = new FormData(formulario);

    const nombre = String(datos.get("nombre") ?? "").trim();
    const email = String(datos.get("email") ?? "").trim();
    const mensaje = String(datos.get("mensaje") ?? "").trim();

    const nuevos: Errores = {};
    if (nombre.length < 2) nuevos.nombre = "Escribe tu nombre.";
    if (!EMAIL.test(email)) nuevos.email = "Revisa el correo: falta el @ o el dominio.";
    if (mensaje.length < 10) nuevos.mensaje = "Cuéntanos un poco más, al menos una frase.";

    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) {
      setEstado("error");
      setAviso("Faltan datos para poder responderte.");
      const primero = Object.keys(nuevos)[0];
      formulario.querySelector<HTMLElement>(`[name="${primero}"]`)?.focus();
      return;
    }

    setEstado("enviando");
    setAviso("");

    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(datos.entries())),
      });

      if (!respuesta.ok) throw new Error(String(respuesta.status));

      formulario.reset();
      setEstado("listo");
      setAviso("Mensaje recibido. Te respondemos en horario hábil.");
    } catch {
      setEstado("error");
      setAviso(
        `No pudimos enviar el mensaje. Escríbenos directo a ${sitio.email} y lo resolvemos.`,
      );
    }
  }

  const enviando = estado === "enviando";

  return (
    <section className="seccion seccion--hueso seccion--linea" id="contacto">
      <div className="envoltura">
        <div className="contacto__reticula">
          <div>
            <p className="rotulo">{contacto.eyebrow}</p>
            <h2 className="contacto__titulo">{contacto.titulo}</h2>
            <p className="bajada-seccion">{contacto.bajada}</p>

            <div className="contacto__datos">
              <p className="contacto__dato">
                <span className="contacto__dato-rotulo">Correo</span>
                <a className="contacto__dato-valor" href={`mailto:${sitio.email}`}>
                  {sitio.email}
                </a>
              </p>
              <p className="contacto__dato">
                <span className="contacto__dato-rotulo">Teléfono</span>
                <a
                  className="contacto__dato-valor"
                  href={`tel:${sitio.telefonoLink}`}
                >
                  {sitio.telefono}
                </a>
              </p>
              <p className="contacto__dato">
                <span className="contacto__dato-rotulo">Dónde estamos</span>
                <span className="contacto__dato-valor">
                  {sitio.ciudad}, {sitio.pais}
                </span>
              </p>
            </div>
          </div>

          <form className="formulario" onSubmit={enviar} noValidate>
            <div className="formulario__reticula">
              <div className="campo">
                <label className="campo__etiqueta" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="campo__control"
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  required
                  aria-invalid={errores.nombre ? "true" : undefined}
                  aria-describedby={errores.nombre ? "error-nombre" : undefined}
                />
                {errores.nombre ? (
                  <p className="campo__error" id="error-nombre">
                    {errores.nombre}
                  </p>
                ) : null}
              </div>

              <div className="campo">
                <label className="campo__etiqueta" htmlFor="organizacion">
                  Organización{" "}
                  <span className="campo__opcional">(opcional)</span>
                </label>
                <input
                  className="campo__control"
                  id="organizacion"
                  name="organizacion"
                  type="text"
                  autoComplete="organization"
                />
              </div>

              <div className="campo">
                <label className="campo__etiqueta" htmlFor="tipo">
                  Tipo de organización
                </label>
                <select className="campo__control" id="tipo" name="tipo" defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {contacto.tiposOrganizacion.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>

              <div className="campo">
                <label className="campo__etiqueta" htmlFor="telefono">
                  Teléfono <span className="campo__opcional">(opcional)</span>
                </label>
                <input
                  className="campo__control"
                  id="telefono"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>

              <div className="campo campo--ancho">
                <label className="campo__etiqueta" htmlFor="email">
                  Correo
                </label>
                <input
                  className="campo__control"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  aria-invalid={errores.email ? "true" : undefined}
                  aria-describedby={errores.email ? "error-email" : undefined}
                />
                {errores.email ? (
                  <p className="campo__error" id="error-email">
                    {errores.email}
                  </p>
                ) : null}
              </div>

              <div className="campo campo--ancho">
                <label className="campo__etiqueta" htmlFor="mensaje">
                  ¿Qué te gustaría lograr?
                </label>
                <textarea
                  className="campo__control campo__control--area"
                  id="mensaje"
                  name="mensaje"
                  required
                  aria-invalid={errores.mensaje ? "true" : undefined}
                  aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
                  placeholder="Por ejemplo: somos un colegio de 600 estudiantes y queremos partir con reciclaje y compostaje."
                />
                {errores.mensaje ? (
                  <p className="campo__error" id="error-mensaje">
                    {errores.mensaje}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Trampa para bots: una persona nunca ve ni llena este campo. */}
            <div className="formulario__trampa" aria-hidden="true">
              <label htmlFor="sitio-web">No completar</label>
              <input id="sitio-web" name="sitioWeb" type="text" tabIndex={-1} />
            </div>

            <div className="formulario__pie">
              <button className="boton" type="submit" disabled={enviando}>
                {enviando ? (
                  <>
                    <span className="formulario__giro" aria-hidden="true" />
                    Enviando
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <span className="boton__flecha" aria-hidden="true">
                      →
                    </span>
                  </>
                )}
              </button>
              <p className="formulario__nota">
                Usamos estos datos solo para responderte. No compartimos nada con
                terceros.
              </p>
            </div>

            <p aria-live="polite" role="status">
              {aviso ? (
                <span
                  className={`formulario__aviso ${
                    estado === "listo"
                      ? "formulario__aviso--ok"
                      : "formulario__aviso--error"
                  }`}
                >
                  {aviso}
                </span>
              ) : null}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
