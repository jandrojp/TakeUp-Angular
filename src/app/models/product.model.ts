import { Review } from '../models/review.model';

export interface Product {
  image: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  similarProducts: Product[];
  reviews: Review[];
  favourite: boolean;
  add: boolean;
}
