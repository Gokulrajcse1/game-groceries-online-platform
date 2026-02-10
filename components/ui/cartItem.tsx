'use client'
import { useStore } from '@/lib/store'
import Button from './Button'
import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'

interface CartItemProps {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export default function CartItem({ id, name, price, image, quantity }: CartItemProps) {
  const updateQuantity = useStore((state) => state.updateQuantity)
  const removeFromCart = useStore((state) => state.removeFromCart)

  return (
    <div className="flex gap-4 p-6 bg-cyber-gray/50 backdrop-blur-xl rounded-2xl border border-cyber-gray/30 hover:border-neon-cyan/50 group">
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-white line-clamp-2 mb-2">{name}</h3>
        <p className="text-lg font-gaming font-bold text-neon-cyan">₹{price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 self-start">
        <div className="flex items-center bg-cyber-dark/50 rounded-xl p-2 border border-cyber-gray/50">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => updateQuantity(id, quantity - 1)}
            className="h-8 w-8 p-0"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="px-4 py-2 font-mono text-lg font-bold text-neon-cyan min-w-[2.5rem] text-center">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => updateQuantity(id, quantity + 1)}
            className="h-8 w-8 p-0"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        
        <Button
          variant="danger"
          size="sm"
          onClick={() => removeFromCart(id)}
          className="h-10 w-10 p-0"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
