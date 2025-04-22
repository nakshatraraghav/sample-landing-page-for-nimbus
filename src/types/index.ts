export interface Model {
  id: string;
  name: string;
  description: string;
  tags: string[];
  price: number;
  isFree: boolean;
  parameters: number;
  rating: number;
  imageUrl: string;
  featured: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}