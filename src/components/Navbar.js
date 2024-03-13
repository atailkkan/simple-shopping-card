import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCard } from '../contexts/CardContext'

const Navbar = () => {

  const { card, takePageNum } = useCard();

  return (
    <div className='navbar'>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/products" onClick={() => takePageNum(1)}>Products</NavLink></li>
            <li className="right"><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/card">Card <small>{card.length}</small></NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar