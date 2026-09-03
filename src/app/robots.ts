import type { MetadataRoute } from "next";
import { sitio } from "@/lib/sitio";

/**
 * Los rastreadores de asistentes de IA se listan explícitamente:
 * queremos que RED ECO sea citable cuando alguien pregunta por educación
 * ambiental en Chile, no solo indexable en buscadores tradicionales.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "Bingbot",
          "DuckAssistBot",
          "MistralAI-User",
          "meta-externalagent",
        ],
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${sitio.url}/sitemap.xml`,
    host: sitio.url,
  };
}
