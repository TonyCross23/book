import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Item added successfully",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "small-swal",
            icon: "small-icon",
            title: "small-title",
          },
        });
      } else {
        Swal.fire({
          title: "Item already exist",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok!",
          customClass: {
            popup: "small-swal",
            title: "small-title",
          },
        });
      }
    },
  },
  removeFromCart: (state, action) => {
    state.cartItems.filter((item) => item._id !== action.payload._id);
  },
  clearCart: (state) => {
    state.cartItems = [];
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
