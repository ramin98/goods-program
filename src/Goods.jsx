import React from "react";

const Goods = ({goods}) => {
  
  return (
    <ul>
      {goods.map((goods) => (
        <li key={goods.id}>
          <span>Title: {goods.title}</span>
          <span>Price: {goods.price}</span>
          <span>Rating: {goods.rating}</span>
          <span>Brand: {goods.brand}</span>
        </li>
      ))}
    </ul>
  );
};

export default Goods;
