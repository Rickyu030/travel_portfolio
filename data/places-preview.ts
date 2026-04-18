/**
 * Static data for /places and /places/[slug].
 * Later: replace with MDX or CMS. Images live under public/images/places/.
 */
export type PlaceGalleryItem = {
  src: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type PlacePreview = {
  id: string;
  /** URL segment: /places/<slug> */
  slug: string;
  name: string;
  region: string;
  description: string;
  year: string;
  season: string;
  category: string;
  /** Cover image for cards; often matches the first gallery image */
  imageSrc?: string | null;
  /** Mapbox: [lng, lat] */
  coordinates: [number, number];
  gallery: PlaceGalleryItem[];
};

const base = "/images/places";

export const placesPreview: PlacePreview[] = [
  {
    id: "Berlin",
    slug: "berlin",
    name: "Berlin",
    region: "Berlin",
    description:
      "Berlin is a city of history and culture. It is a city of museums and art. It is a city of music and dance. It is a city of food and drink. It is a city of people and life.",
    year: "2025",
    season: "Spring",
    category: "Cities",
    imageSrc: `${base}/Berlin/_DSC1439.jpg`,
    coordinates: [13.405, 52.52],
    gallery: [
      { src: `${base}/Berlin/_DSC1429.jpg`, caption: "Opening the walk—light on stone and rail." },
      { src: `${base}/Berlin/bike.jpg`, caption: "City rhythm—two wheels and winter light." },
      { src: `${base}/Berlin/_DSC1439.jpg`, caption: "The cover frame: scale and rhythm of the street." },
      { src: `${base}/Berlin/_DSC1472.jpg` },
      { src: `${base}/Berlin/_DSC1483.jpg` },
      { src: `${base}/Berlin/_DSC1487.jpg` },
      { src: `${base}/Berlin/_DSC1509.jpg` },
    ],
  },
  {
    id: "Paris",
    slug: "paris",
    name: "Paris",
    region: "Paris",
    description:
      "Paris is a city of love and romance. It is a city of fashion and art. It is a city of music and dance. It is a city of food and drink. It is a city of people and life.",
    year: "2025",
    season: "Spring",
    category: "Cities",
    imageSrc: `${base}/Paris/_DSC2389.jpg`,
    coordinates: [2.3522, 48.8566],
    gallery: [
      { src: `${base}/Paris/_DSC2108.jpg` },
      { src: `${base}/Paris/_DSC2175.jpg` },
      { src: `${base}/Paris/_DSC2318.jpg` },
      { src: `${base}/Paris/_DSC2362.JPG` },
      { src: `${base}/Paris/_DSC2389.jpg`, caption: "A pause where the city thins into gold." },
      { src: `${base}/Paris/_DSC2440.jpg` },
    ],
  },
  {
    id: "Switzerland",
    slug: "switzerland",
    name: "Switzerland",
    region: "Switzerland",
    description:
      "Switzerland is a country of mountains and lakes. It is a country of cheese and chocolate. It is a country of music and dance. It is a country of food and drink. It is a country of people and life.",
    year: "2025",
    season: "Spring",
    category: "Countries",
    imageSrc: `${base}/Switzerland/_DSC2626.jpg`,
    coordinates: [8.2275, 46.8182],
    gallery: [
      { src: `${base}/Switzerland/_DSC2626.jpg`, caption: "First sight of the range—air thin and clear." },
      { src: `${base}/Switzerland/_DSC2627.jpg` },
      { src: `${base}/Switzerland/_DSC2720.jpg` },
      { src: `${base}/Switzerland/_DSC2836.jpg` },
      { src: `${base}/Switzerland/_DSC2895.jpg` },
      { src: `${base}/Switzerland/_DSC2901.jpg` },
    ],
  },
  {
    id: "SanFrancisco",
    slug: "san-francisco",
    name: "San Francisco",
    region: "California, USA",
    description:
      "Fog on the bridges, hills that fold the horizon, and light that turns every alley into a frame. A city that feels like walking through someone else’s favorite song.",
    year: "2025",
    season: "Spring",
    category: "Cities",
    imageSrc: `${base}/Sanfran/_DSC4145.JPG`,
    coordinates: [-122.4194, 37.7749],
    gallery: [
      { src: `${base}/Sanfran/_DSC4145.JPG`, caption: "First light on the water—gold against the grey." },
      { src: `${base}/Sanfran/_DSC4383.JPG` },
      { src: `${base}/Sanfran/_DSC4393.JPG` },
      { src: `${base}/Sanfran/_DSC4454.JPG` },
      { src: `${base}/Sanfran/_DSC4464.JPG` },
      { src: `${base}/Sanfran/_DSC4479.JPG` },
    ],
  },
  {
    id: "DeathValley",
    slug: "death-valley",
    name: "Death Valley",
    region: "California, USA",
    description:
      "Heat that reshapes distance, salt flats that read like paper, and silence wide enough to hear your own pulse. A landscape that refuses to hurry.",
    year: "2025",
    season: "Spring",
    category: "Desert",
    imageSrc: `${base}/Death Valley/_DSC3359.png`,
    coordinates: [-116.9325, 36.5323],
    gallery: [
      { src: `${base}/Death Valley/_DSC3359.png`, caption: "Opening onto emptiness—color where you expected none." },
      { src: `${base}/Death Valley/_DSC3515.png` },
      { src: `${base}/Death Valley/_DSC3531.JPG` },
      { src: `${base}/Death Valley/_DSC3587.png` },
      { src: `${base}/Death Valley/_DSC3672.png` },
    ],
  },
  {
    id: "Miami",
    slug: "miami",
    name: "Miami",
    region: "Florida, USA",
    description:
      "Ocean air mixed with neon, palm shadows on pastel walls, and nights that feel like they start before the sun finishes setting. Heat you can wear like a shirt.",
    year: "2025",
    season: "Spring",
    category: "Cities",
    imageSrc: `${base}/Miami/56a45623c0228d3a45ef517976f0a5df.jpg`,
    coordinates: [-80.1918, 25.7617],
    gallery: [
      {
        src: `${base}/Miami/56a45623c0228d3a45ef517976f0a5df.jpg`,
        caption: "Cover frame—salt, color, and open sky.",
      },
      { src: `${base}/Miami/1152b9bc9bde57b0a8d802b1f4369c09.jpg` },
      { src: `${base}/Miami/8bb30cb9982b61443ca945b3f4561496.jpg` },
      { src: `${base}/Miami/941b1203e364bbf5e3b44af3ac95fddb.jpg` },
      { src: `${base}/Miami/_DSC4614.jpg` },
      { src: `${base}/Miami/_DSC5047.JPG` },
      { src: `${base}/Miami/_DSC5071.png` },
      { src: `${base}/Miami/_DSC5086.png` },
      { src: `${base}/Miami/_DSC5094.JPG` },
    ],
  },
];
