import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/commande/merci"] },
    sitemap: "https://darzina.vercel.app/sitemap.xml",
  };
}
