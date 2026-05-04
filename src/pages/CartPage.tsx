import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl mb-8 tracking-wide">YOUR CART</h1>

        {cart.length === 0 ? (
          <p className="text-zinc-400">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b border-zinc-800 pb-6"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover"
                />

                {/* INFO */}
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-zinc-400 mt-1">
                    ${item.price}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 border border-zinc-600"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 border border-zinc-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-500 hover:underline"
                >
                  REMOVE
                </button>
              </div>
            ))}

            {/* TOTAL + CHECKOUT */}
            <div className="mt-10 border-t border-zinc-800 pt-6">
              <div className="flex justify-between text-lg mb-4">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <Link to="/checkout">
                <button className="w-full bg-[#d4f53c] text-black py-3 font-semibold tracking-wide hover:opacity-90 transition">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}