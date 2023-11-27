'use client'
import { useCart } from '@/context/cart-context'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <p className="text-sm">
        <span className="hidden md:inline-block">Cart </span>({items.length})
      </p>
    </div>
  )
}
