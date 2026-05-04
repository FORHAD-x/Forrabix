
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="bg-[#202020f3] py-16 px-6 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#d4f53c] text-xs font-bold tracking-[0.2em] mb-4">NEW DROP — 2025 COLLECTION</p>
          <h1 className="text-white font-black text-4xl sm:text-6xl leading-none tracking-tight uppercase mb-2">
            AESTHETIC<br />DROP<br />
            <span className="text-[#a2bd2bda]">SHOULDER</span>
          </h1>
          <p className="text-zinc-400 text-sm mt-5 mb-8 leading-relaxed max-w-sm">
            Oversized silhouettes crafted for the ones who move different. Minimal, raw, expressive.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-[#d4f53c] text-black text-sm font-bold px-6 py-3 hover:bg-[#c4e52a] transition-colors tracking-wider"
          >
            SHOP NOW →
          </Link>
          <div className="flex gap-10 mt-10">
            <div>
              <p className="text-white font-black text-2xl">24+</p>
              <p className="text-zinc-500 text-xs tracking-widest mt-0.5">STYLES</p>
            </div>
            <div>
              <p className="text-white font-black text-2xl">100%</p>
              <p className="text-zinc-500 text-xs tracking-widest mt-0.5">STREETWEAR</p>
            </div>
            <div>
              <p className="text-white font-black text-2xl">Free</p>
              <p className="text-zinc-500 text-xs tracking-widest mt-0.5">SHIPPING</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-zinc-900 border border-zinc-800 aspect-[4/3] flex flex-col items-center justify-center relative rounded-2xl overflow-hidden">
           <img src="/hero.jpg" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
