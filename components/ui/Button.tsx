import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glow' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 btn-glow'
    
    const variants = {
      primary: 'bg-gradient-to-r from-neon-cyan to-neon-green text-cyber-dark hover:from-neon-pink hover:to-neon-cyan shadow-lg hover:shadow-2xl hover:-translate-y-1 focus:ring-neon-cyan',
      glow: 'bg-cyber-gray/50 hover:bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-glow focus:ring-neon-cyan/50',
      danger: 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 focus:ring-red-500',
      ghost: 'hover:bg-cyber-gray/50 text-gray-300 hover:text-neon-cyan'
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-semibold'
    }

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
