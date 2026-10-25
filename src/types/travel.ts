export type CurrencyCode = 'LKR' | 'USD' | 'EUR' | 'GBP' | 'AUD';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateToLkr: number; // 1 USD = ~310 LKR
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  LKR: { code: 'LKR', symbol: 'Rs.', rateToLkr: 1 },
  USD: { code: 'USD', symbol: '$', rateToLkr: 0.0032 },
  EUR: { code: 'EUR', symbol: '€', rateToLkr: 0.0030 },
  GBP: { code: 'GBP', symbol: '£', rateToLkr: 0.0025 },
  AUD: { code: 'AUD', symbol: 'A$', rateToLkr: 0.0049 },
};

export type ActiveTab = 'hotels' | 'tours' | 'transport';

export type ScreenId = 'home' | 'explore' | 'hotels' | 'tours' | 'transport' | 'about' | 'contact';

export interface ExperienceItem {
  id: string;
  title: string;
  category: 'hotels' | 'wildlife' | 'train' | 'whale' | 'culture' | 'beach' | 'colombo' | 'kitulgala' | 'sinharaja' | 'hillcountry' | 'crafts';
  tagline: string;
  location: string;
  image: string;
  rating: number;
  reviewsCount: number;
  duration?: string;
  priceLkr: number; // price per person or per night
  priceUnit: 'night' | 'person' | 'trip' | 'group';
  highlights: string[];
  description: string;
  included: string[];
}

export interface HotelItem {
  id: string;
  name: string;
  type: 'Luxury Villa' | 'Boutique Resort' | 'Heritage Bungalow' | 'Eco Retreat';
  location: string;
  region: 'Ella' | 'Galle' | 'Kandy' | 'Sigiriya' | 'Bentota' | 'Yala' | 'Colombo' | 'Nuwara Eliya';
  image: string;
  gallery: string[];
  priceLkr: number;
  rating: number;
  reviewsCount: number;
  amenities: string[];
  description: string;
}

export interface TransportVehicle {
  id: string;
  name: string;
  type: 'Private Cars' | 'Passenger Vans' | 'Tourist Buses' | 'Luxury Van' | 'Executive Sedan' | 'KDH Commuter' | '4x4 Safari Cruiser' | string;
  seats: number;
  luggage: number;
  image: string;
  pricePerDayLkr: number;
  features: string[];
  description: string;
}

export interface AirportRoute {
  id: string;
  from: string;
  to: string;
  distanceKm: number;
  duration: string;
  priceLkr: number;
}
