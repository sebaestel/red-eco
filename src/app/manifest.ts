import type { MetadataRoute } from "next";
import { sitio } from "@/lib/sitio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: sitio.nombreLargo,
    short_name: sitio.nombre,
    description: sitio.descripcion,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f7f1",
    theme_color: "#1f6b45",
    lang: "es-CL",
    icons: [
      {
        src: "/logo-red-eco-marca.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
