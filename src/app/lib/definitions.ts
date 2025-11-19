// lib/types.ts
export type Review = {
  rating: number;
  comment: string;
};

export type SellerProfile = {
  display_name: string;
  bio: string;
};

export type Product = {
  product_id: number;
  product_name: string;
  description: string;
  price: number;
  category: string;
  product_image_url: string;
  seller_profiles: SellerProfile;
  reviews: Review[];
};
