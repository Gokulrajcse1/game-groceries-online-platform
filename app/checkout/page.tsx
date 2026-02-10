'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/lib/store'
import Button from '@/components/ui/Button'

import { Truck, CreditCard, Check } from 'lucide-react';
const TruckIcon = Truck
const CreditCardIcon = CreditCard
const CheckIcon = Check

export default function Checkout() {
  const { cart, getTotal } = useStore()
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card')
  const [orderPlaced, setOrderPlaced] = useState(false)
  const total = getTotal()
  const router = useRouter()

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  /* ===============================
     ORDER CONFIRMATION SCREEN
  =============================== */

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <div className="w-28 h-28 mx-auto mb-10 bg-green-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <CheckIcon className="w-14 h-14 text-white" />
          </div>

          <h1 className="text-4xl font-bold mb-4 text-green-400">
            Order Confirmed!
          </h1>

          <p className="text-white/70 mb-8">
            Your gaming gear is on the way 🚀
          </p>

          <div className="bg-black/40 rounded-xl p-6 border border-white/10">
            <p className="mb-2">
              <strong>Order ID:</strong> GG-{Math.floor(Math.random() * 1000000)}
            </p>
            <p className="mb-2">
              <strong>Total:</strong> ₹{total.toLocaleString()}
            </p>
            <p className="flex items-center gap-2">
              <TruckIcon className="w-5 h-5 text-green-400" />
              Delivery in 2–3 hours
            </p>
          </div>
        </div>
      </div>
    )
  }

  /* ===============================
     CHECKOUT PAGE
  =============================== */

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ORDER SUMMARY */}
        <div className="bg-black/40 rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">
            Order Summary
          </h2>

          <div className="space-y-4 max-h-80 overflow-y-auto mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-black/50 p-4 rounded-lg"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-cyan-400">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <span className="font-bold">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-green-400">
              ₹{total.toLocaleString()}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2 text-green-400">
            <TruckIcon className="w-5 h-5" />
            Free Express Delivery
          </div>
        </div>

        {/* PAYMENT SECTION */}
        <div className="space-y-8">

          {/* SHIPPING DETAILS */}
          <div className="bg-black/40 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Shipping Details</h3>

            <div className="space-y-4">
              <input
                className="w-full p-4 rounded bg-black/60 border border-white/10"
                placeholder="Full Name"
              />
              <input
                className="w-full p-4 rounded bg-black/60 border border-white/10"
                placeholder="Phone Number"
              />
              <input
                className="w-full p-4 rounded bg-black/60 border border-white/10"
                placeholder="City"
              />
              <input
                className="w-full p-4 rounded bg-black/60 border border-white/10"
                placeholder="PIN Code"
              />
              <textarea
                rows={3}
                className="w-full p-4 rounded bg-black/60 border border-white/10"
                placeholder="Full Address"
              />
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="bg-black/40 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CreditCardIcon className="w-6 h-6" />
              Payment Method
            </h3>

            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                />
                UPI (GPay / PhonePe / Paytm)
              </label>
            </div>
          </div>

          {/* PLACE ORDER */}
          <Button
            className="w-full h-14 text-lg shadow-lg"
            onClick={handlePlaceOrder}
          >
            Place Order — ₹{total.toLocaleString()}
          </Button>
        </div>
      </div>
    </div>
  )
}
