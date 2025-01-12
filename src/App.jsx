import React from 'react'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Navbar from './component/Navbar.jsx'
import Feature from './component/Feature.jsx'
import Story from './component/Story.jsx'
import Contacts from './component/Contacts.jsx'
import Footer from './component/Footer.jsx'

const App = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Story />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App