import React from 'react'
import ProductCard from '../productCard/ProductCard'

import "./Products.css"

const Products = () => {

  const data = async () => { 
    const data = await fetch("./data.json");
    const dataJson = await data.json();

    console.log(dataJson)
    return dataJson;
  }

  data()

  return (
    <div className='ProductsContainer'>
        <div className='ProductsCardsContainer'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default Products