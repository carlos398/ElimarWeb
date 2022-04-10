import React, { useEffect } from 'react'
import ProductCard from '../productCard/ProductCard'

import "./Products.css"

const Products = () => {

  const [productsData, setProductsData] = React.useState([])

  useEffect(() => {
    data()
   }, [])

  const data = async () => { 
    const data = await fetch("./data.json");
    const dataJson = await data.json();
    setProductsData(dataJson)
  }

  return (
    <div className='ProductsContainer'>
        <div className='ProductsCardsContainer'>
          {productsData.map((product) => {return <ProductCard product={product} /> })}
        </div>
    </div>
  )
}

export default Products