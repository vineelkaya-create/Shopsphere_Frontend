import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist } = useCart();
  return <main className="page"><div className="container"><div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Wishlist</span></div><div className="page-title"><div><span className="eyebrow small">Saved for later</span><h1>Your wishlist</h1></div></div>{wishlist.length?<ProductGrid products={wishlist}/>:<div className="empty-state large"><div className="empty-icon"><Heart/></div><h2>Nothing saved yet</h2><p>Tap the heart on a product to keep it here for later.</p><Link className="btn btn-primary" to="/products"><ShoppingBag size={17}/> Explore products</Link></div>}</div></main>;
}