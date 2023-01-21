import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCard } from '../contexts/CardContext'

const ProductListPage = () => {

  const { data, addToCard } = useCard();

  return (
    <div className='product-list'>
      <h1>Product List</h1>
      <ul>
        {
          data.map((item, index) => (
            <li key={index}>
              <NavLink to={`/products/${item.id}`}>
                <div className='image'>
                  <img src={item.image} alt="" />
                </div>
                <div className='content'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className='price'>{item.price} ₺</div>
                </div>
              </NavLink>
              <button onClick={() => addToCard(item)}>Add to Card</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductListPage