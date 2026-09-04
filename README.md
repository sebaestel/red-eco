# RED ECO — sitio web

Landing de una página para RED ECO, en Next.js 15 (App Router) y TypeScript.
Sin dependencias más allá de Next y React: los estilos son CSS propio y las
animaciones son nativas. Eso mantiene el bundle en ~114 kB y evita que una
actualización de terceros rompa el sitio.

## Correr en local

```bash
npm install
```

```bash
npm run dev
```

Queda en http://localhost:3000

Otros comandos:

```bash
npm run build && npm start
```

```bash
npm run typecheck
```

## Publicar en Vercel

1. Subí el repositorio a GitHub.
2. En Vercel, **Add New → Project** e importá el repositorio. Next.js se detecta
   solo: no hay que configurar comandos.
3. En **Settings → Environment Variables**, cargá las variables de `.env.example`.
4. En **Settings → Domains**, agregá el dominio y actualizá `NEXT_PUBLIC_SITIO_URL`
   para que calce. De esa variable dependen los metadatos, el JSON-LD, el sitemap
   y la URL canónica: si queda mal, el SEO queda mal.

## Antes de publicar

Estos datos son de relleno y hay que reemplazarlos:

- [ ] `src/lib/sitio.ts` — correo, ciudad, Instagram, LinkedIn, año de fundación
      y la URL real. El teléfono ya está: +56 9 8830 9848.
- [ ] `src/lib/contenido.ts` → `concurso` — datos reales del concurso y el ID del
      video. Mientras `video` sea `null`, la sección muestra un marcador 16:9 con
      la proporción final, así el diseño no se mueve cuando llegue.
- [ ] `src/lib/contenido.ts` — revisar la respuesta de "¿Cuánto dura la
      implementación?", que hoy está redactada sin comprometer plazos porque no
      tengo el dato real.
- [ ] Reemplazar la foto de portada por una fotografía real (ver `IMAGENES.md`,
      hay un problema con la imagen actual que conviene leer).
- [ ] Convertir a curvas el texto de los SVG de logo (ver `PROPUESTA-LOGO.md`).
- [ ] Configurar `RESEND_API_KEY` para que el formulario envíe correo de verdad.
- [ ] Opcional: dejar `Literata-SemiBold.ttf` en `src/fuentes/` para que la
      imagen social use la tipografía de la marca. Sin ese archivo la tarjeta
      sale con una sans genérica —se ve bien, pero no es la tipografía correcta—.
      Se descarga de https://fonts.google.com/specimen/Literata y no hay que
      tocar código: el build la detecta sola.

## Dónde se edita cada cosa

| Qué                                   | Archivo                          |
| ------------------------------------- | -------------------------------- |
| Todos los textos del sitio            | `src/lib/contenido.ts`           |
| Datos de contacto, redes, URL         | `src/lib/sitio.ts`               |
| Ítems del menú                        | `src/lib/sitio.ts` (`navegacion`)|
| Orden de las secciones                | `src/app/page.tsx`               |
| Video y datos del concurso            | `src/lib/contenido.ts` (`concurso`) |
| Colores, tipografías, espaciados       | `src/app/globals.css` (tokens)   |
| Geometría del logo                    | `src/lib/marca.ts`               |
| Metadatos y tipografías               | `src/app/layout.tsx`             |
| Datos estructurados (JSON-LD)         | `src/components/DatosEstructurados.tsx` |
| Texto para asistentes de IA           | `public/llms.txt`                |

Agregar una pregunta frecuente a `contenido.ts` la publica en la página **y** en
el `FAQPage` de JSON-LD: no hay que tocar dos lugares.

## Formulario de contacto

`POST /api/contacto` valida en cliente y en servidor, tiene trampa para bots
(campo oculto) y un límite de 5 envíos cada 10 minutos por IP.

Si `RESEND_API_KEY` no está configurada, el endpoint **igual responde 200** y
escribe el mensaje en los logs de Vercel. Es a propósito: es mejor que un mensaje
quede en los logs que perderlo mientras se conecta el correo. Cuando cargues la
clave, empieza a enviar a `CONTACTO_EMAIL_DESTINO` con `reply_to` del remitente.

El límite por IP vive en memoria del proceso. En serverless se reinicia con cada
instancia, así que sirve contra ráfagas, no como defensa dura. Si llega spam en
serio, hay que poner un servicio delante (Turnstile o similar).

## SEO y motores con IA

