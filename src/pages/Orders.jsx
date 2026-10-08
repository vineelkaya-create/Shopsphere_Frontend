import { Link } from "react-router-dom";
import { Package, ArrowRight } from "lucide-react";

export default function Orders() {
  return <main className="page"><div className="container"><div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Orders</span></div><div className="page-title"><div><span className="eyebrow small">Purchase history</span><h1>Your orders</h1></div></div><div className="empty-state large"><div className="empty-icon"><Package/></div><h2>No orders yet</h2><p>Your completed purchases will appear here once you place an order.</p><Link className="btn btn-primary" to="/products">Start shopping <ArrowRight size={17}/></Link></div></div></main>;
}