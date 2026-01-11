import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { motion } from 'framer-motion'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function MapSection() {
  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGZzZ2Z1eW4wMDBzM3BwY2N6d2Z6d2Z6In0.zZ6Z6Z6Z6Z6Z6Z6Z6Z6Z6'

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [37.6173, 55.7558],
      zoom: 4
    })

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl())

    // Add markers
    new mapboxgl.Marker({ color: '#00FFFF' })
      .setLngLat([37.6173, 55.7558])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Москва</h3>'))
      .addTo(map)

    return () => map.remove()
  }, [])

  return (
    <section id="map" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Наши маршруты
        </motion.h2>
        <div className="h-[600px] rounded-xl overflow-hidden border border-border">
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      </div>
    </section>
  )
}