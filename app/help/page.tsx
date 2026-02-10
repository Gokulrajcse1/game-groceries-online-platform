export default function HelpPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-8">

        <h1 className="text-5xl font-gaming font-bold text-neon-cyan mb-10">
          Help Center
        </h1>

        <div className="space-y-8">

          <div className="bg-cyber-gray/50 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">🚚 Delivery Issues</h3>
            <p className="text-gray-300">
              Orders are delivered within 2–6 hours in supported cities.
            </p>
          </div>

          <div className="bg-cyber-gray/50 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">💳 Payment & Refunds</h3>
            <p className="text-gray-300">
              Refunds processed within 3–5 business days.
            </p>
          </div>

          <div className="bg-cyber-gray/50 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">🛠 Product Support</h3>
            <p className="text-gray-300">
              Warranty & replacement available for eligible products.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
