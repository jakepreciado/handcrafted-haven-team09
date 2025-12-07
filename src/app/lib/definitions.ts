export type Review = {
rating: number;
comment: string;
};

export type Product = {
id: string; 
user_id: string; 
name: string; 
description: string;
price: number;
category: string;
product_image_url: string;
reviews: Review[];
};

export type User = {
id: string;
first_name: string;
last_name: string;
email: string;
password: string;
store_name: string;
};
