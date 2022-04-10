import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../navbar/Navbar'

import './Header.css'

const Header = () => {
  return (
    <div className='HeaderContainer' id='Home'>
        <Banner/>
        <Navbar/>
    </div>
  )
}

export default Header