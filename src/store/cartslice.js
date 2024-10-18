import { createSlice } from "@reduxjs/toolkit";
import img from "../assets/Bedroom/bed/baby-bed.avif";

let allItemsData = [
  {
    id: 1,
    category: "new Arrival",
    name: "Bed",
    img: img,
  },
];

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: cartItems,
    allProducts: allItemsData,
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
    increamentQuantity(state, action) {
      let productId = action.payload;
      const product = state.data.find((items) => items.id === productId);

      if (product && product.quantity < 20) {
        product.quantity += 1;
      }
    },
    decreamentQuantity(state, action) {
      const productId = action.payload;
      const product = state.data.find((items) => items.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeItemCart,
  increamentQuantity,
  decreamentQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
