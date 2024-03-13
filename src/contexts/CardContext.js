import { createContext, useContext, useEffect, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [card, setCard] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
      async function getAll() {
        await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setData(json));
      };
      getAll();
    }, []);

    useEffect(() => {
      const url = window.location.href;
      const param = new URL(url).searchParams;
      param.get("page") ? setPageNum(param.get("page")) : setPageNum(1)
    }, [])

    const viewPerPage = 6;
    const pagination = [];

    for (let i = 1; i <= Math.ceil(data.length / viewPerPage); i++) {
      pagination.push(i);
    }

    const takePageNum = (num) => {
      setPageNum(num);
    }

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
      return total.toFixed(2);
    }

    const values = {
        // Values are here...
        data,
        card,
        addToCard,
        setCard,
        deleteFromCard,
        cardTotal,
        pagination,
        viewPerPage,
        pageNum,
        takePageNum
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