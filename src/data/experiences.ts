export interface Experience {
  id: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  highlights: string[];
  duration?: string;
  suitableFor?: string;
}

export const experiencesData: Experience[] = [
  {
    id: "forest-escape",
    title: "Forest Escape & Nature Walk",
    category: "Nature & Ecology",
    tagline: "Reconnect with untouched 25-acre green wilderness",
    shortDescription: "Immerse yourself in gentle trails through our 25-acre forest preserve. Discover indigenous trees, peaceful clearings, and pristine air.",
    fullDescription: "Ahas Pokuna is built around 25 acres of untamed forest and natural biodiversity. Guests can explore quiet walking paths under dense tree canopies, breathe in crisp unpolluted oxygen, and find peaceful reading nooks tucked away among the trees.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Guided or self-guided nature walks",
      "25 acres of protected flora & fauna",
      "Shaded forest seating & peaceful meditation spots",
      "Fresh mountain breeze & clean air"
    ],
    duration: "1 - 3 Hours",
    suitableFor: "All Guests & Nature Lovers"
  },
  {
    id: "pool-relaxation",
    title: "Outdoor Pool & Oasis Sanctuary",
    category: "Wellness & Leisure",
    tagline: "Unwind in pristine waters surrounded by forest views",
    shortDescription: "Plunge into our sparkling outdoor pool set against a backdrop of towering green foliage and tropical blue skies.",
    fullDescription: "Designed to reflect the natural landscape, our outdoor swimming pool is surrounded by comfortable lounger decks and lush tropical trees. Enjoy a morning dip, afternoon sunbathing, or a refreshing evening swim under stargazed skies.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Crystal-clear swimming pool",
      "Poolside lounger deck with towel service",
      "Surrounded by natural forest trees",
      "Poolside beverages & light snacks"
    ],
    duration: "Flexible",
    suitableFor: "Couples, Families & Solo Travelers"
  },
  {
    id: "bird-watching",
    title: "Bird Watching & Butterfly Tracking",
    category: "Wildlife & Nature",
    tagline: "Discover endemic birds and vibrant tropical butterflies",
    shortDescription: "Listen to the birdsong of Kurunegala's avian species. Spot colorful songbirds, hornbills, and native butterflies in their natural habitat.",
    fullDescription: "With over 25 acres of protected forestland, Ahas Pokuna forms a safe habitat for scores of native bird species and butterflies. Morning hours bring a symphony of bird calls best enjoyed with a warm cup of Ceylon tea.",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Early morning birding sessions",
      "Native butterfly habitat identification",
      "Binoculars and nature guide assistance on request",
      "Quiet photography lookout spots"
    ],
    duration: "1 - 2 Hours",
    suitableFor: "Bird Enthusiasts & Photographers"
  },
  {
    id: "honeymoon-romantic",
    title: "Romantic Getaways & Honeymoons",
    tagline: "Secluded privacy framed by natural beauty",
    category: "Couples & Romance",
    shortDescription: "Create unforgettable memories with private veranda dining, candlelight dinners under stars, and total seclusion.",
    fullDescription: "Designed for couples seeking solitude and romance, Ahas Pokuna provides expansive private distances between villas, bespoke dining setups in garden nooks, and serene atmosphere far removed from city noise.",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Private candlelight dinner arrangements",
      "Veranda breakfast in bed",
      "Intimate forest & pool setting",
      "Special romantic floral arrangements"
    ],
    duration: "Overnight Packages",
    suitableFor: "Honeymooners & Couples"
  },
  {
    id: "weddings-events",
    title: "Destination Weddings & Nature Celebrations",
    category: "Events & Celebrations",
    tagline: "Your Day. Your Story. Your Place.",
    shortDescription: "Host your dream intimate wedding, anniversary, or private outing against the breathtaking canvas of 25 green acres.",
    fullDescription: "From open-air garden ceremonies to elegant evening banquets under fairy lights, our event spaces offer a natural green stage for your milestone events. Our dedicated team manages catering, setup, and guest accommodations.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "25-acre natural venue options",
      "Custom banquet & Sri Lankan buffet menus",
      "Bridal suite & guest villa packages",
      "Dedicated event planning assistance"
    ],
    duration: "Single Day to Multi-Day",
    suitableFor: "Weddings, Private Parties & Corporate Outings"
  },
  {
    id: "family-escape",
    title: "Family Outing & Nature Retreat",
    category: "Family & Groups",
    tagline: "Fun, safe, and enriching outdoor experiences for all ages",
    shortDescription: "Gather the whole family for day outings, poolside relaxation, and outdoor exploration in a secure eco-sanctuary.",
    fullDescription: "Ahas Pokuna provides a safe, welcoming environment for children and parents alike. Families can enjoy swimming, lawn games, guided garden walks, and authentic Sri Lankan family style dining.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Safe enclosed 25-acre sanctuary",
      "Child-friendly pool shallow areas",
      "Spacious family dining arrangements",
      "Day-outing & overnight family packages"
    ],
    duration: "Full Day / Stay",
    suitableFor: "Families & Small Groups"
  }
];
