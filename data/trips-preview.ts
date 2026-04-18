/**
 * Static preview data for /trips.
 * Later: replace with MDX or a data layer. For hero images, add files under
 * public/images/trips/ and set imageSrc to "/images/trips/your-file.jpg".
 */
export type TripPreview = {
  id: string;
  title: string;
  when: string;
  season: string;
  destinations: string;
  excerpt: string;
  imageSrc?: string | null;
};

export const tripsPreview: TripPreview[] = [
  {
    id: "japan-spring",
    title: "Two weeks along the old capitals",
    when: "March–April 2019",
    season: "Spring",
    destinations: "Kyoto · Nara · Osaka",
    excerpt:
      "I went for cherry blossoms and stayed for the quiet: temple gates at dawn, coffee in narrow streets, and the feeling that the city was teaching me how to move more slowly.",
    imageSrc: null,
  },
  {
    id: "iberia-coast",
    title: "Atlantic light and tiled staircases",
    when: "June 2022",
    season: "Summer",
    destinations: "Lisbon · Porto · Galicia",
    excerpt:
      "A trip stitched together by ferries, coastal trains, and evenings on terraces where the light refused to leave. I wrote more in margins than in notebooks.",
    imageSrc: null,
  },
  {
    id: "iceland-ring",
    title: "Wind, water, and one long circle",
    when: "February 2018",
    season: "Winter",
    destinations: "Reykjavík · South coast · Vík",
    excerpt:
      "Cold that clarifies. Days short enough to feel precious. I learned to stop the car for every improbable view—and to trust the weather would change before I did.",
    imageSrc: null,
  },
  {
    id: "morocco-weeks",
    title: "Courtyards, calls to prayer, desert air",
    when: "October 2023",
    season: "Autumn",
    destinations: "Marrakech · Atlas day trip",
    excerpt:
      "Spice in the air, geometry in the tilework, and the sense that history was not behind glass but in the room with you. This journal entry is still half sketches.",
    imageSrc: null,
  },
];
