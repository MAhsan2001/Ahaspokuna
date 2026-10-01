export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  capacity: {
    adults: number;
    children: number;
    text: string;
  };
  bedType: string;
  sizeSqMters: number;
  featuredImage: string;
  galleryImages: string[];
  facilities: string[];
  highlights: string[];
  priceNote?: string;
  featured?: boolean;
}

export const roomsData: Room[] = [
  {
    id: "deluxe-eco-villa",
    name: "Deluxe Eco Villa",
    tagline: "Framed by Lush Forest & Canopy Views",
    description: "Spacious private villa crafted with natural woods and eco-architectural details. Features a private veranda with panoramic vistas of the 25-acre natural reserve.",
    longDescription: "Our Deluxe Eco Villa is designed for guests who desire seamless harmony between indoor luxury and Sri Lanka's tropical wilderness. Step out onto your private timber veranda to listen to bird calls or relax inside with modern air-conditioned comfort, natural linen bedding, and elegant teak furnishings.",
    capacity: {
      adults: 2,
      children: 1,
      text: "2 Adults, 1 Child"
    },
    bedType: "1 King Bed",
    sizeSqMters: 65,
    featuredImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      "Air Conditioning",
      "Private Veranda & Sunbed",
      "Ensuite Rain Shower",
      "Complimentary High-Speed Wi-Fi",
      "Minibar & Safety Box",
      "Tea & Coffee Craft Station",
      "Outdoor Pool Access",
      "24-Hour Room Service"
    ],
    highlights: [
      "Private Forest-Facing Deck",
      "Handcrafted Teak Architecture",
      "Quiet Secluded Location"
    ],
    priceNote: "Inquire for Direct Seasonal Rates",
    featured: true
  },
  {
    id: "forest-cabana-suite",
    name: "Forest Cabana Suite",
    tagline: "Intimate Retreat Under Nature's Canopy",
    description: "Nestled among ancient trees, this intimate cabana offers total privacy and quietude for couples seeking a peaceful sanctuary in nature.",
    longDescription: "The Forest Cabana Suite embraces the authentic rhythm of the woods. Constructed using sustainable local timbers and ambient lighting, this retreat offers floor-to-ceiling glass views into the surrounding flora while keeping you enclosed in supreme comfort.",
    capacity: {
      adults: 2,
      children: 0,
      text: "2 Adults"
    },
    bedType: "1 Queen Bed",
    sizeSqMters: 48,
    featuredImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      "Air Conditioning",
      "Private Garden Terrace",
      "Hot & Cold Rain Shower",
      "Complimentary Wi-Fi",
      "Minibar",
      "Organic Toiletries",
      "Pool Access"
    ],
    highlights: [
      "Intimate Secluded Setting",
      "Direct Garden Pathway",
      "Natural Timber Interior"
    ],
    priceNote: "Inquire for Direct Seasonal Rates",
    featured: true
  },
  {
    id: "family-nature-villa",
    name: "Family Nature Villa",
    tagline: "Expansive Multi-Bed Haven for Families",
    description: "A spacious multi-room residence tailored for families or groups who wish to relax together surrounded by garden pathways and birdsong.",
    longDescription: "Created with togetherness in mind, the Family Nature Villa combines two generous bedrooms with an expansive shaded veranda. Perfect for families looking to reconnect in a safe, tranquil eco-resort setting.",
    capacity: {
      adults: 4,
      children: 2,
      text: "4 Adults, 2 Children"
    },
    bedType: "1 King Bed + 2 Twin Beds",
    sizeSqMters: 95,
    featuredImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      "Air Conditioning",
      "2 Luxury Ensuite Bathrooms",
      "Expansive Family Veranda",
      "Flat-Screen TV",
      "High-Speed Wi-Fi",
      "Minibar & Refreshments",
      "Safety Deposit Box",
      "Direct Pool Access"
    ],
    highlights: [
      "Two Separate Bedrooms",
      "Generous Shaded Patio",
      "Family Friendly Layout"
    ],
    priceNote: "Inquire for Direct Seasonal Rates",
    featured: true
  },
  {
    id: "royal-suite-villa",
    name: "Royal Suite Villa",
    tagline: "The Ultimate Private Sanctuary & Grand Veranda",
    description: "Our premier signature residence featuring supreme architectural detail, extended outdoor living lounge, Jacuzzi tub, and sweeping forest views.",
    longDescription: "The Royal Suite Villa stands as the crown jewel of Ahas Pokuna. Designed for discerning guests, it offers absolute privacy, a private hydro-massage bathtub, personal outdoor dining space, and bespoke hospitality services.",
    capacity: {
      adults: 2,
      children: 2,
      text: "2 Adults, 2 Children"
    },
    bedType: "1 Super King Bed",
    sizeSqMters: 110,
    featuredImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      "Private Jacuzzi Bath",
      "Climate Control AC",
      "Grand Master Suite",
      "Outdoor Dining Lounge",
      "Premium Coffee Bar",
      "High-Speed Wi-Fi",
      "Personalized Concierge"
    ],
    highlights: [
      "Hydro-Massage Bathtub",
      "Exclusive High Point Vistas",
      "Bespoke Butler Option"
    ],
    priceNote: "Inquire for Direct Seasonal Rates",
    featured: false
  }
];
