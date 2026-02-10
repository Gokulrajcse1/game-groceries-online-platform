'use client'

import ProductCard from '@/components/ui/productcard'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { ArrowRight, Play } from 'lucide-react'
import { useState } from 'react'

const featuredProducts = [
  { id: '1', name: 'Razer DeathStalker V2 Pro', price: 12999, image: '/images/keyboard.jpg', category: 'Keyboard' },
  { id: '2', name: 'Samsung Galaxy Buds2 Pro', price: 15999, image: '/images/airbod8.jpg', category: 'Airbods' },
  { id: '3', name: 'Monster Energy Ultra', price: 99, image: '/images/powerdrink.jpg', category: 'Energy' },
  { id: '4', name: 'EPOS Sennheiser GSP 670', price: 15999, image: '/images/headset4.jpg', category: 'Headset' },
  { id: '5', name: 'Logitech G Pro X Superlight', price: 8999, image: '/images/mouse.jpg', category: 'Mouse' },
  { id: '6', name: 'Secretlab Titan EVO 2024 Series', price: 45999, image: '/images/chair.jpg', category: 'Chair' },
  { id: '51', name: 'Sony DualSense Wireless Controller', price: 5999, image: '/images/joystick.jpg', category: 'Joystick' },
  { id: '35', name: 'Quest Nutrition Protein Bar', price: 399, image: '/images/snacks.jpg', category: 'Snacks' },
]

export default function Home() {
  const router = useRouter()
  const [showDemo, setShowDemo] = useState(false)

  // ✅ Google Drive Preview Link (NOT view link)
  const demoPreviewLink =
    'https://drive.google.com/file/d/1u5eY1gJH0XiElEm3GZcXTE4LHeXN07jb/preview'

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-cyber-dark overflow-hidden">
        
        {/* BACKGROUND VIDEO (LOCAL - BEST FOR AUTOPLAY) */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/girlgamer.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-dark/80 to-cyber-dark" />

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center text-white">
          <h1 className="text-7xl md:text-8xl font-gaming font-black bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green bg-clip-text text-transparent mb-8">
            GEAR UP<br />
            <span className="text-6xl">FUEL ON</span>
          </h1>

          <p className="text-xl max-w-2xl mx-auto mb-12">
            Premium gaming gear & energy snacks delivered fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => router.push('/shop')}
              className="px-12 shadow-2xl flex items-center gap-2"
            >
              Shop Gaming Gear
              <ArrowRight className="w-5 h-5" />
            </Button>

            {/* WATCH DEMO (OPENS MODAL IN SAME PAGE) */}
            <Button
              onClick={() => setShowDemo(true)}
              variant="glow"
              className="px-10 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* 🎬 DEMO VIDEO MODAL */}
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur">
          
          {/* Click outside to close */}
          <div
            className="absolute inset-0"
            onClick={() => setShowDemo(false)}
          />

          {/* Modal Box */}
          <div className="relative z-50 w-[90%] max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold z-50"
            >
              ✕
            </button>

            {/* ✅ Google Drive Video */}
            <iframe
              src={demoPreviewLink}
              className="w-full aspect-video"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* FEATURED PRODUCTS */}
      <section className="py-32 bg-cyber-dark/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-gaming font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text mb-6">
              Featured Drops
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
