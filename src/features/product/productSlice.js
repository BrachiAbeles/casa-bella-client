// import { createSlice } from "@reduxjs/toolkit"

// // const initialState = {
// //     product: []
// // }

// const productSlice = createSlice({
//     name: "product",
//     // initialState,
//     reducers: {
//         saveArr: (state, action) => {
//             state.product = action.payload
//         },
//         add: (state, action) => {
//             state.product.push(action.payload)
//         },
//         remove: (state, action) => {
//             state.product = state.product.filter(item => item._id !== action.payload)
//         },
//         update: (state, action) => {
//             state.product = state.product.map(item => item._id === action.payload._id ? action.payload : item)
//         }
//     }
// })

// export const { add, remove, update, saveArr } = productSlice.actions;
// export default productSlice.reducer;