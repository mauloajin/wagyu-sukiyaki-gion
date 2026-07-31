import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://wagyu-sukiyaki-gion.vercel.app/", lastModified: new Date("2026-07-31"), changeFrequency: "weekly", priority: 1 }]; }
