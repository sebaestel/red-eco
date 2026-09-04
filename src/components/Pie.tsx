import MarcaAnillo from "./MarcaAnillo";
import { navegacion, sitio } from "@/lib/sitio";

export default function Pie() {
  const anio = new Date().getFullYear();

  return (
    <footer className="pie">
      <div className="envoltura">
        <div className="pie__superior">
          <div>
            <a className="pie__marca" href="#inicio">
              <MarcaAnillo className="pie__marca-anillo" simple mono titulo="" id="pie" />
              <span className="pie__marca-texto">RED ECO</span>
            </a>
            <p className="pie__lema">La economía circular comienza educando.</p>
          </div>

          <div>
            <h2 className="pie__columna-titulo">Sitio</h2>
            <ul className="pie__lista">
              {navegacion.map(({ id, etiqueta }) => (
                <li key={id}>
                  <a className="pie__enlace" href={`#${id}`}>
                    {etiqueta}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="pie__columna-titulo">Contacto</h2>
            <ul className="pie__lista">
              <li>
                <a className="pie__enlace" href={`mailto:${sitio.email}`}>
                  {sitio.email}
                </a>
              </li>
              <li>
                <a className="pie__enlace" href={`tel:${sitio.telefonoLink}`}>
                  {sitio.telefono}
                </a>
              </li>
              <li>
                <a
                  className="pie__enlace"
                  href={sitio.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="pie__enlace"
                  href={sitio.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pie__inferior">
          <p>
            © {anio} {sitio.nombre} — {sitio.ciudad}, {sitio.pais}
          </p>
          <p>Educación ambiental · Economía circular · Valorización de residuos</p>
        </div>
      </div>
    </footer>
  );
}
