import { useState, useMemo } from 'react';
import { products, Category } from '../data/products';
import { ProductCard } from './ProductCard';



type SortOption = 'Default' | 'Price: Low to High' | 'Price: High to Low' | 'Name A-Z';

const categories: (Category | 'ALL')[] = ['ALL', 'DROP SHOULDER', 'OVERSIZED TEE', 'HOODIE', 'LONGSLEEVE'];
const priceFilters = ['ALL', 'UNDER $40', '$40-$70', 'OVER $70'] as const;
type PriceFilter = typeof priceFilters[number];

const categoryLabels: Record<Category | 'ALL', string> = {
  'ALL': 'ALL',
  'DROP SHOULDER': 'DROP SHOULDER',
  'OVERSIZED TEE': 'OVERSIZED TEE',
  'HOODIE': 'HOODIE',
  'LONGSLEEVE': 'LONGSLEEVE',
};

export function ProductsSection() {
  
  const [activeCategory, setActiveCategory] = useState<Category | 'ALL'>('ALL');
  const [activePriceFilter, setActivePriceFilter] = useState<PriceFilter>('ALL');
  const [sort, setSort] = useState<SortOption>('Default');

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'ALL') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (activePriceFilter === 'UNDER $40') result = result.filter(p => p.price < 40);
    else if (activePriceFilter === '$40-$70') result = result.filter(p => p.price >= 40 && p.price <= 70);
    else if (activePriceFilter === 'OVER $70') result = result.filter(p => p.price > 70);

    if (sort === 'Price: Low to High') result.sort((a, b) => a.price - b.price);
    else if (sort === 'Price: High to Low') result.sort((a, b) => b.price - a.price);
    else if (sort === 'Name A-Z') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [activeCategory, activePriceFilter, sort]);

  return (
    <section id="products" className="bg-[#000000e3] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-base tracking-widest">ALL PRODUCTS</h2>
          <span className="text-zinc-500 text-sm">{filtered.length} items</span>
        </div>

        <div className="border-t border-zinc-800 pt-5 mb-6 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-zinc-500 text-xs tracking-widest">CATEGORY:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-3 py-1 border tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#d4f53c] text-black border-[#d4f53c]'
                    : 'text-zinc-400 border-zinc-700 hover:border-zinc-400 hover:text-white'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
            <span className="text-zinc-500 text-xs tracking-widest ml-4">PRICE:</span>
            {priceFilters.map(pf => (
              <button
                key={pf}
                onClick={() => setActivePriceFilter(pf)}
                className={`text-xs font-semibold px-3 py-1 border tracking-wider transition-colors ${
                  activePriceFilter === pf
                    ? 'bg-[#d4f53c] text-black border-[#d4f53c]'
                    : 'text-zinc-400 border-zinc-700 hover:border-zinc-400 hover:text-white'
                }`}
              >
                {pf}
              </button>
            ))}
          </div>
          <div>
            <select
              value={sort}
              onChange={e => setSort(e.target.value as SortOption)}
              className="bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs px-3 py-1.5 focus:outline-none focus:border-zinc-500"
            >
              <option>Sort: Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name A-Z</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
