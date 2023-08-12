// App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  sortGoods,
  filterGoodsPrice,
  filterGoodsRating,
  filterGoodsTitle,
} from "./goodsSlice";
import Goods from "./Goods";
import "./App.css";

const App = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const selectHandler = (ev) => {
    dispatch(sortGoods(ev.target.value));
  };

  const titleFilter = (ev) => {
    dispatch(filterGoodsTitle(ev.target.value));
  };

  const priceFilter = (ev) => {
    dispatch(filterGoodsPrice(ev.target.value));
  };

  const ratingFilter = (ev) => {
    dispatch(filterGoodsRating(ev.target.value));
  };

  return (
    <div className="app">
      <h1>Goods</h1>
      <div className="sort">
        <p>
          Sorted By
          <select onChange={selectHandler}>
            <option value="price">price</option>
            <option value="brand">brand</option>
            <option value="rating">rating</option>
          </select>
        </p>

        <label>
          Filter By Title
          <input onChange={titleFilter} placeholder="Title" />
        </label>
        <label>
          Filter By Price
          <input type="number" onChange={priceFilter} placeholder="Price" />
        </label>
        <label>
          Filter By Rating
          <input type="number" onChange={ratingFilter} placeholder="Rating" />
        </label>
        <button onClick={() => dispatch(fetchData())}>Clear Filter</button>
      </div>

      <Goods goods={data} />
    </div>
  );
};

export default App;
