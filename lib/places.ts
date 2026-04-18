import { placesPreview } from "@/data/places-preview";

export function getPlaceBySlug(slug: string) {
  const normalized = slug.toLowerCase();
  return placesPreview.find((p) => p.slug.toLowerCase() === normalized);
}

export function getAllPlaceSlugs(): string[] {
  return placesPreview.map((p) => p.slug);
}
