import React from 'react'
import { useParams } from 'react-router-dom'
import { useCard } from '../contexts/CardContext'

const ProductDetailPage = () => {

  const { data, addToCard } = useCard();

  const { pid } = useParams();

  const selectedProduct = data.find(item => item.id === parseInt(pid));

  return (
    <div className='product-detail'>
      <div className='image'>
        <img src={selectedProduct.image} alt="" />
      </div>
      <div className='content'>
        <h1>{selectedProduct.title}</h1>
        <p>{selectedProduct.description}</p>
        <div className='price'><strong>{selectedProduct.price.toFixed(2)} ₺</strong></div>
        <button onClick={() => addToCard(selectedProduct)}>Add to Card</button>
      </div>
    </div>
  )
}

export default ProductDetailPage