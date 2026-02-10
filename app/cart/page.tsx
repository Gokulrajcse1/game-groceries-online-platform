'use client'
import { useStore } from '@/lib/store'
import Button from '@/components/ui/Button'
import CartItem from '@/components/ui/cartItem'
import { useRouter } from 'next/navigation'

export default function Cart() {
  const { cart, getTotal, clearCart } = useStore()
  const router = useRouter()
  const total = getTotal()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-24 flex flex-col items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 bg-cyber-gray/50 rounded-3xl flex items-center justify-center mx-auto mb-8 glow-border">
            <span className="text-5xl">🛒</span>
          </div>
          <h2 className="text-4xl font-gaming font-bold text-white mb-4">Your Cart is Empty</h2>
          <p className="text-xl text-neon-pink mb-12">
            Add some gaming gear and fuel to get started
          </p>
          <Button 
            size="lg"
            onClick={() => router.push('/shop')}
            className="px-12"
          >
            Start Shopping
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-gaming font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text mb-4">
            Shopping Cart
          </h1>
          <p className="text-xl text-cyber-gray/80">
            Review your gaming setup
          </p>
        </div>

        {/* Cart Items */}
        <div className="space-y-6 mb-12">
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-cyber-gray/50 backdrop-blur-xl rounded-3xl p-8 border border-cyber-gray/30 glow-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div>
              <h3 className="text-2xl font-gaming font-bold text-white mb-2">Order Summary</h3>
              <p className="text-cyber-gray/80">
                {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            
            <div className="text-right space-y-4 min-w-[200px]">
              <div className="flex justify-between text-xl">
                <span>Total:</span>
                <span className="font-gaming text-2xl font-bold text-neon-green">
                  ₹{total.toLocaleString()}
                </span>
              </div>
              <div className="text-sm text-cyber-gray/80 flex items-center gap-2">
                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                Free shipping on orders over ₹2000
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-cyber-gray/30">
            <Button 
              variant="ghost" 
              size="lg"
              className="flex-1"
              onClick={() => router.push('/shop')}
            >
              Continue Shopping
            </Button>
            <Button 
              size="lg"
              className="flex-1 shadow-2xl"
              onClick={() => router.push('/checkout')}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
