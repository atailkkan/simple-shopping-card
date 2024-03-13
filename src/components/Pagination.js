import React from "react";
import { NavLink } from "react-router-dom";
import { useCard } from "../contexts/CardContext";

const Pagination = () => {

  const { pagination, takePageNum } = useCard();

  return (
    <div className="pagination">
      {pagination.map((num) => (
        <NavLink onClick={() => takePageNum(num)} key={num} to={`/products?page=${num}`}>{num}</NavLink>
      ))}
    </div>
  );
};

export default Pagination;
