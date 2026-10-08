export const categories = [
  { name: "Electronics", icon: "◈", count: "120+" },
  { name: "Fashion", icon: "✦", count: "240+" },
  { name: "Home & Living", icon: "⌂", count: "180+" },
  { name: "Beauty", icon: "✿", count: "95+" },
  { name: "Sports", icon: "◉", count: "80+" },
  { name: "Accessories", icon: "◇", count: "150+" }
];

export const products = [
  { id: 1, name: "AeroSound Pro Wireless Headphones", category: "Electronics", price: 5499, oldPrice: 7999, rating: 4.8, reviews: 324, badge: "Best Seller", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85", description: "Premium wireless headphones with adaptive noise cancellation, spatial audio and 40-hour battery life." },
  { id: 2, name: "Urban Edge Everyday Sneakers", category: "Fashion", price: 3299, oldPrice: 4999, rating: 4.6, reviews: 218, badge: "Trending", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85", description: "Lightweight everyday sneakers built for comfort, city walks and all-day movement." },
  { id: 3, name: "Luma Minimal Desk Lamp", category: "Home & Living", price: 1899, oldPrice: 2799, rating: 4.7, reviews: 146, badge: "New", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85", description: "A warm, minimal desk lamp with adjustable brightness for focused work and relaxed evenings." },
  { id: 4, name: "PulseFit Smart Watch", category: "Electronics", price: 6799, oldPrice: 8999, rating: 4.5, reviews: 512, badge: "Popular", image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=85", description: "Smart fitness watch with activity tracking, notifications, heart-rate insights and a bright display." },
  { id: 5, name: "Essential Cotton Overshirt", category: "Fashion", price: 1599, oldPrice: 2299, rating: 4.4, reviews: 98, badge: "Sale", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85", description: "Soft heavyweight cotton overshirt with a relaxed silhouette for effortless everyday styling." },
  { id: 6, name: "CloudNest Cushion Set", category: "Home & Living", price: 999, oldPrice: 1499, rating: 4.8, reviews: 176, badge: "Top Rated", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85", description: "Set of two textured cushions designed to add softness and character to your living space." },
  { id: 7, name: "HydraGlow Skincare Kit", category: "Beauty", price: 2199, oldPrice: 3199, rating: 4.7, reviews: 267, badge: "Bestseller", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85", description: "A simple daily skincare routine with cleanser, hydrating serum and lightweight moisturizer." },
  { id: 8, name: "TrailCore Performance Backpack", category: "Accessories", price: 2499, oldPrice: 3599, rating: 4.6, reviews: 143, badge: "Editor's Pick", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85", description: "Durable multi-pocket backpack with laptop protection and smart organization for daily travel." },
  { id: 9, name: "Nova Mechanical Keyboard", category: "Electronics", price: 4199, oldPrice: 5999, rating: 4.7, reviews: 189, badge: "Hot", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85", description: "Compact mechanical keyboard with tactile switches, RGB lighting and a clean desk-first layout." },
  { id: 10, name: "MoveFlex Training Tee", category: "Sports", price: 899, oldPrice: 1299, rating: 4.5, reviews: 77, badge: "Value Pick", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85", description: "Breathable training tee with a flexible fit designed for workouts and everyday wear." },
  { id: 11, name: "Aster Ceramic Vase", category: "Home & Living", price: 1299, oldPrice: 1899, rating: 4.6, reviews: 62, badge: "New", image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=85", description: "Hand-finished ceramic vase with a sculptural silhouette for modern interiors." },
  { id: 12, name: "Solara Everyday Sunglasses", category: "Accessories", price: 1499, oldPrice: 2199, rating: 4.5, reviews: 131, badge: "Trending", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85", description: "Classic lightweight sunglasses with UV protection and an easy everyday frame." }
];

export const formatPrice = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);