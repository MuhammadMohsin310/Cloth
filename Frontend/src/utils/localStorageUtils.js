// src/utils/localStorageUtils.js

export const setToLocalStorage = (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Failed to read from localStorage:", error);
    return null;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Failed to remove from localStorage:", error);
  }
};
