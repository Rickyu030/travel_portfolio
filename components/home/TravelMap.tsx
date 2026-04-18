"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import { placesPreview } from "@/data/places-preview";

import "mapbox-gl/dist/mapbox-gl.css";

/**
 * Map style URL. Default presets (swap the path after /mapbox/):
 * - streets-v12 — full-color roads, parks, water (good for travel sites)
 * - light-v11 — minimal, near monochrome
 * - outdoors-v12 — terrain / greens stronger
 * - satellite-streets-v12 — imagery + labels
 * Custom: Mapbox Studio (https://studio.mapbox.com/) → open or duplicate a style →
 * Share → copy the "Style URL" and paste it here as `style: "mapbox://styles/..."`.
 */
const MAP_STYLE = "mapbox://styles/mapbox/streets-v12";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

      const popupHtml = `
        <div style="font-family: system-ui, sans-serif; min-width: 148px; padding: 2px 0;">
          <strong style="font-size: 15px; font-weight: 500; color: #1c1917; letter-spacing: -0.02em;">${escapeHtml(place.name)}</strong>
          <p style="margin: 6px 0 10px; font-size: 13px; color: #78716c; line-height: 1.4;">${escapeHtml(place.region)}</p>
          <a href="/places/${encodeURIComponent(place.slug)}" style="font-size: 13px; color: #57534e; text-decoration: underline; text-underline-offset: 3px;">View place</a>
        </div>
      `;

      const popup = new mapboxgl.Popup({
        offset: 14,
        closeButton: true,
        maxWidth: "240px",
      }).setHTML(popupHtml);

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
