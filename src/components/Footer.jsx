import React from 'react'
import { Truck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Truck className="text-primary" />
            <span className="text-xl font-bold tracking-tight">AutoTransport</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
        <div className="mt-8 text-center text-text/80">
          © 2024 AutoTransport. Все права защищены.
        </div>
      </div>
    </footer>
  )
}