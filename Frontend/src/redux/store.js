import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import dialogReducer from '../features/dialog/dialogSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dialog: dialogReducer,
  },
})