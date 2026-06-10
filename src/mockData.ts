import { Product, ArtistProfile } from './types';

export const initialProfile: ArtistProfile = {
  name: "Vicky Huang",
  title: "Ceramicist & Gouache Painter",
  bio: "Hi! I am a student artist creating hand-carved porcelain ware and playful gouache illustrations. Exploring natural textures, botanical themes, and warmth in everyday items.",
  avatar: "✨",
  bannerColor: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)", // Amber/warm tones
  followers: 432,
  salesCount: 28,
  totalRevenue: 1350
};

export const initialProducts: Product[] = [
  {
    id: "prod-1",
    title: "Botanical Mug (Hand-Carved)",
    image: "☕",
    price: 45,
    materialCost: 8,
    timeCost: 25,
    hourlyRate: 12.5,
    hoursSpent: 2,
    customMarkup: 12,
    status: 'In Stock',
    views: 184,
    salesHistory: [
      { date: 'Jan', units: 2, revenue: 90 },
      { date: 'Feb', units: 3, revenue: 135 },
      { date: 'Mar', units: 5, revenue: 225 },
      { date: 'Apr', units: 4, revenue: 180 },
    ],
    comments: [
      { id: "c-1", user: "Sneha_m", text: "The carving detail is absolutely beautiful! Does it hold heat well?", date: "2 hrs ago" },
      { id: "c-2", user: "Annabelle_c", text: "Stunning work! Do you have a matching plate?", date: "Yesterday" }
    ]
  },
  {
    id: "prod-2",
    title: "Mushroom Forest Gouache Print",
    image: "🍄",
    price: 24,
    materialCost: 4,
    timeCost: 15,
    hourlyRate: 10,
    hoursSpent: 1.5,
    customMarkup: 5,
    status: 'In Stock',
    views: 312,
    salesHistory: [
      { date: 'Jan', units: 5, revenue: 120 },
      { date: 'Feb', units: 8, revenue: 192 },
      { date: 'Mar', units: 10, revenue: 240 },
      { date: 'Apr', units: 12, revenue: 288 },
    ],
    comments: [
      { id: "c-3", user: "Ivy_n", text: "Reminds me of Ghibli backgrounds! Getting one for my dorm ✨", date: "3 days ago" }
    ]
  },
  {
    id: "prod-3",
    title: "Clay Blossom Dangling Earrings",
    image: "🌸",
    price: 18,
    materialCost: 3,
    timeCost: 10,
    hourlyRate: 10,
    hoursSpent: 1.0,
    customMarkup: 5,
    status: 'Sold',
    views: 95,
    salesHistory: [
      { date: 'Jan', units: 1, revenue: 18 },
      { date: 'Feb', units: 4, revenue: 72 },
      { date: 'Mar', units: 3, revenue: 54 },
      { date: 'Apr', units: 2, revenue: 36 },
    ],
    comments: []
  },
  {
    id: "prod-4",
    title: "Cozy Study Desk Sticker Pack",
    image: "📚",
    price: 8,
    materialCost: 1.5,
    timeCost: 5,
    hourlyRate: 10,
    hoursSpent: 0.5,
    customMarkup: 1.5,
    status: 'In Stock',
    views: 450,
    salesHistory: [
      { date: 'Jan', units: 15, revenue: 120 },
      { date: 'Feb', units: 22, revenue: 176 },
      { date: 'Mar', units: 30, revenue: 240 },
      { date: 'Apr', units: 25, revenue: 200 },
    ],
    comments: [
      { id: "c-4", user: "Nandini_S", text: "The kitten sticker is my absolute favorite, durable quality too!", date: "1 week ago" }
    ]
  }
];
