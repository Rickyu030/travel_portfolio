import Image from "next/image";

import type { PlaceGalleryItem } from "@/data/places-preview";

const defaultWidth = 2000;
const defaultHeight = 1333;

type PlaceGalleryProps = {
  items: PlaceGalleryItem[];
  placeName: string;
};

export function PlaceGallery({ items, placeName }: PlaceGalleryProps) {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {items.map((item, index) => (
        <figure key={`${item.src}-${index}`} className="m-0">
          <div className="w-full overflow-hidden border border-[var(--border)] bg-stone-100">
            <Image
              src={item.src}
              alt={item.alt ?? `${placeName} — photo ${index + 1}`}
              width={item.width ?? defaultWidth}
              height={item.height ?? defaultHeight}
              className="h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
          {item.caption ? (
            <figcaption className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-500 md:mt-5">
              {item.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
