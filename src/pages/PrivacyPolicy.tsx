export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-zinc-400 mb-8">Last updated: May 4, 2026</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>We collect personal information you provide directly (name, email, address, payment details) when you make a purchase, create an account, or contact support. We also automatically collect usage data (IP address, browser type, device info) via cookies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Process orders and payments</li>
              <li>Send order updates and promotional emails (you can opt out)</li>
              <li>Improve our website and customer service</li>
              <li>Detect fraud or security incidents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Sharing Your Information</h2>
            <p>We never sell your personal data. We share it only with trusted third‑party services (payment processors, shipping carriers) necessary to fulfill your order or as required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Cookies & Tracking</h2>
            <p>We use essential cookies for site functionality and optional analytics cookies (Google Analytics) to understand how you interact with our store. You can disable cookies in your browser settings, but some features may not work properly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Your Rights</h2>
            <p>Depending on your location, you may have the right to access, correct, or delete your personal data. To make a request, email <a href="mailto:privacy@forrabix.com" className="text-[#d4f53c] hover:underline">privacy@forrabix.com</a>. We'll respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Data Security</h2>
            <p>We use SSL encryption and follow industry standards to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Changes to This Policy</h2>
            <p>We may update this policy occasionally. The latest version will always be posted on this page with the effective date.</p>
          </section>

          <p className="pt-4 text-sm text-zinc-500">Contact our Data Protection Officer at <a href="mailto:dpo@forrabix.com" className="text-[#d4f53c] hover:underline">dpo@forrabix.com</a></p>
        </div>
      </div>
    </div>
  );
}