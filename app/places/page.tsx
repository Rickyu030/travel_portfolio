import { PlacePreviewCard } from "@/components/places/PlacePreviewCard";
import { placesPreview } from "@/data/places-preview";

export default function PlacesPage() {
  return (
    <div className="pb-24 md:pb-32">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <h1 className="font-serif text-4xl font-normal tracking-tight text-stone-900 md:text-5xl">
            Places
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl md:leading-relaxed">
            A running catalog of cities and landscapes—anchors for stories that
            will eventually live on their own pages. For now, this grid is a
            layout rehearsal: where photographs will sit, how titles breathe,
            and how much room each place is allowed to take.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pt-16 md:pt-20">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {placesPreview.map((place) => (
            <li key={place.slug}>
              <PlacePreviewCard place={place} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
