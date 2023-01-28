import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import MapSection from './components/map/Map'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './App.css'

const location = {, 
  address: "26 AV HEDI CHEKER ZAGOUAN, TUNISIE",
  lat: 36.39662750710054,
  lng: 10.143173037662354,  
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
