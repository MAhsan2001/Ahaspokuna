export interface GalleryItem {
  id: string;
  title: string;
  category: "RESORT" | "ROOMS" | "NATURE" | "WEDDINGS" | "EVENTS" | "POOL";
  image: string;
  aspectRatio?: "square" | "tall" | "wide";
  caption?: string;
}

export const galleryCategories = [
  "ALL",
  "RESORT",
  "ROOMS",
  "NATURE",
  "WEDDINGS",
  "EVENTS",
  "POOL"
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Outdoor Swimming Pool & Forest Canopy",
    category: "POOL",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    caption: "The resort's crystal swimming pool surrounded by 25 acres of natural green forestry."
  },
  {
    id: "gal-2",
    title: "Deluxe Eco Villa Veranda",
    category: "ROOMS",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    caption: "Private teak timber deck offering undisturbed views into the tropical forest."
  },
  {
    id: "gal-3",
    title: "25-Acres Forest Sanctuary",
    category: "NATURE",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    caption: "Sunbeams filtering through ancient tropical trees in our private reserve."
  },
  {
    id: "gal-4",
    title: "Outdoor Destination Wedding",
    category: "WEDDINGS",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    caption: "An intimate green wedding celebration set under twinkling forest lights."
  },
  {
    id: "gal-5",
    title: "Forest Cabana Suite Interior",
    category: "ROOMS",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    caption: "Warm timber walls, plush king bed, and eco-friendly craftsmanship."
  },
  {
    id: "gal-6",
    title: "Poolside Sundeck & Loungers",
    category: "POOL",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    caption: "Serene poolside relaxation with complimentary fresh towels and juice."
  },
  {
    id: "gal-7",
    title: "Resort Entrance & Reception Lounge",
    category: "RESORT",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    caption: "Open-air reception pavilion welcoming guests to peaceful Kurunegala wilderness."
  },
  {
    id: "gal-8",
    title: "Garden Banquet Event",
    category: "EVENTS",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    caption: "Special group celebration dining setup under open skies."
  },
  {
    id: "gal-9",
    title: "Tropical Birdlife & Flora",
    category: "NATURE",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    caption: "Endemic birds and colorful butterflies thriving in the protected habitat."
  },
  {
    id: "gal-10",
    title: "Royal Suite Private Jacuzzi",
    category: "ROOMS",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    caption: "Hydro-massage bathtub overlooking panoramic jungle scenery."
  },
  {
    id: "gal-11",
    title: "Nighttime Campfire & Stargazing",
    category: "RESORT",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    caption: "Cozy campfire nights under pristine clear night skies."
  },
  {
    id: "gal-12",
    title: "Corporate Outing Lawn",
    category: "EVENTS",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    caption: "Spacious green lawns ideal for team building, retreats, and private parties."
  }
];
