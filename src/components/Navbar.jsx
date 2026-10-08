import { Link, NavLink, useNavigate } from "react-router-dom";
import { Heart, Search, ShoppingBag, UserRound, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cartCount, wishlist } = useCart();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(query)}`);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="top-strip">Free shipping on orders above ₹1,999 <span>•</span> Easy 7-day returns</div>
      <div className="navbar container">
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
        <Link className="brand" to="/">
          <span className="brand-mark">S</span><span>Shop<span>Sphere</span></span>
        </Link>

        <form className="search-box" onSubmit={search}>
          <Search size={19}/>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products, categories and more..." />
          <button type="submit">Search</button>
        </form>

        <div className="nav-actions">
          <Link to="/wishlist" className="icon-link" title="Wishlist">
            <span className="icon-wrap"><Heart size={21}/>{wishlist.length > 0 && <b>{wishlist.length}</b>}</span>
            <span className="action-label">Wishlist</span>
          </Link>
          <Link to={user ? "/profile" : "/login"} className="icon-link">
            <UserRound size={21}/>
            <span className="action-label">{user ? "Account" : "Login"}</span>
          </Link>
          <Link to="/cart" className="icon-link cart-link">
            <span className="icon-wrap"><ShoppingBag size={21}/><b>{cartCount}</b></span>
            <span className="action-label">Cart</span>
          </Link>
        </div>
      </div>
      <nav className={`main-nav ${open ? "open" : ""}`}>
        <div className="container nav-inner">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">All Products</NavLink>
          <NavLink to="/products?category=Electronics">Electronics</NavLink>
          <NavLink to="/products?category=Fashion">Fashion</NavLink>
          <NavLink to="/products?category=Home%20%26%20Living">Home & Living</NavLink>
          <NavLink to="/products?category=Beauty">Beauty</NavLink>
          <NavLink to="/products?category=Sports">Sports</NavLink>
          <NavLink to="/products?category=Accessories">Accessories</NavLink>
        </div>
      </nav>
    </header>
  );
}