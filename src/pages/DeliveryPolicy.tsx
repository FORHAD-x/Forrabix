export default function DeliveryPolicy() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Delivery Policy</h1>
        <p className="text-zinc-400 mb-8">Effective: May 4, 2026</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Processing Time</h2>
            <p>Orders are processed within <strong className="text-white">1–3 business days</strong> (excluding weekends/holidays). You'll receive a confirmation email with tracking once shipped.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Shipping Methods & Delivery Times</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-medium text-white">Standard Shipping</span> – 5–7 business days | $5.99 (free on orders $75+)</li>
              <li><span className="font-medium text-white">Express Shipping</span> – 2–3 business days | $12.99</li>
              <li><span className="font-medium text-white">Overnight Shipping</span> – 1 business day | $24.99</li>
            </ul>
            <p className="mt-2 text-sm text-zinc-400">Delivery times are estimates and may vary due to carrier delays or weather.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">International Shipping</h2>
            <p>We ship worldwide. International delivery takes 7–15 business days. Customs fees, taxes, or duties are the responsibility of the customer.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Tracking & Issues</h2>
            <p>Track your order via the link in your shipping confirmation. If your package shows "delivered" but you haven't received it, contact the carrier first, then email <a href="mailto:shipping@forrabix.com" className="text-[#d4f53c] hover:underline">shipping@forrabix.com</a> within 5 days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Change of Address</h2>
            <p>Please double‑check your address at checkout. If you need to change it, email us within 2 hours of placing the order. After that, the order may already be in processing.</p>
          </section>
        </div>
      </div>
    </div>
  );
}