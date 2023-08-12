// goodsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const fetchData = () => {
  return async function (dispatch) {
    try {
      let res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await res.json();
      dispatch(dataSlice.actions.showGoods(data.products));
    } catch (error) {
      // Dispatch an action indicating an error
      // dispatch(dataSlice.actions.fetchError(error.message));
    }
  };
};

const dataSlice = createSlice({
  name: "data",
  initialState: [],

  reducers: {
    showGoods: (state, action) => {
      return (state = action.payload);
    },
    sortGoods: (state, action) => {
      if (action.payload === "price") {
        return [...state].sort((a, b) => a.price - b.price);
      } else if (action.payload === "brand") {
        return [...state].sort((a, b) => a.brand.localeCompare(b.brand));
      } else if (action.payload === "rating") {
        return [...state].sort((a, b) => b.rating - a.rating);
      }
      return state;
    },
    filterGoodsTitle: (state, action) => {
      return state.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterGoodsPrice: (state, action) => {
      return state.filter((item) => item.price !== Number(action.payload));
    },
    filterGoodsRating: (state, action) => {
      return state.filter((item) => item.rating !== Number(action.payload));
    },
  },
});

export const {
  sortGoods,
  filterGoodsPrice,
  filterGoodsRating,
  filterGoodsTitle,
} = dataSlice.actions;

export default dataSlice.reducer;
