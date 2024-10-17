import { createSlice } from "@reduxjs/toolkit";

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: cartItems,
  },
  reducers: {
    addToCart(state, action) {
      let product = action.payload;
      let existItems = state.data.find((items) => items.id === product.id);
      if (existItems) {
        existItems.quantity += product.quantity || 1;
      } else {
        state.data.push({ ...product, quantity: product.quantity || 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    removeItemCart(state, action) {
      let productId = action.payload;
      state.data = state.data.filter((items) => items.id !== productId);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
});

export const { addToCart, removeItemCart } = cartSlice.actions;
export default cartSlice.reducer;
