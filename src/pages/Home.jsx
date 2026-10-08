import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Headphones, Sparkles } from "lucide-react";
import { categories, products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15}/> Curated for everyday life</div>
            <h1>Everything you want.<br/><span>One better place.</span></h1>
            <p>Discover thoughtfully selected products across tech, fashion, home, beauty and more — with transparent prices and a shopping experience built around you.</p>
            <div className="hero-buttons"><Link className="btn btn-primary" to="/products">Shop now <ArrowRight size={18}/></Link><Link className="btn btn-ghost" to="/products?category=Electronics">Explore electronics</Link></div>
            <div className="hero-trust"><span><b>10k+</b> happy shoppers</span><span><b>4.8/5</b> average rating</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-main"><img src={products[0].image} alt="Featured headphones"/><div className="floating-info"><span>Featured pick</span><strong>AeroSound Pro</strong><small>Now ₹5,499</small></div></div>
            <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
            <div className="mini-card"><span>★</span><div><strong>4.8 / 5</strong><small>Customer rated</small></div></div>
          </div>
        </div>
      </section>

      <section className="trust-bar"><div className="container trust-grid"><div><Truck/><span><strong>Free shipping</strong><small>On orders above ₹1,999</small></span></div><div><ShieldCheck/><span><strong>Secure payments</strong><small>100% protected checkout</small></span></div><div><RotateCcw/><span><strong>Easy returns</strong><small>7-day return window</small></span></div><div><Headphones/><span><strong>Support that helps</strong><small>Here when you need us</small></span></div></div></section>

      <section className="section container">
        <div className="section-head"><div><span className="eyebrow small">Browse by category</span><h2>Find your next favorite</h2></div><Link to="/products">View all <ArrowRight size={16}/></Link></div>
        <div className="category-grid">{categories.map((c) => <Link className="category-card" key={c.name} to={`/products?category=${encodeURIComponent(c.name)}`}><span className="category-icon">{c.icon}</span><strong>{c.name}</strong><small>{c.count} products</small><ArrowRight size={16}/></Link>)}</div>
      </section>

      <section className="section section-soft">
        <div className="container"><div className="section-head"><div><span className="eyebrow small">Trending now</span><h2>Popular picks</h2></div><Link to="/products">See everything <ArrowRight size={16}/></Link></div><ProductGrid products={products.slice(0, 8)}/></div>
      </section>

      <section className="promo container"><div><span className="eyebrow">The ShopSphere promise</span><h2>Good products. Clear choices. No clutter.</h2><p>We’re building a shopping experience that helps you compare, decide and buy without the noise.</p><Link className="btn btn-light" to="/products">Start exploring <ArrowRight size={17}/></Link></div><div className="promo-shapes"><div></div><div></div><div></div></div></section>
    </>
  );
}