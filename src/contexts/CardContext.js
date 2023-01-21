import { createContext, useContext, useState } from "react";
import { data } from '../data';

const CardContext = createContext();

export const CardProvider = ({ children }) => {

    const [card, setCard] = useState([]);

    const addToCard = (product) => {
      let clonedCard = card;
      let addedItem = clonedCard.find(item => item.id === product.id)
      product.quantity = 1;
  
      if(addedItem) {
        addedItem.quantity++;
      } else {
        setCard(prev => [...prev, product])
      }
    }

    const deleteFromCard = (product) => {
      let clonedCard = card;
      let newCard = clonedCard.filter(item => item.id !== product.id)
      setCard(newCard)
    }

    const cardTotal = (list) => {
      let total = 0;
      list.map(item => (
          total += (item.price * item.quantity)
      ))
      return total;
    }

    const values = {
        // Values are here...
        data,
        card,
        addToCard,
        setCard,
        deleteFromCard,
        cardTotal
    };

    return (
        <CardContext.Provider value={values}>
            {children}
        </CardContext.Provider>
    )
}

export const useCard = () => {
    const context = useContext(CardContext);
    return context;
}