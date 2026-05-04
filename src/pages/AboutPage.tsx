export function AboutPage() {
  return (
    <div className="bg-[#000000e3] min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white font-black text-4xl uppercase tracking-tight mb-8">About FORRABIX</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-[#d4f53c] font-bold text-lg tracking-widest mb-3">OUR STORY</h2>
            <p className="text-zinc-300 text-base leading-relaxed">
              FORRABIX was born from a simple idea: create clothing for people who move different. We believe in minimalism, rawness, and intentional design. Every piece tells a story of authenticity and rebellion against the ordinary.
            </p>
          </section>

          <section>
            <h2 className="text-[#d4f53c] font-bold text-lg tracking-widest mb-3">OUR VALUES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'MINIMAL',
                  description: 'Clean lines, no unnecessary details. Form follows function.',
                },
                {
                  title: 'RAW',
                  description: 'Authentic, unfiltered. We show the material for what it is.',
                },
                {
                  title: 'EXPRESSIVE',
                  description: 'Your style is your voice. Our pieces amplify it.',
                },
              ].map(value => (
                <div key={value.title} className="border border-zinc-800 p-5">
                  <h3 className="text-white font-bold text-sm tracking-wider mb-2">{value.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[#d4f53c] font-bold text-lg tracking-widest mb-3">QUALITY STANDARDS</h2>
            <ul className="space-y-3">
              {[
                '100% premium cotton blend fabric',
                'Precision drop shoulder construction',
                'Ethical manufacturing practices',
                'Durability tested for everyday wear',
                'Sustainable packaging',
              ].map(item => (
                <li key={item} className="text-zinc-300 flex items-start gap-3">
                  <span className="text-[#d4f53c] mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[#d4f53c] font-bold text-lg tracking-widest mb-3">WHY DROP SHOULDER?</h2>
            <p className="text-zinc-300 text-base leading-relaxed mb-4">
              The drop shoulder is more than a design choice—it's a philosophy. It creates an effortless, relaxed silhouette that works for everyone. It's oversized without being sloppy, comfortable without sacrificing style. It's the uniform of those who refuse to fit in.
            </p>
          </section>

          <section className="border-t border-zinc-800 pt-8">
            <h2 className="text-[#d4f53c] font-bold text-lg tracking-widest mb-3">BY THE NUMBERS</h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '24+', label: 'Styles' },
                { number: '100%', label: 'Authentic' },
                { number: '∞', label: 'Possibilities' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="text-[#d4f53c] font-black text-3xl">{stat.number}</p>
                  <p className="text-zinc-500 text-xs tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
