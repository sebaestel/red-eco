# Imágenes del sitio

## Lo primero: un problema con la foto de portada

La imagen actual (`src/imagenes/mesa-clasificacion-patio.jpg`) es generada por IA
y **tiene texto visible con errores**. En el archivo original se lee:

- El encabezado de la planilla dice `REGISTRO DE CATE&OGACIÓN DE RESIDUOS DE
  BIOCONSTRUCCIÓN` — "catalogación" está mal escrito.
- La etiqueta `CARTÓN/PAPEL` aparece dos veces, y `VIDRIO` también.
- Las filas de la planilla son garabatos, no texto.

En el sitio el velo oscuro tapa buena parte de eso, pero un visitante que mire
con atención lo va a notar. En un sitio cuyo argumento central es el rigor y la
medición, eso resta credibilidad justo donde más importa.

Tres caminos, en orden de preferencia:

1. **Fotografía real** en un establecimiento donde RED ECO ya trabajó. Es lo que
   más suma: la propuesta se sostiene en impacto verificable, y una foto real lo
   demuestra. Requiere autorización de imagen de los apoderados.
2. **Regenerar la imagen sin texto legible.** Al prompt agregarle: *"sin texto,
   sin letreros, sin etiquetas, sin escritura visible"*. La composición actual
   funciona muy bien; lo único que hay que sacar es el texto.
3. **Dejarla como está**, asumiendo el riesgo. Si es una landing provisoria
   mientras se consigue material propio, es defendible.

## Cómo reemplazar la foto de portada

Dejá el archivo en `src/imagenes/` y actualizá el import en
`src/components/Hero.tsx`. Se importa (no va en `public/`) para que Next genere el
`blurDataURL` del placeholder automáticamente.

```
src/imagenes/tu-foto.jpg   →   import foto from "@/imagenes/tu-foto.jpg";
```

Actualizá también el `alt`: hoy describe la escena de la imagen actual.

### Qué necesita la foto de portada

| Requisito     | Valor                                                          |
| ------------- | -------------------------------------------------------------- |
| Proporción    | 16:9 o más ancha. Ideal 2752 × 1536 px                         |
| Peso          | Cualquiera; Next la optimiza a AVIF/WebP y sirve varios tamaños |
| Composición   | **El tercio izquierdo debe poder taparse.** Ahí va el titular   |
| Luz           | Luz de día, cálida. Se le aplica un velo verde oscuro encima    |
| Qué mostrar   | Manos trabajando, materiales separados, registro o pesaje       |
| Qué evitar    | Texto legible, logos de terceros, caras de menores identificables sin autorización |

El velo cambia según el ancho: en vertical es de abajo hacia arriba, en horizontal
es diagonal (`src/app/globals.css`, sección 8). Si la nueva foto tiene el sujeto a
la izquierda en vez de a la derecha, hay que invertir el ángulo de `100deg` a
`80deg` y ajustar `object-position`.

## Fotografías que faltan

El sitio hoy funciona con una sola fotografía. Estas cuatro lo mejorarían de forma
concreta, en orden de impacto:

### 1. Retrato de brigada ambiental — sección Método

Estudiantes con la credencial o el peto de la brigada, en el patio, mirando a
cámara. Sirve para romper la banda oscura del método a la mitad y para darle cara
al programa.

- Proporción 4:5 (vertical) o 1:1
- Iría junto a las etapas 03/04
- Prompt si se genera: *"retrato grupal de cinco estudiantes de secundaria
  chilenos con petos de brigada ambiental en el patio de su colegio, luz de tarde,
  mirando a cámara, sin texto ni letreros visibles, fotografía documental"*

### 2. Detalle del pesaje — sección Método, etapa 04

Un primer plano de una balanza colgante con una bolsa de material, o de una mano
anotando kilos. Es la imagen que prueba el diferenciador del negocio.

- Proporción 3:2
- Prompt: *"primer plano de una balanza colgante pesando una bolsa de botellas
  plásticas compactadas en el patio de una escuela, manos con guantes, luz
  natural, sin texto visible, fotografía documental"*

### 3. Antes y después de un punto de acopio — sección Programa

Dos fotos del mismo rincón: contenedor único desbordado vs. punto limpio con
señalética. Se pueden mostrar con un comparador o simplemente lado a lado.

- Dos fotos, misma proporción, **mismo encuadre y misma altura de cámara**
- Es la imagen más persuasiva posible para un sostenedor

### 4. Docente en aula — sección Empresas

Una docente usando material del programa con su curso. Le habla al comprador ESG:
muestra que la inversión llega al aula y no solo al patio.

- Proporción 16:9
- Prompt: *"docente chilena mostrando material de compostaje a su curso en una
  sala de clases luminosa, estudiantes atentos, sin texto ni pizarrón escrito,
  fotografía documental"*

## Gráficos: no hacen falta imágenes

Todo lo demás del sitio es vectorial y se dibuja en el navegador. No hay que
producir ni mantener archivos:

- **Marca RED ECO** — `src/components/MarcaAnillo.tsx`, geometría en
  `src/lib/marca.ts`. Se adapta al color del contenedor y tiene variante
  simplificada para tamaños chicos.
- **Iconos del programa** — `src/components/Iconos.tsx`, seis iconos de trazo que
  heredan color y grosor.
- **Imagen social (Open Graph)** — `src/app/opengraph-image.tsx` la genera en el
  build a 1200 × 630. Si cambia el titular, la tarjeta se actualiza sola.
- **Favicon** — `src/app/icon.svg`.

## El video del concurso

La sección `#concurso` reserva un marco 16:9 para el video. Mientras no haya
video muestra un marcador, así el diseño no se mueve cuando llegue.

Recomendaciones para ese video:

- **Duración** bajo 90 segundos. Es un anuncio, no una charla.
- **Subtítulos incrustados**: mucha gente lo va a ver sin audio.
- **Primer fotograma legible**: es la miniatura que se ve antes de reproducir.
- **Sin música con derechos** si va a estar en YouTube.

Para publicarlo, ver la sección "El video del concurso" del `README.md`: es
cambiar una línea en `src/lib/contenido.ts`.

## Autorización de imagen

Para fotos reales con menores en establecimientos chilenos hace falta
autorización escrita de los apoderados y del establecimiento, indicando uso en
sitio web y redes sociales. Conviene tenerla archivada antes de publicar: es un
requisito legal y además lo primero que va a preguntar un sostenedor.
