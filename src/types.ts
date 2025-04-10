// src/types.ts

export interface Car {
  whatsappLink: any;
  id: any;
  image: string;
  title: string;
  price: number;
  transmission: string;
  fuelType: string;
  year: number;
  mileage: number;
  condition: string;
  features: string[];
  additionalImages: string[];  // Add this line for additional images
  make: string;                // Add this line
  model: string;               // Add this line
  bodyType: string;            // Add this line
  engineSize: number;          // Add this line
  driveType: string;           // Add this line
  color: string;               // Add this line
}
