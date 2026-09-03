import type { MetadataRoute } from "next";
import { sitio } from "@/lib/sitio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${sitio.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
