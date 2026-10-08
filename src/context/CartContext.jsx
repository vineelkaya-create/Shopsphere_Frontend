import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((current) => current.filter((item) => item.id !== id));
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return removeFromCart(id);
    setCart((current) => current.map((item) => item.id === id ? { ...item, quantity } : item));
  };

  const toggleWishlist = (product) => {
    setWishlist((current) =>
      current.some((item) => item.id === product.id)
        ? current.filter((item) => item.id !== product.id)
        : [...current, product]
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 1999 ? 0 : 99;

  const value = useMemo(() => ({
    cart, wishlist, addToCart, removeFromCart, updateQuantity, toggleWishlist,
    cartCount, subtotal, shipping, total: subtotal + shipping
  }), [cart, wishlist, cartCount, subtotal, shipping]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);