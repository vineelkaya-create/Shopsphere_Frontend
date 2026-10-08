import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const saved = wishlist.some((item) => item.id === product.id);
  const discount = Math.round((1 - product.price / product.oldPrice) * 100);

  return (
    <article className="product-card">
      <div className="product-image">
        <Link to={`/products/${product.id}`}><img src={product.image} alt={product.name}/></Link>
        <span className="badge">{product.badge}</span>
        <button className={`wish-btn ${saved ? "saved" : ""}`} onClick={() => toggleWishlist(product)} aria-label="wishlist"><Heart size={19} fill={saved ? "currentColor" : "none"}/></button>
      </div>
      <div className="product-body">
        <div className="product-category">{product.category}</div>
        <Link to={`/products/${product.id}`} className="product-name">{product.name}</Link>
        <div className="rating"><span className="stars"><Star size={14} fill="currentColor"/> {product.rating}</span><span className="reviews">({product.reviews})</span></div>
        <div className="price-row"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.oldPrice)}</del><span className="discount">{discount}% off</span></div>
        <button className="add-btn" onClick={() => addToCart(product)}><ShoppingBag size={17}/> Add to cart</button>
      </div>
    </article>
  );
}