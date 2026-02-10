export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-8">

        <h1 className="text-5xl font-gaming font-bold text-neon-pink mb-10">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-gray-300">
              We’re here to help you 24/7 ⚡
            </p>

            <p>
              📧 <span className="text-neon-cyan">support@gamegrocer.in</span>
            </p>

            <p>
              📞 <span className="text-neon-cyan">+91 98765 43210</span>
            </p>

            <p>
              📍 Chennai, Bangalore, Mumbai
            </p>
          </div>

          {/* Contact Form (UI only) */}
          <div className="bg-cyber-gray/50 p-6 rounded-2xl space-y-4">
            <input
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-cyber-dark border border-cyber-gray"
            />
            <input
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-cyber-dark border border-cyber-gray"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-xl bg-cyber-dark border border-cyber-gray h-28"
            />
            <button className="w-full py-3 bg-neon-cyan text-black rounded-xl font-bold">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
