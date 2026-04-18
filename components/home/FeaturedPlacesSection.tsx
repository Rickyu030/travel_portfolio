import Link from "next/link";

import { placesPreview } from "@/data/places-preview";

/** Short lines for the home grid; keyed by slug so it stays in sync with /places data */
const HOME_TEASERS: Record<string, string> = {
  berlin:
    "Museums and memory—layers of history, nights that feel wide open.",
  paris:
    "Streets made for wandering, light on stone, and the habit of slowing down.",
  switzerland:
    "Peaks and lakes, trains on the slope, and air that tastes clean.",
  "san-francisco":
    "Fog on the bridges, hills that fold the horizon, and light in every alley.",
  "death-valley":
    "Heat that reshapes distance—salt flats and silence you can feel in your chest.",
  miami:
    "Ocean air and neon, palm shadows on pastel walls, nights that start early.",
};

export function FeaturedPlacesSection() {
  return (
    <section className="border-t border-[var(--border)] bg-white/40">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-2xl font-normal tracking-tight text-stone-900 md:text-3xl">
            Featured places
          </h2>
          <p className="max-w-md text-sm text-stone-500 md:text-right">
            Stops from my recent travels—each links to a photo gallery.{" "}
            <Link
              href="/places"
              className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900"
            >
              View all places
            </Link>
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {placesPreview.map((place) => (
            <li key={place.slug}>
              <Link
                href={`/places/${place.slug}`}
                className="group block outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                <article className="flex h-full flex-col border border-[var(--border)] bg-[var(--background)] p-6 transition-shadow group-hover:shadow-sm md:p-8">
                  <h3 className="font-serif text-xl text-stone-900">
                    {place.name}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">{place.region}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
                    {HOME_TEASERS[place.slug] ?? place.description}
                  </p>
                  <p className="mt-6 text-xs font-medium uppercase tracking-wide text-stone-400">
                    Open gallery
                  </p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
