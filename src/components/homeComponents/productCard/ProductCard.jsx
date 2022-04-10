import React from 'react'

import "./ProductCard.css"


const ProductCard = (props) => {
  return (
    <div className='ProductCard' key={props.product.id}>
        <div className='ProductCard__image'>
            <img src={require(`./../../../images/${props.product.title}.jpeg`)} alt="" />
        </div>

        <div className='ProductCard__info'>

            <div className='ProductCard__info__title'>
                <h3>{props.product.title}</h3>
            </div>

            <div className='ProductCard__info__description'>
                <p>{props.title}</p>
            </div>

        </div>
    </div>
  )
}

export default ProductCard