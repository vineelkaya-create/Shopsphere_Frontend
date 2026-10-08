import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-light" to="/"><span className="brand-mark">S</span><span>Shop<span>Sphere</span></span></Link>
          <p>A smarter, simpler way to discover products you’ll love.</p>
          <div className="socials"><span><Instagram size={17}/></span><span><Facebook size={17}/></span><span><Twitter size={17}/></span><span><Mail size={17}/></span></div>
        </div>
        <div><h4>Shop</h4><Link to="/products">All Products</Link><Link to="/products?category=Electronics">Electronics</Link><Link to="/products?category=Fashion">Fashion</Link><Link to="/products?category=Home%20%26%20Living">Home & Living</Link></div>
        <div><h4>Customer Care</h4><a href="#help">Help Center</a><a href="#shipping">Shipping & Returns</a><a href="#privacy">Privacy Policy</a><a href="#terms">Terms</a></div>
        <div><h4>Stay in the loop</h4><p>Get product drops and exclusive offers in your inbox.</p><div className="newsletter"><input placeholder="Your email address"/><button>Join</button></div></div>
      </div>
      <div className="footer-bottom"><div className="container">© 2026 ShopSphere. Built for a better shopping experience.</div></div>
    </footer>
  );
}