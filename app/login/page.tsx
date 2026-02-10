'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import { Mail, Lock, UserPlus } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo login - redirect to shop
    router.push('/shop')
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-cyber-gray/50 backdrop-blur-xl rounded-3xl p-12 border border-cyber-gray/30 glow-border">
        <div className="text-center">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-3xl flex items-center justify-center mb-8 glow-border">
            <UserPlus className="w-12 h-12 text-cyber-dark" />
          </div>
          <h2 className="text-4xl font-gaming font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text mb-4">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-cyber-gray/80">
            {isLogin ? 'Sign in to your account' : 'Join the gaming revolution'}
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  className="w-full px-12 py-4 bg-cyber-dark/50 border border-cyber-gray/50 rounded-2xl text-white placeholder-gray-500 focus:ring-4 focus:ring-neon-cyan/30 focus:border-transparent transition-all duration-300"
                  placeholder="GamerTag"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                className="w-full pl-12 pr-4 py-4 bg-cyber-dark/50 border border-cyber-gray/50 rounded-2xl text-white placeholder-gray-500 focus:ring-4 focus:ring-neon-cyan/30 focus:border-transparent transition-all duration-300"
                placeholder="gamer@setup.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                required
                className="w-full pl-12 pr-4 py-4 bg-cyber-dark/50 border border-cyber-gray/50 rounded-2xl text-white placeholder-gray-500 focus:ring-4 focus:ring-neon-cyan/30 focus:border-transparent transition-all duration-300"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full shadow-2xl">
            {isLogin ? 'Sign In to Account' : 'Create Gamer Account'}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-neon-cyan hover:text-neon-pink font-semibold transition-all duration-300 hover:underline"
          >
            {isLogin 
              ? "Don't have an account? Create one" 
              : "Already a gamer? Sign in"
            }
          </button>
        </div>
      </div>
    </div>
  )
}
