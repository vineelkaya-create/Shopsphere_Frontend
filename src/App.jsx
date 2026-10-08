import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";

export default function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/orders" element={<Orders/>}/>
    </Routes>
    <Footer />
  </>;
}