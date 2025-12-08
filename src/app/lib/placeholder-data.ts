// seed/placeholder-data.ts

const users = [
  { user_id: 'a1e1b2c3-d4f5-6789-1011-121314151617', first_name: 'Alice', last_name: 'Johnson', email: 'alice.johnson@test.com', password: '123456', store_name: 'Alice\'s Artifacts' },
  { user_id: 'b2e2c3d4-f5a6-7891-0111-213141516171', first_name: 'Bob', last_name: 'Smith', email: 'bob.smith@test.com', password: '123456', store_name: 'Bob\'s Boutique' },
  { user_id: 'c3e3d4f5-a6b7-8910-1112-314151617181', first_name: 'Carol', last_name: 'Lee', email: 'carol.lee@test.com', password: '123456', store_name: 'Carol\'s Creations' },
  { user_id: 'd4e4f5a6-b7c8-9101-1121-415161718191', first_name: 'David', last_name: 'Kim', email: 'david.kim@test.com', password: '123456', store_name: 'David\'s Designs' },
  { user_id: 'e5f5a6b7-c8d9-1011-1213-516171819201', first_name: 'Eva', last_name: 'Martinez', email: 'eva.martinez@test.com', password: '123456', store_name: 'Eva\'s Emporium' },

];

const products = [
  {
    product_id: "2a601557-403a-4220-af75-60dcd5cf5176", // Wooden Bowl
    user_id: 'a1e1b2c3-d4f5-6789-1011-121314151617',
    name: 'Wooden Bowl',
    description: 'Hand-carved wooden bowl.',
    price: 25.0,
    category: 'Home Decor',
    product_image_url: '../../../public/wooden-bowl.jpg'
  },
  {
    product_id: "be7f8d61-b796-48c4-b870-1a4c762e3801", // Recycled Paper Journal
    user_id: 'b2e2c3d4-f5a6-7891-0111-213141516171',
    name: 'Recycled Paper Journal',
    description: 'Eco-friendly journal made from recycled paper.',
    price: 15.0,
    category: 'Stationery',
    product_image_url: '../../../public/journal.jpg'
  },
  {
    product_id: "a5d0e2ac-a13f-4413-b212-9b672c2dc13a", // Ceramic Vase
    user_id: 'c3e3d4f5-a6b7-8910-1112-314151617181',
    name: 'Ceramic Vase',
    description: 'Handmade ceramic vase.',
    price: 40.0,
    category: 'Home Decor',
    product_image_url: '../../../public/ceramic-vase.jpg'
  },
  {
    product_id: "89691d2c-a8f0-4ad4-a4f2-67f3c1335254", // Vintage Clock
    user_id: 'd4e4f5a6-b7c8-9101-1121-415161718191',
    name: 'Vintage Clock',
    description: 'Retro-style vintage clock.',
    price: 60.0,
    category: 'Collectibles',
    product_image_url: '../../../public/vintage-clock.jpg'
  },
  {
    product_id: "ce1b5693-9df7-4ed0-ae67-172c2cfa7747", // Knitted Scarf
    user_id: 'e5f5a6b7-c8d9-1011-1213-516171819201',
    name: 'Knitted Scarf',
    description: 'Warm, hand-knitted scarf.',
    price: 30.0,
    category: 'Fashion',
    product_image_url: '../../../public/knitted-scarf.jpg'
  }
];


const reviews = [
  {
    product_id: "2a601557-403a-4220-af75-60dcd5cf5176",  // Wooden Bowl
    user_id: "a1e1b2c3-d4f5-6789-1011-121314151617",
    rating: 5,
    comment: "Beautiful craftsmanship!"
  },
  {
    product_id: "be7f8d61-b796-48c4-b870-1a4c762e3801",  // Recycled Paper Journal
    user_id: "a1e1b2c3-d4f5-6789-1011-121314151617",
    rating: 4,
    comment: "Great for journaling."
  },
  {
    product_id: "a5d0e2ac-a13f-4413-b212-9b672c2dc13a",  // Ceramic Vase
    user_id: "b2e2c3d4-f5a6-7891-0111-213141516171",
    rating: 5,
    comment: "Lovely vase, perfect for my flowers."
  },
  {
    product_id: "89691d2c-a8f0-4ad4-a4f2-67f3c1335254",  // Vintage Clock
    user_id: "c3e3d4f5-a6b7-8910-1112-314151617181",
    rating: 3,
    comment: "Clock looks nice but runs slow."
  },
  {
    product_id: "ce1b5693-9df7-4ed0-ae67-172c2cfa7747",  // Knitted Scarf
    user_id: "d4e4f5a6-b7c8-9101-1121-415161718191",
    rating: 5,
    comment: "Super warm and cozy scarf!"
  }
];

export { users, products, reviews };
