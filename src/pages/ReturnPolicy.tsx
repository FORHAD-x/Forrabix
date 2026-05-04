export default function ReturnPolicy() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Return Policy</h1>
        <p className="text-zinc-400 mb-8">Last updated: May 4, 2026</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Eligibility for Returns</h2>
            <p>We accept returns within <strong className="text-white">14 days</strong> of delivery. To be eligible, items must be unused, unwashed, and in the original packaging with all tags attached.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. How to Initiate a Return</h2>
            <p>Contact us at <a href="mailto:returns@forrabix.com" className="text-[#d4f53c] hover:underline">returns@forrabix.com</a> with your order number and reason for return. We'll provide a return shipping label within 2 business days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Refunds</h2>
            <p>Once we receive your return, we'll inspect it and notify you of approval. Refunds are processed within 5–7 business days to your original payment method. Shipping costs are non‑refundable.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Exchanges</h2>
            <p>For exchanges, please return the original item and place a new order. This ensures you get your desired size/style as quickly as possible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Final Sale Items</h2>
            <p>Items marked "Final Sale" or discounted by 50% or more cannot be returned or exchanged.</p>
          </section>

          <p className="pt-4 text-sm text-zinc-500">For questions, email <a href="mailto:support@forrabix.com" className="text-[#d4f53c] hover:underline">support@forrabix.com</a></p>
        </div>
      </div>
    </div>
  );
}