import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import MapSection from './components/map/Map'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './App.css'

const location = {
  address: "TWEMMAN",
  lat: 36.39660159925174,
  lng: 10.143269597180584,
};

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <MapSection location={location} zoomLevel={17} />
      <DisclaimerSection />
      <FooterSection />
    </div>
  )
}

export default App
