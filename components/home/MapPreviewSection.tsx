import { TravelMapLoader } from "@/components/home/TravelMapLoader";

export function MapPreviewSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-8 md:pb-12">
      <div className="border border-[var(--border)] bg-white/30 p-10 md:p-14 lg:p-16">
        <h2 className="font-serif text-2xl font-normal tracking-tight text-stone-900 md:text-3xl">
          Map
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-600 md:text-base">
          An interactive map so you can see where these trips sit on the globe. Tap a
          marker to open a short card and jump to that place&apos;s gallery.
        </p>
        <div className="mt-10 overflow-hidden rounded-sm border border-[var(--border)] bg-stone-50/40">
          <TravelMapLoader />
        </div>
      </div>
    </section>
  );
}
