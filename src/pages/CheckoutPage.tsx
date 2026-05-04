import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    const items = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} - $${item.price * item.quantity}`
      )
      .join("%0A");

    const message = `Order Details:%0A${items}%0ATotal: $${total}%0AName: ${name}%0AAddress: ${address}`;

    window.open(`https://wa.me/8801XXXXXXXXX?text=${message}`);
  };

  return (
    <div className="p-8 text-white max-w-xl mx-auto">
      <h1 className="text-2xl mb-6">CHECKOUT</h1>

      <input
        placeholder="Your Name"
        className="w-full mb-4 p-3 bg-zinc-800"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Address"
        className="w-full mb-4 p-3 bg-zinc-800"
        onChange={(e) => setAddress(e.target.value)}
      />

      <div className="mb-4">
        <p>Total: ${total}</p>
      </div>

      <button
        onClick={handleOrder}
        className="w-full bg-white text-black py-3"
      >
        ORDER VIA WHATSAPP
      </button>
    </div>
  );
}