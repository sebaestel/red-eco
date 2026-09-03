import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Archivo, DM_Mono, Literata } from "next/font/google";
import DatosEstructurados from "@/components/DatosEstructurados";
import { sitio } from "@/lib/sitio";
import "./globals.css";

/* Literata: cara de lectura, con ADN de libro de texto. Da el tono institucional. */
const display = Literata({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--fuente-display",
});

/* Archivo: grotesca de señalética, sólida en textos largos en español. */
const cuerpo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--fuente-cuerpo",
});

/* DM Mono: solo para rótulos y datos. Es la voz del registro de medición. */
const dato = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--fuente-dato",
});

export const metadata: Metadata = {
  metadataBase: new URL(sitio.url),
  title: {
    default: `${sitio.nombre} — ${sitio.lema}`,
    template: `%s — ${sitio.nombre}`,
  },
  description: sitio.descripcion,
  applicationName: sitio.nombre,
  keywords: [
    "educación ambiental Chile",
    "economía circular escuelas",
    "programa EcoEscuela",
    "reciclaje en colegios",
    "compostaje escolar",
    "valorización de residuos",
    "brigadas ambientales",
    "ESG educación",
    "sostenibilidad escolar Chile",
  ],
  authors: [{ name: sitio.nombre, url: sitio.url }],
  creator: sitio.nombre,
  publisher: sitio.nombre,
  category: "Educación ambiental",
  alternates: {
    canonical: "/",
    languages: { "es-CL": "/", es: "/" },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: sitio.url,
    siteName: sitio.nombre,
    title: `${sitio.nombre} — ${sitio.lema}`,
    description: sitio.descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: `${sitio.nombre} — ${sitio.lema}`,
    description: sitio.descripcion,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Los iconos los resuelve Next desde src/app/icon.svg.
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f1" },
    { media: "(prefers-color-scheme: dark)", color: "#10231a" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${display.variable} ${cuerpo.variable} ${dato.variable}`}
    >
      <body>
        <a className="salto-contenido" href="#inicio">
          Saltar al contenido
        </a>
        {children}
        <DatosEstructurados />
      </body>
    </html>
  );
}
