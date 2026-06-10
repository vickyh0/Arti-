/**
 * Shared types for the Arti Portfolio & Interactive Demo
 */

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  materialCost: number;
  timeCost: number; // hourly rate * hours
  hourlyRate: number;
  hoursSpent: number;
  customMarkup: number; // percentage or flat
  status: 'In Stock' | 'Sold' | 'Reserved';
  salesHistory: { date: string; units: number; revenue: number }[];
  views: number;
  comments: { id: string; user: string; text: string; date: string }[];
}

export interface ArtistProfile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  bannerColor: string;
  followers: number;
  salesCount: number;
  totalRevenue: number;
}
