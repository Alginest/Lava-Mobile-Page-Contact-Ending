import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import SiteOptic from './components/SiteOptic'
import MobInfo from './components/MobInfo'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar />
      <SiteOptic />
      <MobInfo />
      <AboutUs />
      <Footer />
    </>
  )
}

export default App
