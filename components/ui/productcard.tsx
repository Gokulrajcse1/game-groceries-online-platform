'use client'
import { useStore } from '@/lib/store'
import Button from './Button'
import Image from 'next/image'
import { Plus } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart)

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 })
  }

  return (
    <div className="group bg-cyber-gray/50 backdrop-blur-xl rounded-3xl p-8 border border-cyber-gray/30 hover:border-neon-cyan/50 card-hover glow-border h-full">
      {/* Product Image */}
      <div className="relative mb-6">
        <div className="w-full h-64 bg-gradient-to-br from-cyber-dark/20 to-transparent rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500 group-hover:brightness-110"
          />
        </div>
        <span className="absolute top-4 right-4 px-3 py-1 bg-neon-pink/90 text-white text-xs font-bold rounded-full glow-border">
          {category}
        </span>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white line-clamp-2 leading-tight group-hover:text-neon-cyan transition-colors">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-gaming font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
            ₹{price}
          </div>
        </div>

        <Button 
          onClick={handleAddToCart}
          variant="glow"
          size="lg"
          className="w-full group-hover:scale-105 product-add"
        >
          <Plus className="w-5 h-5" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
