import { createSlice } from "@reduxjs/toolkit";
import { setToLocalStorage, getFromLocalStorage } from "../../utils/localStorageUtils";

// Load initial categories from localStorage
const initialState = {
  categories: getFromLocalStorage("categories") || [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const newCategory = action.payload;
      state.categories.push(newCategory);
      // Save to localStorage
      setToLocalStorage("categories", state.categories);
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload.id
      );
      setToLocalStorage("categories", state.categories);
    }}})

    export const { addCategory, deleteCategory } = categorySlice.actions;
    export default categorySlice.reducer;