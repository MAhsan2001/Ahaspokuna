export interface SiteConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;
  address: {
    street: string;
    area: string;
    city: string;
    country: string;
    fullText: string;
  };
  contact: {
    phones: string[];
    email: string;
    whatsapp: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    tripadvisor: string;
  };
  stats: {
    value: number;
    label: string;
    suffix?: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Ahas Pokuna Holiday Resorts",
  tagline: "Green Nature Experience",
  heroHeadline: "AHAS POKUNA",
  heroSubheadline: "HOLIDAY RESORTS",
  heroDescription: "Escape into a peaceful Sri Lankan wilderness retreat where nature, privacy, and refined comfort seamlessly merge.",
  address: {
    street: "Ranthatiuyana Road",
    area: "Barandana",
    city: "Kurunegala",
    country: "Sri Lanka",
    fullText: "Ranthatiuyana Road, Barandana, Kurunegala, Sri Lanka"
  },
  contact: {
    phones: ["+94 372 222 692", "+94 71 865 5603"],
    email: "info@ahaspokunaholidayresorts.com",
    whatsapp: "+94718655603"
  },
  socials: {
    facebook: "https://facebook.com/ahaspokunaholidayresort",
    instagram: "https://instagram.com/ahaspokunaholidayresort",
    tripadvisor: "https://tripadvisor.com"
  },
  stats: [
    { value: 25, label: "Acres of Forest Sanctuary", suffix: " +" },
    { value: 8, label: "Private Eco-Villas & Cabanas" },
    { value: 100, label: "Natural Privacy & Tranquility", suffix: "%" },
    { value: 1, label: "Pristine Outdoor Pool Sanctuary" }
  ]
};
