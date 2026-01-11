import React from 'react'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import MapSection from './components/MapSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="bg-bg text-text">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <MapSection />
      <Footer />
    </div>
  )
}

export default App