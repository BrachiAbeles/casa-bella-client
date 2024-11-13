import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../features/order/orderSlice";
import productSlice from "../features/product/productSlice";
import userSlice from "../features/user/userSlice";
export const store = configureStore({
    reducer: {
        basket: basketSlice,
        user: userSlice
    }
})