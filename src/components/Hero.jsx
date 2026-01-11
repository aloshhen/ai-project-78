import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('https://source.unsplash.com/1600x900/?truck,road')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50" />
      <motion.div 
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Современные решения для перевозок
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Быстро, надежно и безопасно. Мы доставим ваш груз в любую точку страны
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
            Рассчитать стоимость
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
            Наши маршруты
          </button>
        </div>
      </motion.div>
    </section>
  )
}