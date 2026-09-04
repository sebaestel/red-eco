# Fuentes para la imagen social

Satori (el motor que genera la tarjeta de Open Graph) no puede usar las fuentes
que carga `next/font`: necesita el archivo binario.

Dejá acá `Literata-SemiBold.ttf` y la tarjeta social pasa a usar la tipografía de
la marca. El build lo detecta solo, no hay que tocar código.

Descarga: https://fonts.google.com/specimen/Literata → *Get font* → del ZIP,
`static/Literata-SemiBold.ttf`.

Sin el archivo, la tarjeta se genera con la sans por defecto de Satori. Se ve
limpia, pero no es la tipografía correcta.
