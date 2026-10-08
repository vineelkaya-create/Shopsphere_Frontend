import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal, shipping, total } = useCart();
  if (!cart.length) return <main className="page"><div className="container"><div className="empty-state large"><div className="empty-icon"><ShoppingBag/></div><h2>Your cart is waiting</h2><p>Looks like you haven’t added anything yet. Let’s find something good.</p><Link className="btn btn-primary" to="/products">Continue shopping <ArrowRight size={17}/></Link></div></div></main>;
  return <main className="page"><div className="container"><div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Cart</span></div><div className="page-title"><div><span className="eyebrow small">Your bag</span><h1>Shopping cart</h1></div><span>{cart.reduce((s,i)=>s+i.quantity,0)} items</span></div>
    <div className="cart-layout"><div className="cart-list">{cart.map(item=><div className="cart-item" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-info"><div className="product-category">{item.category}</div><h3>{item.name}</h3><strong>{formatPrice(item.price)}</strong><div className="cart-actions"><div className="qty"><button onClick={()=>updateQuantity(item.id,item.quantity-1)}><Minus size={14}/></button><b>{item.quantity}</b><button onClick={()=>updateQuantity(item.id,item.quantity+1)}><Plus size={14}/></button></div><button className="remove" onClick={()=>removeFromCart(item.id)}><Trash2 size={15}/> Remove</button></div></div><b className="line-total">{formatPrice(item.price*item.quantity)}</b></div>)}</div>
    <aside className="summary"><h2>Order summary</h2><div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><div><span>Shipping</span><strong>{shipping===0?"FREE":formatPrice(shipping)}</strong></div><div className="summary-total"><span>Total</span><strong>{formatPrice(total)}</strong></div><Link className="btn btn-primary full" to="/checkout">Proceed to checkout <ArrowRight size={17}/></Link><p className="secure">🔒 Secure checkout • Free returns within 7 days</p></aside></div>
  </div></main>;
}