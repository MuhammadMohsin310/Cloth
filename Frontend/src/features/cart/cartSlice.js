import { createSlice } from '@reduxjs/toolkit'
import { setToLocalStorage, getFromLocalStorage } from '../../utils/localStorageUtils'

// Load initial cart from localStorage
const initialState = {
  cartItems: getFromLocalStorage('cartItems') || []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item= action.payload
      const existing = state.cartItems.find(p => p.id === item.id)

      if (existing) {
        existing.quantity += 1
      } else {
        state.cartItems.push({ ...item, quantity: 1 })
      }

      // Save to localStorage
      setToLocalStorage('cartItems', state.cartItems)
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(p => p.id !== action.payload.id)
      setToLocalStorage('cartItems', state.cartItems)
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload.id;
      const item = state.cartItems.find(p => p.id === itemId);
    
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(p => p.id !== itemId);
        }
        setToLocalStorage('cartItems', state.cartItems);
      }
    },

    clearCart: (state) => {
      state.cartItems = []
      setToLocalStorage('cartItems', [])
    }
  }
})

export const { addToCart, removeFromCart, clearCart,deleteFromCart } = cartSlice.actions
export default cartSlice.reducer
