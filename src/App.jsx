import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Gallery from './pages/Gallery'
import Industries from './pages/Industries'
import About from './pages/About'
import Dataannotation from './pages/Dataannotation'
import Contactcenter from './pages/Contactcenter'
import Digitalmarketing from './pages/Digitalmarketing'
import Technicalsupport from './pages/Technicalsupport'




const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[9vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<ContactUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Gallery />} />
        <Route path='/login' element={<Industries />} />
        <Route path='/services/annotation' element={<Dataannotation />} />
        <Route path='/services/contact-center' element={<Contactcenter />} />
        <Route path='/services/digital-marketing' element={<Digitalmarketing />} />
        <Route path='/services/consultations' element={<Technicalsupport />} />
        <Route path='/contact' element={<ContactUs />} />



      </Routes>
    </div>
  )
}

export default App