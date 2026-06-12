import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://white-frontend-3232xdvre-mofuhidys-projects.vercel.app/sitemap.xml",
  };
}
