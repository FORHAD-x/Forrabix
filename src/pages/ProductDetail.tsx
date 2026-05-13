import { useState } from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export function ProductDetail({ product, onBack }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'shipping' | 'returns'>('details');

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tabContent = {
    details: [
      'Premium heavyweight construction',
      'Garment-dyed for lived-in look',
      'Ribbed cuffs and hem',
      '100% ring-spun cotton',
      'Pre-shrunk fabric',
    ],
    shipping: [
      'Standard: 5–7 business days',
      'Express: 2–3 business days',
      'Overnight: Next business day',
      'Free shipping on orders over $100',
    ],
    returns: [
      '30-day return window',
      'Items must be unworn & unwashed',
      'Original tags must be attached',
      'Free returns for store credit',
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* TOP BAR */}
      <div className="border-b border-zinc-800 px-6 py-4 flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs tracking-widest uppercase"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <span className="text-zinc-700 text-xs">/</span>
        <span className="text-zinc-500 text-xs tracking-widest uppercase">{product.category}</span>
        <span className="text-zinc-700 text-xs">/</span>
        <span className="text-zinc-300 text-xs tracking-wide truncate">{product.name}</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

        {/* LEFT — IMAGE */}
        <div className="relative">
          {product.badge && (
            <div
              className={`absolute top-4 left-4 text-xs font-bold px-2 py-0.5 z-10 tracking-wider ${
                product.badge === 'NEW' ? 'bg-[#d4f53c] text-black' : 'bg-red-600 text-white'
              }`}
            >
              {product.badge}
            </div>
          )}
          <div className="aspect-square bg-zinc-900 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail strip (same image repeated as placeholder) */}
          <div className="flex gap-2 mt-3">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                className={`w-16 h-16 bg-zinc-900 overflow-hidden border transition-colors ${
                  i === 0 ? 'border-white' : 'border-zinc-800 hover:border-zinc-600'
                }`}
              >
                <img src={product.image} alt="" className="w-full h-full object-cover opacity-80" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — INFO */}
        <div className="flex flex-col gap-6">

          {/* Category + Name */}
          <div>
            <p className="text-zinc-500 text-[10px] tracking-widest uppercase mb-2">{product.category}</p>
            <h1 className="text-white text-2xl font-bold tracking-wide leading-tight">{product.name}</h1>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className={`text-2xl font-bold ${product.badge === 'SALE' ? 'text-red-500' : 'text-white'}`}>
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-zinc-500 text-base line-through">${product.originalPrice}</span>
            )}
            {product.badge === 'SALE' && product.originalPrice && (
              <span className="text-xs bg-red-600 text-white px-2 py-0.5 font-bold tracking-wider">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800" />

          {/* Color selector */}
          <div>
            <p className="text-zinc-400 text-[10px] tracking-widest uppercase mb-3">
              Color <span className="text-zinc-600 ml-2">—</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  className={`w-7 h-7 rounded-sm transition-all ${
                    selectedColor === i
                      ? 'ring-2 ring-white ring-offset-2 ring-offset-black'
                      : 'ring-1 ring-zinc-700 hover:ring-zinc-400'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-zinc-400 text-[10px] tracking-widest uppercase">Size</p>
              <button className="text-zinc-500 text-[10px] tracking-widest uppercase underline underline-offset-2 hover:text-white transition-colors">
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 text-xs font-bold tracking-wider border transition-colors ${
                    selectedSize === size
                      ? 'bg-white text-black border-white'
                      : 'border-zinc-700 text-zinc-400 hover:border-zinc-400 hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-4 text-sm font-bold tracking-widest uppercase border transition-all duration-300 ${
              added
                ? 'bg-[#d4f53c] text-black border-[#d4f53c]'
                : 'bg-white text-black border-white hover:bg-transparent hover:text-white'
            }`}
          >
            {added ? '✓ ADDED TO CART' : 'ADD TO CART'}
          </button>

          {/* Wishlist */}
          <button className="w-full py-3 text-xs font-bold tracking-widest uppercase border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300 transition-colors flex items-center justify-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 12S1 8.5 1 4.5A3 3 0 0 1 7 3.5 3 3 0 0 1 13 4.5C13 8.5 7 12 7 12Z" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Save to Wishlist
          </button>

          {/* Divider */}
          <div className="border-t border-zinc-800" />

          {/* Tabs */}
          <div>
            <div className="flex border-b border-zinc-800">
              {(['details', 'shipping', 'returns'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-[10px] tracking-widest uppercase transition-colors ${
                    activeTab === tab
                      ? 'text-white border-b border-white -mb-px'
                      : 'text-zinc-600 hover:text-zinc-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <ul className="mt-4 space-y-2">
              {tabContent[activeTab].map((line, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-400 text-xs leading-relaxed">
                  <span className="text-zinc-700 mt-0.5">—</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}