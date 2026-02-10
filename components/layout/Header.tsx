'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ShoppingCart, User, MapPin, ChevronDown, Search } from 'lucide-react'
import Button from '../ui/Button'
import { useStore } from '@/lib/store'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const cartCount = useStore(state => state.cart.length)

  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('Chennai')
  const [search, setSearch] = useState('')

  const locations = ['Chennai', 'Bangalore', 'Hyderabad', 'Mumbai']

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!search.trim()) return
    router.push(`/shop?search=${search.toLowerCase()}`)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-cyber-dark/95 backdrop-blur-xl border-b border-cyber-gray/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center">

          {/* LEFT: Logo + Location */}
          <div className="flex items-center gap-6 min-w-fit">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => router.push('/')}
            >
              <div className="w-11 h-11 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-xl flex items-center justify-center">
                <span className="font-gaming text-xl">GG</span>
              </div>
              <span className="font-gaming text-xl font-bold text-white">
                GameGrocer
              </span>
            </div>

            {/* Location */}
            <div className="relative">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-gray/50 hover:bg-cyber-gray transition-all text-sm"
              >
                <MapPin className="w-4 h-4 text-neon-cyan" />
                <span>{selectedLocation}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLocationOpen && (
                <div className="absolute mt-3 w-44 bg-cyber-dark border border-cyber-gray/50 rounded-xl shadow-xl overflow-hidden">
                  {locations.map(loc => (
                    <button
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc)
                        setIsLocationOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left transition-all ${
                        selectedLocation === loc
                          ? 'bg-neon-cyan/20 text-neon-cyan'
                          : 'hover:bg-neon-cyan/10'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CENTER: Search */}
          <div className="flex-1 flex justify-center px-8">
            <form onSubmit={handleSearch} className="w-full max-w-xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search keyboards, chairs, energy drinks..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-cyber-gray/50 border border-cyber-gray/50 focus:border-neon-cyan outline-none transition-all"
              />
            </form>
          </div>

          {/* RIGHT: Navigation */}
          <div className="flex items-center gap-5 min-w-fit">

            {/* Home */}
            <button
              onClick={() => router.push('/')}
              className={`px-5 py-2 rounded-xl transition-all ${
                pathname === '/'
                  ? 'bg-neon-cyan/20 text-neon-cyan'
                  : 'hover:bg-cyber-gray/50'
              }`}
            >
              Home
            </button>

            {/* Shop */}
            <button
              onClick={() => router.push('/shop')}
              className={`px-5 py-2 rounded-xl transition-all ${
                pathname === '/shop'
                  ? 'bg-neon-cyan/20 text-neon-cyan'
                  : 'hover:bg-cyber-gray/50'
              }`}
            >
              Shop
            </button>

            {/* Cart */}
            <button
              onClick={() => router.push('/cart')}
              className="relative p-3 rounded-xl bg-cyber-gray/50 hover:bg-neon-cyan/20 transition-all"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-neon-pink text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login */}
            <Button
              variant="glow"
              onClick={() => router.push('/login')}
              className="gap-2"
            >
              <User className="w-5 h-5" />
              Login
            </Button>

          </div>
        </div>
      </div>
    </header>
  )
}
