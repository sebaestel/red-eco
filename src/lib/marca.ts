/**
 * Geometría de la marca RED ECO, en un solo lugar.
 * Lienzo 200×200, centro en (100,100).
 *
 * Reconstruida a partir del logo entregado (referencias/logo-entregado.jpg):
 * anillo de tres flechas con degradado lima→pino, brote de cinco hojas y libro
 * abierto en petróleo. Las puntas van redondeadas, como en el original.
 *
 * El anillo es UNA flecha repetida a 120°:
 *  - cuerpo: arco de radio 70, de 208° a 288°, trazo 15 con extremos redondeados
 *  - punta:  triángulo con base radial a 288° entre r=57 y r=83, vértice 19° más
 *            adelante sobre r=70
 */

export const RADIO_ANILLO = 70;
export const TRAZO_ANILLO = 15;

export const FLECHA_CUERPO = "M38.42 67.13 A 70 70 0 0 1 121.63 33.42";
export const FLECHA_PUNTA = "M127.05 21.20 L145.66 46.20 L118.20 41.68 Z";

export const GIROS = [0, 120, 240] as const;

/**
 * Libro abierto: más ancho y plano que en la versión anterior, para que sea
 * legible bajo el brote. Dos páginas espejadas que nacen del lomo en (100,132).
 */
export const LIBRO_IZQUIERDA =
  "M100 119 C86 111, 70 106, 54 104 L54 120 C70 122, 86 126, 100 132 Z";
export const LIBRO_DERECHA =
  "M100 119 C114 111, 130 106, 146 104 L146 120 C130 122, 114 126, 100 132 Z";

/** Lomo: el filete que une las dos páginas. */
export const LIBRO_LOMO = "M97 119 L103 119 L103 132 L97 132 Z";

export const TALLO = "M100 120 C100 104, 100 88, 100 56";

/** Cinco hojas: dos pares laterales y una central, como el logo. */
export const HOJA_BAJA_IZQUIERDA =
  "M100 108 C86 108, 76 99, 75 87 C89 86, 98 96, 100 108 Z";
export const HOJA_BAJA_DERECHA =
  "M100 100 C114 100, 124 91, 125 79 C111 78, 102 88, 100 100 Z";
export const HOJA_ALTA_IZQUIERDA =
  "M100 86 C89 85, 81 77, 80 66 C91 66, 99 75, 100 86 Z";
export const HOJA_ALTA_DERECHA =
  "M100 79 C111 78, 119 70, 120 59 C109 59, 101 68, 100 79 Z";
export const HOJA_CENTRAL =
  "M100 72 C93 63, 93 51, 100 43 C107 51, 107 63, 100 72 Z";

/**
 * Variante simplificada, para 16–40 px.
 * Sin libro y con dos hojas: a ese tamaño las páginas y las cinco hojas
 * se convierten en una mancha.
 */
export const TALLO_SIMPLE = "M100 130 C100 112, 100 96, 100 66";
export const HOJA_SIMPLE_IZQUIERDA =
  "M100 106 C83 106, 72 94, 71 79 C88 78, 98 90, 100 106 Z";
export const HOJA_SIMPLE_DERECHA =
  "M100 93 C117 93, 128 81, 129 66 C112 65, 102 77, 100 93 Z";
