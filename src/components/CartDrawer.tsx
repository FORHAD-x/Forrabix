import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* DRAWER */}
          <motion.div
            className="fixed right-0 top-0 h-full w-[350px] bg-black text-white z-50 p-5 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg">YOUR CART</h2>
              <button onClick={onClose}>
                <X size={20} />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p className="text-zinc-400">Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-3 border-b border-zinc-800 pb-3">
                    
                    <img
                      src={item.image}
                      className="w-16 h-16 object-cover"
                    />

                    <div className="flex-1">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-xs text-zinc-400">${item.price}</p>

                      {/* QTY */}
                      <div className="flex items-center gap-2 mt-1">
                        <button onClick={() => decreaseQty(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id)}>+</button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-xs"
                    >
                      X
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            <div className="mt-4 border-t border-zinc-800 pt-4">
              <div className="flex justify-between mb-3">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <Link to="/checkout" onClick={onClose}>
                <button className="w-full bg-white text-black py-3">
                  CHECKOUT
                </button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}