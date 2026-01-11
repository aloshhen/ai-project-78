import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, MapPin, Package } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: "Безопасность",
      description: "Мы используем современные системы мониторинга и страхования грузов"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Оперативность",
      description: "Собственный автопарк и опытные водители гарантируют быструю доставку"
    },
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: "Широкая география",
      description: "Охватываем все регионы страны с возможностью международных перевозок"
    },
    {
      icon: <Package className="w-12 h-12 text-primary" />,
      title: "Любые грузы",
      description: "Перевозим как небольшие посылки, так и крупногабаритные грузы"
    }
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Наши преимущества
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-surface p-8 rounded-xl border border-border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-center">{feature.title}</h3>
              <p className="text-center text-text/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}