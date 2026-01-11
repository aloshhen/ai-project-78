import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'

export default function Pricing() {
  const [distance, setDistance] = useState(100)
  const [weight, setWeight] = useState(500)

  const calculatePrice = () => {
    const basePrice = 5000
    const distanceRate = 15
    const weightRate = 10
    return basePrice + (distance * distanceRate) + (weight * weightRate)
  }

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Рассчитайте стоимость
        </motion.h2>
        <div className="max-w-2xl mx-auto bg-surface p-8 rounded-xl border border-border">
          <div className="flex justify-center mb-6">
            <Calculator className="w-12 h-12 text-primary" />
          </div>
          <div className="space-y-6">
            <div>
              <label className="block mb-2">Расстояние (км):</label>
              <input
                type="range"
                min="50"
                max="2000"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full"
              />
              <span className="block mt-2 text-center">{distance} км</span>
            </div>
            <div>
              <label className="block mb-2">Вес груза (кг):</label>
              <input
                type="range"
                min="10"
                max="2000"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full"
              />
              <span className="block mt-2 text-center">{weight} кг</span>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">Примерная стоимость:</p>
              <p className="text-3xl text-primary font-bold mt-2">
                {calculatePrice().toLocaleString()} ₽
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}