import { TripPreviewBlock } from "@/components/trips/TripPreviewBlock";
import { tripsPreview } from "@/data/trips-preview";

export default function TripsPage() {
  return (
    <div className="pb-24 md:pb-32">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <h1 className="font-serif text-4xl font-normal tracking-tight text-stone-900 md:text-5xl">
            Trips
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl md:leading-relaxed">
            Longer arcs than single places: departures, connections, and the
            narrative thread between them. Each block below stands in for a trip
            journal—image up top, dates and route in the middle, and a short
            excerpt where a full story will go later.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pt-16 md:pt-20">
        <div className="flex flex-col gap-20 md:gap-24">
          {tripsPreview.map((trip) => (
            <TripPreviewBlock key={trip.id} trip={trip} />
          ))}
        </div>
      </section>
    </div>
  );
}
