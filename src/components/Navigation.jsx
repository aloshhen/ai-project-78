import React from 'react'
import { Truck } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-surface/90 backdrop-blur border-b border-border z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck className="text-primary" />
          <span className="text-xl font-bold tracking-tight">AutoTransport</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
          <a href="#map" className="hover:text-primary transition-colors">Маршруты</a>
          <a href="#features" className="hover:text-primary transition-colors">Преимущества</a>
        </div>
      </div>
    </nav>
  )
}