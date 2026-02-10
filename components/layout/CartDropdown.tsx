'use client'
import Image from 'next/image'

type CartItem = {
  id: string
  name: string
  price: number
  image: string
}

export default function CartDropdown({ items }: { items: CartItem[] }) {
  return (
    <div className="absolute right-0 top-16 w-80 bg-cyber-dark border border-cyber-gray/50 rounded-2xl shadow-xl p-4 z-50">
      <h3 className="text-lg font-bold text-neon-cyan mb-4">
        Cart Items
      </h3>

      {items.length === 0 ? (
        <p className="text-gray-400 text-sm">Cart empty 😶</p>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex gap-3 items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-neon-pink">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
