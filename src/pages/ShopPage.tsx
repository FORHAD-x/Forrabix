import { ProductsSection } from '../components/ProductsSection';

export function ShopPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-8 px-6 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white font-black text-4xl uppercase tracking-tight">Shop</h1>
          <p className="text-zinc-400 text-sm mt-2">Browse our complete collection of streetwear</p>
        </div>
      </section>
      <ProductsSection />
    </div>
  );
}
