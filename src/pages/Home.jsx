import React from 'react'
import About from '../components/homeComponents/aboutHome/About'
import Header from '../components/homeComponents/header/Header'
import Products from '../components/homeComponents/Products/Products'

import './Home.css'

const Home = () => {
  return (
    <div className='HomeContainer'>
        <Header/>
        <About/>
        <Products/>
    </div>
  )
}

export default Home