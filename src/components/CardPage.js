import React from 'react'
import CardTable from './CardTable'
import { useCard } from '../contexts/CardContext'

const CardPage = () => {

  const { card, setCard, deleteFromCard } = useCard();

  return (
    <div>
      <h1>Card</h1>
      {
        card.length > 0 ? <p>You have {card.length} product{card.length > 1 && "s"}.</p> : <p>Your card is empty.</p>
      }
      {
        card.length > 0 && <CardTable card={card} deleteFromCard={deleteFromCard} setCard={setCard} />
      }
    </div>
  )
}

export default CardPage