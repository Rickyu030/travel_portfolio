import { TravelMapLoader } from "@/components/home/TravelMapLoader";

export function MapPreviewSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-12 md:pb-16">
      <div className="border border-[var(--border)] bg-[#faf8f4]/90 p-8 md:p-10 lg:p-12">
        <h2 className="font-serif text-2xl font-normal tracking-tight text-stone-900 md:text-[1.65rem]">
          Map
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-500 md:text-base">
          Drag to pan; scroll or pinch to zoom. Click a marker for a short card
          and a link to that place&apos;s gallery.
        </p>
        <div className="mt-10 overflow-hidden rounded-sm border border-[var(--border)] bg-stone-50/40">
          <TravelMapLoader />
        </div>
      </div>
    </section>
  );
}
