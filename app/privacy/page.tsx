export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-8">

        <h1 className="text-5xl font-gaming font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">

          <section className="bg-cyber-gray/50 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information such as name, email address,
              delivery location, and payment details when you use GameGrocer.
            </p>
          </section>

          <section className="bg-cyber-gray/50 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To process orders and deliver products</li>
              <li>To improve our services and user experience</li>
              <li>To send order updates and support messages</li>
            </ul>
          </section>

          <section className="bg-cyber-gray/50 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Data Security
            </h2>
            <p>
              We use industry-standard security practices to protect your
              information from unauthorized access or misuse.
            </p>
          </section>

          <section className="bg-cyber-gray/50 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Cookies
            </h2>
            <p>
              GameGrocer uses cookies to enhance site functionality and provide
              a better browsing experience.
            </p>
          </section>

          <section className="bg-cyber-gray/50 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Third-Party Services
            </h2>
            <p>
              We may share limited data with trusted partners such as payment
              gateways and delivery services strictly for order fulfillment.
            </p>
          </section>

          <section className="bg-cyber-gray/50 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Changes to This Policy
            </h2>
            <p>
              This policy may be updated from time to time. Any changes will be
              reflected on this page.
            </p>
          </section>

          <section className="bg-cyber-gray/50 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Contact Us
            </h2>
            <p>
              For questions regarding privacy, contact us at  
              <span className="text-neon-cyan"> support@gamegrocer.in</span>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
