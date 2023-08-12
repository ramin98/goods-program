import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./goodsSlice"

const store = configureStore({
    reducer: {
        data: dataSlice   
    }
})

export default store