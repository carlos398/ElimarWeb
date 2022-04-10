import React from 'react'
import AccesoriosElianaReyBanner from "../../../images/AccesoriosElianaReyBanner.png"
import "./Banner.css"

const Banner = () => {
  return (
    <section className='BannerContainer'>
        <h1>Accesorios<span>ElianaRey</span></h1>
        <div className='ImgBanner'>
          <img src={AccesoriosElianaReyBanner} alt="" />
        </div>
        <div className='lateral1'></div>
        <h4>ER</h4>
        <div className='lateral2'></div>
    </section>
  )
}

export default Banner