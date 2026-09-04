# Logo: cómo está incorporado

El logo entregado (`referencias/logo-entregado.jpg`) está incorporado al sitio,
pero **reconstruido en vectores**. Esta nota explica qué se hizo y qué queda
pendiente.

## Por qué no se usa el JPEG directamente

El archivo entregado es un JPEG de 549 × 451 px con fondo sólido `#f7f7f7`.
Tres problemas concretos:

1. **Sin transparencia.** No se puede poner sobre la fotografía de portada, sobre
   la banda del método ni sobre el pie, porque arrastra su propio rectángulo de
   fondo.
2. **No escala.** A 549 px de ancho ya está en su tamaño máximo. En una pantalla
   Retina se ve borroso incluso en la barra de navegación.
3. **Ilegible en chico.** Las cinco hojas y las páginas del libro se convierten en
   una mancha bajo 40 px, que es justo el tamaño del favicon y de la barra.

## Qué se hizo

Se redibujó en SVG, respetando estructura, degradados y colores del original:

- **Anillo**: tres flechas idénticas repetidas a 120°, con extremos redondeados y
  degradado diagonal lima → pino, como en el original. Una sola flecha definida
  una vez, no tres dibujos distintos.
- **Brote**: cinco hojas (dos pares laterales y una central), con degradado propio.
- **Libro**: abierto, ancho y plano, en degradado petróleo, con el lomo marcado.
- **Wordmark**: `RED` en pino y `ECO` en verde, en Literata bold.
- **Lema**: `EDUCACIÓN AMBIENTAL · ECONOMÍA CIRCULAR · ESG` y
  `TRANSFORMAMOS COMUNIDADES`, ambos del logo nuevo. El `ESG` también se
  incorporó al rótulo de la portada del sitio.

Además hay una **versión simplificada** para 16–40 px: sin libro y con dos hojas.
Es la que usa la barra de navegación, el pie y el favicon. Se activa con la prop
`simple`, no es un archivo aparte.

## Colores muestreados del logo

Los tomé pixel por pixel del archivo entregado, no a ojo:

| Elemento              | Hex muestreado      | Token en el sitio |
| --------------------- | ------------------- | ----------------- |
| `RED` del wordmark    | `#004830`           | `--pino`          |
| `ECO` del wordmark    | `#60a830` / `#78b424` | `--lima`        |
| Flechas, claro        | `#8cc63f`           | degradado         |
| Flechas, medio        | `#4c9c34`           | degradado         |
| Flechas, oscuro       | `#0c5430`           | degradado         |
| Libro                 | `#003c3c` → `#006c84` | `--petroleo`    |
| Lema                  | `#305448`           | `--texto-sec`     |
| Fondo                 | `#f7f7f7`           | `--papel`         |

**Cambio importante respecto de la versión anterior del sitio:** el logo nuevo no
tiene ningún tono cálido. Antes había un color arena (`#c1976a`) que estructuraba
los filetes y los rótulos. Se eliminó por completo y su función la tomaron el lima
(filetes) y el petróleo del libro (rótulos y enlaces). La calidez ahora viene solo
de la fotografía.

### Un ajuste de accesibilidad

El verde de `ECO` (`#6cb42c`) sobre fondo claro da **2.4:1**. El mínimo accesible
para texto es 4.5:1. Igual que pasaba con el arena del logo anterior, hay dos
variantes del mismo matiz:

- `--lima` `#6cb42c` — el del logo. Se usa en filetes, puntos y sobre fondo oscuro.
- `--lima-texto` `#3d7a1c` — más profundo, **4.9:1**. Es el que usa el wordmark
  sobre fondo claro.

A simple vista se leen como el mismo verde. Si preferís el lima exacto del logo en
el wordmark de la barra, se cambia en una línea de `globals.css`, asumiendo que no
pasa contraste AA.

## Archivos

| Archivo                              | Uso                                          |
| ------------------------------------ | -------------------------------------------- |
| `public/logo-red-eco.svg`            | Lockup horizontal con lemas. 660 × 200       |
| `public/logo-red-eco-blanco.svg`     | Lockup en una tinta, para fondos oscuros     |
| `public/logo-red-eco-marca.svg`      | Solo la marca, sin texto. 200 × 200          |
| `src/app/icon.svg`                   | Favicon: marca simplificada sobre pino       |
| `src/components/MarcaAnillo.tsx`     | La marca en React, con variantes             |
| `src/lib/marca.ts`                   | Geometría, con los cálculos comentados       |
| `referencias/logo-entregado.jpg`     | El original. Fuera de `public/`: no se sirve |

## Falta hacer (requiere Illustrator)

**1. Convertir el texto a curvas.** Los SVG de lockup usan `<text>` con la familia
declarada. En el navegador se ve bien porque las fuentes están cargadas, pero al
abrir el archivo en otro computador o al mandarlo a imprenta, la tipografía se
sustituye. Antes de entregar el logo a terceros: *Texto → Crear contorno*
(`Cmd+Shift+O`).

**2. PNG e ICO.** Falta exportar `apple-touch-icon.png` (180 × 180) y un
`favicon.ico` multi-tamaño para navegadores viejos. Hoy el sitio sirve solo el
SVG, que cubre todo lo moderno.

**3. Área de resguardo y tamaño mínimo.** Mi recomendación: resguardo igual al
radio del anillo (35 unidades del lienzo de 200), mínimo 24 px para la versión
simplificada y 64 px para la completa con libro.

## Si querés que la marca sea más fiel al original

Lo que quedó aproximado y se puede afinar en `src/lib/marca.ts` (todos los números
están comentados):

- Las puntas de flecha del original son un poco más envolventes; las mías salen
  algo más rectas.
- El original tiene una sombra suave bajo el brote que no reproduje: en pantallas
  chicas ensucia más de lo que aporta.
- La hoja dentro de la `O` de `ECO` no está: requiere el wordmark en curvas.
