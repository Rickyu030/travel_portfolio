import Image from "next/image";
import Link from "next/link";

import type { PlacePreview } from "@/data/places-preview";

type PlacePreviewCardProps = {
  place: PlacePreview;
};

export function PlacePreviewCard({ place }: PlacePreviewCardProps) {
  return (
    <Link
      href={`/places/${place.slug}`}
      className="group block outline-none transition-[box-shadow,transform] focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
    >
      <article className="flex h-full flex-col border border-[var(--border)] bg-[var(--background)] transition-shadow group-hover:shadow-sm">
        <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[var(--border)] bg-stone-100">
          {place.imageSrc ? (
            <Image
              src={place.imageSrc}
              alt={`${place.name}, ${place.region}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200/80"
              aria-hidden
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
                Photo
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500">
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

          <h2 className="mt-4 font-serif text-xl font-normal tracking-tight text-stone-900 md:text-[1.35rem]">
            {place.name}
          </h2>
          <p className="mt-1 text-sm text-stone-500">{place.region}</p>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            {place.description}
          </p>
          <p className="mt-6 text-xs font-medium uppercase tracking-wide text-stone-400">
            View photos
          </p>
        </div>
      </article>
    </Link>
  );
}
