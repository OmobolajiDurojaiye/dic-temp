import { MetadataRoute } from "next";
import { FIRM_INFO } from "@/data/firmData";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${FIRM_INFO.siteUrl}/sitemap.xml`,
  };
}
