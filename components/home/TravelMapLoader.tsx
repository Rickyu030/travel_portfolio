"use client";

import dynamic from "next/dynamic";

const TravelMap = dynamic(() => import("@/components/home/TravelMap"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[380px] items-center justify-center border border-[var(--border)] bg-stone-50/50 text-sm text-stone-400 md:min-h-[420px]">
      Loading map…
    </div>
  ),
});

export function TravelMapLoader() {
  return <TravelMap />;
}
