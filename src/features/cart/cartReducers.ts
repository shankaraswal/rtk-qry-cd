import { createReducer } from "@reduxjs/toolkit";
import { addItem, removeItem } from "./cartActions";
import { ProductType } from "../products/productService";

export interface CartState {
  items: ProductType[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addItem, (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += action.payload.qty;
      } else {
        state.items.push({ ...action.payload, qty: action.payload.qty });
      }
    })
    .addCase(removeItem, (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    });
});

export default cartReducer;
