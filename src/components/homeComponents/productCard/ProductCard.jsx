import React from 'react'
import ElianaAbout from "../../../images/ElianaAbout.jpg"

import "./ProductCard.css"

const ProductCard = (porps) => {
  return (
    <div className='ProductCard'>
        <div className='ProductCard__image'>
            <img src={ElianaAbout} alt="" />
        </div>

        <div className='ProductCard__info'>

            <div className='ProductCard__info__title'>
                <h3>Product Name</h3>
            </div>

            <div className='ProductCard__info__description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi eu aliquam consectetur, nisl nisi euismod purus, eget egestas nisl nisi euismod purus.</p>
            </div>

        </div>
    </div>
  )
}

export default ProductCard