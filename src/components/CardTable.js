import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCard } from '../contexts/CardContext'

const CardTable = () => {

    const { card, setCard, deleteFromCard, cardTotal } = useCard();

    return (
        <div className='card-products'>
            <table>
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    card.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className='image'>
                                <img src={item.image} alt="" />
                                </div>
                            </td>
                            <td>
                                <h2>{item.title}</h2>
                            </td>
                            <td>
                                {item.price.toFixed(2)} ₺
                            </td>
                            <td>
                                {item.quantity}
                            </td>
                            <td>{(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <div className='options'>
                                <NavLink to={`/products/${item.id}`}>Detail</NavLink>
                                <button onClick={() => deleteFromCard(item)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <hr />
            <div className='table-bottom'>
                <button className='clear-btn' onClick={() => setCard([])}>Clear Card</button>
                <span>Total Price: <strong>{cardTotal(card)} ₺</strong></span>
            </div>
        </div>
    )
}

export default CardTable