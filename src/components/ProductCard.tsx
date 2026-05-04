import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-zinc-900 border border-zinc-800 group cursor-pointer hover:border-zinc-600 transition-colors relative">
      
      {product.badge && (
        <div
          className={`absolute top-3 left-3 text-xs font-bold px-2 py-0.5 z-10 tracking-wider ${
            product.badge === 'NEW'
              ? 'bg-[#d4f53c] text-black'
              : 'bg-red-600 text-white'
          }`}
        >
          {product.badge}
        </div>
      )}

      {/* IMAGE */}
      <div className="aspect-square overflow-hidden bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="px-3 pb-4 pt-2">
        <p className="text-zinc-500 text-[10px] tracking-widest mb-1">
          {product.category}
        </p>

        <p className="text-white font-bold text-sm tracking-wide leading-tight mb-2">
          {product.name}
        </p>

        <div className="flex items-center gap-2 mb-2">
          <span
            className={`font-bold text-sm ${
              product.badge === 'SALE' ? 'text-red-500' : 'text-white'
            }`}
          >
            ${product.price}
          </span>

          {product.originalPrice && (
            <span className="text-zinc-500 text-sm line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* COLORS */}
        <div className="flex gap-1.5 mb-2">
          {product.colors.map((color, i) => (
            <div
              key={i}
              className="w-3.5 h-3.5 rounded-sm border border-zinc-600"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* ADD TO CART */}
        <button
          onClick={() => addToCart(product)}
          className="w-full border border-white text-white py-2 text-xs tracking-wider 
                     opacity-0 group-hover:opacity-100 transition-all duration-300 
                     hover:bg-white hover:text-black"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}