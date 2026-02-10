import { create } from 'zustand'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface StoreState {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity: number }) => void
  updateQuantity: (id: string, quantity: number) => void
  removeFromCart: (id: string) => void
  getTotal: () => number
  clearCart: () => void
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],

  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return {
          cart: state.cart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          )
        }
      }
      return { cart: [...state.cart, item] }
    })
  },

  updateQuantity: (id, quantity) => {
    set((state) => ({
      cart: state.cart
        .map(item =>
          item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
        )
        .filter(item => item.quantity > 0)
    }))
  },

  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter(item => item.id !== id)
    }))
  },

  getTotal: () => {
    const { cart } = get()
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  clearCart: () => set({ cart: [] })
}))
