import { FeaturedPlacesSection } from "@/components/home/FeaturedPlacesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { MapPreviewSection } from "@/components/home/MapPreviewSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedPlacesSection />
      <MapPreviewSection />
    </>
  );
}
