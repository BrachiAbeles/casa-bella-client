import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basket: [],
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        saveArr: (state, action) => {
            state.basket = action.payload
        },
        add: (state, action) => {
            state.basket.push(action.payload)
        },
        remove: (state, action) => {
            state.basket = state.basket.filter(item => item._id !== action.payload)
        },
        update: (state, action) => {
            state.basket = state.basket.map(item => item._id === action.payload._id ? action.payload : item)
        }
    }
})

export const { add, remove, update, saveArr } = basketSlice.actions;
export default basketSlice.reducer;