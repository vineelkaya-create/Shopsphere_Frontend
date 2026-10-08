import { Link } from "react-router-dom";
import { ArrowRight, LogOut, Package, UserRound } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const {user,logout}=useAuth();
  if(!user) return <main className="page"><div className="container empty-state"><h2>Please sign in</h2><Link className="btn btn-primary" to="/login">Sign in</Link></div></main>;
  return <main className="page"><div className="container"><div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Profile</span></div><div className="profile-head"><div className="avatar">{user.name.charAt(0).toUpperCase()}</div><div><span className="eyebrow small">Your account</span><h1>Hi, {user.name}</h1><p>{user.email}</p></div><button className="btn btn-outline" onClick={logout}><LogOut size={16}/> Logout</button></div><div className="profile-cards"><Link to="/orders"><Package/><div><strong>Your orders</strong><span>Track and review your purchases</span></div><ArrowRight/></Link><Link to="/wishlist"><UserRound/><div><strong>Saved items</strong><span>Products you’ve kept for later</span></div><ArrowRight/></Link></div></div></main>;
}