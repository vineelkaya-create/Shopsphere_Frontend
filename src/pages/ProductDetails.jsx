import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Minus, Plus, ShieldCheck, Star, Truck } from "lucide-react";
import { useState } from "react";
import { products, formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [qty, setQty] = useState(1);
  if (!product) return <main className="page"><div className="container empty-state"><h2>Product not found</h2><Link className="btn btn-primary" to="/products">Back to products</Link></div></main>;
  const saved = wishlist.some(i=>i.id===product.id);
  const add = () => { for(let i=0;i<qty;i++) addToCart(product); };

  return <main className="page"><div className="container">
    <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/products">Products</Link><span>/</span><span>{product.name}</span></div>
    <div className="details">
      <div className="detail-image"><img src={product.image} alt={product.name}/><span className="badge">{product.badge}</span></div>
      <div className="detail-copy"><div className="product-category">{product.category}</div><h1>{product.name}</h1><div className="rating detail-rating"><span className="stars"><Star size={16} fill="currentColor"/> {product.rating}</span><span className="reviews">{product.reviews} verified reviews</span></div><div className="detail-price"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.oldPrice)}</del><span>{Math.round((1-product.price/product.oldPrice)*100)}% OFF</span></div><p className="detail-desc">{product.description}</p>
      <div className="feature-line"><span><Truck size={18}/><b>Free delivery</b></span><span><ShieldCheck size={18}/><b>Secure checkout</b></span></div>
      <div className="buy-row"><div className="qty"><button onClick={()=>setQty(Math.max(1,qty-1))}><Minus size={15}/></button><b>{qty}</b><button onClick={()=>setQty(qty+1)}><Plus size={15}/></button></div><button className="btn btn-primary grow" onClick={add}>Add {qty > 1 ? `${qty} items` : "to cart"}</button><button className={`square-btn ${saved?"saved":""}`} onClick={()=>toggleWishlist(product)}><Heart size={20} fill={saved?"currentColor":"none"}/></button></div>
      <div className="details-note">In stock • Usually dispatched within 24 hours</div>
      </div>
    </div>
  </div></main>;
}