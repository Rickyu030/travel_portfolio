import Image from "next/image";

import type { TripPreview } from "@/data/trips-preview";

type TripPreviewBlockProps = {
  trip: TripPreview;
};

export function TripPreviewBlock({ trip }: TripPreviewBlockProps) {
  return (
    <article className="border-b border-[var(--border)] pb-16 last:border-b-0 last:pb-0 md:pb-20">
      <div className="relative aspect-[16/9] w-full overflow-hidden border border-[var(--border)] bg-stone-100 md:aspect-[21/9]">
        {trip.imageSrc ? (
          <Image
            src={trip.imageSrc}
            alt={trip.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-200/90 via-stone-100 to-stone-50"
            aria-hidden
          >
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-stone-400">
              Trip image
            </span>
          </div>
        )}
      </div>

      <div className="mt-8 max-w-3xl md:mt-10">
        <p className="text-sm text-stone-500">
          {trip.when}
          <span className="text-stone-300"> · </span>
          {trip.season}
        </p>
        <h2 className="mt-3 font-serif text-2xl font-normal leading-snug tracking-tight text-stone-900 md:text-3xl md:leading-snug">
          {trip.title}
        </h2>
        <p className="mt-3 text-sm font-medium uppercase tracking-wide text-stone-600">
          {trip.destinations}
        </p>
        <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg md:leading-relaxed">
          {trip.excerpt}
        </p>
      </div>
    </article>
  );
}
