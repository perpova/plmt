export interface Car {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  condition: 'Brand New' | 'Used' | 'Reconditioned';
  owner: string;
  bodyType: string;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Hybrid' | 'Diesel' | 'Electric';
  engineCc: number;
  mileage: number;
  price: string;
  priceLkr: number | null;
  priceDisplay: string;
  features: string[];
  description: string;
  images: string[];
  featured?: boolean;
}

export interface DealershipInfo {
  name: string;
  legalName: string;
  altName: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    district: string;
    country: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string;
  socials: {
    facebook?: string;
    whatsappGroup?: string;
  };
}
