import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Gallery from './pages/Gallery'
import Industries from './pages/Industries'
import Service from './pages/Service'
import About from './pages/About'




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
        <Route path='/place-order' element={<Service />} />
      </Routes>
    </div>
  )
}

export default App