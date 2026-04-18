import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PlaceGallery } from "@/components/places/PlaceGallery";
import { placesPreview } from "@/data/places-preview";
import { getPlaceBySlug } from "@/lib/places";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return placesPreview.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) {
    return { title: "Place not found" };
  }
  return {
    title: `${place.name} | Travel Journal`,
    description: place.description.slice(0, 160),
  };
}

export default async function PlaceDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) {
    notFound();
  }

  return (
    <div className="pb-24 md:pb-32">
      <div className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
          <p>
            <Link
              href="/places"
              className="text-sm text-stone-500 transition-colors hover:text-stone-800"
            >
              ← Places
            </Link>
          </p>
          <h1 className="mt-8 font-serif text-4xl font-normal tracking-tight text-stone-900 md:text-5xl">
            {place.name}
          </h1>
          <p className="mt-2 text-lg text-stone-500">{place.region}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500">
            <span>{place.year}</span>
            <span className="text-stone-300" aria-hidden>
              ·
            </span>
            <span>{place.season}</span>
            <span className="text-stone-300" aria-hidden>
              ·
            </span>
            <span className="text-stone-600">{place.category}</span>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl md:leading-relaxed">
            {place.description}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-[1200px] px-6 pt-16 md:pt-20">
        <h2 className="sr-only">Photos</h2>
        <PlaceGallery items={place.gallery} placeName={place.name} />
      </section>
    </div>
  );
}
