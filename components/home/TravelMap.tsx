"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import { placesPreview, type PlacePreview } from "@/data/places-preview";

import "mapbox-gl/dist/mapbox-gl.css";

/**
 * Map style URL. Default presets (swap the path after /mapbox/):
 * - streets-v12 — full-color roads, parks, water (good for travel sites)
 * - light-v11 — minimal, near monochrome
 * - outdoors-v12 — terrain / greens, terrain
 * - satellite-streets-v12 — imagery + labels
 * Custom: Mapbox Studio (https://studio.mapbox.com/) → open or duplicate a style →
 * Share → copy the "Style URL" and paste it here as `style: "mapbox://styles/..."`.
 */
const MAP_STYLE = "mapbox://styles/mapbox/streets-v12";

/** Mini photo wall: 2×2 tiles @ 32px; if &gt;4 photos, pick 4 at random */
const WALL_SIZE_PX = 32;
const WALL_GAP_PX = 3;

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Mapbox / GeoJSON order: [lng, lat] */
function formatCoordinates([lng, lat]: [number, number]): string {
  const ns = lat >= 0 ? "N" : "S";
  const ew = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(1)}° ${ns}, ${Math.abs(lng).toFixed(1)}° ${ew}`;
}

function shuffle<T>(items: readonly T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function photosForWall(g: PlacePreview["gallery"]): PlacePreview["gallery"] {
  if (g.length === 0) return [];
  if (g.length <= 4) return g;
  return shuffle(g).slice(0, 4);
}

function buildPopupHtml(place: PlacePreview) {
  const href = `/places/${encodeURIComponent(place.slug)}`;
  const wallPhotos = photosForWall(place.gallery);
  const n = wallPhotos.length;

  let wallInner = "";
  let wallClass = "travel-map-popup-card__wall";

  if (n === 0) {
    wallClass += " travel-map-popup-card__wall--empty";
    wallInner = "No photos";
  } else {
    for (let i = 0; i < n; i++) {
      const src = escapeHtml(wallPhotos[i].src);
      wallInner += `<span class="travel-map-popup-card__tile"><img src="${src}" alt="" width="${WALL_SIZE_PX}" height="${WALL_SIZE_PX}" loading="lazy" decoding="async" /></span>`;
    }
    const empty = 4 - n;
    for (let e = 0; e < empty; e++) {
      wallInner += `<span class="travel-map-popup-card__tile travel-map-popup-card__tile--filler" aria-hidden="true"></span>`;
    }
  }

  const coordsLine = formatCoordinates(place.coordinates);

  return `
    <a href="${href}" class="travel-map-popup-card-link">
      <div class="travel-map-popup-card">
        <div class="travel-map-popup-card__row">
          <div class="travel-map-popup-card__text">
            <strong class="travel-map-popup-card__title">${escapeHtml(place.name)}</strong>
            <p class="travel-map-popup-card__region">${escapeHtml(place.region)}</p>
            <p class="travel-map-popup-card__coords">${escapeHtml(coordsLine)}</p>
          </div>
          <div class="${wallClass}" style="--wall-size:${WALL_SIZE_PX}px;--wall-gap:${WALL_GAP_PX}px">${wallInner}</div>
        </div>
      </div>
    </a>
  `;
}

export default function TravelMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  useEffect(() => {
    if (!token || !containerRef.current) return;

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: MAP_STYLE,
      center: [0, 20],
      zoom: 1.2,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    mapRef.current = map;

    const bounds = new mapboxgl.LngLatBounds();

    placesPreview.forEach((place) => {
      bounds.extend(place.coordinates);

      const popup = new mapboxgl.Popup({
        offset: 12,
        closeButton: true,
        maxWidth: "248px",
        className: "travel-map-popup travel-map-popup--compact",
      }).setHTML(buildPopupHtml(place));

      new mapboxgl.Marker({ color: "#292524" })
        .setLngLat(place.coordinates)
        .setPopup(popup)
        .addTo(map);
    });

    map.fitBounds(bounds, { padding: 72, maxZoom: 5 });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [token]);

  if (!token) {
    return (
      <div className="flex min-h-[380px] flex-col items-center justify-center gap-2 border border-dashed border-stone-300 bg-stone-50/80 px-6 py-12 text-center text-sm text-stone-500 md:min-h-[420px]">
        <p>
          Add{" "}
          <code className="rounded bg-stone-200/80 px-1.5 py-0.5 font-mono text-[13px] text-stone-700">
            NEXT_PUBLIC_MAPBOX_TOKEN
          </code>{" "}
          to{" "}
          <code className="rounded bg-stone-200/80 px-1.5 py-0.5 font-mono text-[13px] text-stone-700">
            .env.local
          </code>{" "}
          to load the map.
        </p>
        <p className="max-w-md text-xs text-stone-400">
          Copy <span className="font-mono">.env.example</span> if needed. Restart the dev server after
          saving.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-[380px] w-full overflow-hidden rounded-sm md:min-h-[420px]"
      role="region"
      aria-label="Map of visited places"
    />
  );
}
