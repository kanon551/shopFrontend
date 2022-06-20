import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Myntra from '../components/Myntra'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Myntra/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
