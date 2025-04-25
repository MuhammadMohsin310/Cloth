import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import dialogReducer from '../features/dialog/dialogSlice'
import categoryReducer from "../features/category/categorySlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dialog: dialogReducer,
    category: categoryReducer,
  
  },
})