Lo que ya está resuelto:

- **Metadatos** con `metadataBase`, canónica, `hreflang` es-CL, Open Graph y
  Twitter Card.
- **Imagen social** generada en el build desde `src/app/opengraph-image.tsx`, con
  la marca y el titular. No hay que subir un PNG a mano.
- **JSON-LD** en un solo `@graph` con `Organization`, `WebSite`, `WebPage`,
  `Service` (EcoEscuela) y `FAQPage`, referenciados entre sí por `@id`. Eso es lo
  que permite que Google y los asistentes entiendan que hablan de una misma
  entidad.
- **`sitemap.xml`** y **`robots.txt`** generados por código.
- **`robots.txt` permite explícitamente** a GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended y otros rastreadores de asistentes. Solo bloquea `/api/`.
- **`llms.txt`** con el contenido del sitio en texto plano y las preguntas
  frecuentes en formato P/R, para que un asistente pueda citar con precisión.
- **HTML semántico**: un solo `h1`, jerarquía de encabezados correcta, y las
  respuestas del FAQ están en el HTML (con `<details>` nativo, no JavaScript),
  así que se indexan aunque estén cerradas.
- **Las dos caras de la mesa de clasificación** están siempre en el DOM: el texto
  revelado se indexa sin depender de la interacción.

Después de publicar, queda por hacer:

- [ ] Verificar el dominio en Google Search Console y enviar el sitemap.
- [ ] Probar el JSON-LD en https://validator.schema.org
- [ ] Revisar la tarjeta social en https://www.opengraph.xyz

## El video del concurso

La sección `#concurso` es una banda en pino, ubicada justo después de EcoEscuela.
Para publicar el video, en `src/lib/contenido.ts` reemplazá:

```ts
video: null,
```

por el ID del video (no la URL completa):

```ts
video: { plataforma: "youtube", id: "ABC123" },
```

De `https://www.youtube.com/watch?v=ABC123` el ID es `ABC123`. Para Vimeo,
de `https://vimeo.com/123456789` el ID es `123456789`.

El iframe se carga con `loading="lazy"` y por `youtube-nocookie.com`, así que no
arrastra el peso ni el rastreo de YouTube al resto de la página.

## Accesibilidad

- Contraste AA en todo el texto. El verde de `ECO` del logo (`#6cb42c`) da 2.4:1
  sobre papel, así que para texto se usa `--lima-texto` (`#3d7a1c`, 4.9:1) y el
  lima original queda solo para filetes, puntos y fondos oscuros. Misma lógica
  con `--petroleo`, que sí pasa (6.4:1) y lleva los rótulos y enlaces.
- Foco visible en todo elemento interactivo, con anillo en azul tinta.
- `prefers-reduced-motion` respetado: se anulan duraciones **y** retrasos, para
  que nada quede invisible esperando su turno.
- Enlace "Saltar al contenido" al inicio del `body`.
- El menú móvil cierra con Escape y anuncia su estado con `aria-expanded`.

## Estructura

```
src/
  app/
    layout.tsx              metadatos, tipografías, JSON-LD
    page.tsx                orden de las secciones
    globals.css             hoja única: tokens y componentes
    icon.svg                favicon
    opengraph-image.tsx     imagen social generada en el build
    sitemap.ts robots.ts manifest.ts
    api/contacto/route.ts
  components/               una sección por archivo
  lib/
    sitio.ts                configuración
    contenido.ts            todos los textos
    marca.ts                geometría del logo
  imagenes/                 fotografías (importadas, no en public/)
  fuentes/                  fuente opcional para la imagen social
public/                     logos SVG y llms.txt
referencias/                el logo entregado, fuera de lo que se sirve
```

### Orden de las secciones

Portada → **EcoEscuela** → Concurso → Mesa de clasificación → Método → Propósito
y misión/visión → Empresas (ESG) → Preguntas → Contacto.

EcoEscuela va primero por ser el producto estrella. La comparación con las
intervenciones tradicionales ya no es una sección aparte: quedó absorbida en el
tercer párrafo de EcoEscuela.

### Por qué un solo archivo CSS

Con CSS Modules por componente es fácil que dos reglas de padding se cancelen
entre secciones. Una hoja única con convención `bloque__elemento` y **un selector
de clase por regla** hace que el orden en cascada sea el orden de lectura del
archivo. Los tokens están arriba; cambiar `--bosque` cambia el sitio completo.
