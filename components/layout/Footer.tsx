'use client'

import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()

  return (
    <footer className="bg-cyber-dark border-t border-cyber-gray/50 py-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="font-gaming text-2xl text-neon-cyan">GameGrocer</h2>
          <p className="text-gray-400 mt-3">
            Premium gaming gear & energy fuel delivered fast.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-neon-cyan cursor-pointer" onClick={() => router.push('/help')}>
              Help Center
            </li>
            <li className="hover:text-neon-cyan cursor-pointer" onClick={() => router.push('/contact')}>
              Contact Us
            </li>
            <li className="hover:text-neon-cyan cursor-pointer" onClick={() => router.push('/privacy')}>
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Delivery</h3>
          <p className="text-gray-400"> Live in selected cities ⚡Check availability <br/>at checkout
          </p>
          <br></br>
          <p className="text-gray-400">Ultra-fast same day delivery 🚀</p>
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        © 2026 GameGrocer. All rights reserved.
      </p>
    </footer>
  )
}
