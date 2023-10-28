import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function Container() {
  return (
    <div className="App">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}
