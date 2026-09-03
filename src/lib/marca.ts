/**
 * Geometría de la marca, en un solo lugar.
 * Todo está calculado sobre un lienzo de 200×200 con centro en (100,100).
 *
 * El anillo es UNA flecha repetida a 120°. La flecha son dos piezas:
 *  - cuerpo: arco de radio 72, de 205° a 291°, trazo 13
 *  - punta: triángulo cuya base es la línea radial a 291° entre r=61 y r=83,
 *           con el vértice 18° más adelante sobre el mismo radio
 * Base 22 y largo 22: la punta queda casi equilátera, que es lo que la hace
 * legible sin verse como una espina.
 */

export const RADIO_ANILLO = 72;
export const TRAZO_ANILLO = 13;

export const FLECHA_CUERPO = "M34.75 69.57 A 72 72 0 0 1 125.80 32.78";
export const FLECHA_PUNTA = "M129.75 22.51 L145.31 44.05 L121.86 43.05 Z";

export const GIROS = [0, 120, 240] as const;

/** Libro abierto: dos páginas espejadas que nacen del lomo en (100,130). */
export const LIBRO_IZQUIERDA =
  "M100 116 C88 108, 74 103, 60 101 L60 118 C74 120, 88 124, 100 130 Z";
export const LIBRO_DERECHA =
  "M100 116 C112 108, 126 103, 140 101 L140 118 C126 120, 112 124, 100 130 Z";

export const TALLO = "M100 116 C100 102, 100 88, 100 62";
export const HOJA_IZQUIERDA = "M100 98 C88 98, 80 90, 79 80 C90 79, 99 87, 100 98 Z";
export const HOJA_DERECHA = "M100 89 C112 89, 120 81, 121 71 C110 70, 101 78, 100 89 Z";
export const HOJA_CENTRAL = "M100 74 C94 66, 94 56, 100 49 C106 56, 106 66, 100 74 Z";

/**
 * Variante simplificada, para 16–40 px.
 * Sin libro y con dos hojas: a ese tamaño las páginas y la tercera hoja
 * se convierten en una mancha.
 */
export const TALLO_SIMPLE = "M100 128 C100 112, 100 98, 100 70";
export const HOJA_SIMPLE_IZQUIERDA =
  "M100 104 C84 104, 74 93, 73 79 C89 78, 99 90, 100 104 Z";
export const HOJA_SIMPLE_DERECHA =
  "M100 92 C116 92, 126 81, 127 67 C111 66, 101 78, 100 92 Z";
