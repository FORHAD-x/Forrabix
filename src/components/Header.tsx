import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

export function Header() {
  const location = useLocation();
  const { cart } = useCart();
  const [openCart, setOpenCart] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#3b3f36] border-b border-zinc-800  top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 h-14 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="hover:opacity-80 transition">
          <img src="/white.png" alt="FORRABIX" className="h-5 sm:h-8" />
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-6 text-[12px] sm:text-sm">
          <Link
            to="/shop"
            className={`font-semibold tracking-wide transition-colors ${
              isActive("/shop")
                ? "text-white border-b-2 border-[#d4f53c] pb-0.5"
                : "text-zinc-300 hover:text-white"
            }`}
          >
            SHOP
          </Link>

          <Link
            to="/about"
            className={`tracking-wide transition-colors ${
              isActive("/about")
                ? "text-white border-b-2 border-[#d4f53c] pb-0.5"
                : "text-zinc-300 hover:text-white"
            }`}
          >
            ABOUT
          </Link>

          <Link
            to="/contact"
            className={`tracking-wide transition-colors ${
              isActive("/contact")
                ? "text-white border-b-2 border-[#d4f53c] pb-0.5"
                : "text-zinc-300 hover:text-white"
            }`}
          >
            CONTACT
          </Link>
        <button
          onClick={() => setOpenCart(true)}
          className="relative text-white hover:text-[#d4f53c] transition"
        >
          <ShoppingBag size={20} />
        </button>
        </nav>

        {/* CART */}
      </div>
      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </header>
  );
}
